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

// Image loading debugging and error handling
document.addEventListener('DOMContentLoaded', function() {
  console.log('🖼️ Image Debug: Initializing...');
  
  const images = document.querySelectorAll('img');
  console.log(`🖼️ Found ${images.length} image(s) on page`);
  
  let loadedCount = 0;
  let errorCount = 0;
  let pendingCount = images.length;
  
  images.forEach((img, index) => {
    const imgSrc = img.getAttribute('src');
    const imgAlt = img.getAttribute('alt') || 'No alt text';
    const imgClass = img.className || 'No class';
    const parentElement = img.parentElement;
    
    console.log(`🖼️ Image ${index + 1}:`, {
      src: imgSrc,
      alt: imgAlt,
      class: imgClass,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      displayWidth: img.offsetWidth,
      displayHeight: img.offsetHeight,
      parent: parentElement ? parentElement.tagName + (parentElement.className ? '.' + parentElement.className : '') : 'None',
      complete: img.complete
    });
    
    // Track successful loads
    if (img.complete && img.naturalWidth > 0) {
      loadedCount++;
      pendingCount--;
      img.setAttribute('data-image-loaded', 'true');
      img.setAttribute('data-image-loading', 'false');
      console.log(`✅ Image ${index + 1} already loaded:`, imgSrc);
    } else {
      img.addEventListener('load', function() {
        loadedCount++;
        pendingCount--;
        this.setAttribute('data-image-loaded', 'true');
        this.setAttribute('data-image-loading', 'false');
        this.removeAttribute('data-image-error');
        
        console.log(`✅ Image ${index + 1} loaded successfully:`, {
          src: imgSrc,
          naturalWidth: this.naturalWidth,
          naturalHeight: this.naturalHeight,
          displayWidth: this.offsetWidth,
          displayHeight: this.offsetHeight
        });
        
        // Check if image dimensions are reasonable
        if (this.naturalWidth === 0 || this.naturalHeight === 0) {
          console.warn(`⚠️ Image ${index + 1} has zero dimensions:`, imgSrc);
        }
        
        // Check if image is visible
        const rect = this.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          console.warn(`⚠️ Image ${index + 1} is not visible (zero display size):`, imgSrc);
        }
        
        // Add visual debug indicator if enabled
        if (this.getAttribute('data-debug') === 'true') {
          this.style.border = '3px solid #00ff00';
        }
      });
      
      img.addEventListener('error', function(e) {
        errorCount++;
        pendingCount--;
        this.setAttribute('data-image-error', 'true');
        this.setAttribute('data-image-loading', 'false');
        
        console.error(`❌ Image ${index + 1} failed to load:`, {
          src: imgSrc,
          alt: imgAlt,
          error: e,
          fallback: this.getAttribute('onerror') ? 'Has onerror handler' : 'No fallback',
          attemptedSrc: this.src
        });
        
        // Check if fallback is being used
        const currentSrc = this.currentSrc || this.src;
        if (currentSrc !== imgSrc) {
          console.log(`🔄 Image ${index + 1} using fallback:`, currentSrc);
        }
        
        // Add visual debug indicator
        if (this.getAttribute('data-debug') === 'true') {
          this.style.border = '3px solid #ff0000';
        }
      });
      
      // Track loading state
      img.setAttribute('data-image-loading', 'true');
      img.addEventListener('load', function() {
        this.setAttribute('data-image-loading', 'false');
        this.setAttribute('data-image-loaded', 'true');
        this.removeAttribute('data-image-error');
      });
    }
    
    // Monitor image dimensions after load
    setTimeout(() => {
      const rect = img.getBoundingClientRect();
      console.log(`📐 Image ${index + 1} final dimensions:`, {
        natural: `${img.naturalWidth}x${img.naturalHeight}`,
        display: `${rect.width}x${rect.height}`,
        visible: rect.width > 0 && rect.height > 0,
        inViewport: rect.top < window.innerHeight && rect.bottom > 0,
        aspectRatio: img.naturalWidth > 0 ? (img.naturalHeight / img.naturalWidth).toFixed(2) : 'N/A'
      });
      
      // Check for common issues
      if (img.naturalWidth > 0 && img.offsetWidth === 0) {
        console.warn(`⚠️ Image ${index + 1} loaded but not visible (CSS may be hiding it):`, imgSrc);
      }
      
      if (img.naturalWidth > 0 && img.naturalWidth < 100) {
        console.warn(`⚠️ Image ${index + 1} is very small (${img.naturalWidth}px):`, imgSrc);
      }
    }, 2000);
  });
  
  // Summary after all images have had time to load
  setTimeout(() => {
    console.log('\n📊 Image Loading Summary:');
    console.log(`  ✅ Loaded: ${loadedCount}`);
    console.log(`  ❌ Errors: ${errorCount}`);
    console.log(`  ⏳ Pending: ${pendingCount}`);
    console.log(`  📈 Success Rate: ${images.length > 0 ? ((loadedCount / images.length) * 100).toFixed(1) : 0}%`);
  }, 3000);
  
  // Add manual test function for images
  window.testImages = function() {
    console.log('🧪 Testing Images...');
    const images = document.querySelectorAll('img');
    const results = {
      total: images.length,
      loaded: 0,
      errors: 0,
      zeroDimensions: 0,
      notVisible: 0,
      missingAlt: 0,
      details: []
    };
    
    images.forEach((img, index) => {
      const detail = {
        index: index + 1,
        src: img.src || img.getAttribute('src'),
        alt: img.alt || 'MISSING ALT TEXT',
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: img.offsetWidth,
        displayHeight: img.offsetHeight,
        complete: img.complete,
        visible: img.offsetWidth > 0 && img.offsetHeight > 0
      };
      
      if (img.complete && img.naturalWidth > 0) {
        results.loaded++;
      } else if (!img.complete) {
        results.errors++;
      }
      
      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        results.zeroDimensions++;
      }
      
      if (img.offsetWidth === 0 || img.offsetHeight === 0) {
        results.notVisible++;
      }
      
      if (!img.alt) {
        results.missingAlt++;
      }
      
      results.details.push(detail);
    });
    
    console.table(results.details);
    console.log('\n📊 Test Results:', results);
    
    // Check for common issues
    console.log('\n🔍 Issue Analysis:');
    if (results.missingAlt > 0) {
      console.warn(`  ⚠️ ${results.missingAlt} image(s) missing alt text (accessibility issue)`);
    }
    if (results.zeroDimensions > 0) {
      console.warn(`  ⚠️ ${results.zeroDimensions} image(s) have zero dimensions (may not have loaded)`);
    }
    if (results.notVisible > 0) {
      console.warn(`  ⚠️ ${results.notVisible} image(s) are not visible (may be hidden by CSS)`);
    }
    if (results.errors > 0) {
      console.error(`  ❌ ${results.errors} image(s) failed to load`);
    }
    
    return results;
  };
  
  // Check for broken image links
  window.findBrokenImages = function() {
    console.log('🔍 Finding Broken Images...');
    const images = document.querySelectorAll('img');
    const broken = [];
    
    images.forEach((img, index) => {
      if (!img.complete || img.naturalWidth === 0) {
        broken.push({
          index: index + 1,
          src: img.src || img.getAttribute('src'),
          alt: img.alt,
          element: img
        });
      }
    });
    
    if (broken.length > 0) {
      console.error(`❌ Found ${broken.length} broken image(s):`);
      console.table(broken);
      return broken;
    } else {
      console.log('✅ No broken images found');
      return [];
    }
  };
  
  // Check image sources and suggest fixes
  window.analyzeImageSources = function() {
    console.log('🔍 Analyzing Image Sources...');
    const images = document.querySelectorAll('img');
    const analysis = {
      external: [],
      local: [],
      missing: [],
      hasFallback: [],
      noFallback: []
    };
    
    images.forEach((img, index) => {
      const src = img.getAttribute('src') || '';
      const hasOnError = img.hasAttribute('onerror');
      
      if (!src) {
        analysis.missing.push({ index: index + 1, element: img });
      } else if (src.startsWith('http://') || src.startsWith('https://')) {
        analysis.external.push({ index: index + 1, src: src, hasFallback: hasOnError });
        if (hasOnError) {
          analysis.hasFallback.push({ index: index + 1, src: src });
        } else {
          analysis.noFallback.push({ index: index + 1, src: src });
        }
      } else {
        analysis.local.push({ index: index + 1, src: src });
      }
    });
    
    console.log('📊 Source Analysis:');
    console.log(`  External URLs: ${analysis.external.length}`);
    console.log(`  Local paths: ${analysis.local.length}`);
    console.log(`  Missing src: ${analysis.missing.length}`);
    console.log(`  With fallback: ${analysis.hasFallback.length}`);
    console.log(`  Without fallback: ${analysis.noFallback.length}`);
    
    if (analysis.noFallback.length > 0) {
      console.warn('\n⚠️ Images without fallback handlers:');
      console.table(analysis.noFallback);
    }
    
    if (analysis.missing.length > 0) {
      console.error('\n❌ Images with missing src:');
      console.table(analysis.missing);
    }
    
    return analysis;
  };
  
  // Enable debug mode for all images (optional - can be toggled)
  window.enableImageDebug = function() {
    console.log('🔍 Enabling image debug mode...');
    document.querySelectorAll('img').forEach(img => {
      img.setAttribute('data-debug', 'true');
    });
    console.log('✅ Image debug mode enabled - images will show borders and source info');
  };
  
  window.disableImageDebug = function() {
    console.log('🔍 Disabling image debug mode...');
    document.querySelectorAll('img').forEach(img => {
      img.removeAttribute('data-debug');
      img.style.border = '';
    });
    console.log('✅ Image debug mode disabled');
  };
  
  console.log('🖼️ Image Debug: Setup complete');
  console.log('💡 Tips:');
  console.log('  - Run testImages() to test all images');
  console.log('  - Run findBrokenImages() to find broken images');
  console.log('  - Run analyzeImageSources() to analyze image sources');
  console.log('  - Run enableImageDebug() to show visual debug borders on images');
  console.log('  - Run disableImageDebug() to hide visual debug borders');
});

