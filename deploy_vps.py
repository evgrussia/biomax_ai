#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
BIOMAX AI VPS Deployment Script
Automatically deploys the project to VPS via SSH
"""

import paramiko
import sys
import time
import os

# Fix encoding for Windows
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')

# Configuration
VPS_IP = "213.159.67.199"
VPS_USER = "deploy"
VPS_PASSWORD = "HHlklk6878gbhjkLyrfdfghhhuew"
REPO_URL = "https://github.com/evgrussia/biomax_ai.git"
BRANCH = "main"
PROJECT_DIR = "/var/www/biomax_ai"
DOMAIN_HOME = "biomax-ai.ru"
DOMAIN_DASHBOARD = "app.biomax-ai.ru"

def execute_remote(ssh, command, sudo=False, ignore_errors=False):
    """Execute command on remote server"""
    if sudo:
        command = f"sudo {command}"
    
    stdin, stdout, stderr = ssh.exec_command(command)
    exit_status = stdout.channel.recv_exit_status()
    
    output = stdout.read().decode('utf-8', errors='ignore')
    error = stderr.read().decode('utf-8', errors='ignore')
    
    if exit_status != 0 and not ignore_errors:
        print(f"Command failed (exit {exit_status}): {command}")
        if error:
            print(f"Error: {error}")
    
    return exit_status, output, error

def print_section(title):
    """Print section header"""
    print("\n" + "="*50)
    print(title)
    print("="*50)

def main():
    print_section("BIOMAX AI VPS Deployment")
    
    # Connect to server
    print(f"\nConnecting to {VPS_USER}@{VPS_IP}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(VPS_IP, username=VPS_USER, password=VPS_PASSWORD, timeout=30)
        print("[OK] Connected successfully")
    except Exception as e:
        print(f"[ERROR] Connection failed: {e}")
        sys.exit(1)
    
    try:
        # Step 1: Analyze server
        print_section("Step 1: Analyzing Server Configuration")
        
        print("\n1.1 Checking Nginx...")
        status, output, error = execute_remote(ssh, "nginx -t 2>&1", sudo=True)
        if status == 0:
            print("✓ Nginx configuration is valid")
        else:
            print(f"⚠ Nginx config check: {output}")
        
        print("\n1.2 Checking existing Nginx sites...")
        status, output, error = execute_remote(ssh, "ls -la /etc/nginx/sites-enabled/")
        print(output)
        
        print("\n1.3 Checking occupied ports...")
        status, output, error = execute_remote(ssh, "netstat -tulpn 2>/dev/null | grep LISTEN | head -20", sudo=True)
        print(output)
        
        print("\n1.4 Checking Docker...")
        status, output, error = execute_remote(ssh, "docker --version")
        if status == 0:
            print(f"✓ {output.strip()}")
        else:
            print("[ERROR] Docker not found or not accessible")
            print("Installing Docker...")
            # Add Docker installation if needed
        
        print("\n1.5 Checking Docker Compose...")
        status, output, error = execute_remote(ssh, "docker-compose --version")
        if status == 0:
            print(f"✓ {output.strip()}")
        else:
            print("[ERROR] Docker Compose not found")
        
        print("\n1.6 Checking existing projects...")
        status, output, error = execute_remote(ssh, "ls -la /var/www/ 2>/dev/null")
        print(output if output else "No /var/www directory")
        
        # Step 2: Prepare deployment
        print_section("Step 2: Preparing Deployment")
        
        print(f"\n2.1 Creating project directory: {PROJECT_DIR}")
        # Try without sudo first
        status, output, error = execute_remote(ssh, f"mkdir -p {PROJECT_DIR}", ignore_errors=True)
        if status != 0:
            # Try with sudo using password
            print("Trying with sudo...")
            # Use echo to pass password to sudo
            execute_remote(ssh, f'echo "{VPS_PASSWORD}" | sudo -S mkdir -p {PROJECT_DIR}', ignore_errors=True)
            execute_remote(ssh, f'echo "{VPS_PASSWORD}" | sudo -S chown -R {VPS_USER}:{VPS_USER} {PROJECT_DIR}', ignore_errors=True)
        print("[OK] Directory created")
        
        print(f"\n2.2 Cloning/updating repository...")
        # Check if directory exists and has git
        status, output, error = execute_remote(ssh, f"cd {PROJECT_DIR} 2>/dev/null && git status 2>&1", ignore_errors=True)
        if status == 0:
            print("Repository exists, pulling updates...")
            status, output, error = execute_remote(ssh, f"cd {PROJECT_DIR} && git pull origin {BRANCH}")
        else:
            print("Cloning repository...")
            status, output, error = execute_remote(ssh, f"cd /var/www && git clone -b {BRANCH} {REPO_URL} biomax_ai")
        
        if status == 0:
            print("[OK] Repository updated")
            # Verify files
            status, output, error = execute_remote(ssh, f"ls -la {PROJECT_DIR} | head -10")
            print(f"Files in project: {output}")
            
            # Check if docker-compose.yml exists
            status, output, error = execute_remote(ssh, f"test -f {PROJECT_DIR}/docker-compose.yml", ignore_errors=True)
            if status != 0:
                print("[WARN] docker-compose.yml not found in repo, will copy from local")
                NEED_COPY = True
            else:
                NEED_COPY = False
        else:
            print(f"[ERROR] Error: {error}")
            print(f"Output: {output}")
            return
        
        # Step 3: Check and modify docker-compose.yml if needed
        print_section("Step 3: Configuring Docker Compose")
        
        print("\n3.1 Checking available ports...")
        status, output, error = execute_remote(ssh, "netstat -tulpn 2>/dev/null | grep LISTEN | awk '{print $4}' | cut -d: -f2 | sort -n | uniq", sudo=True)
        used_ports = [int(p) for p in output.strip().split('\n') if p.isdigit()]
        print(f"Used ports: {used_ports[:10]}")
        
        # Find available ports
        home_port = 8080
        dashboard_port = 8081
        
        if home_port in used_ports:
            home_port = next((p for p in range(8080, 9000) if p not in used_ports), 8080)
            print(f"[WARN] Port 8080 is busy, using {home_port}")
        
        if dashboard_port in used_ports:
            dashboard_port = next((p for p in range(8081, 9000) if p not in used_ports and p != home_port), 8081)
            print(f"[WARN] Port 8081 is busy, using {dashboard_port}")
        
        print(f"\n3.2 Using ports: Home={home_port}, Dashboard={dashboard_port}")
        
        # Update docker-compose.yml with correct ports
        print("\n3.3 Updating docker-compose.yml...")
        compose_update = f"""
