#!/bin/bash
# Project Initialization Script
# Creates the documentation structure for a new web application project

set -e

PROJECT_NAME=${1:-"new-project"}
PROJECT_DIR=${2:-"."}

echo "🚀 Initializing project: $PROJECT_NAME"
echo "📁 Location: $PROJECT_DIR"

# Create directory structure
mkdir -p "$PROJECT_DIR/docs"/{discovery,research,design,architecture,data,security,development/specs,testing/test-cases,operations/runbooks,marketing}
mkdir -p "$PROJECT_DIR/context"/{summaries,checkpoints,archive}
mkdir -p "$PROJECT_DIR/assets"/{images/{hero,illustrations,backgrounds},icons/{ui,features},social}

# Create initial project brief
cat > "$PROJECT_DIR/context/project-brief.yaml" << EOF
# Project Brief: $PROJECT_NAME
# Generated: $(date -Iseconds)

project:
  name: "$PROJECT_NAME"
  goal: "[Define your project goal]"
  target_users: "[Define target users]"
  
scope:
  in_scope:
    - "[Feature 1]"
    - "[Feature 2]"
  out_of_scope:
    - "[Excluded 1]"

constraints:
  timeline: "[Timeline]"
  budget: "[Budget]"
  technical: []

status:
  current_phase: "intake"
  completion: 0
  last_checkpoint: null
EOF

# Create README for docs
cat > "$PROJECT_DIR/docs/README.md" << EOF
# $PROJECT_NAME Documentation

## Structure

- **discovery/** - Vision, PRD, User Stories, Roadmap
- **research/** - Competitive Analysis, Market Research
- **design/** - User Flows, Wireframes, Design System
- **architecture/** - System Design, ADRs, Tech Stack
- **data/** - Domain Model, DB Schema, API Contracts
- **security/** - Threat Model, Security Requirements
- **development/** - Code Conventions, Technical Specs
- **testing/** - Test Strategy, Test Cases
- **operations/** - Deployment, Monitoring, Runbooks
- **marketing/** - Strategy, Launch Plan, Content Plan

## Status

| Phase | Status | Completion |
|-------|--------|------------|
| Discovery | Not Started | 0% |
| Design | Not Started | 0% |
| Architecture | Not Started | 0% |
| Development | Not Started | 0% |
| QA | Not Started | 0% |
| Deployment | Not Started | 0% |
| Marketing | Not Started | 0% |
EOF

# Create .gitkeep files to preserve empty directories
find "$PROJECT_DIR" -type d -empty -exec touch {}/.gitkeep \;

echo "✅ Project structure created!"
echo ""
echo "Next steps:"
echo "1. Edit $PROJECT_DIR/context/project-brief.yaml with your project details"
echo "2. Start with Orchestrator Agent to begin the discovery phase"
echo ""
echo "📂 Structure created:"
tree "$PROJECT_DIR" -L 3 --dirsfirst 2>/dev/null || find "$PROJECT_DIR" -type d | head -20
