# PowerShell deployment script to sync files to GitHub repository

Write-Host "Deploying to GitHub repository..." -ForegroundColor Green

# Add all files
git add .

# Commit changes
$commitMessage = "Update site files: $(Get-Date -Format 'yyyy-MM-dd')"
git commit -m $commitMessage

# Push to main branch
git push origin main

Write-Host "Deployment complete!" -ForegroundColor Green

