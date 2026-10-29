#!/usr/bin/env python3
"""
Creative Studio Website Setup Script

This script initializes a new creative studio website project with:
- Project structure and dependencies
- Design system configuration
- Component scaffolding
- GitHub Pages configuration
- Email and analytics setup

Usage:
    python setup_creative_studio.py <project-name> [--studio-name "Studio Name"]
"""

import os
import sys
import json
import subprocess
from pathlib import Path

def create_project_structure(project_name, studio_name):
    """Create the basic project structure."""
    project_path = Path(f"/home/ubuntu/{project_name}")
    
    if project_path.exists():
        print(f"❌ Project directory already exists: {project_path}")
        return False
    
    print(f"📁 Creating project structure for '{studio_name}'...")
    
    # Create main directories
    dirs = [
        project_path / "client" / "src" / "components",
        project_path / "client" / "src" / "pages",
        project_path / "client" / "src" / "contexts",
        project_path / "client" / "public",
        project_path / ".github" / "workflows",
    ]
    
    for dir_path in dirs:
        dir_path.mkdir(parents=True, exist_ok=True)
    
    print(f"✅ Project structure created")
    return True

def update_package_json(project_name, studio_name):
    """Update package.json with project metadata."""
    package_json_path = Path(f"/home/ubuntu/{project_name}/package.json")
    
    if package_json_path.exists():
        with open(package_json_path, 'r') as f:
            package_json = json.load(f)
        
        package_json['name'] = project_name
        package_json['description'] = f"{studio_name} - Premium Creative Studio Website"
        
        with open(package_json_path, 'w') as f:
            json.dump(package_json, f, indent=2)
        
        print(f"✅ Updated package.json")
    else:
        print(f"⚠️  package.json not found, skipping update")

def create_github_actions_workflow(project_name):
    """Create GitHub Actions deployment workflow."""
    workflow_path = Path(f"/home/ubuntu/{project_name}/.github/workflows/deploy.yml")
    
    workflow_content = """name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install

      - name: Build project
        run: GITHUB_PAGES=true pnpm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist/public'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
"""
    
    with open(workflow_path, 'w') as f:
        f.write(workflow_content)
    
    print(f"✅ Created GitHub Actions workflow")

def create_env_template(project_name):
    """Create .env.example template."""
    env_path = Path(f"/home/ubuntu/{project_name}/.env.example")
    
    env_content = """# Email Service
VITE_FORMSPREE_FORM_ID=your_form_id_here

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Newsletter Service (if using Mailchimp)
VITE_MAILCHIMP_API_KEY=your_api_key_here
VITE_MAILCHIMP_LIST_ID=your_list_id_here

# GitHub Pages (optional)
VITE_GITHUB_PAGES_REPO=your-username/repository-name
"""
    
    with open(env_path, 'w') as f:
        f.write(env_content)
    
    print(f"✅ Created .env.example template")

def create_setup_checklist(project_name, studio_name):
    """Create a setup checklist for the project."""
    checklist_path = Path(f"/home/ubuntu/{project_name}/SETUP_CHECKLIST.md")
    
    checklist_content = f"""# {studio_name} - Setup Checklist

## Project Setup
- [ ] Run `pnpm install` to install dependencies
- [ ] Copy `.env.example` to `.env.local` and fill in values
- [ ] Review design system in `references/design-system.md`
- [ ] Customize color palette in `client/src/index.css`

## Content Configuration
- [ ] Update studio name and tagline in components
- [ ] Add case study data to `CaseStudy.tsx`
- [ ] Update team/about section with real content
- [ ] Add service descriptions in `Services.tsx`
- [ ] Create blog posts in `Blog.tsx`
- [ ] Add client logos to testimonials section

## Email & Analytics Setup
- [ ] Create Formspree form and get Form ID
- [ ] Update `VITE_FORMSPREE_FORM_ID` in `.env.local`
- [ ] Create Google Analytics property and get Measurement ID
- [ ] Update `VITE_GA_MEASUREMENT_ID` in `.env.local`
- [ ] Set up newsletter email service (Formspree/Mailchimp/ConvertKit)

## GitHub Pages Deployment
- [ ] Create GitHub repository
- [ ] Update `vite.config.ts` with correct base path if needed
- [ ] Push code to GitHub: `git push -u origin main`
- [ ] Enable GitHub Pages in repository settings
- [ ] Verify deployment at `https://username.github.io/repository-name/`

## Custom Domain (Optional)
- [ ] Purchase domain from registrar
- [ ] Add CNAME file or update DNS records
- [ ] Configure custom domain in GitHub Pages settings
- [ ] Wait for DNS propagation (up to 24 hours)

## Testing & Optimization
- [ ] Test all forms (contact, newsletter)
- [ ] Verify email notifications are received
- [ ] Check Google Analytics tracking
- [ ] Test theme toggle (dark/light)
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Test on different browsers

## Launch
- [ ] Final content review
- [ ] Update meta tags and favicon
- [ ] Set up monitoring/alerts
- [ ] Create backup of repository
- [ ] Announce launch on social media
"""
    
    with open(checklist_path, 'w') as f:
        f.write(checklist_content)
    
    print(f"✅ Created setup checklist")

def print_next_steps(project_name, studio_name):
    """Print next steps for the user."""
    print(f"\n{'='*60}")
    print(f"✨ {studio_name} Project Initialized!")
    print(f"{'='*60}\n")
    print(f"📍 Project location: /home/ubuntu/{project_name}")
    print(f"\n📋 Next Steps:\n")
    print(f"1. Navigate to project: cd /home/ubuntu/{project_name}")
    print(f"2. Install dependencies: pnpm install")
    print(f"3. Review setup checklist: cat SETUP_CHECKLIST.md")
    print(f"4. Start dev server: pnpm run dev")
    print(f"5. Customize design in: client/src/index.css")
    print(f"6. Add content to components")
    print(f"7. Configure email & analytics (.env.local)")
    print(f"8. Deploy to GitHub Pages (see deployment-guide.md)")
    print(f"\n📚 Documentation:")
    print(f"   - Design System: references/design-system.md")
    print(f"   - Features: references/feature-implementation.md")
    print(f"   - Deployment: references/deployment-guide.md")
    print(f"\n{'='*60}\n")

def main():
    if len(sys.argv) < 2:
        print("Usage: python setup_creative_studio.py <project-name> [--studio-name 'Studio Name']")
        sys.exit(1)
    
    project_name = sys.argv[1]
    studio_name = project_name.title()
    
    # Check for custom studio name
    if "--studio-name" in sys.argv:
        idx = sys.argv.index("--studio-name")
        if idx + 1 < len(sys.argv):
            studio_name = sys.argv[idx + 1]
    
    # Create project structure
    if not create_project_structure(project_name, studio_name):
        sys.exit(1)
    
    # Create configuration files
    create_github_actions_workflow(project_name)
    create_env_template(project_name)
    create_setup_checklist(project_name, studio_name)
    
    # Print next steps
    print_next_steps(project_name, studio_name)

if __name__ == "__main__":
    main()
