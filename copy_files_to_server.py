#!/usr/bin/env python3
"""
Copy deployment files to server via SCP
"""
import paramiko
import os
from scp import SCPClient

VPS_IP = "213.159.67.199"
VPS_USER = "deploy"
VPS_PASSWORD = "HHlklk6878gbhjkLyrfdfghhhuew"
PROJECT_DIR = "/var/www/biomax_ai"

# Files and directories to copy
FILES_TO_COPY = [
    "docker-compose.yml",
    ".dockerignore",
    "frontend_home",
    "frontend_dashboard",
    "nginx",
]

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    print(f"Connecting to {VPS_USER}@{VPS_IP}...")
    ssh.connect(VPS_IP, username=VPS_USER, password=VPS_PASSWORD, timeout=30)
    print("[OK] Connected")
    
    scp = SCPClient(ssh.get_transport())
    
    for item in FILES_TO_COPY:
        local_path = item
        remote_path = f"{PROJECT_DIR}/{item}"
        
        if os.path.isdir(local_path):
            print(f"Copying directory: {local_path} -> {remote_path}")
            scp.put(local_path, remote_path, recursive=True)
        elif os.path.isfile(local_path):
            print(f"Copying file: {local_path} -> {remote_path}")
            scp.put(local_path, remote_path)
        else:
            print(f"[WARN] {local_path} not found, skipping")
    
    print("[OK] Files copied successfully")
    scp.close()
    
except Exception as e:
    print(f"[ERROR] {e}")
finally:
    ssh.close()