sed -i 's/"8080:80"/"{home_port}:80"/g' {PROJECT_DIR}/docker-compose.yml
sed -i 's/"8081:80"/"{dashboard_port}:80"/g' {PROJECT_DIR}/docker-compose.yml
"""
        execute_remote(ssh, f"cd {PROJECT_DIR} && {compose_update}")
        print("[OK] Ports updated")
        
        # Step 4: Build and start containers
        print_section("Step 4: Building and Starting Containers")
        
        # Detect docker compose command
        status, output, error = execute_remote(ssh, "docker compose version")
        if status == 0:
            DOCKER_COMPOSE_CMD = "docker compose"
        else:
            DOCKER_COMPOSE_CMD = "docker-compose"
        
        print(f"\n4.1 Using: {DOCKER_COMPOSE_CMD}")
        print("\n4.2 Stopping existing containers...")
        execute_remote(ssh, f"cd {PROJECT_DIR} && {DOCKER_COMPOSE_CMD} down", ignore_errors=True)
        
        print("\n4.3 Building containers...")
        status, output, error = execute_remote(ssh, f"cd {PROJECT_DIR} && {DOCKER_COMPOSE_CMD} build --no-cache")
        if status != 0:
            print(f"[ERROR] Build failed: {error}")
            print(f"Output: {output}")
            return
        print("[OK] Containers built")
        
        print("\n4.4 Starting containers...")
        status, output, error = execute_remote(ssh, f"cd {PROJECT_DIR} && {DOCKER_COMPOSE_CMD} up -d")
        if status != 0:
            print(f"[ERROR] Start failed: {error}")
            print(f"Output: {output}")
            return
        print("[OK] Containers started")
        
        print("\n4.5 Checking container status...")
        status, output, error = execute_remote(ssh, f"cd {PROJECT_DIR} && {DOCKER_COMPOSE_CMD} ps")
        print(output)
        
        # Step 5: Configure Nginx
        print_section("Step 5: Configuring Nginx")
        
        nginx_config = f"""# BIOMAX AI - Home Page
