#!/bin/bash

# BIOMAX AI Deployment Script
# This script deploys the project to VPS without breaking existing services

set -e

VPS_IP="213.159.67.199"
VPS_USER="deploy"
VPS_PASSWORD="HHlklk6878gbhjkLyrfdfghhhuew"
REPO_URL="https://github.com/evgrussia/biomax_ai.git"
BRANCH="main"
PROJECT_DIR="/var/www/biomax_ai"
DOMAIN_HOME="biomax-ai.ru"
DOMAIN_DASHBOARD="app.biomax-ai.ru"

echo "=========================================="
echo "BIOMAX AI Deployment Script"
echo "=========================================="
echo ""

# Function to execute remote command
remote_exec() {
    sshpass -p "$VPS_PASSWORD" ssh -o StrictHostKeyChecking=no "$VPS_USER@$VPS_IP" "$1"
}

# Function to copy files
remote_copy() {
    sshpass -p "$VPS_PASSWORD" scp -o StrictHostKeyChecking=no -r "$1" "$VPS_USER@$VPS_IP:$2"
}

echo "Step 1: Analyzing server configuration..."
echo "----------------------------------------"

# Check existing nginx configuration
echo "Checking nginx configuration..."
remote_exec "sudo nginx -t && echo 'Nginx config is valid' || echo 'Nginx config has errors'"
remote_exec "sudo ls -la /etc/nginx/sites-enabled/ | head -20"
remote_exec "sudo netstat -tulpn | grep ':80\|:443\|:8080\|:8081' | head -10"

# Check Docker
echo "Checking Docker..."
remote_exec "docker --version || echo 'Docker not installed'"
remote_exec "docker ps | head -10"

# Check existing projects
echo "Checking existing projects..."
remote_exec "ls -la /var/www/ 2>/dev/null || echo 'No /var/www directory'"
remote_exec "sudo ls -la /etc/nginx/sites-available/ | head -20"

# Check available ports
echo "Checking available ports..."
remote_exec "sudo netstat -tulpn | grep LISTEN | awk '{print \$4}' | cut -d: -f2 | sort -n | uniq"

echo ""
echo "Step 2: Preparing deployment..."
echo "----------------------------------------"

# Create project directory
remote_exec "sudo mkdir -p $PROJECT_DIR"
remote_exec "sudo chown -R $VPS_USER:$VPS_USER $PROJECT_DIR"

# Clone or update repository
echo "Cloning/updating repository..."
remote_exec "cd $PROJECT_DIR && if [ -d .git ]; then git pull origin $BRANCH; else git clone -b $BRANCH $REPO_URL .; fi"

echo ""
echo "Step 3: Building Docker containers..."
echo "----------------------------------------"

# Build and start containers
remote_exec "cd $PROJECT_DIR && docker-compose down || true"
remote_exec "cd $PROJECT_DIR && docker-compose build --no-cache"
remote_exec "cd $PROJECT_DIR && docker-compose up -d"

echo ""
echo "Step 4: Configuring Nginx..."
echo "----------------------------------------"

# Create nginx configuration
NGINX_CONF=$(cat <<EOF
# BIOMAX AI - Home Page
upstream biomax_home {
    server 127.0.0.1:8080;
}

# BIOMAX AI - Dashboard
upstream biomax_dashboard {
    server 127.0.0.1:8081;
}

# Home domain
server {
    listen 80;
    server_name $DOMAIN_HOME www.$DOMAIN_HOME;

    # Redirect www to non-www
    if (\$host = www.$DOMAIN_HOME) {
        return 301 http://$DOMAIN_HOME\$request_uri;
    }

    location / {
        proxy_pass http://biomax_home;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

# Dashboard subdomain
server {
    listen 80;
    server_name $DOMAIN_DASHBOARD;

    location / {
        proxy_pass http://biomax_dashboard;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF
)

# Save nginx config to temp file and copy to server
echo "$NGINX_CONF" > /tmp/biomax_nginx.conf
remote_copy "/tmp/biomax_nginx.conf" "/tmp/biomax_nginx.conf"

# Install nginx config
remote_exec "sudo cp /tmp/biomax_nginx.conf /etc/nginx/sites-available/biomax_ai"
remote_exec "sudo ln -sf /etc/nginx/sites-available/biomax_ai /etc/nginx/sites-enabled/biomax_ai"
remote_exec "sudo nginx -t && sudo systemctl reload nginx || echo 'Nginx reload failed - check config'"

echo ""
echo "Step 5: Verifying deployment..."
echo "----------------------------------------"

# Check containers
remote_exec "cd $PROJECT_DIR && docker-compose ps"

# Check nginx status
remote_exec "sudo systemctl status nginx | head -10"

# Test domains (if DNS is configured)
echo "Testing domains..."
remote_exec "curl -I http://localhost -H 'Host: $DOMAIN_HOME' | head -5"
remote_exec "curl -I http://localhost -H 'Host: $DOMAIN_DASHBOARD' | head -5"

echo ""
echo "=========================================="
echo "Deployment completed!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Configure DNS records:"
echo "   - A record: $DOMAIN_HOME -> $VPS_IP"
echo "   - A record: $DOMAIN_DASHBOARD -> $VPS_IP"
echo ""
echo "2. Verify deployment:"
echo "   - http://$DOMAIN_HOME"
echo "   - http://$DOMAIN_DASHBOARD"
echo ""
echo "3. For HTTPS, run:"
echo "   sudo certbot --nginx -d $DOMAIN_HOME -d www.$DOMAIN_HOME -d $DOMAIN_DASHBOARD"
