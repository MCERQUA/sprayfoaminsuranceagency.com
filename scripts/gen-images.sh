#!/usr/bin/env bash
# Generate all images for sprayfoaminsuranceagency.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/sprayfoaminsuranceagency.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — SPRAY FOAM CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a professional spray foam insulation contractor in full white protective PPE suit and respirator, applying closed-cell spray polyurethane foam insulation in a modern commercial building interior, orange expanding foam coating the walls, professional industrial photography, bright clean lighting, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of a spray foam contractor work vehicle and equipment truck parked at a construction site, commercial contractor with spray foam proportioner equipment visible, blue sky, clean professional commercial photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a friendly professional spray foam insulation contractor in clean work clothes and safety glasses, standing confidently in front of a professional work truck, warm natural light, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic image of a spray foam insulation contractor in white PPE applying bright orange expanding spray foam insulation in a large commercial building, professional high-end industrial photography, dramatic lighting, clean modern aesthetic, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic photo of a professional spray foam insulation contractor in full white hazmat suit and respirator applying orange foam insulation onto a commercial building wall, bright professional contractor photography, no text" 4

gen "off-ratio-coverage.jpg" \
  "Photorealistic close-up photo of spray foam proportioning machine equipment gauges and controls, stainless steel and industrial orange paint, precision pressure gauges, professional industrial equipment photography, clean and technical, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic photo of a spray foam contractor in full protective equipment including respirator and Tyvek suit applying foam insulation in a confined space, professional safety-focused industrial photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of spray foam insulation workers in white protective coveralls and respirator masks working safely on a commercial roofing project, professional safety photography, clear blue sky, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a professional spray foam contractor white work truck with spray foam proportioner equipment and heated hose setup in the bed, parked at a construction site, clean commercial vehicle photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of professional spray foam insulation equipment — a stainless steel and orange proportioning machine, heated hoses coiled neatly, and spray guns laid out on a clean work surface, professional industrial equipment photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of a professional spray foam insulation contractor reviewing insurance documents and a clipboard at a desk, professional business photography, clean office environment, confident expression, no text" 4

gen "bonds.jpg" \
  "Photorealistic photo of a spray foam contractor signing a commercial contract with a pen at a modern office desk, professional business contract photography, clean and confident, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
