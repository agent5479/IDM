import { useMemo, useState } from 'react'

const ANGLES = [
  { id: 'cost', name: 'Cost-saving' },
  { id: 'demo', name: 'Demo' },
  { id: 'reserve', name: 'Reserve' },
]

const SETS = [{ id: 'nz', name: 'The three ads' }]

const REGIONS = [
  { id: 'waikato', name: 'Waikato / BOP' },
  { id: 'canterbury', name: 'Canterbury' },
  { id: 'auckland', name: 'Auckland / Northland' },
  { id: 'otago', name: 'Otago / Southland' },
  { id: 'nelson', name: 'Nelson / Tasman' },
  { id: 'rest', name: 'Rest of NZ' },
]

const AGES = [
  { id: '25', name: '25–34' },
  { id: '35', name: '35–44' },
  { id: '45', name: '45–54' },
  { id: '55', name: '55–64' },
]

const EMPTY_CELL = { impressions: '', clicks: '', spend: '' }

function blankCells() {
  return Object.fromEntries(
    SETS.map((set) => [set.id, Object.fromEntries(ANGLES.map((angle) => [angle.id, { ...EMPTY_CELL }]))]),
  )
}

function blankMap(items) {
  return Object.fromEntries(items.map((item) => [item.id, '']))
}

const ILLUSTRATION = {
  cells: {
    nz: {
      cost: { impressions: '5000', clicks: '110', spend: '165' },
      demo: { impressions: '4800', clicks: '86', spend: '172' },
      reserve: { impressions: '2600', clicks: '14', spend: '70' },
    },
  },
  frequency: { nz: '1.5' },
  regions: {
    waikato: '80',
    canterbury: '46',
    auckland: '22',
    otago: '18',
    nelson: '41',
    rest: '12',
  },
  ages: { 25: '30', 35: '48', 45: '110', 55: '40' },
}

function num(value) {
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : 0
}

function pct(rate) {
  if (rate == null || !Number.isFinite(rate)) return '—'
  return `${(rate * 100).toFixed(1)}%`
}

