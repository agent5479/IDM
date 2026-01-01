# Site Machinery NZ Website

A modern, well-styled website for Site Machinery NZ, showcasing their range of soil screening equipment and related products.

## Project Structure

```
DeSiteNZ/
├── index.html              # Home page
├── about.html              # About Us page
├── contact.html            # Contact Us page
├── photos.html             # Photo gallery
├── videos.html             # Video gallery
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image directory (create this)
│   ├── hero-bg.jpg         # Hero section background
│   ├── slg-108vfrb.jpg     # Main product images
│   ├── slg-78vf.jpg
│   ├── slg-78vf-flow.jpg
│   ├── slg-68v.jpg
│   ├── telehandler-bins.jpg
│   └── [additional product images]
└── products/
    ├── slg-108vfrb.html    # Product detail pages
    ├── slg-78vf.html
    ├── slg-78vf-flow.html
    ├── slg-68v.html
    └── telehandler-bins.html
```

## Image Requirements

### Home Page Images
- `images/hero-bg.jpg` - Hero section background (recommended: 1920x1080 or larger)
- `images/slg-108vfrb.jpg` - SLG-108VFRB product card image
- `images/slg-78vf.jpg` - SLG-78VF product card image
- `images/slg-78vf-flow.jpg` - SLG-78VF with Flow Control product card image
- `images/slg-68v.jpg` - SLG-68V product card image
- `images/telehandler-bins.jpg` - Telehandler Bins product card image

### Product Detail Page Images
Each product page expects 3-4 images:
- `images/slg-108vfrb-1.jpg`, `slg-108vfrb-2.jpg`, `slg-108vfrb-3.jpg`
- `images/slg-78vf-1.jpg`, `slg-78vf-2.jpg`, `slg-78vf-3.jpg`
- `images/slg-78vf-flow-1.jpg`, `slg-78vf-flow-2.jpg`, `slg-78vf-flow-3.jpg`
- `images/slg-68v-1.jpg`, `slg-68v-2.jpg`, `slg-68v-3.jpg`
- `images/telehandler-bins-1.jpg`, `telehandler-bins-2.jpg`, `telehandler-bins-3.jpg`

### Photo Gallery Images
- `images/action-1.jpg`, `action-2.jpg`, `action-3.jpg`, `action-4.jpg` - Equipment in action
- Additional product images as needed

## Getting Images from Original Site

1. Visit the original WordPress site: https://www.sitemachinery.nz/
2. Right-click on images and "Save Image As..." to download
3. Rename images according to the structure above
4. Place all images in the `images/` directory

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Styling**: Dark theme with orange accent colors
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling
- **Product Showcase**: Detailed product pages with specifications
- **Contact Information**: Multiple ways to contact (phone, email, showroom)
- **Photo & Video Galleries**: Showcase equipment in action

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Main colors are defined in `css/styles.css`:
- Primary Orange: `#ff6600`
- Secondary Orange: `#ffa500`
- Background: `#0a0a0a`
- Text: `#fff` / `#ccc`

### Contact Information
Update contact details in:
- Navigation bar (all pages)
- Footer (all pages)
- Contact page (`contact.html`)

## Notes

- All prices are ex GST and freight as per original site
- Shipping arrangements are made with the purchaser
- Showroom location: 105 Pascoe Street, Nelson
- YouTube channel: https://www.youtube.com/c/Idmcabc_inc

## Git Configuration

This project is configured to push to: `https://github.com/agent5479/IDM.git`

The remote is already configured. To verify:
```bash
git remote -v
```

## Archiving Existing Files

**IMPORTANT:** Before deploying new files, existing HTML files from the GitHub repository have been archived to prevent overwriting.

### Archived Files

The following files from the repository have been backed up to the `archive/` directory:
- Root level: `index.html`, `ChatGPT.html`, `claude.html`, `gemini.html`, `grok.html`
- `sales/` directory: Complete sales folder with all HTML files
- `site/` directory: Original site index.html

See `archive/README.md` for details on what was archived and how to restore if needed.

### Archiving Script

If you need to archive files again in the future, use:
```powershell
.\archive-files.ps1
```

This script will:
1. Fetch the latest from the remote repository
2. Checkout existing files
3. Move them to the `archive/` directory with timestamps
4. Preserve the original structure

**Note:** The `archive/` directory is excluded from Git commits (see `.gitignore`).

## Deployment

### Option 1: Manual Deployment (Recommended for initial setup)

1. **Stage all files:**
   ```bash
   git add .
   ```

2. **Commit changes:**
   ```bash
   git commit -m "Initial site deployment"
   ```

3. **Push to repository:**
   ```bash
   git push origin main
   ```

   **Note:** If you need to push to a `site` subdirectory in the repository, you may need to:
   - Create a `site` branch and push there, or
   - Use GitHub Actions workflow (see Option 2)

### Option 2: Using Deployment Scripts

**Windows (PowerShell):**
```powershell
.\deploy.ps1
```

**Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 3: GitHub Actions (Automatic)

The repository includes GitHub Actions workflows:
- `.github/workflows/deploy.yml` - For GitHub Pages deployment
- `.github/workflows/sync-to-site.yml` - For syncing files to `site/` directory

These will automatically run when you push to the `main` branch.

### Setting Up the Repository Structure

If your files need to be in the `site/` subdirectory of the IDM repository:

1. **First, check the current branch:**
   ```bash
   git branch
   ```

2. **Create and switch to main branch if needed:**
   ```bash
   git checkout -b main
   ```

3. **Push to repository:**
   ```bash
   git push -u origin main
   ```

## Next Steps

1. Create the `images/` directory
2. Download and organize images from the original site
3. Replace placeholder image paths with actual images
4. Test all links and navigation
5. Review content for accuracy
6. Update any pricing or specification details as needed
7. Commit and push your changes to GitHub

