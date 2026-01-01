// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

// YouTube iframe error handling and debugging
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔍 YouTube Embed Debug: Initializing...');
  
  const iframes = document.querySelectorAll('iframe[src*="youtube"]');
  console.log(`🔍 Found ${iframes.length} YouTube iframe(s)`);
  
  iframes.forEach((iframe, index) => {
    const videoSrc = iframe.getAttribute('src');
    console.log(`🔍 Video ${index + 1}:`, {
      src: videoSrc,
      element: iframe,
      parent: iframe.parentElement,
      container: iframe.closest('.video-container')
    });
    
    // Log iframe creation
    iframe.addEventListener('load', function() {
      console.log(`✅ Video ${index + 1} loaded successfully:`, videoSrc);
      this.style.opacity = '1';
      
      // Check if iframe actually has content
      try {
        const iframeDoc = this.contentDocument || this.contentWindow.document;
        console.log(`✅ Video ${index + 1} has accessible content`);
      } catch (e) {
        console.log(`⚠️ Video ${index + 1} cross-origin (normal for YouTube):`, e.message);
      }
    });
    
    // Error handling
    iframe.addEventListener('error', function(e) {
      console.error(`❌ Video ${index + 1} failed to load:`, {
        src: videoSrc,
        error: e,
        message: e.message || 'Unknown error'
      });
      
      const container = this.closest('.video-container') || this.parentElement;
      if (container) {
        console.log(`🔧 Replacing container with error message`);
        container.innerHTML = `
          <div class="video-error">
            <p>Video could not be loaded</p>
            <p style="font-size: 0.8rem; color: #888; margin-top: 10px;">Source: ${videoSrc}</p>
            <a href="https://www.youtube.com/c/Idmcabc_inc" target="_blank">Visit YouTube Channel</a>
          </div>
        `;
      }
    });
    
    // Check for network errors
    iframe.addEventListener('loadstart', function() {
      console.log(`🔄 Video ${index + 1} starting to load:`, videoSrc);
    });
    
    // Monitor iframe state
    setTimeout(() => {
      if (iframe.offsetHeight === 0 || iframe.offsetWidth === 0) {
        console.warn(`⚠️ Video ${index + 1} has zero dimensions - may not be visible`);
      }
      
      // Check if iframe is in viewport
      const rect = iframe.getBoundingClientRect();
      console.log(`📐 Video ${index + 1} dimensions:`, {
        width: rect.width,
        height: rect.height,
        visible: rect.width > 0 && rect.height > 0,
        inViewport: rect.top < window.innerHeight && rect.bottom > 0
      });
    }, 1000);
    
    // Initial styling
    iframe.style.opacity = '0';
    iframe.style.transition = 'opacity 0.3s';
    
    // Log iframe attributes
    console.log(`🔍 Video ${index + 1} attributes:`, {
      src: iframe.src,
      allow: iframe.allow,
      allowfullscreen: iframe.hasAttribute('allowfullscreen'),
      loading: iframe.getAttribute('loading'),
      frameborder: iframe.getAttribute('frameborder')
    });
  });
  
  // Check for CSP (Content Security Policy) issues
  const metaTags = document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]');
  if (metaTags.length > 0) {
    console.warn('⚠️ CSP meta tags found - may block YouTube embeds:', metaTags);
  } else {
    console.log('✅ No CSP meta tags found');
  }
  
  // Check for ad blockers that might block YouTube
  setTimeout(() => {
    const blockedIframes = document.querySelectorAll('iframe[src*="youtube"]:not([src=""])');
    blockedIframes.forEach((iframe, index) => {
      if (iframe.offsetHeight === 0) {
        console.warn(`⚠️ Possible ad blocker detected - iframe ${index + 1} may be blocked`);
      }
    });
  }, 2000);
  
  console.log('🔍 YouTube Embed Debug: Setup complete');
  
  // Add manual test function
  window.testYouTubeEmbeds = function() {
    console.log('🧪 Testing YouTube Embeds...');
    const iframes = document.querySelectorAll('iframe[src*="youtube"]');
    
    iframes.forEach((iframe, index) => {
      console.log(`\n🧪 Test ${index + 1}:`);
      console.log('  - Source:', iframe.src);
      console.log('  - Dimensions:', {
        width: iframe.offsetWidth,
        height: iframe.offsetHeight,
        computed: window.getComputedStyle(iframe).width + ' x ' + window.getComputedStyle(iframe).height
      });
      console.log('  - Parent:', iframe.parentElement.className);
      console.log('  - Visible:', iframe.offsetWidth > 0 && iframe.offsetHeight > 0);
      
      // Try to access iframe content (will fail due to CORS, but that's expected)
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        console.log('  - Content accessible: YES');
      } catch (e) {
        console.log('  - Content accessible: NO (CORS - this is normal)');
        console.log('  - CORS Error:', e.message);
      }
    });
    
    // Check for common issues
    console.log('\n🔍 Common Issues Check:');
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMeta) {
      console.warn('  ⚠️ CSP found - may block YouTube:', cspMeta.content);
    } else {
      console.log('  ✅ No CSP blocking detected');
    }
    
    const adBlockers = ['adblock', 'ublock', 'privacy'];
    const scripts = Array.from(document.scripts).map(s => s.src);
    const hasAdBlocker = adBlockers.some(term => 
      scripts.some(src => src.toLowerCase().includes(term))
    );
    console.log('  - Ad blocker check:', hasAdBlocker ? '⚠️ Possible blocker detected' : '✅ No obvious blockers');
    
    return {
      iframeCount: iframes.length,
      visibleIframes: Array.from(iframes).filter(iframe => iframe.offsetWidth > 0 && iframe.offsetHeight > 0).length,
      hasCSP: !!cspMeta
    };
  };
  
  console.log('💡 Tip: Run testYouTubeEmbeds() in console to test all embeds');
});

