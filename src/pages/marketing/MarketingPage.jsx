import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import MarketingReadout from './MarketingReadout'
import ContainerBar from './ContainerBar'

const DAYS = 21
const META_DAILY = 36
const META_TOTAL = META_DAILY * DAYS
const TRADEME_LISTING = 99
const TRADEME_COUNT = 3
const TRADEME_BASELINE = TRADEME_LISTING * TRADEME_COUNT
const APPROVAL = META_TOTAL + TRADEME_BASELINE
const ORIGINAL_DAILY = 45
const ORIGINAL_TOTAL = ORIGINAL_DAILY * DAYS
const ORIGINAL_REGION = 189
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
          Cut the three ads now. The buy is still open: one nationwide campaign at {nz(META_DAILY)} a
          day ({nz(APPROVAL)} with Trade Me), or the five areas already mapped, drafted at {nz(3)} a
          day per ad ({nz(AREA_APPROVAL)} with Trade Me). Trade Me is {nz(TRADEME_BASELINE)} either
          way. The container mix follows the carriers people name.
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
              <dt>Ads to cut</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>Nationwide + Trade Me</dt>
              <dd>{nz(APPROVAL)}</dd>
            </div>
            <div>
              <dt>Five areas + Trade Me</dt>
              <dd>{nz(AREA_APPROVAL)}</dd>
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
          <a href="#outside">Outside the ads</a>
          <a href="#container">The container</a>
          <a href="#decision">Go / hold / stop</a>
          <a href="#calendar">Calendar</a>
        </nav>

        <section id="money" className="mkt-section">
          <p className="mkt-index">01 · Money</p>
          <h2>Two buys. The same three ads.</h2>
          <p>
            Facebook and Instagram share whichever budget is signed. The open question is whether
            that budget is one New Zealand auction, with region read afterwards, or five campaigns
            on the areas already mapped. Both can be the right call. The edit does not wait on it.
          </p>

          <div className="mkt-split">
            <article className="mkt-panel mkt-choice">
              <p className="mkt-panel-label">Buy A · Nationwide</p>
              <h3>{nz(APPROVAL)}</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>One campaign · {nz(META_DAILY)}/day × {DAYS}</span>
                  <strong>{nz(META_TOTAL)}</strong>
                </li>
                <li>
                  <span>Trade Me · {TRADEME_COUNT} × {nz(TRADEME_LISTING)}</span>
                  <strong>{nz(TRADEME_BASELINE)}</strong>
                </li>
              </ul>
              <h4 className="mkt-for">For</h4>
              <ul>
                <li>One auction can move money onto the ad people click. Day 4 and day 10 have a real chance of 1,000 impressions.</li>
                <li>Region, age and placement still come back as a breakdown, and so does the rest of the country.</li>
                <li>The Meta line is {nz(META_TOTAL)}. The five-area draft is {nz(ORIGINAL_TOTAL)}. Giving every area this same daily rate is {nz(LEARN_TOTAL)}.</li>
              </ul>
              <h4 className="mkt-against">Against</h4>
              <ul>
                <li>Auckland and Northland are about half the people in the five areas. The auction spends where the people are, so Nelson, Otago and parts of the south can stay too thin to read.</li>
                <li>The 68, the 78 and the grizzly compete in one auction. An area that wanted a different machine only shows up afterwards.</li>
                <li>A quiet area is ambiguous. It can mean few buyers, or that the national auction rarely showed them the ad.</li>
              </ul>
            </article>

            <article className="mkt-panel mkt-choice">
              <p className="mkt-panel-label">Buy B · Five areas</p>
              <h3>{nz(AREA_APPROVAL)}</h3>
              <ul className="mkt-ledger">
                <li>
                  <span>Five areas · {nz(3)} per ad per day · {nz(ORIGINAL_DAILY)}/day × {DAYS}</span>
                  <strong>{nz(ORIGINAL_TOTAL)}</strong>
                </li>
                <li>
                  <span>Trade Me · same three classifieds</span>
                  <strong>{nz(TRADEME_BASELINE)}</strong>
                </li>
              </ul>
              <h4 className="mkt-for">For</h4>
              <ul>
                <li>Every mapped area is shown the ads, including the Nelson showroom and Otago / Southland.</li>
                <li>The machine and the line can follow the card already written for that area.</li>
                <li>A quiet area was shown the work and stayed quiet. That is a cleaner container signal than a national average.</li>
              </ul>
              <h4 className="mkt-against">Against</h4>
              <ul>
                <li>Each ad in each area is {nz(CELL_TOTAL)} over the {DAYS} days. That often stays inside Meta’s learning phase. Under 1,000 impressions the ad is not ranked, and several cells can still be there on day 21.</li>
                <li>Fifteen thin cells make a day-4 pause a guess. A handful of clicks is not a result.</li>
                <li>A split that can learn is {nz(META_DAILY)} a day in each area: {nz(LEARN_DAILY)} a day, {nz(LEARN_TOTAL)} over {DAYS} days. Splitting the nationwide {nz(META_DAILY)} five ways is about {nz(7)} a day per area, which keeps the smaller bill and drops the learning.</li>
              </ul>
            </article>
          </div>

          <div className="mkt-bars" aria-label="Spend comparison">
            <div>
              <div className="mkt-bar-label">
                <span>Buy A · nationwide Meta</span>
                <strong>{nz(META_TOTAL)}</strong>
              </div>
              <div className="mkt-bar">
                <span style={{ width: `${(META_TOTAL / ORIGINAL_TOTAL) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mkt-bar-label">
                <span>Trade Me baseline</span>
                <strong>{nz(TRADEME_BASELINE)}</strong>
              </div>
              <div className="mkt-bar mkt-bar-teal">
                <span style={{ width: `${(TRADEME_BASELINE / ORIGINAL_TOTAL) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mkt-bar-label">
                <span>Buy B · five-area Meta</span>
                <strong>{nz(ORIGINAL_TOTAL)}</strong>
              </div>
              <div className="mkt-bar mkt-bar-mute">
                <span style={{ width: '100%' }} />
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
            A shown from-price, ex GST and ex freight, can sit on one core listing and “contact for
            price” on another. That test stays. A shown price usually means fewer, tighter
            enquiries. The number has to be one management signs. Watchlists and questions are
            logged per listing. They do not choose the age or the region. That still comes from
            Meta. Extra container items beyond the three core models each add another listing fee
            from the same table, still with no promo.
          </p>

          <div className="mkt-callout">
            <h3>What either Meta line can prove</h3>
            <p>
              If a click costs about {nz(2)}, the nationwide {nz(META_TOTAL)} buys on the order of
              380 site visits, and the five-area {nz(ORIGINAL_TOTAL)} buys on the order of 470,
              spread across 15 cells. That is an illustration, not a quote. It can show which ad
              people stop for. It is not a forecast of how many screeners a container will sell.
              Capital equipment is often researched for months, so this window will undercount.
            </p>
          </div>
        </section>

        <section id="where" className="mkt-section">
          <p className="mkt-index">02 · Geography</p>
          <h2>Five areas. The buy, or the breakdown.</h2>
          <p>
            These five areas are already the reading frame. In Buy A they are how a single New
            Zealand export is grouped, plus a sixth bucket for everywhere else. In Buy B they are
            five campaigns, and the rest of the country is outside the paid delivery.
            Manawatū–Whanganui, Hawke’s Bay, Taranaki, Wellington, the West Coast and Gisborne see
            the ads only if the nationwide buy is the one that runs.
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
                Auckland and Northland are the longest bar. A nationwide auction delivers there
                first. Buy B spends only the budget reserved for area 3.
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
                    <dt>If this area is its own buy</dt>
                    <dd>
                      {nz(ORIGINAL_REGION)} at {nz(3)} a day across the three ads
                      <span>{nz(META_TOTAL)} if this area is given the nationwide daily rate</span>
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
                  <dd>All of New Zealand, or these five areas as five locations. The three ads are the same either way.</dd>
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
                    Still open. One ad set at {nz(META_DAILY)} a day, or five area campaigns at the
                    drafted {nz(3)} a day per ad. Interests stay one list on either buy. A
                    civil-versus-farm split is a third cut, and it is not part of this test.
                  </dd>
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
                Three ads, bought as one New Zealand campaign or as the five areas in Geography.
                Placements: Facebook Feed, Facebook Reels, Instagram Feed, Instagram Reels and
                Stories.
              </p>
              <p>
                Facebook is where the older farm owner and the earthmoving director still scroll.
                Instagram Reels and Stories are where a vertical clip of dirt actually sorting
                reaches a younger operator or a landscaper. Same budget. The placement report says
                which one earned the click.
              </p>
              <p className="mkt-cost">
                Buy A {nz(META_DAILY)} a day · Buy B {nz(ORIGINAL_DAILY)} a day
              </p>
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
              <p className="mkt-cost">{nz(TRADEME_BASELINE)} for three core models · listing fees only</p>
            </article>
            <article className="mkt-channel-off">
              <p className="mkt-panel-label">Leave off</p>
              <h3>Messenger, WhatsApp, Audience Network</h3>
              <p>
                The brief is a Page, not a chat thread. Turn off Messenger, WhatsApp and Audience
                Network so the daily budget stays on the feeds and Reels where the footage can be
                seen.
              </p>
            </article>
          </div>
        </section>

        <section id="ads" className="mkt-section">
          <p className="mkt-index">05 · Creative</p>
          <h2>Cut the three ads now.</h2>
          <div className="mkt-callout">
            <h3>The geography can wait. The edit cannot.</h3>
            <p>
              Buy A and Buy B use the same three films, the same landing pages and the same UTMs.
              Ads Manager structure is the only step that changes once management signs a buy.
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
            </article>
            <article className="mkt-ad">
              <p className="mkt-ad-index">Demo · farmers</p>
              <h3>Watch it run.</h3>
              <p className="mkt-ad-shot">15–20 seconds. Machine running, carrier loading it. Land on the farmers page.</p>
              <p>
                Cut it from footage you already have — YouTube if that is where the job films are,
                or the films already on the product pages. Vertical 9:16, captions on, hook in the
                first two seconds, a bucket or a person in frame for scale.
              </p>
              <p className="mkt-hold">
                The 68V is bucket-fed. Do not show it towed behind a ute. The “no engine” line stays
                on the grizzly, not on a Proscreen.
              </p>
            </article>
            <article className="mkt-ad">
              <p className="mkt-ad-index">Reserve · container items</p>
              <h3>Next shipment. Reserve one.</h3>
              <p className="mkt-ad-shot">The machine, the arrival, and a way to reserve. Land on the next-container page.</p>
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
            </article>
          </div>

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
              <p>Real job footage only. A bucket or a person in frame for scale. No stock clip of a different machine.</p>
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
        </section>

        <section id="meta" className="mkt-section">
          <p className="mkt-index">06 · When the numbers arrive</p>
          <h2>Meta writes the next campaign. Inquiries write the container.</h2>
          <p>
            Export on day 4, day 10 and day 21. Use link clicks. “All clicks” counts people who
            opened a comment or a photo and never reached the site. The campaign objective is
            landing page views, or a phone click and a form submit. Not post engagement.
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
              <p>An ad under 1,000 impressions is not ranked. On the five-area draft, several cells can still be under that line on day 21.</p>
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
              <p>Day 4 and day 10 pause a clear loser inside the buy that was signed. A reservation keeps the reserve ad. The geography is not redrawn on these days.</p>
            </li>
            <li>
              <span>6</span>
              <h3>Decide stock</h3>
              <p>Day 21 weighs deposits, then quotes and calls, then Trade Me questions. This desk does not order the container.</p>
            </li>
          </ol>

          <div className="mkt-rules">
            <article>
              <h3>Impressions and frequency</h3>
              <p>
                Impressions say whether the ad was delivered. Frequency says whether the same people
                are seeing it again. If frequency is 2.5 or higher before day 10, the audience is
                too tight. Add one related interest — skid steer, excavator, heavy equipment or farming.
                Do not raise the {nz(META_DAILY)} daily cap to force delivery.
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
                An area with 150 link clicks, or three qualified inquiries, leads the container mix
                and the next opening line. On Buy A that is a breakdown, and this test does not
                then open a new area campaign. On Buy B that area already has its budget; move
                delivery toward the winning ad inside it. A placement comes off at day 14 only if
                its link CTR is under 0.4% after 1,500 impressions. If Reels CTR is at least 1.5×
                Feed, the next edit opens in the first three seconds.
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
            placement. On Buy B, do that inside each area. Compare day 1–4 with day 1–10, not a
            fresh three-day slice with a fortnight. Install the pixel before the first dollar so
            landing-page views, phone clicks and form submits are the record. Link clicks plus the
            call sheet cover the gap until that pixel is live.
          </p>

          <h3 className="mkt-subhead">Readout desk</h3>
          <p>
            Enter the export. The desk applies the rules for the checkpoint you select. It will not
            order a container. That decision stays with the inquiry count.
          </p>
          <MarketingReadout />
        </section>

        <section id="outside" className="mkt-section">
          <p className="mkt-index">07 · Outside the ads</p>
          <h2>A phone call can outrank a click</h2>
          <p>
            Three weeks of ads will undercount a purchase people research for months. Run a cheap
            test beside the campaign. Phone 20–30 hire yards, landscaping suppliers and earthmoving
            firms across the five areas and ask for a pre-order or a deposit. A deposit, with the
            carrier named, is a stronger container signal than any click-through rate.
          </p>
          <div className="mkt-rules">
            <article>
              <h3>Who to call</h3>
              <p>Hire yards, landscaping suppliers, earthmoving firms. Spread the 20–30 calls across the five reading areas, not only Nelson.</p>
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
        </section>

        <section id="container" className="mkt-section">
          <p className="mkt-index">08 · The container</p>
          <h2>Decide the box with the arrival date in mind</h2>
          <p>
            It is spring, so demand should be building, and contractors wind down before Christmas.
            If this test starts now it ends in early November. An order placed then still has sea
            freight from China and MPI biosecurity clearance. Ask the supplier for the current
            transit time before anyone assumes the machines make the pre-Christmas season. The
            meeting question is whether stock landing in January or February is still a useful buy.
          </p>
          <div className="mkt-rules">
            <article>
              <h3>Do not fill the box blind</h3>
              <p>Ask about a part container or consolidated shipping, and whether the mix can be weighted to the carriers the enquiries actually name.</p>
            </article>
            <article>
              <h3>Landed margin</h3>
              <p>Check freight, GST and the exchange rate before the order. A from-price in the ads has to survive that sum, because it was quoted ex GST and ex freight.</p>
            </article>
            <article>
              <h3>If units sit</h3>
              <p>The fallback for unsold machines is a Trade Me auction, so a weak result is not a cash-flow trap. Auctions are the exit. The test itself stays on plain classifieds.</p>
            </article>
          </div>
        </section>

        <section id="decision" className="mkt-section">
          <p className="mkt-index">09 · Decision</p>
          <h2>Order the container on the weighted signals.</h2>
          <p>
            Set the enquiry bar before the first dollar. Deposits and pre-orders count most, then
            quotes and calls, then Trade Me questions and watchlists. Clicks are last. A like is
            not on the list.
          </p>
          <ol className="mkt-weight">
            <li><strong>Deposits and pre-orders</strong><span>Can clear the bar on their own when the carrier and the date are named.</span></li>
            <li><strong>Quotes and calls</strong><span>A person who names a carrier, a material and a timeline.</span></li>
            <li><strong>Trade Me questions and watchlists</strong><span>Per listing. Close to an intention to buy. Not the demographic read.</span></li>
            <li><strong>Clicks</strong><span>Tell you which ad to keep. They do not order the container.</span></li>
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
                <li>Extra spend stays inside the buy that was signed</li>
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
            These gates are the rule for this test. They are not a historical benchmark. The
            enquiry line is break-even units divided by a 5–15% close rate. One real buyer asking
            to view a machine in Nelson outweighs a strong click-through rate.
          </p>
        </section>

        <section id="calendar" className="mkt-section">
          <p className="mkt-index">10 · Calendar</p>
          <h2>Day 0 through day 21</h2>
          <ol className="mkt-track" aria-hidden="true">
            {Array.from({ length: DAYS }, (_, index) => {
              const day = index + 1
              const mark = day === 4 || day === 10 || day === 14 || day === 21
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
                Install the Meta pixel before any spend. Track clicks on 027 521 2126 and contact
                form submits. Cut the three ads, each to its own landing page, with UTMs. That cut
                starts before the nationwide-or-areas choice is signed. Draft one Trade Me listing
                per model. Agree the code words. Start the call list.
              </p>
            </article>
            <article>
              <h3>Day 4</h3>
              <p>
                First export. Pause an ad only when it has 1,000 impressions and is a clear loser.
                On Buy A that concentrates the {nz(META_DAILY)}. On Buy B it concentrates that
                area’s own budget. Keep the reserve ad if it has reservation requests. Leave the
                signed geography as it is.
              </p>
            </article>
            <article>
              <h3>Day 10</h3>
              <p>
                Second export. Pause whatever is still clearly last inside the approved buy. Mark
                the leading age and area. Buy A stays one campaign. Buy B stays five.
              </p>
            </article>
            <article>
              <h3>Day 14</h3>
              <p>
                Relist the Trade Me classifieds at no charge. Compare watchlists and questions per
                listing, and the priced listing against the unpriced one. Do not add a promo.
              </p>
            </article>
            <article>
              <h3>Day 21</h3>
              <p>
                Apply the weighted bar. The carriers people named are the container mix. The Meta
                card — winning ad, area, age, placement, CPC — is what the next campaign opens with.
              </p>
            </article>
          </div>

          <h3 className="mkt-subhead">Set this up before the first dollar</h3>
          <p>
            The site has no Meta pixel today. Install it, and the two events below, before any ad
            spends. Also capture an email where someone will leave one. The pixel does not make
            the container decision. Buying a screener often takes months, so the pixel and the
            email list are how people who are still looking are not lost after day 21.
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
        </section>

        <section id="ask" className="mkt-section">
          <p className="mkt-index">11 · The ask</p>
          <h2>What management is approving</h2>
          <div className="mkt-close">
            <article>
              <p className="mkt-panel-label">Spend</p>
              <h3>The choice</h3>
              <p>
                Buy A is {nz(APPROVAL)}. Buy B, at the drafted {nz(3)} a day, is {nz(AREA_APPROVAL)}.
                A five-area buy thick enough to learn is {nz(LEARN_TOTAL)} of Meta plus the same{' '}
                {nz(TRADEME_BASELINE)} of Trade Me. The three ads are cut on either signature.
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Returns</p>
              <h3>Two answers</h3>
              <p>
                A container decision from deposits, quotes and the carriers people run, plus a
                Meta card: which of the three ads, which area, which age, which placement, and
                what a click cost. The phone round can move the container even when the ads are
                still quiet.
              </p>
            </article>
            <article>
              <p className="mkt-panel-label">Rule</p>
              <h3>No fourth strategy</h3>
              <p>
                Recalibration pauses a weak ad inside the buy that was signed. It does not invent
                the other geography on day 10. The films are already cut by then.
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
              Machine output: the homepage production cards. The dollar-per-cubic-metre figure is
              the homepage profit calculator (saleable price NZ$20–$45/m³, opening at NZ$32).
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
