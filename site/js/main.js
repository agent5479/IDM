// file:// pages cannot load cross-origin embeds (YouTube, etc.); the browser shows "Unsafe attempt to load URL file://...".
// That is local preview only — the live site at https://sitemachinery.nz is not involved. Use a local HTTP server to test a copy.
if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
  console.warn(
    'This page was opened as a local file (file://). Embedded videos and some features will fail. Open https://sitemachinery.nz in the browser, or run a local server from the site folder (e.g. npx serve .).'
  );
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.getElementById('navMenu');
  
  if (menuToggle && navMenu) {
    // Toggle menu on button click
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Auto-hide menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Close menu
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target) || menuToggle.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const navMenu = document.getElementById('navMenu');
      if (menuToggle && navMenu && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });
});

// Feature card expand functionality
function toggleExpand(card) {
  const expandSection = card.querySelector('.feature-expand');
  const btn = card.querySelector('.expand-btn');
  
  if (expandSection.classList.contains('active')) {
    expandSection.classList.remove('active');
    btn.textContent = 'Learn More';
  } else {
    // Close all other expanded cards
    document.querySelectorAll('.feature-expand.active').forEach(section => {
      section.classList.remove('active');
      section.parentElement.querySelector('.expand-btn').textContent = 'Learn More';
    });
    
    expandSection.classList.add('active');
    btn.textContent = 'Show Less';
  }
}

// Make toggleExpand available globally
window.toggleExpand = toggleExpand;

function siteDebugEnabled() {
  try {
    return new URLSearchParams(window.location.search).get('debug') === '1';
  } catch (e) {
    return false;
  }
}

// YouTube embeds: replace iframe only if the embed truly fails (rare; most issues are visible inside the player).
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('iframe[src*="youtube"]').forEach((iframe) => {
    const videoSrc = iframe.getAttribute('src') || '';
    iframe.addEventListener('error', function() {
      const container = this.closest('.video-container') || this.parentElement;
      if (!container) return;
      container.innerHTML = `
          <div class="video-error">
            <p>Video could not be loaded</p>
            <p style="font-size: 0.8rem; color: #888; margin-top: 10px;">Source: ${videoSrc}</p>
            <a href="https://www.youtube.com/c/Idmcabc_inc" target="_blank">Visit YouTube Channel</a>
          </div>
        `;
    });
  });

  if (siteDebugEnabled()) {
    window.testYouTubeEmbeds = function() {
      const list = document.querySelectorAll('iframe[src*="youtube"]');
      console.log('YouTube iframes:', list.length);
      list.forEach((el, i) => {
        console.log(i + 1, el.src, el.offsetWidth + 'x' + el.offsetHeight);
      });
      return list.length;
    };
    console.info('[debug=1] testYouTubeEmbeds() available.');
  }
});

// Image load/error: sets data-* attributes used in css/styles.css (no console output in production).
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach((img) => {
    const markLoaded = function() {
      img.setAttribute('data-image-loaded', 'true');
      img.setAttribute('data-image-loading', 'false');
      img.removeAttribute('data-image-error');
      if (img.getAttribute('data-debug') === 'true') {
        img.style.border = '3px solid #00ff00';
      }
    };
    const markError = function() {
      img.setAttribute('data-image-error', 'true');
      img.setAttribute('data-image-loading', 'false');
      if (img.getAttribute('data-debug') === 'true') {
        img.style.border = '3px solid #ff0000';
      }
      if (siteDebugEnabled()) {
        console.warn('Image failed to load:', img.getAttribute('src'));
      }
    };

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
      markError();
    } else {
      img.setAttribute('data-image-loading', 'true');
      img.addEventListener('load', markLoaded, { once: true });
      img.addEventListener('error', markError, { once: true });
    }
  });

  if (siteDebugEnabled()) {
    window.testImages = function() {
      const imgs = document.querySelectorAll('img');
      console.table(Array.from(imgs).map((el, i) => ({
        i: i + 1,
        src: (el.getAttribute('src') || '').slice(0, 60),
        ok: el.complete && el.naturalWidth > 0,
        w: el.naturalWidth
      })));
      return imgs.length;
    };
    window.enableImageDebug = function() {
      document.querySelectorAll('img').forEach((el) => el.setAttribute('data-debug', 'true'));
    };
    window.disableImageDebug = function() {
      document.querySelectorAll('img').forEach((el) => {
        el.removeAttribute('data-debug');
        el.style.border = '';
      });
    };
    console.info('[debug=1] testImages(), enableImageDebug(), disableImageDebug() available.');
  }
});

