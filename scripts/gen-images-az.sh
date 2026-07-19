#!/usr/bin/env bash
# Generate all AZ Homeowners Insurance images via HuggingFace FLUX.1-schnell.
# Primary: router together endpoint (b64_json). Fallback: hf-inference raw bytes.
# Exponential backoff on rate limits. Verifies each >10KB and is an image.
set -uo pipefail

OUT="/workspace/Websites/azhomeownersinsurance.com/public/images"
mkdir -p "$OUT"
LOG="/workspace/Websites/azhomeownersinsurance.com/scripts/genlog.txt"
: > "$LOG"

gen_together() { # fname prompt w h
  local dest="$1" prompt="$2" w="$3" h="$4"
  local resp; resp=$(curl -s --max-time 120 -X POST "https://router.huggingface.co/together/v1/images/generations" \
    -H "Authorization: Bearer $HF_TOKEN" -H "Content-Type: application/json" \
    -d "$(jq -nc --arg m "black-forest-labs/FLUX.1-schnell" --arg p "$prompt" --argjson w "$w" --argjson h "$h" \
        '{model:$m, prompt:$p, response_format:"b64_json", width:$w, height:$h}')")
  echo "$resp" | python3 -c "
import json,sys,base64
try:
    d=json.load(sys.stdin)
    b=d['data'][0]['b64_json']
    open('$dest','wb').write(base64.b64decode(b))
    sys.exit(0)
except Exception as e:
    sys.stderr.write(str(e)[:120]); sys.exit(1)
" 2>>"$LOG"
}

gen_hfinfer() { # fname prompt w h
  local dest="$1" prompt="$2" w="$3" h="$4"
  curl -s --max-time 200 \
    "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell" \
    -H "Authorization: Bearer $HF_TOKEN" -H "Content-Type: application/json" \
    -d "$(jq -nc --arg p "$prompt" --argjson w "$w" --argjson h "$h" \
        '{inputs:$p, parameters:{num_inference_steps:4, width:$w, height:$h}}')" \
    -o "$dest" 2>>"$LOG"
}

ok() { # dest
  local sz ft
  sz=$(stat -c%s "$1" 2>/dev/null || echo 0)
  ft=$(file -b "$1" 2>/dev/null)
  echo "$ft" | grep -qiE "image|jpeg|png|JPEG|PNG" && [ "$sz" -ge 10000 ]
}

gen() { # fname prompt [w] [h]
  local fname="$1" prompt="$2" w="${3:-1024}" h="${4:-768}"
  local dest="$OUT/$fname"
  local wait=3 attempt=0
  # try together up to 4 times with backoff
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] together attempt $attempt" | tee -a "$LOG"
    gen_together "$dest" "$prompt" "$w" "$h"
    if ok "$dest"; then echo "[$fname] OK together ($(stat -c%s "$dest") bytes)" | tee -a "$LOG"; return 0; fi
    sleep $wait; wait=$((wait*2))
  done
  # fallback hf-inference up to 3 times
  wait=5; attempt=0
  while [ $attempt -lt 3 ]; do
    attempt=$((attempt+1))
    echo "[$fname] hf-inference attempt $attempt" | tee -a "$LOG"
    gen_hfinfer "$dest" "$prompt" "$w" "$h"
    if ok "$dest"; then echo "[$fname] OK hfinfer ($(stat -c%s "$dest") bytes)" | tee -a "$LOG"; return 0; fi
    sleep $wait; wait=$((wait*2))
  done
  echo "[$fname] FAILED" | tee -a "$LOG"; return 1
}

STYLE="photorealistic, natural light, high detail, professional architectural photography, no text, no watermark"

