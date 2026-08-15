import { useState } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import './Demos.css'

const SWATCHES = [
  '#ff4d4d', '#ff9b2d', '#ffd83d', '#4dff88',
  '#38bdf8', '#8b5cf6', '#ff5bd1', '#ffffff',
]

function hexToRgb(hex) {
  const value = parseInt(hex.slice(1), 16)
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255]
}

function LanLightDemo() {
  const [on, setOn] = useState(true)
  const [color, setColor] = useState('#38bdf8')
  const [brightness, setBrightness] = useState(80)
  const [log, setLog] = useState(['$ lanlight scan', 'Encontrada: tira RGB (192.168.1.42)'])

  const pushLog = (cmd) => {
    setLog((prev) => {
      const line = `$ lanlight ${cmd}`
      const word = cmd.split(' ')[0]
      const rest = prev[0]?.startsWith(`$ lanlight ${word}`) ? prev.slice(1) : prev
      return [line, ...rest].slice(0, 3)
    })
  }

  const togglePower = () => {
    pushLog(on ? 'off' : 'on')
    setOn(!on)
  }

  const pickColor = (hex) => {
    setColor(hex)
    if (on) pushLog(`color "${hex}"`)
  }

  const changeBrightness = (value) => {
    setBrightness(value)
    if (on) pushLog(`brightness ${value}`)
  }

  const [r, g, b] = hexToRgb(color)
  const glow = on ? brightness / 100 : 0

  return (
    <div className="ll-demo">
      <div
        className="ll-room"
        style={{
          background: `radial-gradient(ellipse 90% 75% at 50% 0%, rgba(${r}, ${g}, ${b}, ${glow * 0.55}) 0%, rgba(${r}, ${g}, ${b}, ${glow * 0.12}) 55%, transparent 100%), #0b1120`,
        }}
      >
        <div
          className="ll-strip"
          style={{
            backgroundColor: on ? color : '#1e293b',
            boxShadow: on ? `0 0 18px 4px rgba(${r}, ${g}, ${b}, ${glow})` : 'none',
          }}
        />
        <div className="ll-desk">
          <div className="ll-monitor" />
          <div className="ll-desk-top" />
        </div>
      </div>

      <div className="ll-controls">
        <button
          className={`ll-power ${on ? 'll-power-on' : ''}`}
          onClick={togglePower}
          aria-label={on ? 'Apagar luz' : 'Encender luz'}
        >
          <FaPowerOff />
        </button>

        <div className="ll-swatches">
          {SWATCHES.map((hex) => (
            <button
              key={hex}
              className={`ll-swatch ${color === hex ? 'll-swatch-active' : ''}`}
              style={{ backgroundColor: hex }}
              onClick={() => pickColor(hex)}
              disabled={!on}
              aria-label={`Color ${hex}`}
            />
          ))}
        </div>

        <div className="ll-brightness">
          <label htmlFor="ll-brightness-input">Brillo {brightness}%</label>
          <input
            id="ll-brightness-input"
            type="range"
            min="10"
            max="100"
            value={brightness}
            onChange={(e) => changeBrightness(Number(e.target.value))}
            disabled={!on}
          />
        </div>
      </div>

      <div className="demo-terminal">
        {log.map((line, i) => (
          <div key={`${line}-${i}`} className={line.startsWith('$') ? 'demo-term-cmd' : 'demo-term-out'}>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanLightDemo
