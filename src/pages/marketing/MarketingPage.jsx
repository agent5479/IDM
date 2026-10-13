import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import MarketingReadout from './MarketingReadout'
import ContainerBar from './ContainerBar'

const DAYS = 21
const WEEK = 7
const META_DAILY = 36
const META_TOTAL = META_DAILY * DAYS
const NATION_WEEK = META_DAILY * WEEK
const NATION_FOLLOW = META_DAILY * (DAYS - WEEK)
const TRADEME_LISTING = 99
const TRADEME_COUNT = 3
const TRADEME_BASELINE = TRADEME_LISTING * TRADEME_COUNT
const APPROVAL = META_TOTAL + TRADEME_BASELINE
const ORIGINAL_DAILY = 45
const ORIGINAL_TOTAL = ORIGINAL_DAILY * DAYS
const AREA_APPROVAL = ORIGINAL_TOTAL + TRADEME_BASELINE
const CELL_TOTAL = 3 * DAYS
const LEARN_DAILY = META_DAILY * 5
const LEARN_TOTAL = LEARN_DAILY * DAYS

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

function More({ label, children }) {
  return (
    <details className="mkt-more">
      <summary>{label}</summary>
      <div className="mkt-more-body">{children}</div>
    </details>
  )
}

function setAllPanels(open) {
  document.querySelectorAll('.mkt details.mkt-more').forEach((panel) => {
    panel.open = open
  })
}

const SOURCE_FILMS = [
  {
    code: 'DbkToXKs-Et',
    title: 'Mule bin',
    note: 'The most-watched reel on the account. Cut it for a container item, and only where the site already says next shipment.',
  },
  {
    code: 'DbkQnNzsOP3',
    title: 'SLG-78 grizzly',
    note: 'The grizzly under a load. This is the “no engine” film. Keep that line on the grizzly.',
  },
  {
    code: 'DbelrH5MsX4',
    title: 'A skip through the 78 grizzly',
    note: 'A full skip going through the machine. His caption times the job. That timing stays out of the New Zealand ad.',
  },
  {
    code: 'DS1PjVPjFJI',
    title: 'A buyer beside an SLG-78',
    note: 'A person in frame, so the size is obvious. He quotes an Australian price on camera. That price comes out of the edit.',
  },
]