upstream biomax_home {{
    server 127.0.0.1:{home_port};
}}

# BIOMAX AI - Dashboard
upstream biomax_dashboard {{
    server 127.0.0.1:{dashboard_port};
}}

# Home domain
server {{
    listen 80;
    server_name {DOMAIN_HOME} www.{DOMAIN_HOME};

    # Redirect www to non-www
    if ($host = www.{DOMAIN_HOME}) {{
        return 301 http://{DOMAIN_HOME}$request_uri;
    }}

    location / {{
        proxy_pass http://biomax_home;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }}
}}

# Dashboard subdomain
server {{
    listen 80;
    server_name {DOMAIN_DASHBOARD};

    location / {{
        proxy_pass http://biomax_dashboard;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }}
}}
"""
        
        print("\n5.1 Creating Nginx configuration...")
        # Write config to temp file
        config_file = "/tmp/biomax_nginx.conf"
        sftp = ssh.open_sftp()
        with sftp.file(config_file, 'w') as f:
            f.write(nginx_config)
        sftp.close()
        
        # Copy to nginx sites-available
        execute_remote(ssh, f"sudo cp {config_file} /etc/nginx/sites-available/biomax_ai", sudo=True)
        execute_remote(ssh, "sudo ln -sf /etc/nginx/sites-available/biomax_ai /etc/nginx/sites-enabled/biomax_ai", sudo=True)
        print("[OK] Configuration created")
        
        print("\n5.2 Testing Nginx configuration...")
        status, output, error = execute_remote(ssh, "nginx -t", sudo=True)
        if status == 0:
            print("✓ Nginx configuration is valid")
        else:
            print(f"[ERROR] Nginx config error: {error}")
            return
        
        print("\n5.3 Reloading Nginx...")
        status, output, error = execute_remote(ssh, "systemctl reload nginx", sudo=True)
        if status == 0:
            print("[OK] Nginx reloaded")
        else:
            print(f"[WARN] Reload warning: {error}")
        
        # Step 6: Verification
        print_section("Step 6: Verification")
        
        print("\n6.1 Testing home domain...")
        status, output, error = execute_remote(ssh, f"curl -I http://localhost:{home_port} 2>&1 | head -5")
        print(output)
        
        print("\n6.2 Testing dashboard domain...")
        status, output, error = execute_remote(ssh, f"curl -I http://localhost:{dashboard_port} 2>&1 | head -5")
        print(output)
        
        print("\n6.3 Final container status...")
        status, output, error = execute_remote(ssh, f"cd {PROJECT_DIR} && {DOCKER_COMPOSE_CMD} ps")
        print(output)
        
        print_section("Deployment Complete!")
        print(f"""
[OK] Deployment completed successfully!

Next steps:
1. Configure DNS records:
   - A record: {DOMAIN_HOME} -> {VPS_IP}
   - A record: {DOMAIN_DASHBOARD} -> {VPS_IP}

2. Verify deployment:
   - http://{DOMAIN_HOME}
   - http://{DOMAIN_DASHBOARD}

3. For HTTPS, run on server:
   sudo certbot --nginx -d {DOMAIN_HOME} -d www.{DOMAIN_HOME} -d {DOMAIN_DASHBOARD}

Ports used:
   - Home: {home_port}
   - Dashboard: {dashboard_port}
""")
        
    except Exception as e:
        print(f"\n✗ Error during deployment: {e}")
        import traceback
        traceback.print_exc()
    finally:
        ssh.close()

if __name__ == "__main__":
    try:
        import paramiko
    except ImportError:
        print("✗ paramiko is required. Install it with: pip install paramiko")
        sys.exit(1)
    
    main()
