#!/bin/bash
# Deployment script to sync files to GitHub repository site directory

echo "Deploying to GitHub repository..."

# Add all files
git add .

# Commit changes
git commit -m "Update site files: $(date +%Y-%m-%d)"

# Push to main branch
git push origin main

echo "Deployment complete!"

