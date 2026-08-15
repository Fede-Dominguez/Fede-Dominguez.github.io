import { useState } from 'react'
import { FaRedo } from 'react-icons/fa'
import './Demos.css'

function makeCard() {
  const pool = Array.from({ length: 90 }, (_, i) => i + 1)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  const numbers = pool.slice(0, 15)
  return [0, 1, 2].map((row) =>
    numbers.slice(row * 5, row * 5 + 5).sort((a, b) => a - b)
  )
}

function BingoDemo() {
  const [card, setCard] = useState(makeCard)
  const [drawn, setDrawn] = useState([])

  const drawnSet = new Set(drawn)
  const completeRows = card.filter((row) => row.every((n) => drawnSet.has(n))).length
  const isBingo = completeRows === 3

  const draw = () => {
    if (isBingo) return
    const remaining = []
    for (let n = 1; n <= 90; n++) {
      if (!drawnSet.has(n)) remaining.push(n)
    }
    const ball = remaining[Math.floor(Math.random() * remaining.length)]
    setDrawn([...drawn, ball])
  }

  const reset = () => {
    setCard(makeCard())
    setDrawn([])
  }

  const lastBall = drawn[drawn.length - 1]

  return (
    <div className="bng-demo">
      <div className="bng-caller">
        <div className={`bng-ball ${lastBall ? '' : 'bng-ball-empty'}`}>
          {lastBall ?? '—'}
        </div>
        <div className="bng-caller-info">
          <button className="bng-draw" onClick={draw} disabled={isBingo}>
            Sacar bolilla
          </button>
          <span className="bng-drawn-count">{drawn.length}/90 bolillas</span>
        </div>
        <div className="bng-history">
          {drawn.slice(-10).reverse().map((n) => (
            <span key={n} className="bng-history-ball">{n}</span>
          ))}
        </div>
      </div>

      <div className="bng-carton">
        {card.map((row, rowIndex) => (
          <div key={rowIndex} className="bng-row">
            {row.map((n) => (
              <span
                key={n}
                className={`bng-cell ${drawnSet.has(n) ? 'bng-cell-marked' : ''}`}
              >
                {n}
              </span>
            ))}
          </div>
        ))}
      </div>

      {(completeRows > 0 || isBingo) && (
        <div className={`bng-banner ${isBingo ? 'bng-banner-bingo' : ''}`}>
          {isBingo ? 'BINGO! Carton completo' : `Linea! (${completeRows} de 3 filas)`}
        </div>
      )}

      <button className="bng-reset" onClick={reset}>
        <FaRedo /> Nuevo carton
      </button>
    </div>
  )
}

export default BingoDemo
