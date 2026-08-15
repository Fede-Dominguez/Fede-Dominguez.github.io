import { useState } from 'react'
import { FaCode, FaExternalLinkAlt, FaGithub, FaPlay, FaTimes } from 'react-icons/fa'
import ScrumCockpitDemo from './demos/ScrumCockpitDemo'
import LanLightDemo from './demos/LanLightDemo'
import BingoDemo from './demos/BingoDemo'
import './Projects.css'

const projects = [
  {
    id: 'scrum-cockpit',
    name: 'Scrum Cockpit',
    description:
      'App de escritorio para Scrum Masters: muestra la actividad de un proyecto de Azure DevOps en una pantalla, con feed en vivo en lenguaje natural, board del sprint y metricas.',
    tech: ['Tauri', 'React', 'TypeScript', 'Rust'],
    github: 'https://github.com/Fede-Dominguez/scrum-cockpit',
    demo: ScrumCockpitDemo,
  },
  {
    id: 'lanlight',
    name: 'LAN Light',
    description:
      'Control de luces RGB por LAN en Linux: CLI, GUI en GTK4 y modo ambilight, con una capa de drivers pensada para soportar multiples marcas.',
    tech: ['Python', 'GTK4', 'UDP'],
    github: 'https://github.com/Fede-Dominguez/lanlight',
    demo: LanLightDemo,
  },
  {
    id: 'bingo',
    name: 'Bingo (C)',
    description:
      'Juego de bingo por consola desarrollado en C: cartones, bolillero y canto de linea y bingo, demostrando logica y manejo de estructuras a bajo nivel.',
    tech: ['C'],
    github: 'https://github.com/Fede-Dominguez/bingo-c',
    demo: BingoDemo,
  },
  {
    id: 'blogengine',
    name: 'BlogEngineApp',
    description:
      'API REST donde un editor puede recibir, modificar y subir nuevos Blogs. Arquitectura por capas con patron Facade, documentacion con Swagger UI.',
    tech: ['C#', '.NET', 'SQL Server', 'Swagger'],
    github: 'https://github.com/Fede-Dominguez/BlogEngineApp',
  },
  {
    id: 'coffeshop',
    name: 'CoffeShop',
    description:
      'Tienda de cafe desarrollada como aplicacion web con interfaz interactiva para navegacion de productos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Fede-Dominguez/coffeshop',
  },
]

function Projects() {
  const [activeDemo, setActiveDemo] = useState(null)

  const activeProject = projects.find((p) => p.id === activeDemo)
  const ActiveDemoComponent = activeProject?.demo

  return (
    <section id="projects">
      <h2>
        <FaCode className="section-icon" />
        Proyectos
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${activeDemo === project.id ? 'project-card-active' : ''}`}
          >
            <div className="project-header">
              <FaCode className="project-icon" />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Ver ${project.name} en GitHub`}
              >
                <FaGithub />
                <FaExternalLinkAlt className="external-icon" />
              </a>
            </div>
            <h3>{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            {project.demo && (
              <button
                className="demo-toggle"
                onClick={() =>
                  setActiveDemo(activeDemo === project.id ? null : project.id)
                }
              >
                {activeDemo === project.id ? (
                  <><FaTimes /> Cerrar demo</>
                ) : (
                  <><FaPlay /> Probar demo</>
                )}
              </button>
            )}
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="demo-panel">
          <div className="demo-panel-header">
            <span className="demo-panel-title">
              Demo interactiva — {activeProject.name}
            </span>
            <button
              className="demo-panel-close"
              onClick={() => setActiveDemo(null)}
              aria-label="Cerrar demo"
            >
              <FaTimes />
            </button>
          </div>
          <p className="demo-panel-note">
            Mini version simulada con datos de ejemplo. El proyecto completo esta en{' '}
            <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>
          <ActiveDemoComponent />
        </div>
      )}
    </section>
  )
}

export default Projects
