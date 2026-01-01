# Deployment Guide

## Pre-Deployment Checklist

✅ **Archiving Complete** - Existing files have been archived to `archive/` directory

The following files were backed up before deployment:
- Root level HTML files (index.html, ChatGPT.html, claude.html, gemini.html, grok.html)
- `sales/` directory (complete)
- `site/` directory (original index.html)

## Current Status

- ✅ Git repository initialized
- ✅ Remote configured: `https://github.com/agent5479/IDM.git`
- ✅ Existing files archived
- ✅ New Site Machinery NZ website files ready
- ✅ `.gitignore` configured (archive directory excluded)

## Deployment Steps

### Step 1: Review Files

Verify all new files are ready:
- `index.html` - Home page
- `about.html`, `contact.html`, `photos.html`, `videos.html` - Additional pages
- `products/` - Product detail pages
- `css/styles.css` - Styling
- `js/main.js` - JavaScript functionality

### Step 2: Add Images (Optional but Recommended)

Before deploying, add images to the `images/` directory:
- Create `images/` folder if it doesn't exist
- Download images from https://www.sitemachinery.nz/
- Organize according to README.md structure

### Step 3: Stage Files

```powershell
git add .
```

This will stage all new files. The `archive/` directory is excluded via `.gitignore`.

### Step 4: Commit

```powershell
git commit -m "Deploy Site Machinery NZ website"
```

Or use a more descriptive message:
```powershell
git commit -m "Deploy Site Machinery NZ website - Complete site with product pages, styling, and navigation"
```

### Step 5: Push to Repository

```powershell
git push origin main
```

**Note:** If this is your first push, you may need to set the upstream:
```powershell
git push -u origin main
```

## Repository Structure

After deployment, your repository structure will be:

```
IDM/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── archive/                # Archived files (not committed)
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── products/
│   ├── slg-108vfrb.html
│   ├── slg-78vf.html
│   ├── slg-78vf-flow.html
│   ├── slg-68v.html
│   └── telehandler-bins.html
├── about.html
├── contact.html
├── index.html
├── photos.html
├── videos.html
├── README.md
├── DEPLOYMENT.md
└── .gitignore
```

## If Files Need to Go to `site/` Subdirectory

If the repository structure requires files in a `site/` subdirectory:

### Option A: Manual Move After Push
1. Push files to root as above
2. Create `site/` directory in repository
3. Move files to `site/` via GitHub web interface or:
   ```powershell
   git mv index.html site/
   git mv about.html site/
   # ... etc
   git commit -m "Move files to site directory"
   git push origin main
   ```

### Option B: Use GitHub Actions
The `.github/workflows/sync-to-site.yml` workflow can automatically sync files to the `site/` directory.

## Troubleshooting

### If push is rejected:
```powershell
git pull origin main --rebase
# Resolve any conflicts
git push origin main
```

### If you need to restore archived files:
1. Copy files from `archive/` directory
2. Place them in their original locations
3. Commit and push

### If you need to re-archive:
```powershell
.\archive-files.ps1
```

## Post-Deployment

After successful deployment:

1. ✅ Verify files are in the repository
2. ✅ Check GitHub Pages settings (if using)
3. ✅ Test the website
4. ✅ Update any image paths if images were added
5. ✅ Verify all links work correctly

## GitHub Actions

Two workflows are configured:

1. **deploy.yml** - GitHub Pages deployment
2. **sync-to-site.yml** - Sync files to `site/` directory

These will run automatically on push to `main` branch.

