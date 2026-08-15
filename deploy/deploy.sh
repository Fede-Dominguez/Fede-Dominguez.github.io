#!/usr/bin/env bash
# Build local + push del estatico a la VM. Correr desde la raiz del proyecto.
set -euo pipefail

VM_USER="${VM_USER:-ubuntu}"
VM_HOST="${VM_HOST:?exporta VM_HOST con la IP o el dominio de la VM}"

npm ci
npm run build

rsync -avz --delete dist/ "${VM_USER}@${VM_HOST}:/var/www/portfolio/"
echo "Deploy OK -> https://fede.is-a.dev"
