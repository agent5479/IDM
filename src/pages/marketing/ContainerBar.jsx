import { useState } from 'react'

export default function ContainerBar() {
  const [units, setUnits] = useState('')
  const count = Number(units)
  const ready = Number.isFinite(count) && count > 0
  const at = (rate) => (ready ? Math.ceil(count / rate) : null)

  return (
    <div className="mkt-desk">
      <p className="mkt-panel-label">Set the enquiry bar</p>
      <h3>How many enquiries justify the container</h3>
      <p className="mkt-fine">
        Enter how many machines this container must sell to cover its cost. High-ticket plant often
        closes on about 5–15% of real enquiries. The cautious number is the 5% line. Clicks are
        not part of this count.
      </p>
      <label className="mkt-freq">
        Machines this container must sell to cover its cost
        <input
          inputMode="numeric"
          aria-label="Break-even units"
          value={units}
          onChange={(event) => setUnits(event.target.value)}
        />
      </label>
      {ready ? (
        <ul className="mkt-ledger">
          <li>
            <span>At 15% close rate</span>
            <strong>{at(0.15)} enquiries</strong>
          </li>
          <li>
            <span>At 10% close rate</span>
            <strong>{at(0.1)} enquiries</strong>
          </li>
          <li>
            <span>At 5% close rate</span>
            <strong>{at(0.05)} enquiries</strong>
          </li>
        </ul>
      ) : (
        <p>Enter that machine count. Four machines at a 10% close rate would mean 40 enquiries. Four is only an example.</p>
      )}
    </div>
  )
}