export default function MarketingPage() {
  const [allOpen, setAllOpen] = useState(false)

  useEffect(() => {
    const openForPrint = () => setAllPanels(true)
    window.addEventListener('beforeprint', openForPrint)
    return () => window.removeEventListener('beforeprint', openForPrint)
  }, [])

  function toggleAll() {
    const panels = [...document.querySelectorAll('.mkt details.mkt-more')]
    const next = !panels.every((panel) => panel.open)
    setAllPanels(next)
    setAllOpen(next)
  }

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
          Management chooses the path before any money is spent. Either run one national campaign
          for the first week and then follow the areas that responded, or skip that week and open
          regional campaigns on day one. Deposits, quotes and calls are what can justify the container.
        </p>

        <div className="mkt-hero">
          <div>
            <h1>Three weeks to test demand before a container order</h1>
            <p className="mkt-lede">
              Site Machinery will show DeSite screeners to New Zealand operators, then decide
              whether the interest is strong enough to place another stock order. The three weeks
              gather that evidence. They do not, by themselves, put a container on the water.
            </p>
          </div>
          <dl className="mkt-kpis">
            <div>
              <dt>Window</dt>
              <dd>{DAYS} days</dd>
            </div>
            <div>
              <dt>Advertisements</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>National week, then follow</dt>
              <dd>{nz(APPROVAL)}</dd>
            </div>
            <div>
              <dt>Regions from day one</dt>
              <dd>{nz(AREA_APPROVAL)}</dd>
            </div>
          </dl>
        </div>

        <nav className="mkt-jump" aria-label="Brief sections">
          <a href="#part-decide"><span>01</span>Decide</a>
          <a href="#part-weeks"><span>02</span>The weeks</a>
          <a href="#part-setup"><span>03</span>Set up</a>
          <a href="#part-judge"><span>04</span>Judge</a>
          <button type="button" className="mkt-toggle-all" onClick={toggleAll}>
            {allOpen ? 'Close all detail' : 'Open all detail'}
          </button>
        </nav>

        <div className="mkt-part" id="part-decide">
          <span>01</span>
          <div>
            <strong>Decide</strong>
            <p>Sign one path before any money is spent.</p>
          </div>
        </div>

        <section id="paths" className="mkt-section">
          <p className="mkt-index">Executive decision</p>
          <h2>Two paths. One of them has to be chosen before launch.</h2>
          <p>
            The three advertisements are the same on both paths. What changes is whether the first
            week is allowed to draw the map, or the five areas below are the map from the first
            day. Staff can prepare either. Only management can sign it.
          </p>
          <div className="mkt-split">
            <article className="mkt-panel mkt-choice">
              <p className="mkt-panel-label">Path 1 · National first week</p>
              <h3>Then follow the response</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>Days 1–7 · all of New Zealand · {nz(META_DAILY)}/day</span>
                  <strong>{nz(NATION_WEEK)}</strong>
                </li>
                <li>
                  <span>Days 8–21 · same daily rate, only where people responded</span>
                  <strong>{nz(NATION_FOLLOW)}</strong>
                </li>
              </ul>
              <p className="mkt-gist">The map is a result. Week one finds where interest is, including places outside the five areas.</p>
              <More label="What it is for, and what it gives up">
                <h4 className="mkt-for">What this path is for</h4>
                <ul>
                  <li>Week one is one campaign. Day 7 reads where the clicks and calls came from, including places outside the five areas.</li>
                  <li>From day 8 the {nz(META_DAILY)} a day moves into separate campaigns for the areas that responded. A silent area comes off. A place that showed up, and was not on the original five, can be added.</li>
                  <li>Facebook and Instagram stay {nz(META_TOTAL)} if the daily rate stays {nz(META_DAILY)}. With Trade Me the ceiling is {nz(APPROVAL)}.</li>
                </ul>
                <h4 className="mkt-against">What you give up</h4>
                <ul>
                  <li>Auckland and Northland hold about half the people in the five areas, so most of week one will land there. Nelson and the south can look quiet because they were rarely shown the ad.</li>
                  <li>The regional campaigns start on day 8, so they have 14 days to gather a readable sample, not 21.</li>
                </ul>
              </More>
            </article>
            <article className="mkt-panel mkt-choice">
              <p className="mkt-panel-label">Path 2 · Regions from day one</p>
              <h3>Adapt inside that map</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>Five campaigns from day 1 · {nz(3)} per ad · {nz(ORIGINAL_DAILY)}/day × {DAYS}</span>
                  <strong>{nz(ORIGINAL_TOTAL)}</strong>
                </li>
                <li>
                  <span>Trade Me on either path</span>
                  <strong>{nz(TRADEME_BASELINE)}</strong>
                </li>
              </ul>
              <p className="mkt-gist">The map is the bet. All {DAYS} days go into the five markets, Nelson included.</p>
              <More label="What it is for, and what it gives up">
                <h4 className="mkt-for">What this path is for</h4>
                <ul>
                  <li>Skip the national week. Waikato, Canterbury, Auckland, Otago and Nelson are shown the machines for all {DAYS} days, and the ad can match the machine that area needs.</li>
                  <li>Day 4 and day 10 move money toward the areas and the ads that produce enquiries. Adapting means shifting the budget, not discovering a new map.</li>
                  <li>With Trade Me the drafted total is {nz(AREA_APPROVAL)}.</li>
                </ul>
                <h4 className="mkt-against">What you give up</h4>
                <ul>
                  <li>Hawke’s Bay, Wellington, Taranaki and the rest never see the ads, so a strong pocket outside the five stays invisible.</li>
                  <li>At {nz(CELL_TOTAL)} per ad per area, day 4 often arrives before 1,000 people have seen the ad. Judging each area properly, at {nz(META_DAILY)} a day in each, is {nz(LEARN_TOTAL)} on Facebook and Instagram.</li>
                </ul>
              </More>
            </article>
          </div>
          <div className="mkt-callout">
            <h3>Why this cannot be left to the ads</h3>
            <p>
              Choose the national week if the map should be a result, including places that were
              not pre-selected. Choose the regions from day one if those five markets are already
              the commercial bet, Nelson included, and the three weeks should be spent there
              rather than on learning a map you already intend to use. That is a judgment about
              the business. The click report cannot make it.
            </p>
          </div>
        </section>

        <div className="mkt-part" id="part-weeks">
          <span>02</span>
          <div>
            <strong>The three weeks</strong>
            <p>Show the machines, count real interest, then decide the container.</p>
          </div>
        </div>

        <section id="strategy" className="mkt-section">
          <p className="mkt-index">The test</p>
          <h2>What the three weeks are for</h2>
          <ol className="mkt-flow mkt-spine">
            <li>
              <span>1</span>
              <h3>Show the machines</h3>
              <p>Three ads on Facebook and Instagram, a Trade Me listing for each core model, and calls to 20–30 yards and contractors.</p>
            </li>
            <li>
              <span>2</span>
              <h3>Count real interest</h3>
              <p>A deposit, a quote, or a call that names a machine, a material and a date. A click only says the ad was opened.</p>
            </li>
            <li>
              <span>3</span>
              <h3>Adjust twice</h3>
              <p>On day 4, pause a weak ad. On the national path, day 7 is when the live areas are chosen. Day 10 adapts inside whichever campaigns are then running.</p>
            </li>
            <li>
              <span>4</span>
              <h3>Decide the container</h3>
              <p>On day 21, order only if enquiries reach the break-even line and point to a clear mix of machines.</p>
            </li>
          </ol>
        </section>

        <div className="mkt-part" id="part-setup">
          <span>03</span>
          <div>
            <strong>Set up the test</strong>
            <p>Cost, the five markets, the people, the channels, the source films, and the three ads.</p>
          </div>
        </div>

        <section id="money" className="mkt-section">
          <p className="mkt-index">01 · Money</p>
          <h2>What the chosen path costs</h2>
          <p>
            These are the same two paths as the decision above, in dollars. Facebook and Instagram
            carry the advertisements. Trade Me is {nz(TRADEME_BASELINE)} on both, for people already
            looking for a machine. A larger regional budget is a separate approval, not a silent upgrade.
          </p>

          <div className="mkt-split">
            <article className="mkt-panel mkt-choice">
              <p className="mkt-panel-label">Path 1 · if the daily rate stays {nz(META_DAILY)}</p>
              <h3>{nz(APPROVAL)}</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>Days 1–7 · national · {nz(META_DAILY)} × {WEEK}</span>
                  <strong>{nz(NATION_WEEK)}</strong>
                </li>
                <li>
                  <span>Days 8–21 · follow the response · {nz(META_DAILY)} × {DAYS - WEEK}</span>
                  <strong>{nz(NATION_FOLLOW)}</strong>
                </li>
                <li>
                  <span>Trade Me · {TRADEME_COUNT} × {nz(TRADEME_LISTING)}</span>
                  <strong>{nz(TRADEME_BASELINE)}</strong>
                </li>
              </ul>
              <p className="mkt-fine">
                The second fortnight uses the same {nz(META_DAILY)} a day, split only across the
                areas that responded. It does not become {nz(META_DAILY)} a day in every area.
              </p>
            </article>

            <article className="mkt-panel mkt-choice">
              <p className="mkt-panel-label">Path 2 · drafted regional start</p>
              <h3>{nz(AREA_APPROVAL)}</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>Five areas from day 1 · {nz(ORIGINAL_DAILY)}/day × {DAYS}</span>
                  <strong>{nz(ORIGINAL_TOTAL)}</strong>
                </li>
                <li>
                  <span>Trade Me · same three classifieds</span>
                  <strong>{nz(TRADEME_BASELINE)}</strong>
                </li>
              </ul>
              <p className="mkt-fine">
                Each ad in each area is {nz(CELL_TOTAL)}. To give every area the national daily
                rate for all {DAYS} days is {nz(LEARN_DAILY)} a day, {nz(LEARN_TOTAL)} on Facebook
                and Instagram, plus the same Trade Me. That larger figure needs its own signature.
              </p>
            </article>
          </div>

          <div className="mkt-bars" aria-label="Spend comparison">
            <div>
              <div className="mkt-bar-label">
                <span>Path 1 · national week, then follow</span>
                <strong>{nz(META_TOTAL)}</strong>
              </div>
              <div className="mkt-bar">
                <span style={{ width: `${(META_TOTAL / ORIGINAL_TOTAL) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mkt-bar-label">
                <span>Trade Me, either option</span>
                <strong>{nz(TRADEME_BASELINE)}</strong>
              </div>
              <div className="mkt-bar mkt-bar-teal">
                <span style={{ width: `${(TRADEME_BASELINE / ORIGINAL_TOTAL) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mkt-bar-label">
                <span>Path 2 · regions from day one</span>
                <strong>{nz(ORIGINAL_TOTAL)}</strong>
              </div>
              <div className="mkt-bar mkt-bar-mute">
                <span style={{ width: '100%' }} />
              </div>
            </div>
          </div>

          <More label={`Trade Me: ${nz(TRADEME_BASELINE)} of listings, fee bands, and the price test`}>
          <p>
            List three machines as ordinary classifieds. Skip bold titles, features and other
            extras. A classified has no success fee. Each listing runs 14 days, and renewing it on
            day 14 is free, so the three weeks pay the listing fee once. Plan on an asking price of
            $10,000–$24,999, which is a {nz(TRADEME_LISTING)} fee per machine.
          </p>
          <div className="mkt-table-wrap">
            <table className="mkt-table">
              <caption>
                Plain classified fee, Trade Me Motors “all other vehicles”. Use the highlighted
                row unless the asking price falls in a higher band. Leave promotional extras off.
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
                  <td>Use this</td>
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
            One listing can show a from-price, ex GST and ex freight. Another can say “contact for
            price”. A shown price usually brings fewer enquiries, and tighter ones. The price has
            to be a figure management signs. Watchlists and questions are recorded per listing.
            They help the container decision. They do not choose the age group or the region — that
            comes from the Facebook and Instagram report. Any extra container item beyond the three
            core models adds another fee from the same table, still with no extras.
          </p>
          </More>

          <More label="What the advertising spend can, and cannot, tell us">
            <p>
              If a click costs about {nz(2)}, the national campaign’s {nz(META_TOTAL)} brings on the
              order of 380 visits, and the five-area {nz(ORIGINAL_TOTAL)} brings on the order of
              470, split across the five areas. That is an illustration, not a quote. It is enough
              to see which advertisement people stop for. It is not a forecast of how many
              screeners a container will sell. Buyers of this plant often take months, so three
              weeks will miss some of them. That is why deposits, quotes and the phone round sit
              beside the clicks.
            </p>
          </More>
        </section>

        <section id="where" className="mkt-section">
          <p className="mkt-index">02 · Geography</p>
          <h2>Five markets the container has to serve</h2>
          <p>
            These are the places a response would change what goes in the container. On the
            national path they are how week one is read, plus everywhere else, and from day 8 only
            the areas that responded keep a campaign. On the regional path they are five campaigns
            from day one, and Hawke’s Bay, Wellington, Taranaki and the rest never see a paid ad.
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
                five areas. The length of each bar is population, not the number of likely buyers.
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
                Auckland and Northland are the longest bar. On the national first week, more of
                the ads will show here because more people live here. On the regional path, this
                area spends only its own share.
              </p>
            </div>
          </div>

          <More label="Area by area: who works there, the pitch, and the machine">
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
                </dl>
              </article>
            ))}
          </div>
          </More>
        </section>

        <section id="who" className="mkt-section">
          <p className="mkt-index">03 · Audience</p>
          <h2>The people who would buy a screener</h2>
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
              <p className="mkt-gist">Age 25–64, gender open, trade interests, and the location the signed path sets.</p>
              <More label="Full Meta settings">
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
                  <dd>All of New Zealand for week one, then the areas that responded. Or the five areas above from day one.</dd>
                </div>
                <div>
                  <dt>Interests</dt>
                  <dd>
                    Heavy equipment, skid steer, excavator, farming. Leave out “Civil Engineering”.
                    That interest pulls in engineers and students, not the person on the machine.
                  </dd>
                </div>
                <div>
                  <dt>Structure</dt>
                  <dd>
                    The path is the executive decision at the top of this brief. Path 1 is one
                    campaign at {nz(META_DAILY)} a day for seven days, then separate campaigns only
                    where people responded. Path 2 is five area campaigns from day one. Use the
                    same interest list on either path.
                  </dd>
                </div>
                <div>
                  <dt>Job titles</dt>
                  <dd>Use them in the copy. Meta’s job-title match in New Zealand is too thin to be the target.</dd>
                </div>
              </dl>
              </More>
            </article>
          </div>
        </section>

        <section id="channels" className="mkt-section">
          <p className="mkt-index">04 · Channels</p>
          <h2>Facebook, Instagram, and Trade Me</h2>
          <div className="mkt-channels">
            <article>
              <p className="mkt-panel-label">Find new buyers</p>
              <h3>Facebook page, and an Instagram still to create</h3>
              <p>
                The Facebook page is already live at{' '}
                <a href="https://www.facebook.com/sitemachinery">facebook.com/sitemachinery</a>.
                There is no Site Machinery Instagram. Create one and connect it to that page before
                any Instagram placement spends. Until then, the edited films can still run on the
                Facebook page.
              </p>
              <More label="Placements and why both apps">
              <p>
                Three advertisements. Path 1 runs them nationally for the first week, then in the
                areas that responded. Path 2 runs them in the five areas from day one. Show them in
                Facebook Feed, Facebook Reels, and, once the account exists, Instagram Feed, Reels
                and Stories. Facebook is where the farm owner and the earthmoving director still
                scroll. Instagram, once it exists, is where a vertical clip of dirt sorting reaches
                a younger operator or a landscaper. Same budget. The placement report says which
                one earned the click.
              </p>
              </More>
              <p className="mkt-cost">
                Path 1 {nz(META_DAILY)} a day · Path 2 {nz(ORIGINAL_DAILY)} a day drafted
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Catch existing shoppers</p>
              <h3>Trade Me classifieds</h3>
              <p>
                Someone already searching for plant can still find a listing. Questions and phone
                calls from those listings join the enquiry count. They are evidence for the
                container. They are not how we learn which age group responded.
              </p>
              <More label="How to list">
              <p>
                One plain classified per model, or per container item. No bold title, no feature,
                no super feature. Read views, watchlist adds and questions on each listing.
                Watchlist adds and questions are close to a stated intention to buy. Views are not.
              </p>
              <p>
                List in farming, construction, or industrial machinery. Check the live category
                tree and the fee preview before you publish — the bands below are the current
                Motors “all other vehicles” classified fees. Relist on day 14 is free. On container
                items the site already describes that way, the listing says “next container,
                reserve now”.
              </p>
              </More>
              <p className="mkt-cost">{nz(TRADEME_BASELINE)} for three core models · listing fees only</p>
            </article>
            <article className="mkt-channel-off">
              <p className="mkt-panel-label">Leave off</p>
              <h3>Messenger, WhatsApp, Audience Network</h3>
              <p>
                The brief is the Facebook Page and Instagram, not a chat thread. Leave Messenger,
                WhatsApp and Audience Network off so the budget stays where the footage can be seen.
              </p>
            </article>
          </div>
        </section>

        <section id="films" className="mkt-section">
          <p className="mkt-index">05 · Source films</p>
          <h2>Rob’s Proscreen Australia reels, recut for New Zealand</h2>
          <p>
            Rob, who runs{' '}
            <a href="https://proscreenaustralia.com.au">proscreenaustralia.com.au</a>, has given
            permission to use the videos he makes and posts on{' '}
            <a href="https://www.instagram.com/proscreen_australia/">@proscreen_australia</a>.
            His profile already groups them as SLG 68, SLG 78, SLG 108, the grizzly, and the mule
            bin. The four below are the ones to start from. Edit them so a New Zealand operator
            hears a New Zealand offer: local captions, the Nelson phone number, and none of the
            Australian prices or “in stock now” lines.
          </p>
          <div className="mkt-films">
            {SOURCE_FILMS.map((film) => (
              <figure key={film.code}>
                <iframe
                  title={film.title}
                  src={`https://www.instagram.com/reel/${film.code}/embed`}
                  loading="lazy"
                  allow="encrypted-media; clipboard-write"
                />
                <figcaption>
                  <strong>{film.title}</strong>
                  <span>{film.note}</span>
                  <a href={`https://www.instagram.com/proscreen_australia/reel/${film.code}/`}>
                    Open the reel
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="ads" className="mkt-section">
          <p className="mkt-index">06 · Creative</p>
          <h2>Three advertisements, made before the map is chosen</h2>
          <div className="mkt-callout">
            <h3>Same three films on either spend</h3>
            <p>
              Both paths use the same films, the same landing pages and the same links. The executive
              choice is which campaign structure those films go into. It is made before launch.
            </p>
            <ol>
              <li>Cost-saving. Tip fees and trucking, then the calculator. Land on /#equipment. utm_content=cost.</li>
              <li>Demo. 15–20 seconds of the machine running, with a carrier loading it. Land on /for/farmers. utm_content=demo.</li>
              <li>Reserve. Next shipment, only for items the site already puts on the next container. Land on /products/additional-products. utm_content=reserve.</li>
            </ol>
          </div>
          <div className="mkt-ads">
            <article className="mkt-ad">
              <p className="mkt-ad-index">Cost-saving · civil and landscaping</p>
              <h3>Stop paying the tip and the truck.</h3>
              <p className="mkt-ad-shot">Spoil on site, then screened product. Land on the homepage calculator.</p>
              <More label="Copy and limits">
              <p>
                Lead with tip fees and trucking. The only dollar-per-cubic-metre figure on the site
                is the profit calculator: saleable product at NZ$20–$45/m³, opening at NZ$32, with
                about half the screened volume treated as saleable. Say that, and point at the
                calculator. Do not turn it into “you save $32 a cubic metre”.
              </p>
              <p className="mkt-hold">
                Do not say the machine pays for itself in two or three jobs. The site does not show
                that, and a savings claim you cannot substantiate is a Fair Trading Act problem.
              </p>
              </More>
            </article>
            <article className="mkt-ad">
              <p className="mkt-ad-index">Demo · farmers</p>
              <h3>Watch it run.</h3>
              <p className="mkt-ad-shot">15–20 seconds. Machine running, carrier loading it. Land on the farmers page.</p>
              <More label="Copy and limits">
              <p>
                Cut 15–20 seconds from Rob’s Proscreen Australia reels, then caption them for New
                Zealand. Vertical 9:16, hook in the first two seconds, a bucket or a person in
                frame for scale. The skip-through-the-grizzly reel and the buyer-beside-the-78
                reel are the starting points for this ad.
              </p>
              <p className="mkt-hold">
                The 68V is bucket-fed. Do not show it towed behind a ute. The “no engine” line stays
                on the grizzly, not on a Proscreen.
              </p>
              </More>
            </article>
            <article className="mkt-ad">
              <p className="mkt-ad-index">Reserve · container items</p>
              <h3>Next shipment. Reserve one.</h3>
              <p className="mkt-ad-shot">The machine, the arrival, and a way to reserve. Land on the next-container page.</p>
              <More label="Copy and limits">
              <p>
                Use this only for items the site already puts on the next container. The additional
                range says that today. The homepage machines are the in-stock range, so do not tell
                someone a yard-ready 78 is “on the next ship”. A reservation is the strongest
                demand signal in the test. Judge this ad on reserves, not on click-through alone.
              </p>
              <p className="mkt-hold">
                Rates in any of the three ads: 68V 15–20, 78 15–25, 108 25–40 m³/hour. High output
                is the 108 only.
              </p>
              </More>
            </article>
          </div>

          <More label="Rates to claim, footage rules, and what not to show">
          <div className="mkt-table-wrap">
            <table className="mkt-table">
              <caption>Rates to use in the ads. Cubic metres per hour, by model.</caption>
              <thead>
                <tr>
                  <th>Machine</th>
                  <th>Rate to claim</th>
                  <th>Use in this test</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SLG-68V</td>
                  <td>15–20 m³/hour</td>
                  <td>Bucket-fed. Tight sites, landscaping, Auckland and Northland</td>
                </tr>
                <tr>
                  <td>SLG-78VF</td>
                  <td>15–25 m³/hour</td>
                  <td>Mid-size civil and farm</td>
                </tr>
                <tr>
                  <td>SLG-108VFRB</td>
                  <td>25–40 m³/hour</td>
                  <td>The only high-output line. Larger carriers</td>
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
            The homepage production cards already say 15–20, 15–25 and 25–40 m³/hour. The
            individual product spec blocks still mix in a yards conversion. Align those blocks
            before the ads run. Telehandler bins and dump trailers stay out of the cost and demo
            ads unless they are container items with the reserve line.
          </p>
          <div className="mkt-rules">
            <article>
              <h3>Footage</h3>
              <p>Start from Rob’s reels. Take out Australian prices, Australian stock lines, and any place name that is not in New Zealand. A bucket or a person stays in frame for scale.</p>
            </article>
            <article>
              <h3>Shape</h3>
              <p>Vertical 9:16 for Reels and Stories. Captions on. The hook is in the first two seconds, before the sound matters.</p>
            </article>
            <article>
              <h3>What not to show</h3>
              <p>The 68V is not a ute-tow shot. The “no engine” line is the grizzly, not a Proscreen. High output is the 108 only.</p>
            </article>
          </div>
          </More>
        </section>

        <div className="mkt-part" id="part-judge">
          <span>04</span>
          <div>
            <strong>Judge the container</strong>
            <p>Read the weeks, count the enquiries, and order only if the bar is met.</p>
          </div>
        </div>

        <section id="meta" className="mkt-section">
          <p className="mkt-index">07 · When the numbers arrive</p>
          <h2>Day 4 tunes the ads. Day 7 sets the map. Day 21 decides the container.</h2>
          <p>
            Pull the same report on day 4, day 7, day 10 and day 21. Count link clicks: people who
            reached the site. Ignore “all clicks”, which includes people who only opened a comment
            or a photo. Aim the campaign at landing-page views, or at a phone click and a form
            submit. Likes and comments are not the goal.
          </p>

          <ol className="mkt-flow">
            <li>
              <span>1</span>
              <h3>Pull the report</h3>
              <p>Views, people reached, repeat views, link clicks, click rate, cost per click, amount spent.</p>
            </li>
            <li>
              <span>2</span>
              <h3>Wait for a real sample</h3>
              <p>Leave an ad unscored until 1,000 people have seen it. On the five-area option, some areas may still be short of that on day 21.</p>
            </li>
            <li>
              <span>3</span>
              <h3>Rank the ads</h3>
              <p>Keep an ad at 1.5% link click-through or better. Pause a clear loser. Leave the middle running.</p>
            </li>
            <li>
              <span>4</span>
              <h3>Note who responded</h3>
              <p>Age, region, and whether Feed or Reels earned the click. Record gender. Leave the audience open to women and men.</p>
            </li>
            <li>
              <span>5</span>
              <h3>Move the budget</h3>
              <p>On day 4 and day 10, pause a clear loser and leave the money on the ads people open. A reservation keeps the reserve ad. On the national path, day 7 is the handoff to the areas that responded. On the regional path, the five campaigns stay the map.</p>
            </li>
            <li>
              <span>6</span>
              <h3>Decide stock</h3>
              <p>Weigh deposits, then quotes and calls, then Trade Me questions. The click report shows which ad worked. The enquiry count decides the container.</p>
            </li>
          </ol>

          <More label="The thresholds: frequency, click-through, cost per click, age and area">
          <div className="mkt-rules">
            <article>
              <h3>Impressions and frequency</h3>
              <p>
                Views say whether the ad was shown. Frequency says whether the same people are seeing
                it again. If frequency is 2.5 or higher before day 10, the audience is too small.
                Add one related interest — skid steer, excavator, heavy equipment or farming. Keep
                the daily budget where it was set.
              </p>
              <p>
                If a campaign spends under about 70% of its daily budget for three days, the interest
                list is too narrow. Broaden it before judging the advertisement.
              </p>
            </article>
            <article>
              <h3>Clicks, CTR and CPC</h3>
              <p>
                Link click-through is clicks divided by views. At or above 1.5% after 1,000 views,
                the ad stays. Between 0.8% and 1.5%, it stays and does not lead. Under 0.8%, while
                another ad in the same campaign is at or above 1.5%, pause it.
              </p>
              <p>
                Cost per link click is spend divided by link clicks. If one ad costs more than twice
                another, and both have at least 30 link clicks, pause the expensive one.
              </p>
            </article>
            <article>
              <h3>Age, region, placement</h3>
              <p>
                Narrow the age range on a later campaign only when one band has at least 40% of link
                clicks, its own click-through is at least 1.3× the campaign, and that band has 800
                views. Make that call on day 10 at the earliest.
              </p>
              <p>
                An area with 150 link clicks, or three qualified enquiries, leads the next sales
                line and the container mix. On the national path, day 7 is when that area either
                keeps a campaign or comes off. On the regional path, that area already has a
                campaign, so move the money toward the winning ad inside it. Drop a placement on
                day 14 only if its link click-through is under 0.4% after 1,500 views. If Reels
                perform at least 1.5× Feed, the next edit opens in the first three seconds.
              </p>
            </article>
          </div>
          </More>

          <More label="Ads Manager columns, and how to pull the report">
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
            Pull the report four ways on the same dates: by ad, by age, by region, and by Feed
            versus Reels. On the regional path, and after day 7 on the national path, do that
            inside each live area. Compare day 1–4 with day 1–7 and day 1–10, using the same start
            date. Install the Meta pixel before the first dollar so landing-page views, phone
            clicks and form submits are recorded. Until that pixel is live, link clicks plus the
            call sheet are the record.
          </p>
          </More>

          <More label="Readout desk: type the report in, get keep, hold or pause">
          <p>
            The desk applies the day-4, day-7, day-10 or day-21 rules. It shows which
            advertisement to keep. The container decision stays with the enquiry count.
          </p>
          <MarketingReadout />
          </More>
        </section>

        <section id="outside" className="mkt-section">
          <p className="mkt-index">08 · Outside the ads</p>
          <h2>Calls count toward the same decision</h2>
          <p>
            Three weeks of ads will miss buyers who take months to decide. Phone 20–30 hire yards,
            landscaping suppliers and earthmoving firms across the five areas and ask for a
            pre-order or a deposit. A deposit, with the machine they run named, is stronger
            evidence for a container than any click rate.
          </p>
          <More label="Who to call, what to ask, and free group posts">
          <div className="mkt-rules">
            <article>
              <h3>Who to call</h3>
              <p>Hire yards, landscaping suppliers, earthmoving firms. Spread the 20–30 calls across the five areas, including places outside Nelson.</p>
            </article>
            <article>
              <h3>What to ask</h3>
              <p>Carrier they run, material they need to screen, and whether they would take a machine on deposit if it landed in the new year.</p>
            </article>
            <article>
              <h3>Free posts</h3>
              <p>Facebook buy-and-sell and contractor groups are worth a post where the group rules allow a commercial listing. Same footage. Code word SM-GRP. No paid boost.</p>
            </article>
          </div>
          </More>
        </section>

        <section id="container" className="mkt-section">
          <p className="mkt-index">09 · The container</p>
          <h2>Interest has to land in time to be useful</h2>
          <p>
            It is spring, so demand should be building, and contractors wind down before Christmas.
            If this test starts now it ends in early November. An order placed then still has sea
            freight from China and MPI biosecurity clearance. Ask the supplier for the current
            transit time before anyone assumes the machines make the pre-Christmas season. The
            meeting question is whether stock landing in January or February is still a useful buy.
          </p>
          <More label="Box size, landed margin, and units that sit">
          <div className="mkt-rules">
            <article>
              <h3>Match the box to the enquiries</h3>
              <p>Ask about a part container or consolidated shipping. Weight the mix to the machines people actually named.</p>
            </article>
            <article>
              <h3>Landed margin</h3>
              <p>Check freight, GST and the exchange rate before the order. A from-price in the ads has to survive that sum, because it was quoted ex GST and ex freight.</p>
            </article>
            <article>
              <h3>If units sit</h3>
              <p>If machines are still unsold after they land, a Trade Me auction is how to clear them. The three-week test itself uses ordinary classifieds.</p>
            </article>
          </div>
          </More>
        </section>

        <section id="decision" className="mkt-section">
          <p className="mkt-index">10 · Decision</p>
          <h2>The bar for ordering the container</h2>
          <p>
            Set this before the first dollar is spent. Deposits and pre-orders count most, then
            quotes and calls, then Trade Me questions and watchlists. Clicks come last. A like is
            not on the list.
          </p>
          <ol className="mkt-weight">
            <li><strong>Deposits and pre-orders</strong><span>Can clear the bar on their own when the carrier and the date are named.</span></li>
            <li><strong>Quotes and calls</strong><span>A person who names a carrier, a material and a timeline.</span></li>
            <li><strong>Trade Me questions and watchlists</strong><span>Recorded per listing. Close to someone intending to buy.</span></li>
            <li><strong>Clicks</strong><span>Show which advertisement to keep running. They do not, on their own, justify the container.</span></li>
          </ol>
          <ContainerBar />
          <div className="mkt-gates">
            <article className="mkt-gate mkt-gate-go">
              <h3>Order</h3>
              <p>All three are true on day 21.</p>
              <ul>
                <li>Enquiries reach the break-even line above, on the weighted scale</li>
                <li>They are not all from people who already know the business</li>
                <li>The carriers they run agree on a mix, so the container is not a guess</li>
              </ul>
            </article>
            <article className="mkt-gate mkt-gate-hold">
              <h3>Hold the order</h3>
              <p>Run 14 more days on the winning ad only.</p>
              <ul>
                <li>Best ad at or above 1.5% click-through after 1,000 impressions</li>
                <li>Enquiries are real, and still short of the break-even line</li>
                <li>Further spend stays inside the option already chosen</li>
              </ul>
            </article>
            <article className="mkt-gate mkt-gate-stop">
              <h3>Stop</h3>
              <p>The three weeks did not find enough interest to justify stock.</p>
              <ul>
                <li>0 or 1 qualified inquiry after the full spend</li>
                <li>Or every ad under 0.8% click-through after 1,000 impressions</li>
                <li>Trade Me questions and watchlists are quiet as well</li>
              </ul>
            </article>
          </div>
          <p className="mkt-fine">
            Order, hold, or stop using this bar. It is the rule for these three weeks. The enquiry
            line is the number of machines the container must sell, divided by a 5–15% close rate.
            One buyer asking to view a machine in Nelson outweighs a strong click rate.
          </p>
        </section>

        <section id="calendar" className="mkt-section">
          <p className="mkt-index">11 · Calendar</p>
          <h2>How the three weeks run</h2>
          <ol className="mkt-track" aria-hidden="true">
            {Array.from({ length: DAYS }, (_, index) => {
              const day = index + 1
              const mark = day === 4 || day === 7 || day === 10 || day === 14 || day === 21
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
              <p className="mkt-gist">Sign the path, install tracking, cut the ads.</p>
              <More label="Detail">
              <p>
                Install the Meta pixel before any spend. Track clicks on 027 521 2126 and contact
                form submits. Create the Site Machinery Instagram and connect it to the Facebook
                page. Cut the three ads from Rob’s Proscreen Australia reels, each to its own
                landing page, with link tags. The executive path is already chosen. Draft one
                Trade Me listing per model. Agree the code words. Start the call list.
              </p>
              </More>
            </article>
            <article>
              <h3>Day 4</h3>
              <p className="mkt-gist">First report. Pause a clear loser.</p>
              <More label="Detail">
              <p>
                First look at the report. Pause an ad only when 1,000 people have seen it and it is
                clearly behind the others. On the national path, stay national until day 7. On the
                regional path, move that area’s money toward the ads people open. Keep the reserve
                ad if people have asked to reserve a machine.
              </p>
              </More>
            </article>
            <article>
              <h3>Day 7</h3>
              <p className="mkt-gist">Path 1 hands off to the areas that responded.</p>
              <More label="Detail">
              <p>
                On the national path, this is the handoff. Areas with clicks or enquiries become
                the campaigns for the next two weeks, and the {nz(META_DAILY)} a day moves onto
                them. A silent area comes off. On the regional path, day 7 is another look inside
                the five campaigns, not a new map.
              </p>
              </More>
            </article>
            <article>
              <h3>Day 10</h3>
              <p className="mkt-gist">Adapt inside the live campaigns.</p>
              <More label="Detail">
              <p>
                Adapt inside the campaigns that are now live. Pause whatever is still clearly last.
                Note the leading age and the areas still running. Those areas are the container mix
                to watch.
              </p>
              </More>
            </article>
            <article>
              <h3>Day 14</h3>
              <p className="mkt-gist">Renew Trade Me free. Compare listings.</p>
              <More label="Detail">
              <p>
                Renew the Trade Me classifieds at no charge. Compare watchlists and questions on
                each listing, and the priced listing with the unpriced one. Leave promotional
                extras off.
              </p>
              </More>
            </article>
            <article>
              <h3>Day 21</h3>
              <p className="mkt-gist">Apply the bar. Order, hold, or stop.</p>
              <More label="Detail">
              <p>
                Apply the bar above. The machines people named are the container mix. The report —
                winning ad, area, age, Feed or Reels, and cost per click — is what a follow-up
                campaign would open with.
              </p>
              </More>
            </article>
          </div>

          <More label="Set this up before the first dollar: pixel, phone, landing pages, code words">
          <p>
            The site has no Meta pixel today. Install it, and the two events below, before any ad
            spends. Also keep an email where someone will leave one. The pixel records interest. The
            container decision still uses deposits, quotes and calls, because buying a screener
            often takes longer than three weeks.
          </p>
          <p>
            Someone answers 027 521 2126 the same day, and asks where the caller heard of you. A
            missed call from a tradie is usually a lost lead. Every enquiry is also asked what
            carrier they run, what they are screening, and when they need the machine.
          </p>
          <ul className="mkt-list">
            <li>Events: clicks on 027 521 2126, and contact-form submits</li>
            <li>Cost-saving ads land on /#equipment, where the calculator shows NZ$20–$45/m³</li>
            <li>Demo ads land on /for/farmers</li>
            <li>Reserve ads land on /products/additional-products, the page that already says next container</li>
            <li>Meta ads say “mention SM-FB” and use utm_source=meta plus utm_content for the ad</li>
            <li>Trade Me says “mention SM-TM”. The phone round is SM-PH. Group posts, where the rules allow, are SM-GRP</li>
          </ul>
          </More>
        </section>

        <section id="ask" className="mkt-section">
          <p className="mkt-index">12 · The ask</p>
          <h2>What needs a decision</h2>
          <div className="mkt-close">
            <article>
              <p className="mkt-panel-label">Decision</p>
              <h3>Sign one path</h3>
              <p>
                Path 1, a national week then follow the response, is {nz(APPROVAL)} if the daily
                rate stays {nz(META_DAILY)}. Path 2, regions from day one at the drafted rate, is{' '}
                {nz(AREA_APPROVAL)}. Judging every area at the national daily rate is {nz(LEARN_TOTAL)}{' '}
                on Facebook and Instagram, plus the same {nz(TRADEME_BASELINE)} on Trade Me, and
                that larger number needs its own signature.
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Returns</p>
              <h3>A yes, a wait, or a no</h3>
              <p>
                On day 21 the enquiry count either justifies a container, says wait another two
                weeks, or says leave the order. Alongside that: which ad worked, which area and age
                responded, and which machines people asked for. The phone round can justify the
                container even when the ads are still quiet.
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Rule</p>
              <h3>Stay on the signed path</h3>
              <p>
                Day 4 pauses a weak ad. Day 7, on the national path only, is the planned handoff to
                the areas that responded. Day 10 adapts inside the campaigns that are live. None of
                those days is a moment to invent a third path. The films are already made.
              </p>
            </article>
          </div>
        </section>

        <footer className="mkt-sources">
          <More label="Sources">
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
              Machine output: the homepage production cards. The dollar-per-cubic-metre figure is
              the homepage profit calculator (saleable price NZ$20–$45/m³, opening at NZ$32).
            </li>
          </ul>
          </More>
          <p>
            <Link to="/">Public site</Link>
            <Link to="/idm/commercials">Commercials workspace</Link>
          </p>
        </footer>
      </main>
    </div>
  )
}
