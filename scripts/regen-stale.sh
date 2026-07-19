#!/usr/bin/env bash
set -uo pipefail
OUT="/workspace/Websites/azhomeownersinsurance.com/public/images"
STYLE="photorealistic, natural light, high detail, professional architectural photography, no text, no watermark"

genone() { # fname prompt w h
  local fname="$1" prompt="$2" w="$3" h="$4" dest="$OUT/$1"
  rm -f "$dest"
  local wait=3 a=0
  while [ $a -lt 6 ]; do
    a=$((a+1))
    echo "[$fname] attempt $a"
    local resp; resp=$(curl -s --max-time 120 -X POST "https://router.huggingface.co/together/v1/images/generations" \
      -H "Authorization: Bearer $HF_TOKEN" -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson w "$w" --argjson h "$h" '{model:"black-forest-labs/FLUX.1-schnell", prompt:$p, response_format:"b64_json", width:$w, height:$h}')")
    echo "$resp" | python3 -c "import json,sys,base64;d=json.load(sys.stdin);open('$dest','wb').write(base64.b64decode(d['data'][0]['b64_json']))" 2>/dev/null
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if file -b "$dest" 2>/dev/null | grep -qiE "image|jpeg|png" && [ "$sz" -ge 10000 ]; then echo "[$fname] OK $sz"; return 0; fi
    sleep $wait; wait=$((wait*2)); [ $wait -gt 40 ] && wait=40
  done
  echo "[$fname] FAILED"; return 1
}

genone about.jpg "Warm professional insurance advisor shaking hands with a smiling Arizona homeowner couple at a bright modern office desk, laptop open, large window with desert and mountain view behind, welcoming, $STYLE" 1024 768
sleep 6
genone coverage.jpg "Sweeping aerial view of a Phoenix Arizona suburban neighborhood at golden hour, rows of tile-roof homes with backyard pools, palm trees and desert landscaping, mountains on horizon, $STYLE" 1280 800
sleep 6
genone og-image.jpg "Beautiful Arizona desert home at dusk with warm glowing interior lights, saguaro cactus silhouettes, dramatic purple and orange sunset sky, mountain backdrop, cinematic real estate photography, $STYLE" 1200 630
sleep 6
genone umbrella.jpg "Wide protective evening view of an upscale Arizona home with a lit backyard pool and large yard under a calm dusk sky, sense of security and protection, warm ambient lighting, $STYLE" 1024 768
echo "=== regen done ==="
ls -la "$OUT"/about.jpg "$OUT"/coverage.jpg "$OUT"/og-image.jpg "$OUT"/umbrella.jpg
