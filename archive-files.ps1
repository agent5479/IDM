# PowerShell script to archive existing files from GitHub before deployment
# This script checks out existing files and moves them to the archive directory

Write-Host "Archiving existing files from GitHub repository..." -ForegroundColor Yellow

# Create archive directory if it doesn't exist
if (-not (Test-Path "archive")) {
    New-Item -ItemType Directory -Path "archive" | Out-Null
    Write-Host "Created archive directory" -ForegroundColor Green
}

# Fetch latest from remote
Write-Host "Fetching latest from remote..." -ForegroundColor Cyan
git fetch origin

# Archive site directory if it exists in remote
Write-Host "Checking for site directory..." -ForegroundColor Cyan
$siteFiles = git ls-tree -r --name-only origin/main -- site/ 2>$null
if ($siteFiles) {
    $timestamp = Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'
    $archiveName = "site_$timestamp"
    
    # Checkout site directory
    git checkout origin/main -- site/ 2>$null
    
    if (Test-Path "site") {
        Move-Item -Path "site" -Destination "archive\$archiveName" -Force
        Write-Host "Archived site directory to archive\$archiveName" -ForegroundColor Green
    }
}

# Archive root level HTML files
Write-Host "Archiving root level HTML files..." -ForegroundColor Cyan
$rootFiles = @("index.html", "ChatGPT.html", "claude.html", "gemini.html", "grok.html")
foreach ($file in $rootFiles) {
    git checkout origin/main -- $file 2>$null
    if (Test-Path $file) {
        if ($file -eq "index.html") {
            Move-Item -Path $file -Destination "archive\index_old.html" -Force
        } else {
            Move-Item -Path $file -Destination "archive\" -Force
        }
        Write-Host "Archived $file" -ForegroundColor Green
    }
}

# Archive sales directory if it exists
Write-Host "Checking for sales directory..." -ForegroundColor Cyan
$salesFiles = git ls-tree -r --name-only origin/main -- sales/ 2>$null
if ($salesFiles) {
    git checkout origin/main -- sales/ 2>$null
    if (Test-Path "sales") {
        Move-Item -Path "sales" -Destination "archive\sales_old" -Force
        Write-Host "Archived sales directory" -ForegroundColor Green
    }
}

Write-Host "`nArchive complete! Files are stored in the 'archive' directory." -ForegroundColor Green
Write-Host "You can now proceed with your deployment." -ForegroundColor Cyan

