import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Demos.css'

const COLUMNS = ['To Do', 'In Progress', 'Done']

const INITIAL_ITEMS = [
  { id: 'US 101', title: 'Login con Azure AD', assignee: 'Sofia', col: 0 },
  { id: 'US 105', title: 'Metricas de burndown', assignee: 'Fede', col: 0 },
  { id: 'US 102', title: 'Feed de actividad en vivo', assignee: 'Fede', col: 1 },
  { id: 'BUG 103', title: 'Zona horaria en fechas del board', assignee: 'Marcos', col: 1 },
  { id: 'US 104', title: 'Filtro por sprint', assignee: 'Sofia', col: 2 },
]

function ScrumCockpitDemo() {
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [feed, setFeed] = useState(['Sprint 12 iniciado — 5 work items en juego'])

  const move = (itemId, dir) => {
    const item = items.find((i) => i.id === itemId)
    const col = item.col + dir
    if (col < 0 || col >= COLUMNS.length) return
    setItems(items.map((i) => (i.id === itemId ? { ...i, col } : i)))
    setFeed((f) =>
      [`${item.assignee} paso ${item.id} a ${COLUMNS[col]}`, ...f].slice(0, 4)
    )
  }

  const done = items.filter((i) => i.col === COLUMNS.length - 1).length
  const progress = Math.round((done / items.length) * 100)

  return (
    <div className="sc-demo">
      <div className="sc-metrics">
        <span className="sc-metric-label">Progreso del sprint</span>
        <div className="sc-progress">
          <div className="sc-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="sc-metric-value">{done}/{items.length} done</span>
      </div>

      <div className="sc-board">
        {COLUMNS.map((colName, colIndex) => (
          <div key={colName} className="sc-column">
            <div className="sc-column-title">
              {colName}
              <span className="sc-count">{items.filter((i) => i.col === colIndex).length}</span>
            </div>
            {items
              .filter((i) => i.col === colIndex)
              .map((item) => (
                <div key={item.id} className="sc-card">
                  <div className="sc-card-top">
                    <span className={`sc-id ${item.id.startsWith('BUG') ? 'sc-id-bug' : ''}`}>
                      {item.id}
                    </span>
                    <div className="sc-arrows">
                      <button
                        onClick={() => move(item.id, -1)}
                        disabled={colIndex === 0}
                        aria-label={`Mover ${item.id} a la izquierda`}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={() => move(item.id, 1)}
                        disabled={colIndex === COLUMNS.length - 1}
                        aria-label={`Mover ${item.id} a la derecha`}
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                  <p className="sc-title">{item.title}</p>
                  <span className="sc-assignee">{item.assignee}</span>
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="sc-feed">
        <div className="sc-feed-title">Actividad en vivo</div>
        {feed.map((entry, i) => (
          <div key={`${entry}-${i}`} className={`sc-feed-entry ${i === 0 ? 'sc-feed-new' : ''}`}>
            {entry}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrumCockpitDemo
