import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import MarketingReadout from './MarketingReadout'

const DAYS = 21
const META_SET_DAILY = 18
const META_DAILY = META_SET_DAILY * 2
const META_TOTAL = META_DAILY * DAYS
const TRADEME_LISTING = 99
const TRADEME_COUNT = 3
const TRADEME_BASELINE = TRADEME_LISTING * TRADEME_COUNT
const APPROVAL = META_TOTAL + TRADEME_BASELINE
const ORIGINAL_DAILY = 45
const ORIGINAL_TOTAL = ORIGINAL_DAILY * DAYS
const ORIGINAL_REGION = 189

const regions = [
  {
    id: '1',
    name: 'Waikato / Bay of Plenty',
    places: 'Hamilton, Cambridge, Matamata, Tauranga, Rotorua, Whakatāne',
    population: 891400,
    populationNote: 'Waikato 536,200 + Bay of Plenty 355,200',
    growth: '+2.2% Waikato, +1.6% Bay of Plenty',
    audience: 'Civil contractors, earthmovers, dairy farm managers, quarry operators',
    pitch: 'Subdivision soil, farm raceway aggregate, screening topsoil on the job',
    machines: 'SLG-78VF and 78 Grizzly. SLG-108 where the loader is up to about 12 tonne',
    pin: { cx: 248, cy: 196 },
  },
  {
    id: '2',
    name: 'Canterbury / Selwyn',
    places: 'Christchurch, Rolleston, Lincoln, Rangiora, Ashburton, Timaru',
    population: 694400,
    populationNote: 'Canterbury 694,400. Selwyn is inside that figure',
    growth: '+1.6% Canterbury',
    audience: 'Agricultural contractors, lifestyle blocks, civil earthworks',
    pitch: 'River gravel, land development, higher-volume topsoil',
    machines: 'SLG-78VF and SLG-108VFRB',
    pin: { cx: 172, cy: 478 },
  },
  {
    id: '3',
    name: 'Auckland / Northland',
    places: 'Auckland sites, Franklin fringe, Whangārei, Kerikeri',
    population: 2003100,
    populationNote: 'Auckland 1,798,300 + Northland 204,800',
    growth: '+2.5% Auckland',
    audience: 'Residential contractors, urban site prep, utility installers',
    pitch: 'Compact screening in tight access, fewer cleanfill and cartage trips',
    machines: 'SLG-68V first. SLG-78VF where the site can take it',
    pin: { cx: 228, cy: 130 },
  },
  {
    id: '4',
    name: 'Otago / Southland',
    places: 'Dunedin, Queenstown–Wānaka fringe, Gore, Invercargill, stations',
    population: 363300,
    populationNote: 'Otago 257,200 + Southland 106,100',
    growth: 'Slower growth, strong farm and station base',
    audience: 'Farm and station managers, earthmoving and aggregate contractors',
    pitch: 'Farm maintenance, gravel reclamation, no-power screening',
    machines: 'Static Grizzly, with the 78 Proscreen for contractors',
    pin: { cx: 112, cy: 575 },
  },
  {
    id: '5',
    name: 'Tasman / Nelson / Marlborough',
    places: 'Nelson showroom, Richmond, Motueka, Blenheim, Renwick',
    population: 167500,
    populationNote: 'Tasman 60,000 + Nelson 55,200 + Marlborough 52,300',
    growth: '+1.6% Marlborough',
    audience: 'Regional civil, viticulture, orchardists, small contractors',
    pitch: 'View the machine at 105 Pascoe Street. Vineyard and orchard soil, small aggregate',
    machines: 'SLG-68V and SLG-78VF. A visit beats another video',
    pin: { cx: 198, cy: 368 },
  },
]

const POP_MAX = Math.max(...regions.map((region) => region.population))

function nz(amount) {
  return `NZ$${amount.toLocaleString('en-NZ')}`
}

function people(amount) {
  return amount.toLocaleString('en-NZ')
}

export default function MarketingPage() {
  return (
    <div className="mkt">
      <SEO pathname="/marketing" />
      <header className="mkt-top">
        <div className="mkt-top-inner">
          <div>
            <p className="mkt-brand">Site Machinery NZ</p>
            <p className="mkt-kicker">Management brief · Internal</p>
          </div>
          <div className="mkt-top-meta">
            <p>Prepared 12 October 2026</p>
            <p>sitemachinery.nz/marketing</p>
          </div>
        </div>
      </header>

      <main className="mkt-main">
        <p className="mkt-answer">
          Approve {nz(APPROVAL)} for {DAYS} days. Meta, at {nz(META_DAILY)} a day, is the instrument
          that tells us who and where. Trade Me, at {nz(TRADEME_BASELINE)}, is a plain classified
          net for people already shopping. Demographics from Meta decide the next flight.
        </p>

        <div className="mkt-hero">
          <div>
            <h1>21 days to decide on the next container from China</h1>
            <p className="mkt-lede">
              This test asks whether New Zealand operators will pay attention to DeSite screeners
              before Site Machinery places another stock order. It does not put a container on the
              water. The clock starts the day the ads go live. The order decision is day {DAYS}.
            </p>
          </div>
          <dl className="mkt-kpis">
            <div>
              <dt>Window</dt>
              <dd>{DAYS} days</dd>
            </div>
            <div>
              <dt>Approval ceiling</dt>
              <dd>{nz(APPROVAL)}</dd>
            </div>
            <div>
              <dt>Meta, firm</dt>
              <dd>{nz(META_TOTAL)}</dd>
            </div>
            <div>
              <dt>Trade Me baseline</dt>
              <dd>{nz(TRADEME_BASELINE)}</dd>
            </div>
          </dl>
        </div>

        <nav className="mkt-jump" aria-label="Brief sections">
          <a href="#money">Money</a>
          <a href="#where">Regions</a>
          <a href="#who">Audience</a>
          <a href="#channels">Channels</a>
          <a href="#ads">Three ads</a>
          <a href="#meta">When data arrives</a>
          <a href="#decision">Go / hold / stop</a>
          <a href="#calendar">Calendar</a>
        </nav>

        <section id="money" className="mkt-section">
          <p className="mkt-index">01 · Money</p>
          <h2>What to approve</h2>
          <p>
            Facebook and Instagram are one Meta account. The algorithm shares one daily budget
            across both. Buying them as separate campaigns spends the same dollar twice and hides
            which placement actually worked.
          </p>

          <div className="mkt-split">
            <article className="mkt-panel mkt-panel-approve">
              <p className="mkt-panel-label">Approve</p>
              <h3>{nz(APPROVAL)} ceiling</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>Civil and earthmoving · {nz(META_SET_DAILY)}/day</span>
                  <strong>{nz(META_SET_DAILY * DAYS)}</strong>
                </li>
                <li>
                  <span>Farm, station and landscaping · {nz(META_SET_DAILY)}/day</span>
                  <strong>{nz(META_SET_DAILY * DAYS)}</strong>
                </li>
                <li>
                  <span>Meta subtotal · {nz(META_DAILY)}/day × {DAYS}</span>
                  <strong>{nz(META_TOTAL)}</strong>
                </li>
                <li>
                  <span>
                    Trade Me · {TRADEME_COUNT} plain classifieds · {nz(TRADEME_LISTING)} each
                  </span>
                  <strong>{nz(TRADEME_BASELINE)}</strong>
                </li>
              </ul>
              <p className="mkt-fine">
                Three ad styles sit inside each Meta audience. Meta moves the money toward the
                style people actually click. Forcing an equal split fights the auction.
              </p>
            </article>

            <article className="mkt-panel">
              <p className="mkt-panel-label">Set aside</p>
              <h3>{nz(ORIGINAL_TOTAL)} across 15 cells</h3>
              <p>
                Three styles × five regions × {nz(3)} a day is {nz(ORIGINAL_DAILY)} a day,{' '}
                {nz(ORIGINAL_TOTAL)} over {DAYS} days. That figure is Meta only. It leaves Trade Me
                out.
              </p>
              <div className="mkt-matrix" aria-hidden="true">
                {regions.map((region) => (
                  <div key={region.id} className="mkt-matrix-row">
                    <span>{region.id}</span>
                    <span />
                    <span />
                    <span />
                  </div>
                ))}
              </div>
              <p className="mkt-fine">
                Each region would have cost {nz(ORIGINAL_REGION)} ({nz(3)} × 3 styles × {DAYS}{' '}
                days). At a few dollars a day, Meta cannot learn, and a region can finish the month
                on a handful of clicks. The map below is still how we read a single national
                campaign.
              </p>
            </article>
          </div>

          <div className="mkt-bars" aria-label="Spend comparison">
            <div>
              <div className="mkt-bar-label">
                <span>Meta to approve</span>
                <strong>{nz(META_TOTAL)}</strong>
              </div>
              <div className="mkt-bar">
                <span style={{ width: `${(META_TOTAL / APPROVAL) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mkt-bar-label">
                <span>Trade Me baseline</span>
                <strong>{nz(TRADEME_BASELINE)}</strong>
              </div>
              <div className="mkt-bar mkt-bar-teal">
                <span style={{ width: `${(TRADEME_BASELINE / APPROVAL) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mkt-bar-label">
                <span>15-cell Meta idea</span>
                <strong>{nz(ORIGINAL_TOTAL)}</strong>
              </div>
              <div className="mkt-bar mkt-bar-mute">
                <span style={{ width: `${(ORIGINAL_TOTAL / APPROVAL) * 100}%` }} />
              </div>
            </div>
          </div>

          <h3 className="mkt-subhead">Trade Me is a baseline funnel, not the study</h3>
          <p>
            List three machines as classifieds and buy nothing else. No feature, no super feature,
            no subtitle. A classified has no success fee. The listing runs 14 days and the relist
            on day 14 is free, so the 21-day window does not buy the ad twice. The planning band is
            an asking price of $10,000–$24,999, which is a {nz(TRADEME_LISTING)} listing fee.
          </p>
          <div className="mkt-table-wrap">
            <table className="mkt-table">
              <caption>
                Plain classified fee, Trade Me Motors “all other vehicles”. The highlighted row is
                the plan. Higher rows are only if the asking price forces them. Promos stay off.
              </caption>
              <thead>
                <tr>
                  <th>Asking price</th>
                  <th>Listing fee</th>
                  <th>Three machines</th>
                  <th>This test</th>
                </tr>
              </thead>
              <tbody>
                <tr className="is-plan">
                  <td>$10,000 – $24,999</td>
                  <td>$99</td>
                  <td>$297</td>
                  <td>Baseline</td>
                </tr>
                <tr>
                  <td>$25,000 – $49,999</td>
                  <td>$129</td>
                  <td>$387</td>
                  <td>Only if the price band requires it</td>
                </tr>
                <tr>
                  <td>$50,000 or more</td>
                  <td>$149–$199</td>
                  <td>$447–$597</td>
                  <td>Still no promotional extra</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mkt-fine">
            Watchlists and questions get logged. They do not choose the age, the region, or the
            winning sentence. That recalibration comes from Meta. List the SLG-68V, the SLG-78VF or
            a Static Grizzly, and the SLG-108VFRB, each pointing at its page on the site.
          </p>

          <div className="mkt-callout">
            <h3>What the Meta money can and cannot prove</h3>
            <p>
              If a click costs about {nz(2)}, {nz(META_TOTAL)} buys on the order of 380 site visits.
              That is an illustration, not a quote. It is enough to see which of the three ads
              people stop for, and which of the two audiences responds. It is not a forecast of how
              many screeners a container will sell.
            </p>
          </div>
        </section>

        <section id="where" className="mkt-section">
          <p className="mkt-index">02 · Geography</p>
          <h2>Five reading areas, one national campaign</h2>
          <p>
            Target all of New Zealand. Report results in these five areas, plus a sixth bucket for
            everywhere else. Manawatū–Whanganui, Hawke’s Bay, Taranaki, Wellington, the West Coast
            and Gisborne still see the ads. If “rest of NZ” outruns the five, that region joins the
            container conversation.
          </p>

          <div className="mkt-geo">
            <figure className="mkt-map-wrap">
              <svg className="mkt-map" viewBox="20 10 330 640" role="img" aria-labelledby="mkt-map-title">
                <title id="mkt-map-title">New Zealand with five test areas marked</title>
                <path
                  className="mkt-land"
                  d="M188 29 L197 35 L222 59 L232 84 L239 123 L240 146 L255 129 L261 147 L270 182 L325 188 L321 206 L313 236 L310 260 L287 276 L280 325 L249 380 L237 366 L239 355 L246 328 L242 298 L220 255 L233 223 L239 194 L222 133 L204 84 L197 62 L191 35 Z"
                />
                <path
                  className="mkt-land"
                  d="M188 326 L215 345 L226 360 L225 386 L212 418 L194 465 L190 478 L194 490 L188 484 L154 516 L148 550 L142 587 L121 616 L86 623 L44 601 L57 555 L75 516 L100 489 L148 434 L163 387 L175 343 Z"
                />
                {regions.map((region) => (
                  <g key={region.id} className={`mkt-pin mkt-pin-${region.id}`}>
                    <circle cx={region.pin.cx} cy={region.pin.cy} r="16" />
                    <text x={region.pin.cx} y={region.pin.cy + 5} textAnchor="middle">
                      {region.id}
                    </text>
                  </g>
                ))}
              </svg>
              <figcaption>Simplified coastline. Numbers match the areas below.</figcaption>
            </figure>

            <div className="mkt-pop">
              <h3>Estimated residents, 30 June 2024</h3>
              <p className="mkt-fine">
                Stats NZ provisional subnational estimates. About 4.12 million people live in the
                five reading areas. Length of bar is population, not buyer density.
              </p>
              <ul>
                {regions.map((region) => (
                  <li key={region.id}>
                    <div className="mkt-pop-label">
                      <span>
                        <i className={`mkt-dot mkt-dot-${region.id}`}>{region.id}</i>
                        {region.name}
                      </span>
                      <strong>{people(region.population)}</strong>
                    </div>
                    <div className="mkt-bar">
                      <span
                        className={`mkt-fill-${region.id}`}
                        style={{ width: `${(region.population / POP_MAX) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mkt-fine">
                Auckland and Northland are the longest bar and the least efficient place to buy
                screener attention per person. Keep their budget inside the national campaign.
              </p>
            </div>
          </div>

          <div className="mkt-regions">
            {regions.map((region) => (
              <article key={region.id} className={`mkt-region mkt-region-${region.id}`}>
                <header>
                  <span className={`mkt-dot mkt-dot-${region.id}`}>{region.id}</span>
                  <h3>{region.name}</h3>
                </header>
                <p className="mkt-places">{region.places}</p>
                <dl>
                  <div>
                    <dt>People</dt>
                    <dd>
                      {people(region.population)}
                      <span>{region.populationNote}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Growth</dt>
                    <dd>{region.growth}</dd>
                  </div>
                  <div>
                    <dt>Who</dt>
                    <dd>{region.audience}</dd>
                  </div>
                  <div>
                    <dt>Pitch</dt>
                    <dd>{region.pitch}</dd>
                  </div>
                  <div>
                    <dt>Machines</dt>
                    <dd>{region.machines}</dd>
                  </div>
                  <div>
                    <dt>Dedicated ad cost</dt>
                    <dd>
                      {nz(0)} in the plan to approve
                      <span>The 15-cell idea would have spent {nz(ORIGINAL_REGION)} here</span>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="who" className="mkt-section">
          <p className="mkt-index">03 · Audience</p>
          <h2>Write for these people. Target interests, not job titles.</h2>
          <div className="mkt-two">
            <article className="mkt-panel">
              <h3>Who the ad is for</h3>
              <p>Men and women about 28–65 who already own or run the machine that would feed a screener.</p>
              <ul>
                <li>Civil and earthmoving contractors</li>
                <li>Farm and station owners, and farm managers</li>
                <li>Landscapers and lifestyle-block operators</li>
                <li>Quarry and aggregate yards of modest scale</li>
                <li>Drainage specialists and hire-yard buyers</li>
              </ul>
              <p>
                The pain is practical: tip and cartage fees, buying in product they could have made,
                diesel plant that sits in the workshop, and sites too tight for a big screen.
              </p>
            </article>
            <article className="mkt-panel">
              <h3>What to enter in Meta</h3>
              <dl className="mkt-specs">
                <div>
                  <dt>Age</dt>
                  <dd>25–64. That is the closest bracket to the 28–65 buyer.</dd>
                </div>
                <div>
                  <dt>Gender</dt>
                  <dd>Leave open. The interests already skew to the trade. A male-only filter drops women who run yards and landscaping firms.</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>New Zealand. Read the five areas in the breakdown.</dd>
                </div>
                <div>
                  <dt>Ad set A</dt>
                  <dd>Civil engineering, excavators, earthmoving, heavy equipment, construction.</dd>
                </div>
                <div>
                  <dt>Ad set B</dt>
                  <dd>Farming, dairy, agriculture, lifestyle block, landscaping, horticulture.</dd>
                </div>
                <div>
                  <dt>Job titles</dt>
                  <dd>Use them in the copy. Meta’s job-title match in New Zealand is too thin to be the target.</dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section id="channels" className="mkt-section">
          <p className="mkt-index">04 · Channels</p>
          <h2>Two systems. Page placements only.</h2>
          <div className="mkt-channels">
            <article>
              <p className="mkt-panel-label">Demand</p>
              <h3>Meta · Facebook and Instagram</h3>
              <p>
                One campaign, two ad sets, three creatives in each. Placements: Facebook Feed,
                Facebook Reels, Instagram Feed, Instagram Reels.
              </p>
              <p>
                Facebook is where the older farm owner and the earthmoving director still scroll.
                Instagram Reels is where a 10–15 second clip of dirt actually sorting reaches a
                younger operator or a landscaper. Same budget. Split the report, not the invoice.
              </p>
              <p className="mkt-cost">{nz(META_DAILY)} a day · {nz(META_TOTAL)} firm</p>
            </article>
            <article>
              <p className="mkt-panel-label">Baseline funnel</p>
              <h3>Trade Me classifieds</h3>
              <p>
                People already looking for plant can still find a listing. That is the whole job of
                this channel in the test. Questions and phone calls join the inquiry sheet. They
                do not pick the demographic.
              </p>
              <p>
                Three plain classifieds. Category: Business, farming and industry. No bold title,
                no feature, no super feature. Relist on day 14 is free.
              </p>
              <p className="mkt-cost">{nz(TRADEME_BASELINE)} baseline · listing fees only</p>
            </article>
            <article className="mkt-channel-off">
              <p className="mkt-panel-label">Leave off</p>
              <h3>Messenger, WhatsApp, Audience Network</h3>
              <p>
                The brief is a Page, not a chat thread. Turn off Messenger, WhatsApp and Audience
                Network so the {nz(META_DAILY)} a day stays on the feeds and Reels where the footage
                can be seen.
              </p>
            </article>
          </div>
        </section>

        <section id="ads" className="mkt-section">
          <p className="mkt-index">05 · Creative</p>
          <h2>Three angles. Claims kept inside what the machines do.</h2>
          <div className="mkt-ads">
            <article className="mkt-ad">
              <p className="mkt-ad-index">Angle 1</p>
              <h3>Stop paying to dump dirt and buy in clean topsoil.</h3>
              <p className="mkt-ad-shot">Unscreened heap, then graded soil or aggregate on the same site.</p>
              <p>
                Copy stays on the job: screen it where it sits, and skip the tip trip and the buy-in.
              </p>
              <p className="mkt-hold">
                Hold any “under $X a tonne” or “pays for itself in 2–3 jobs” line until a real job is
                costed and signed. The formula is tonnes tipped × tip fee, plus tonnes not bought ×
                buy-in price, minus the time to screen.
              </p>
            </article>
            <article className="mkt-ad">
              <p className="mkt-ad-index">Angle 2</p>
              <h3>No engine. No belts. No oil.</h3>
              <p className="mkt-ad-shot">Static Grizzly under a digger bucket. Wide mesh, spring deck.</p>
              <p>
                This line is the Static Grizzly only. It has no electrics. The Proscreens are a
                second cut of the same idea: a small electric motor on mains or a generator, not a
                diesel plant.
              </p>
              <p className="mkt-hold">
                Do not run the “no engine” line over footage of a Proscreen. The 68 draws about 4–5
                amps.
              </p>
            </article>
            <article className="mkt-ad">
              <p className="mkt-ad-index">Angle 3</p>
              <h3>Big screening output. Small footprint.</h3>
              <p className="mkt-ad-shot">SLG-68V or SLG-78VF on a site, fed by a mini digger or skid steer.</p>
              <p>
                SLG-68V is about 8–15 m³/hour. SLG-78VF is about 11–23 m³/hour. Use the 108, at about
                23–46 m³/hour, only in the Canterbury and Waikato cut for larger carriers.
              </p>
              <p className="mkt-hold">
                Show the machine moved by the carrier. A ute-tow shot only goes in if that is how the
                unit in stock actually travels.
              </p>
            </article>
          </div>

          <div className="mkt-table-wrap">
            <table className="mkt-table">
              <caption>Output figures already published on the product pages.</caption>
              <thead>
                <tr>
                  <th>Machine</th>
                  <th>Published output</th>
                  <th>Use in this test</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SLG-68V</td>
                  <td>10–20 yards/hour (7.6–15.3 m³/hour)</td>
                  <td>Auckland, Northland, landscaping, tight sites</td>
                </tr>
                <tr>
                  <td>SLG-78VF</td>
                  <td>11–23 m³/hour</td>
                  <td>Waikato, Canterbury, Nelson civil and farm</td>
                </tr>
                <tr>
                  <td>SLG-108VFRB</td>
                  <td>30–60 yards/hour (23–46 m³/hour)</td>
                  <td>Larger carriers in Canterbury and Waikato</td>
                </tr>
                <tr>
                  <td>Static Grizzly 78 / 108</td>
                  <td>No power. 108 suits a loader up to about 12 tonne</td>
                  <td>Otago, Southland, farm races, oversize</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mkt-fine">
            Telehandler bins and dump trailers stay out of these three ads unless the container
            actually includes them. They are a different buyer.
          </p>
        </section>

        <section id="meta" className="mkt-section">
          <p className="mkt-index">06 · When the numbers arrive</p>
          <h2>Meta writes the next campaign. Inquiries write the container.</h2>
          <p>
            Every Monday export, and again on day 21, pull the same columns so the weeks can be
            compared. Use link clicks. “All clicks” counts people who opened a comment or a photo
            and never reached the site.
          </p>

          <ol className="mkt-flow">
            <li>
              <span>1</span>
              <h3>Export</h3>
              <p>Impressions, reach, frequency, link clicks, link CTR, link CPC, amount spent.</p>
            </li>
            <li>
              <span>2</span>
              <h3>Sample</h3>
              <p>An ad under 1,000 impressions is not ranked. An audience under 3,000 is not given more budget.</p>
            </li>
            <li>
              <span>3</span>
              <h3>Rank the ads</h3>
              <p>Keep 1.5% link CTR and above. Pause a clear loser. Hold the middle.</p>
            </li>
            <li>
              <span>4</span>
              <h3>Read the breakdowns</h3>
              <p>Age, region, placement, then gender. Gender is recorded. It does not become a filter.</p>
            </li>
            <li>
              <span>5</span>
              <h3>Recalibrate</h3>
              <p>Day 14 may shift budget or mark a band for the next flight. It does not invent a fourth ad.</p>
            </li>
            <li>
              <span>6</span>
              <h3>Decide stock</h3>
              <p>Day 21 uses qualified inquiries for the container, and this card for the next campaign.</p>
            </li>
          </ol>

          <div className="mkt-rules">
            <article>
              <h3>Impressions and frequency</h3>
              <p>
                Impressions say whether the ad was delivered. Frequency says whether the same people
                are seeing it again. If frequency is 2.5 or higher before day 10, the audience is
                too tight. Add one related interest. Do not raise the {nz(META_SET_DAILY)} daily cap
                to force delivery.
              </p>
              <p>
                If an ad set spends under about 70% of its daily budget for three days, the interest
                list is too narrow. Broaden it before judging the creative.
              </p>
            </article>
            <article>
              <h3>Clicks, CTR and CPC</h3>
              <p>
                Link CTR is clicks divided by impressions. At or above 1.5% after 1,000 impressions,
                the ad stays. Between 0.8% and 1.5%, it stays but does not lead. Under 0.8%, and
                another ad in the same set is at or above 1.5%, pause it.
              </p>
              <p>
                Link CPC is spend divided by link clicks. If an ad’s CPC is more than double another
                ad in the same set, and both have at least 30 link clicks, pause the expensive one
                even when its CTR looks acceptable.
              </p>
            </article>
            <article>
              <h3>Age, region, placement</h3>
              <p>
                Narrow age on the next flight only when one band has at least 40% of link clicks,
                its own CTR is at least 1.3× the campaign, and the band itself has 800 impressions.
                That check is day 14 at the earliest.
              </p>
              <p>
                An area leads the container mix and the next opening line once it has 150 link clicks
                or three qualified inquiries. It does not get a separate ad set during these 21 days.
                A placement comes off at day 14 only if its link CTR is under 0.4% after 1,500
                impressions. If Reels CTR is at least 1.5× Feed, the next edit opens in the first
                three seconds.
              </p>
            </article>
          </div>

          <h3 className="mkt-subhead">Columns to turn on in Ads Manager</h3>
          <ul className="mkt-chips">
            <li>Impressions</li>
            <li>Reach</li>
            <li>Frequency</li>
            <li>Link clicks</li>
            <li>CTR (link)</li>
            <li>CPC (link)</li>
            <li>Amount spent</li>
          </ul>
          <p className="mkt-fine">
            Run the breakdown four times on the same date range: by ad, by age, by region, by
            placement. Compare day 1–7 with day 1–14, not a fresh three-day slice with a fortnight.
            There is no Meta pixel on the site, so landing-page views will be thin. Link clicks plus
            the call sheet are the record.
          </p>

          <h3 className="mkt-subhead">Readout desk</h3>
          <p>
            Enter the export. The desk applies the rules for the checkpoint you select. It will not
            order a container. That decision stays with the inquiry count.
          </p>
          <MarketingReadout />
        </section>

        <section id="decision" className="mkt-section">
          <p className="mkt-index">07 · Decision</p>
          <h2>Order the container on conversations, not on clicks.</h2>
          <p>
            A qualified inquiry is a call, email, site form or Trade Me question where the person
            names a job or a machine. A like, a lone watchlist, or “price?” with no context is
            interest. Count it, and keep it out of the go number.
          </p>
          <div className="mkt-gates">
            <article className="mkt-gate mkt-gate-go">
              <h3>Order</h3>
              <p>All three are true on day 21.</p>
              <ul>
                <li>6 or more qualified inquiries</li>
                <li>They are not all from people who already know the business</li>
                <li>At least two share a region or a job type, so the container has a mix</li>
              </ul>
            </article>
            <article className="mkt-gate mkt-gate-hold">
              <h3>Hold the order</h3>
              <p>Run 14 more days on the winning ad only.</p>
              <ul>
                <li>Best ad at or above 1.5% click-through after 1,000 impressions</li>
                <li>Qualified inquiries still only 2 to 5</li>
                <li>Extra spend stays inside the same ceiling. No new regions</li>
              </ul>
            </article>
            <article className="mkt-gate mkt-gate-stop">
              <h3>Do not order</h3>
              <p>The test found attention too thin to justify stock.</p>
              <ul>
                <li>0 or 1 qualified inquiry after the full spend</li>
                <li>Or every ad under 0.8% click-through after 1,000 impressions</li>
                <li>Trade Me questions and watchlists are quiet as well</li>
              </ul>
            </article>
          </div>
          <p className="mkt-fine">
            These gates are the rule for this test. They are not a historical benchmark. Six
            qualified inquiries on the full {nz(APPROVAL)} is about {nz(Math.round(APPROVAL / 6))} a
            conversation. One real buyer asking to view a machine in Nelson outweighs a strong
            click-through rate.
          </p>
        </section>

        <section id="calendar" className="mkt-section">
          <p className="mkt-index">08 · Calendar</p>
          <h2>Day 0 through day 21</h2>
          <ol className="mkt-track" aria-hidden="true">
            {Array.from({ length: DAYS }, (_, index) => {
              const day = index + 1
              const mark = day === 7 || day === 14 || day === 21
              return (
                <li key={day} className={mark ? 'is-mark' : undefined}>
                  {mark ? day : ''}
                </li>
              )
            })}
          </ol>
          <div className="mkt-days">
            <article>
              <h3>Day 0</h3>
              <p>
                Cut three 10–15 second clips. Build the two Meta ad sets. Draft three Trade Me
                classifieds and screenshot the fee preview. Add UTMs. Open a call sheet.
              </p>
            </article>
            <article>
              <h3>Day 7</h3>
              <p>
                First export. Rank the three angles. Pause an ad only when it is a clear loser on
                1,000 impressions. Leave the {nz(META_SET_DAILY)} / {nz(META_SET_DAILY)} split, the
                age range and the regions alone. Note which placement is ahead.
              </p>
            </article>
            <article>
              <h3>Day 14</h3>
              <p>
                Second export. This is the recalibration. Shift budget only if one audience is well
                ahead after 3,000 impressions each, and keep at least {nz(10)} a day on the quieter
                one. Mark the leading age and area for the next flight. Relist the three Trade Me
                classifieds at no charge. Do not add a promo.
              </p>
            </article>
            <article>
              <h3>Day 21</h3>
              <p>
                Third export, plus the inquiry sheet. Apply order, hold, or stop from conversations.
                The Meta card — winning angle, audience, area, age, placement, CPC — is what the
                next campaign opens with, whether or not the container is ordered.
              </p>
            </article>
          </div>

          <h3 className="mkt-subhead">Tracking that exists today</h3>
          <p>
            The site has no Meta pixel. Do not wait on one for this window. The decision record is
            a sheet: date, source, region, machine, and whether the person named a job.
          </p>
          <ul className="mkt-list">
            <li>Civil ads land on /for/civil-contractors</li>
            <li>Farm and station ads land on /for/farmers</li>
            <li>Compact urban ads land on /products/slg-68v</li>
            <li>Grizzly ads land on /products/static-grizzly</li>
            <li>
              Every URL carries utm_source, utm_medium=paid, utm_campaign=container-test and
              utm_content for the angle
            </li>
          </ul>
        </section>

        <section id="ask" className="mkt-section">
          <p className="mkt-index">09 · The ask</p>
          <h2>What management is approving</h2>
          <div className="mkt-close">
            <article>
              <p className="mkt-panel-label">Spend</p>
              <h3>{nz(APPROVAL)}</h3>
              <p>
                {nz(META_TOTAL)} learns who responds. {nz(TRADEME_BASELINE)} keeps a listing in front
                of people already shopping. No Trade Me promotional extras in this window.
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Returns</p>
              <h3>Two answers</h3>
              <p>
                A container decision from qualified inquiries, and a recalibration card from Meta:
                angle, audience, area, age, placement, and what a click cost.
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Rule</p>
              <h3>No fourth strategy</h3>
              <p>
                Recalibration means pause, shift, or mark a band for the next flight. A weak week
                does not get a new audience invented on day 10.
              </p>
            </article>
          </div>
        </section>

        <footer className="mkt-sources">
          <h2>Sources</h2>
          <ul>
            <li>
              Population and the cited growth rates: Stats NZ, Subnational population estimates at
              30 June 2024 (provisional, 2018-base).
            </li>
            <li>
              Trade Me listing fees: Trade Me Help, Motors fees, “All other vehicles” classified
              table. Heavy machinery mapping: Trade Me Help, Marketplace fees.
            </li>
            <li>
              Machine output: the SLG-68V, SLG-78VF, SLG-108VFRB and Static Grizzly pages on this
              site.
            </li>
          </ul>
          <p>
            <Link to="/">Public site</Link>
            <Link to="/idm/commercials">Commercials workspace</Link>
          </p>
        </footer>
      </main>
    </div>
  )
}