function money(amount) {
  if (amount == null || !Number.isFinite(amount)) return '—'
  return `NZ$${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function sumSet(cells, setId) {
  return ANGLES.reduce(
    (total, angle) => {
      const cell = cells[setId][angle.id]
      total.impressions += num(cell.impressions)
      total.clicks += num(cell.clicks)
      total.spend += num(cell.spend)
      return total
    },
    { impressions: 0, clicks: 0, spend: 0 },
  )
}

function rateOf(row) {
  return row.impressions > 0 ? row.clicks / row.impressions : null
}

function judgeRow(row, siblings) {
  if (row.impressions < 1000) {
    return {
      tone: 'wait',
      label: 'Too early',
      detail: 'Under 1,000 impressions. Leave it in the auction.',
    }
  }
  const rate = row.clicks / row.impressions
  const ready = siblings.filter((item) => item.impressions >= 1000)
  const best = ready.length ? Math.max(...ready.map((item) => item.clicks / item.impressions)) : rate
  const cost = row.clicks > 0 ? row.spend / row.clicks : null
  const otherCosts = ready
    .filter((item) => item.clicks >= 30 && item !== row)
    .map((item) => item.spend / item.clicks)
  const cheapest = otherCosts.length ? Math.min(...otherCosts) : null
  if (cheapest != null && cost != null && row.clicks >= 30 && cost > cheapest * 2) {
    return {
      tone: 'pause',
      label: 'Pause',
      detail: 'Link CPC is more than double another ad in this set that already has 30 clicks.',
    }
  }
  if (rate < 0.008 && best >= 0.015) {
    return {
      tone: 'pause',
      label: 'Pause',
      detail: 'Under 0.8% link CTR while another ad in this set is at or above 1.5%.',
    }
  }
  if (rate >= 0.015) {
    return { tone: 'keep', label: 'Keep', detail: 'Link CTR is at or above 1.5%.' }
  }
  return {
    tone: 'hold',
    label: 'Hold',
    detail: 'Link CTR is between 0.8% and 1.5%. Leave it running.',
  }
}

export default function MarketingReadout() {
  const [checkpoint, setCheckpoint] = useState('10')
  const [reserves, setReserves] = useState('')
  const [cells, setCells] = useState(blankCells)
  const [frequency, setFrequency] = useState(blankMap(SETS))
  const [regions, setRegions] = useState(blankMap(REGIONS))
  const [ages, setAges] = useState(blankMap(AGES))
  const [mode, setMode] = useState('empty')

  const readout = useMemo(
    () => buildReadout({ cells, frequency, regions, ages, checkpoint, reserves }),
    [cells, frequency, regions, ages, checkpoint, reserves],
  )

  function loadIllustration() {
    setCells(ILLUSTRATION.cells)
    setFrequency(ILLUSTRATION.frequency)
    setRegions(ILLUSTRATION.regions)
    setAges(ILLUSTRATION.ages)
    setCheckpoint('10')
    setReserves('2')
    setMode('sample')
  }

  function clearDesk() {
    setCells(blankCells())
    setFrequency(blankMap(SETS))
    setRegions(blankMap(REGIONS))
    setAges(blankMap(AGES))
    setReserves('')
    setMode('empty')
  }

  function updateCell(setId, angleId, field, value) {
    setMode('live')
    setCells((current) => ({
      ...current,
      [setId]: {
        ...current[setId],
        [angleId]: { ...current[setId][angleId], [field]: value },
      },
    }))
  }

  return (
    <div className="mkt-desk">
      <div className="mkt-desk-bar">
        <div className="mkt-checkpoint" role="group" aria-label="Which readout this is">
          {['4', '7', '10', '21'].map((day) => (
            <button
              key={day}
              type="button"
              className={checkpoint === day ? 'is-on' : undefined}
              onClick={() => setCheckpoint(day)}
            >
              Day {day}
            </button>
          ))}
        </div>
        <div className="mkt-desk-actions">
          <button type="button" className="mkt-btn" onClick={loadIllustration}>
            Load a worked week
          </button>
          <button type="button" className="mkt-btn mkt-btn-quiet" onClick={clearDesk}>
            Clear
          </button>
        </div>
      </div>
      <p className="mkt-fine">
        {mode === 'sample'
          ? 'These figures are an illustration so the rules are visible. Replace them with the Facebook report. After day 7 on the national path, and from day one on the regional path, enter one area at a time.'
          : 'Paste views, link clicks and amount spent. Count link clicks, not every click. Week one of the national path is a single paste. Regional campaigns are entered one area at a time.'}
      </p>

      <div className="mkt-sets">
        {SETS.map((set) => {
          const rows = ANGLES.map((angle) => {
            const cell = cells[set.id][angle.id]
            return {
              ...angle,
              impressions: num(cell.impressions),
              clicks: num(cell.clicks),
              spend: num(cell.spend),
            }
          })
          return (
            <fieldset key={set.id} className="mkt-set">
              <legend>{set.name}</legend>
              <div className="mkt-set-head">
                <span>Ad</span>
                <span>Impressions</span>
                <span>Link clicks</span>
                <span>Spend NZ$</span>
              </div>
              {ANGLES.map((angle) => {
                const cell = cells[set.id][angle.id]
                const row = rows.find((item) => item.id === angle.id)
                const verdict = applyReserve(judgeRow(row, rows), angle.id, reserves)
                const ctr = rateOf(row)
                const cpc = row.clicks > 0 ? row.spend / row.clicks : null
                return (
                  <div key={angle.id} className="mkt-set-row">
                    <span className="mkt-angle-name">{angle.name}</span>
                    <input
                      aria-label={`${set.name} ${angle.name} impressions`}
                      inputMode="numeric"
                      value={cell.impressions}
                      onChange={(event) => updateCell(set.id, angle.id, 'impressions', event.target.value)}
                    />
                    <input
                      aria-label={`${set.name} ${angle.name} link clicks`}
                      inputMode="numeric"
                      value={cell.clicks}
                      onChange={(event) => updateCell(set.id, angle.id, 'clicks', event.target.value)}
                    />
                    <input
                      aria-label={`${set.name} ${angle.name} spend`}
                      inputMode="decimal"
                      value={cell.spend}
                      onChange={(event) => updateCell(set.id, angle.id, 'spend', event.target.value)}
                    />
                    <p className={`mkt-verdict is-${verdict.tone}`}>
                      <strong>{verdict.label}</strong>
                      <span>
                        {pct(ctr)} CTR
                        {cpc != null ? ` · ${money(cpc)} CPC` : ''}
                      </span>
                      <span>{verdict.detail}</span>
                    </p>
                  </div>
                )
              })}
              <label className="mkt-freq">
                Reservation requests on the reserve ad
                <input
                  aria-label="Reservation requests"
                  inputMode="numeric"
                  value={reserves}
                  onChange={(event) => {
                    setMode('live')
                    setReserves(event.target.value)
                  }}
                />
              </label>
              <label className="mkt-freq">
                Frequency
                <input
                  aria-label={`${set.name} frequency`}
                  inputMode="decimal"
                  value={frequency[set.id]}
                  onChange={(event) => {
                    setMode('live')
                    setFrequency((current) => ({ ...current, [set.id]: event.target.value }))
                  }}
                />
              </label>
            </fieldset>
          )
        })}
      </div>

      <div className="mkt-breakdowns">
        <fieldset>
          <legend>Link clicks by area</legend>
          <div className="mkt-mini-grid">
            {REGIONS.map((region) => (
              <label key={region.id}>
                {region.name}
                <input
                  inputMode="numeric"
                  aria-label={`${region.name} link clicks`}
                  value={regions[region.id]}
                  onChange={(event) => {
                    setMode('live')
                    setRegions((current) => ({ ...current, [region.id]: event.target.value }))
                  }}
                />
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Link clicks by age</legend>
          <div className="mkt-mini-grid mkt-mini-grid-age">
            {AGES.map((age) => (
              <label key={age.id}>
                {age.name}
                <input
                  inputMode="numeric"
                  aria-label={`${age.name} link clicks`}
                  value={ages[age.id]}
                  onChange={(event) => {
                    setMode('live')
                    setAges((current) => ({ ...current, [age.id]: event.target.value }))
                  }}
                />
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <article className={`mkt-advice${readout.ready ? '' : ' is-empty'}`}>
        <p className="mkt-panel-label">Recalibration · day {checkpoint}</p>
        <h3>{readout.title}</h3>
        <ul>
          {readout.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}

function applyReserve(verdict, angleId, reserves) {
  if (angleId === 'reserve' && num(reserves) > 0 && verdict.tone === 'pause') {
    return {
      tone: 'keep',
      label: 'Keep',
      detail: `${num(reserves)} reservation request${num(reserves) === 1 ? '' : 's'}. That outranks a weak click-through.`,
    }
  }
  return verdict
}

function buildReadout({ cells, frequency, regions, ages, checkpoint, reserves }) {
  const totals = Object.fromEntries(SETS.map((set) => [set.id, sumSet(cells, set.id)]))
  const anyNumbers = SETS.some((set) => totals[set.id].impressions > 0)
  const regionClicks = REGIONS.map((region) => ({ ...region, clicks: num(regions[region.id]) }))
  const ageClicks = AGES.map((age) => ({ ...age, clicks: num(ages[age.id]) }))
  const regionTotal = regionClicks.reduce((sum, region) => sum + region.clicks, 0)
  const ageTotal = ageClicks.reduce((sum, age) => sum + age.clicks, 0)
  if (!anyNumbers && regionTotal === 0 && ageTotal === 0) {
    return {
      ready: false,
      title: 'Waiting on the export',
      lines: [
        'An ad stays unscored until 1,000 people have seen it.',
        'Day 4 and day 10 pause a clear loser so the daily budget stays on the ads people open. On the national path, day 7 is the handoff to the areas that responded.',
        'A reservation request keeps the reserve ad even when few people click it. Day 21 decides the container from deposits, quotes and calls.',
      ],
    }
  }

  const lines = []
  const ranked = []
  for (const set of SETS) {
    const rows = ANGLES.map((angle) => {
      const cell = cells[set.id][angle.id]
      return {
        id: angle.id,
        set: set.name,
        name: angle.name,
        impressions: num(cell.impressions),
        clicks: num(cell.clicks),
        spend: num(cell.spend),
      }
    })
    for (const row of rows) {
      const verdict = applyReserve(judgeRow(row, rows), row.id, reserves)
      if (verdict.tone === 'keep') ranked.push({ ...row, rate: row.clicks / row.impressions })
      if (verdict.tone === 'pause') {
        lines.push(`Pause the ${row.name.toLowerCase()} ad. ${verdict.detail}`)
      }
    }
    const freq = num(frequency[set.id])
    if ((checkpoint === '4' || checkpoint === '7' || checkpoint === '10') && freq >= 2.5) {
      lines.push(
        `${set.name} frequency is ${freq.toFixed(1)} before day 10. The audience is repeating. Add one related interest. Do not raise the daily budget.`,
      )
    }
  }

  ranked.sort((a, b) => b.rate - a.rate)
  if (ranked[0]) {
    lines.unshift(
      `The leading ad is ${ranked[0].name.toLowerCase()} at ${pct(ranked[0].rate)} link click-through. Keep it in the campaign you started.`,
    )
  } else if (anyNumbers) {
    lines.unshift('No ad has reached 1.5% link click-through on 1,000 views yet. Leave the flight as it is.')
  }

  if (checkpoint === '4') {
    lines.push(
      'Day 4 pauses a weak ad. On the national path the campaign stays national until day 7. Leave the age range as it is.',
    )
  } else if (checkpoint === '7') {
    lines.push(
      'Day 7 on the national path moves the daily budget onto the areas with clicks or enquiries. A silent area comes off. On the regional path, keep adapting inside the five campaigns.',
    )
  } else if (anyNumbers) {
    lines.push(
      'Pause weak ads so the budget moves to the ones people open. Age stays a report, not a new target.',
    )
  }

  const regionLeader = [...regionClicks].sort((a, b) => b.clicks - a.clicks)[0]
  if (regionTotal > 0 && regionLeader) {
    if (regionLeader.clicks >= 150 && checkpoint !== '4') {
      lines.push(
        `${regionLeader.name} has ${regionLeader.clicks.toLocaleString('en-NZ')} link clicks. That area leads the next sales line and the container mix. On the national path it is a campaign from day 8. On the regional path it already has one.`,
      )
    } else if (checkpoint === '7') {
      lines.push(
        `${regionLeader.name} leads on link clicks (${regionLeader.clicks.toLocaleString('en-NZ')}). On the national path, areas with clicks or enquiries continue and a silent area comes off.`,
      )
    } else {
      lines.push(
        `${regionLeader.name} leads on link clicks (${regionLeader.clicks.toLocaleString('en-NZ')}). No area has 150 yet.`,
      )
    }
  }

  const ageLeader = [...ageClicks].sort((a, b) => b.clicks - a.clicks)[0]
  if (ageTotal > 0 && ageLeader && ageLeader.clicks / ageTotal >= 0.4) {
    const share = Math.round((ageLeader.clicks / ageTotal) * 100)
    if (checkpoint === '4') {
      lines.push(
        `${ageLeader.name} has ${share}% of the age-band clicks. Note it. Leave the age range unchanged on day 4. On day 10, narrow it only if that band’s own click-through is at least 1.3× the campaign and the band has 800 views.`,
      )
    } else {
      lines.push(
        `${ageLeader.name} has ${share}% of the age-band clicks. Narrow a later campaign to that band only after its click-through is at least 1.3× the campaign and the band has 800 views.`,
      )
    }
  }

  if (checkpoint === '21') {
    lines.push(
      'Day 21 uses this desk to name the winning ad, area and age. The container decision uses the enquiry sheet, including the machines people named.',
    )
  }

  return {
    ready: true,
    title: checkpoint === '21' ? 'Card for the next campaign' : 'What to change from these numbers',
    lines,
  }
}
