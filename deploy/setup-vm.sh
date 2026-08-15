#!/usr/bin/env bash
# Setup de una sola vez DENTRO de la VM de Oracle. Correr con: bash setup-vm.sh
set -euo pipefail

APP_USER="$(whoami)"

echo "==> 1/4 Caddy"
sudo apt update
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install -y caddy

echo "==> 2/4 Directorio del sitio (owner: $APP_USER, para que rsync no necesite sudo)"
sudo mkdir -p /var/www/portfolio
sudo chown -R "$APP_USER:$APP_USER" /var/www/portfolio
sudo chmod 755 /var/www /var/www/portfolio

echo "==> 3/4 Firewall interno (Oracle bloquea todo salvo 22 por defecto)"
sudo iptables -I INPUT 5 -p tcp --dport 80  -j ACCEPT
sudo iptables -I INPUT 6 -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save 2>/dev/null || sudo iptables-save | sudo tee /etc/iptables/rules.v4 >/dev/null

echo "==> 4/4 Placeholder para probar antes del primer deploy"
echo '<h1>portfolio: pendiente de deploy</h1>' > /var/www/portfolio/index.html

echo
echo "LISTO. Ahora:"
echo "  - Copia el Caddyfile:  sudo cp Caddyfile /etc/caddy/Caddyfile && sudo systemctl reload caddy"
echo "  - Falta abrir 80/443 en la Security List de la VCN (consola de Oracle)."
