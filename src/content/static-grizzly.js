import {
  containerPromo,
  packagePriceRowsHtml,
  packages,
} from '../data/pricing.js'

export const staticGrizzlyHtml = `<!-- Product Detail -->
<section class="product-detail">
  <div class="product-gallery">
    <img src="/images/grizzly2.jpg" alt="DeSite Static Grizzly screener">
    <img src="/images/grizzly3.jpg" alt="DeSite Static Grizzly screening dirt, stone and sticks">
  </div>

  <div class="product-header">
    <h1>DeSite Static Grizzly — SLG-78 &amp; SLG-108</h1>
    <p>No-power grizzly screeners for oversize topsoil, gravel and aggregate. Wide 2″ / 3″ / 4″ square mesh, tilting deck and spring suspension — without electrics to babysit. Gets jiggled with the loader bucket!</p>
    <p style="margin-top:16px;line-height:1.7;max-width:720px;"><strong style="color:#b34700;">NZ operators:</strong> First pass for farm river gravel, cow race filling and civil oversize — then a Proscreen for finished grades. <a href="/screening-recommendation#farm-filling" style="color:#b34700;font-weight:600;">Farm &amp; filling mesh</a> · <a href="/for/farmers" style="color:#b34700;font-weight:600;">Farmers</a> · <a href="/for/aggregate-and-road-metal" style="color:#b34700;font-weight:600;">Aggregate &amp; road metal</a></p>
    <p style="text-align:center;margin-top:20px;">
      <a href="#slg-78" style="color:#ffa500;font-weight:600;margin:0 12px;">SLG-78 specs ↓</a>
      <a href="#slg-108" style="color:#ffa500;font-weight:600;margin:0 12px;">SLG-108 specs ↓</a>
    </p>
  </div>

  <!-- Top Quick Pricing Callout -->
  <div class="product-top-pricing">
    <div class="product-top-pricing-grid">
      <span class="product-top-pricing-badge">10% Pre-Order Discount</span>
      <span class="product-top-pricing-amount">${packages.grizzly78.preorderDisplay} <small style="font-size:0.6em;color:#2c2c2c;font-weight:600;">+GST (78")</small></span>
      <span class="product-top-pricing-was">Standard ${packages.grizzly78.display} +GST</span>
    </div>
    <p class="product-top-pricing-meta">
      <strong>78" Static Grizzly with Riser Box:</strong> ${packages.grizzly78.preorderDisplay} +GST &nbsp;|&nbsp; <strong>108" Full-Size Grizzly with Riser Box:</strong> ${packages.grizzly108.preorderDisplay} +GST.
      Both come with riser boxes so they sit higher — requiring clearing the screened material less often.
    </p>
    <div class="product-top-pricing-bullets">
      <span>🚜 <strong>Operation:</strong> Gets jiggled with the loader bucket — no electrics needed</span>
      <span>⏱️ <strong>Lead time:</strong> Safe bet is 2 months (container landing in NZ)</span>
      <span>📍 <strong>Shipping:</strong> Ex Nelson showroom · freight calculated to your NZ location</span>
      <span>📐 <strong>Standard screen:</strong> 100mm square openings (ideal for scalping oversize rock)</span>
      <span>🔄 <strong>Screen swap:</strong> 10–15 mins with deep socket (~10 nuts)</span>
    </div>
  </div>

  <div style="margin: 40px 0; max-width: 1200px; margin-left: auto; margin-right: auto; padding: 0 20px;">
    <h2 style="color: #b34700; margin-bottom: 20px; text-align: center;">See It In Action</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <div>
        <div class="video-container">
          <iframe src="https://player.vimeo.com/video/1129896297" width="100%" height="280" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="SLG-78 Static Grizzly screening" style="border-radius: 12px;"></iframe>
        </div>
        <p style="color: #555555; margin-top: 12px; text-align: center;">SLG-78 Static Grizzly screening dirt</p>
      </div>
      <div>
        <div class="video-container">
          <iframe src="https://player.vimeo.com/video/1123779281" width="100%" height="280" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="SLG-78 Grizzly" style="border-radius: 12px;"></iframe>
        </div>
        <p style="color: #555555; margin-top: 12px; text-align: center;">SLG-78 Grizzly on the job</p>
      </div>
      <div>
        <div class="video-container">
          <iframe src="https://player.vimeo.com/video/1130937806" width="100%" height="280" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="SLG-108 Grizzly with excavator" style="border-radius: 12px;"></iframe>
        </div>
        <p style="color: #555555; margin-top: 12px; text-align: center;">SLG-108 Grizzly with excavator</p>
      </div>
    </div>
  </div>

  <div class="product-details">
    <div class="product-description">
      <h2>Product Description</h2>
      <p>Static Grizzlies are built for tough oversize work: river gravel, rock, landscape stone, erosion rock and civil fill. Mesh screening on a rugged frame gives a cleaner product than fixed bars, with no electrical power required.</p>
      <p>Both models share a tilting screen deck, spring suspension to reduce clogging, and interchangeable square mesh. The unit is agitated by the loader bucket during screening. Standard screen is 100mm (4″) square openings for scalping off larger rocks and oversize material, with 50mm (2″) and 75mm (3″) mesh available for filling material.</p>
      <p>Low maintenance, 3-year structural warranty, included riser box so you clear screened material less often, and optional bucket transport lugs.</p>

      <h3 style="color: #b34700; margin-top: 30px; margin-bottom: 15px;">Key Features:</h3>
      <ul style="color: #2c2c2c; line-height: 1.8;">
        <li>Rugged grizzly design for rock, gravel and aggregate</li>
        <li>No electrical power required — static operation, agitated with loader bucket</li>
        <li>Standard 100mm (4″) square mesh for scalping oversize</li>
        <li>Interchangeable screens swap in 10–15 minutes (~10 nuts with deep socket)</li>
        <li>Tilting screen deck for material flow control</li>
        <li>Spring suspension system helps prevent rock wedging and clogging</li>
        <li>Two sizes: SLG-78 (mid-size) and SLG-108 (full-size)</li>
        <li>Comes with riser box included for extra material clearance beneath deck</li>
        <li>3-year structural warranty</li>
      </ul>
    </div>

    <div class="product-specifications">
      <h2>Choose a Model</h2>
      <p style="color:#2c2c2c;margin-bottom:20px;">Jump to <a href="#slg-78" style="color:#ffa500;font-weight:600;">SLG-78</a> or <a href="#slg-108" style="color:#ffa500;font-weight:600;">SLG-108</a> for full dimensions and weights.</p>
      <div class="spec-group">
        <h3>Standard &amp; Optional Mesh</h3>
        <ul class="spec-list">
          <li><strong>Standard Mesh:</strong> 100mm × 100mm (4″ × 4″) square</li>
          <li><strong>Available Openings:</strong> 2″ × 2″ (~50mm), 3″ × 3″ (~75mm), 4″ × 4″ (100mm)</li>
          <li><strong>Screen Swap Time:</strong> 10–15 minutes (undo ~10 nuts with deep socket)</li>
          <li><strong>Incline Sizing Effect:</strong> ~8% smaller than nominal aperture due to deck slope</li>
          <li><strong>Double lock crimp weave:</strong> High strength wear wire</li>
        </ul>
      </div>
      <div class="spec-group">
        <h3>Warranty</h3>
        <ul class="spec-list">
          <li><strong>Structural Warranty:</strong> 3 years</li>
          <li>Parts at no cost during warranty</li>
          <li>Customer installs parts and covers shipping</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SLG-78 -->
  <div id="slg-78" style="margin: 60px 0; max-width: 1200px; margin-left: auto; margin-right: auto; padding: 0 20px; scroll-margin-top: 90px;">
    <h2 style="color: #b34700; margin-bottom: 20px; text-align: center; font-size: 2rem;">SLG-78 Static Grizzly</h2>
    <p style="color:#2c2c2c;text-align:center;max-width:800px;margin:0 auto 30px;line-height:1.7;">Mid-size no-power grizzly for skid steers, bucket tractors, mid-size excavators and compact loaders. Agitated by the loader bucket.</p>
    <div class="product-gallery" style="margin-bottom: 30px;">
      <div style="position: relative; display: inline-block;">
        <img src="/images/bucket for 78.webp" alt="DeSite SLG-78 Static Grizzly bucket compatibility">
        <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); background: rgba(255,102,0,0.95); color: #000; padding: 8px 16px; border-radius: 8px; font-weight: 700; font-size: 1rem; white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
          Mid-size buckets
        </div>
      </div>
    </div>
    <div class="product-details">
      <div class="product-description">
        <h3 style="color:#ffa500;">Equipment Compatibility</h3>
        <p style="color:#2c2c2c;margin-bottom:10px;"><strong style="color:#b34700;">Designed For:</strong> Mid-sized equipment</p>
        <p style="color:#2c2c2c;margin:0;"><strong style="color:#b34700;">Compatible Equipment:</strong> Skid Steers, Bucket Tractors, Mid-Size Excavators, Compact Loaders</p>
      </div>
      <div class="product-specifications">
        <h3 style="color:#ffa500;">SLG-78 Specifications</h3>
        <div class="spec-group">
          <h3>Machine Dimensions</h3>
          <ul class="spec-list">
            <li><strong>Machine Width:</strong> 95 inches (2.41m)</li>
            <li><strong>Machine Height:</strong> 90 inches (2.29m)</li>
            <li><strong>Machine Depth:</strong> 74 inches (1.88m)</li>
          </ul>
        </div>
        <div class="spec-group">
          <h3>Screen Deck</h3>
          <ul class="spec-list">
            <li><strong>Screen Deck Width:</strong> 80 inches (2.03m)</li>
            <li><strong>Screen Deck Length:</strong> 52 inches (1.32m)</li>
            <li><strong>Screen Deck Surface Area:</strong> 29 sq/ft (2.7m²)</li>
            <li><strong>Screen Deck Tilt Angle:</strong> 45 to 30 Degrees</li>
          </ul>
        </div>
        <div class="spec-group">
          <h3>Weight</h3>
          <ul class="spec-list">
            <li><strong>Total Weight (with riser box):</strong> 2250 lbs (1021kg)</li>
            <li><strong>Total Weight (without riser box):</strong> 1750 lbs (794kg)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- SLG-108 -->
  <div id="slg-108" style="margin: 60px 0; max-width: 1200px; margin-left: auto; margin-right: auto; padding: 0 20px; scroll-margin-top: 90px;">
    <h2 style="color: #b34700; margin-bottom: 20px; text-align: center; font-size: 2rem;">SLG-108 Static Grizzly</h2>
    <p style="color:#2c2c2c;text-align:center;max-width:800px;margin:0 auto 30px;line-height:1.7;">Full-size no-power grizzly on a 108-class frame. Same wide mesh as the 78. Ideal carrier is a loader up to about 12 tonne; also fits backhoes and excavators with 84–108 inch buckets.</p>
    <div class="product-gallery" style="margin-bottom: 30px;">
      <div style="position: relative; display: inline-block;">
        <img src="/images/bucket for 108.webp" alt="DeSite SLG-108 Static Grizzly bucket compatibility">
        <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); background: rgba(255,102,0,0.95); color: #000; padding: 8px 16px; border-radius: 8px; font-weight: 700; font-size: 1rem; white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
          84–108 inches
        </div>
      </div>
    </div>
    <div class="product-details">
      <div class="product-description">
        <h3 style="color:#ffa500;">Equipment Compatibility</h3>
        <p style="color:#2c2c2c;margin-bottom:10px;"><strong style="color:#b34700;">Designed For:</strong> Full-size equipment — ideal with a loader up to about 12 tonne</p>
        <p style="color:#2c2c2c;margin-bottom:10px;"><strong style="color:#b34700;">Maximum Bucket Width:</strong> 2.8 metres (84–108 inches)</p>
        <p style="color:#2c2c2c;margin:0;"><strong style="color:#b34700;">Compatible Equipment:</strong> Wheel Loaders (up to about 12 tonne), Backhoes, Compact Wheel Loaders, Skidsteers, Excavators, Compact Excavators</p>
      </div>
      <div class="product-specifications">
        <h3 style="color:#ffa500;">SLG-108 Specifications</h3>
        <div class="spec-group">
          <h3>Machine Dimensions</h3>
          <ul class="spec-list">
            <li><strong>Machine Width:</strong> 126 inches (3.20m)</li>
            <li><strong>Machine Height:</strong> 122 inches (3.10m)</li>
            <li><strong>Machine Depth:</strong> 72 inches (1.83m)</li>
          </ul>
        </div>
        <div class="spec-group">
          <h3>Screen Deck</h3>
          <ul class="spec-list">
            <li><strong>Screen Deck Width:</strong> 120 inches (3.05m)</li>
            <li><strong>Screen Deck Length:</strong> 72 inches (1.83m)</li>
            <li><strong>Screen Deck Surface Area:</strong> 58 sq/ft (5.4m²)</li>
            <li><strong>Screen Deck Tilt Angle:</strong> 45 to 30 Degrees</li>
          </ul>
        </div>
        <div class="spec-group">
          <h3>Weight</h3>
          <ul class="spec-list">
            <li><strong>Total Weight (with riser box):</strong> 5500 lbs (2495kg)</li>
            <li><strong>Total Weight (without riser box):</strong> 4300 lbs (1950kg)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div style="margin: 60px 0; max-width: 1200px; margin-left: auto; margin-right: auto; padding: 0 20px;">
    <h2 style="color: #b34700; margin-bottom: 40px; text-align: center; font-size: 2rem;">Screener Features</h2>

    <div style="background: rgba(255,102,0,0.1); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 2px solid rgba(255,102,0,0.3);">
      <h3 style="color: #b34700; margin-bottom: 20px; font-size: 1.5rem;">Tilting Screen Deck</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px;">
        <img src="/images/TILTING-SCREEN-DECK-78STATIC_2.webp" alt="Tilting screen deck side view" style="width: 100%; border-radius: 12px; border: 2px solid #ff6600;">
        <img src="/images/TILTING-SCREEN-DECK-78STATIC_.webp" alt="Tilting screen deck front view" style="width: 100%; border-radius: 12px; border: 2px solid #ff6600;">
      </div>
      <p style="color: #2c2c2c; line-height: 1.8; font-size: 1.05rem;">The tilting screen deck on both Static Grizzly models is the same system used on the powered 78 and 108 Proscreens. Direct bucket contact lets you control material flow while screening stays in motion — useful on sticky or oversize gravel and aggregate.</p>
    </div>

    <div style="background: rgba(255,102,0,0.1); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 2px solid rgba(255,102,0,0.3);">
      <h3 style="color: #b34700; margin-bottom: 20px; font-size: 1.5rem;">Spring Suspension System</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px;">
        <img src="/images/SUSPENSION-78STATIC.webp" alt="Spring suspension system" style="width: 100%; border-radius: 12px; border: 2px solid #ff6600;">
        <img src="/images/SUSPENSION-78STATIC_.webp" alt="Spring suspension system detail" style="width: 100%; border-radius: 12px; border: 2px solid #ff6600;">
      </div>
      <p style="color: #2c2c2c; line-height: 1.8; font-size: 1.05rem;">Spring suspension lets the deck move in a harmonic motion that drives material across the mesh. Unlike traditional bar grizzlies where rock can wedge and stay put, the suspension helps keep the opening clear.</p>
    </div>

    <div style="background: rgba(255,102,0,0.1); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 2px solid rgba(255,102,0,0.3);">
      <h3 style="color: #b34700; margin-bottom: 20px; font-size: 1.5rem;">Riser Box (Included in Package)</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px;">
        <img src="/images/rise-box.jpg" alt="Riser box for increased capacity" style="width: 100%; border-radius: 12px; border: 2px solid #ff6600;">
      </div>
      <p style="color: #2c2c2c; line-height: 1.8; font-size: 1.05rem;">The riser box increases storage under the deck and steadies the screener. Both packages include the riser box so the machine sits higher — requiring you to clear the screened material less often. Winches and 2-inch straps let you fit or remove it in under five minutes.</p>
    </div>

    <div style="background: rgba(255,102,0,0.1); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 2px solid rgba(255,102,0,0.3);">
      <h3 style="color: #b34700; margin-bottom: 20px; font-size: 1.5rem;">Bucket Transport Lugs (Optional Accessory)</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px;">
        <img src="/images/lugs.jpg" alt="Bucket transport lugs" style="width: 100%; border-radius: 12px; border: 2px solid #ff6600;">
      </div>
      <p style="color: #2c2c2c; line-height: 1.8; font-size: 1.05rem;">Optional bucket transport lugs let you shift either Static Grizzly around the site with the carrier bucket — useful in tight yards without a separate trailer move.</p>
    </div>
  </div>

  <div class="product-pricing">
    <h2>Package pricing</h2>
    <p class="price-package">${packages.grizzly78.packageLabel}</p>
    ${packagePriceRowsHtml(packages.grizzly78)}
    <p class="price-package" style="margin-top:24px;">${packages.grizzly108.packageLabel}</p>
    ${packagePriceRowsHtml(packages.grizzly108)}
    <p class="price-promo-banner">${containerPromo.headline}. ${containerPromo.shortLine}</p>
    <p class="price-note">${containerPromo.note}</p>
    
    <div style="background: rgba(255,102,0,0.08); border-left: 3px solid #ff6600; padding: 18px 22px; border-radius: 8px; margin: 24px auto; max-width: 640px; text-align: left;">
      <p style="margin: 0 0 8px; font-weight: 700; color: #b34700;">Pre-order &amp; Supply Details:</p>
      <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #2c2c2c;">
        <li><strong>Pre-order lead time:</strong> Safe bet is 2 months for container shipment landing in NZ.</li>
        <li><strong>Shipping calculation:</strong> Ex Nelson showroom (105 Pascoe Street). Freight is calculated based on where in NZ you are based so costs are completely clear.</li>
        <li><strong>Riser box benefit:</strong> Both come with riser boxes so they sit higher — requiring clearing the screened material less often.</li>
        <li><strong>Operation:</strong> Gets jiggled with the loader bucket — no electrics needed.</li>
        <li><strong>Screen interchangeability:</strong> Swap screens in 10–15 minutes (undo ~10 nuts using a deep socket).</li>
        <li><strong>Standard screen:</strong> 100mm square openings for scalping off larger rocks and oversize.</li>
      </ul>
    </div>

    <h3 style="color: #b34700; margin-top: 30px; margin-bottom: 15px;">Additional options</h3>
    <ul style="color: #2c2c2c; text-align: left; max-width: 600px; margin: 0 auto; line-height: 1.8;">
      <li>Additional grizzly mesh (2″ × 2″ / ~50mm and 3″ × 3″ / ~75mm available)</li>
      <li>Bucket transport lugs</li>
    </ul>
    <p style="color: #555555; font-size: 0.9rem; margin-top: 20px; text-align: center; font-style: italic;">Contact us for discounts, extras and delivery to your location.</p>
  </div>

  <section class="buyer-faq-section">
    <h2>Client Questions &amp; Answers</h2>
    <p class="buyer-faq-sub">Common questions from prospective clients about the DeSite Static Grizzly, lead times, shipping, and mesh interchangeability.</p>
    <div class="buyer-faq-grid">
      <div class="buyer-faq-card">
        <h3>💰 How much does the 78" Grizzly cost?</h3>
        <p>The 78" Grizzly is <strong>$12,985 + GST</strong> (standard list is $14,428.23). The unit is agitated/jiggled with the loader bucket. The 10% pre-order discount is already applied.</p>
        <p>Includes the <strong>riser box</strong> so it sits higher — requiring you to clear screened material less often.</p>
      </div>
      <div class="buyer-faq-card">
        <h3>⏱️ How long is the lead time for a pre-order?</h3>
        <p>A safe bet is <strong>2 months</strong> for machines landing on the container shipment into New Zealand.</p>
      </div>
      <div class="buyer-faq-card">
        <h3>📍 Where are you based and how is shipping calculated?</h3>
        <p>We are based in <strong>Nelson (105 Pascoe Street)</strong> and supply nationwide across New Zealand. Freight is calculated based on where in NZ you are based to keep shipping costs exact and clear.</p>
      </div>
      <div class="buyer-faq-card">
        <h3>🔄 Can I customize my screener with different screens?</h3>
        <p><strong>Absolutely!</strong> The Grizzly comes standard with 100mm square openings, ideal for scalping off larger rocks and oversized material. However, you can fit different mesh sizes to the Grizzly as well.</p>
        <p>Screens swap in around <strong>10–15 minutes</strong>: undo approximately 10 nuts using a deep socket, slide out the mesh, fit the replacement and re-tension it.</p>
      </div>
      <div class="buyer-faq-card">
        <h3>📐 Why is finished product ~8% smaller than mesh aperture?</h3>
        <p>Because these are inclined screens (30°–45°), the effective sizing is approximately <strong>8% smaller</strong> than the actual mesh aperture.</p>
      </div>
      <div class="buyer-faq-card">
        <h3>⚡ Static Grizzly vs Vibrating Feeder — which is faster?</h3>
        <p>The Static Grizzly gets jiggled with the loader bucket and needs no electrics. The Vibrating Feeder ($28,517 + GST) is faster to use as you <strong>drop the load and go</strong> with twin vibratory motors doing the work.</p>
      </div>
    </div>
  </section>

  <div class="product-description" style="margin-top: 40px;">
    <h2>What Can You Screen?</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 20px;">
      <div style="background: rgba(255,102,0,0.1); padding: 15px; border-radius: 8px; border-left: 3px solid #ff6600;">
        <p style="color: #b34700; font-weight: 600; margin-bottom: 10px;">Gravel &amp; Aggregate</p>
        <ul style="color: #2c2c2c; line-height: 1.8; list-style: none; padding: 0;">
          <li>✓ Road Gravel</li>
          <li>✓ Landscape Stone</li>
          <li>✓ Decorative Stone</li>
          <li>✓ Erosion Control Rock</li>
        </ul>
      </div>
      <div style="background: rgba(255,102,0,0.1); padding: 15px; border-radius: 8px; border-left: 3px solid #ff6600;">
        <p style="color: #b34700; font-weight: 600; margin-bottom: 10px;">Soil &amp; Oversize</p>
        <ul style="color: #2c2c2c; line-height: 1.8; list-style: none; padding: 0;">
          <li>✓ Oversize topsoil and fill</li>
          <li>✓ Mixed site material</li>
          <li>✓ Sticks and debris separation</li>
        </ul>
      </div>
      <div style="background: rgba(255,102,0,0.1); padding: 15px; border-radius: 8px; border-left: 3px solid #ff6600;">
        <p style="color: #b34700; font-weight: 600; margin-bottom: 10px;">Construction Materials</p>
        <ul style="color: #2c2c2c; line-height: 1.8; list-style: none; padding: 0;">
          <li>✓ Ground Asphalt</li>
          <li>✓ Crushed Concrete</li>
          <li>✓ Wood Mulch</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cta-buttons" style="margin-top: 60px;">
    <a href="tel:+64275212126" class="cta-primary">Call 027 521 2126</a>
    <a href="mailto:info@sitemachinery.nz" class="cta-secondary">Email Us</a>
  </div>
</section>`
