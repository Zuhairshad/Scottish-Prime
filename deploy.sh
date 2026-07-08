#!/usr/bin/env bash
# Deploy Scottish Prime Energy: pull latest, install, build, (re)start under PM2.
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Pulling latest"
git pull

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Restarting with PM2"
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js

echo "==> Done"
pm2 list