gen hero.jpg "Beautiful modern single-story Arizona stucco home in Scottsdale at golden hour, desert xeriscape landscaping with saguaro and agave, red clay tile roof, dramatic McDowell mountains behind, warm cinematic sunset light, wide establishing shot, $STYLE" 1280 800
gen coverage.jpg "Aerial view of a master-planned Phoenix Arizona suburban neighborhood, rows of desert homes with tile roofs and pools, palm trees, mountains on the horizon, bright blue sky, $STYLE" 1280 800
gen about.jpg "Warm professional insurance advisor meeting an Arizona homeowner couple at a bright modern desk with a laptop, large window showing desert landscape, friendly handshake, $STYLE" 1024 768
gen og-image.jpg "Stunning Arizona desert home at dusk with warm interior lights glowing, saguaro cactus silhouettes, purple and orange sky, mountains, cinematic real estate photography, $STYLE" 1200 630
# service images (slug.jpg)
gen dwelling-coverage.jpg "Newly framed and stucco Arizona home under construction, wood framing and tile roof going on, desert lot, bright daylight, rebuild and construction theme, $STYLE" 1024 768
gen personal-property.jpg "Tastefully furnished interior of an Arizona home living room, southwestern decor, natural light through large windows, furniture electronics and belongings, $STYLE" 1024 768
gen liability.jpg "Backyard of an Arizona home with a sparkling blue swimming pool, desert landscaping, patio, safety fence, sunny day, $STYLE" 1024 768
gen loss-of-use.jpg "Comfortable Arizona hotel suite interior with desert view through the window, suitcase on bed, temporary housing theme, warm light, $STYLE" 1024 768
gen flood-insurance.jpg "Arizona desert wash flooding during monsoon season, muddy stormwater flowing near a residential neighborhood, dramatic storm clouds, $STYLE" 1024 768
gen umbrella.jpg "Wide protective view of an upscale Arizona home and property at dusk, pool and large yard, sense of security and protection, warm ambient light, $STYLE" 1024 768
gen scheduled-personal-property.jpg "Elegant close-up of fine jewelry, a diamond ring, luxury watch and small artwork on a dark velvet surface, soft studio lighting, high-value valuables, $STYLE" 1024 768
gen dwelling-fire.jpg "Arizona rental property, a duplex or small single-family investment home with a For Rent sign, desert front yard, bright daylight, $STYLE" 1024 768
gen condo-insurance.jpg "Modern Arizona condominium building exterior in Tempe or Scottsdale, contemporary architecture, balconies, desert landscaping and palm trees, blue sky, $STYLE" 1024 768
gen renters-insurance.jpg "Bright modern Arizona apartment interior, young renter's tidy living space with plants and belongings, large window with desert view, $STYLE" 1024 768
gen mobile-home-insurance.jpg "Well-kept manufactured mobile home in an Arizona desert community, carport, gravel yard with cactus, mountains behind, clear sky, $STYLE" 1024 768
gen high-value-home-insurance.jpg "Luxury custom Arizona estate home in Paradise Valley, sprawling modern desert architecture, infinity pool, floor to ceiling glass, mountain views at golden hour, $STYLE" 1280 800
# blog images
gen flood-coverage.jpg "Dramatic Arizona monsoon storm over Phoenix, dark clouds and rain over desert homes, lightning in distance, flooded street, $STYLE" 1024 768
gen wildfire-coverage.jpg "Northern Arizona forested home near Flagstaff with pine trees, distant wildfire smoke haze on the ridge, wildland urban interface, dramatic light, $STYLE" 1024 768
gen monsoon-guide.jpg "Massive haboob dust storm wall approaching a Phoenix Arizona suburb, towering brown dust cloud over desert homes, dramatic apocalyptic sky, $STYLE" 1280 800
gen cost-breakdown.jpg "Arizona homeowner at kitchen table reviewing insurance paperwork and a calculator, laptop open, natural morning light, planning finances, $STYLE" 1024 768
gen non-renewal.jpg "Weathered Arizona home roof with sun damage and aging shingles under harsh desert sun, roof inspection theme, clear blue sky, $STYLE" 1024 768
gen monsoon-checklist.jpg "Arizona homeowner clearing roof gutters and inspecting the exterior of a desert home before storm season, ladder against house, preparation theme, $STYLE" 1024 768

echo "=== DONE ===" | tee -a "$LOG"
ls -la "$OUT" | tee -a "$LOG"
