import { useEffect, useRef } from 'react'
import { SCHEDULE_ROWS, DAYS, DAY_LABELS } from '../data/schedule'

function ClassCell({ entry }) {
  if (!entry) return <td className="empty">—</td>

  return (
    <td>
      <span className={`tag tag--${entry.category}`}>{entry.label}</span>
      <b>{entry.type}</b>
      {entry.level && <small>{entry.level}</small>}
    </td>
  )
}

export default function Schedule() {
  const wrapRef = useRef(null)
  const hintRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const hint = hintRef.current
    if (!wrap || !hint) return

    const check = () => {
      hint.style.display = wrap.scrollWidth > wrap.clientWidth ? 'block' : 'none'
    }
    check()
    window.addEventListener('resize', check, { passive: true })

    const onScroll = () => { if (wrap.scrollLeft > 10) hint.style.display = 'none' }
    wrap.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', check)
      wrap.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="schedule section section--alt" id="schedule">
      <div className="container">
        <div className="section-header fade-up">
          <p className="eyebrow">Training Hours</p>
          <h2 className="section-title">
            Daily Class <span className="text--green">Schedule</span>
          </h2>
        </div>

        <div className="schedule__scroll-wrap fade-up" style={{ '--delay': '0.1s' }}>
          <div className="schedule__table-wrap" ref={wrapRef}>
            <table className="schedule__table">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  {DAYS.map(day => (
                    <th scope="col" key={day}>{DAY_LABELS[day]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map(row => (
                  <tr key={row.time}>
                    <td className="time-col">{row.time}</td>
                    {DAYS.map(day => (
                      <ClassCell key={day} entry={row[day]} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="schedule__hint" ref={hintRef}>← Scroll to see full schedule</p>
        </div>

        <p className="schedule__note fade-up" style={{ '--delay': '0.15s' }}>
          * No Saturday classes during the summer months.
        </p>
      </div>
    </section>
  )
}
