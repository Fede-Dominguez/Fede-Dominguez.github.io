import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    company: 'Grupo Aoniken',
    role: 'Software Engineer',
    period: 'Junio 2023 - Presente',
    location: 'Argentina',
    tasks: [
      'Desarrollo end-to-end de proyectos (desde el relevamiento con el cliente hasta su pase a produccion), abarcando el backend con C# y MySQL, el apoyo en frontend con Angular, y la configuracion de la infraestructura y flujos CI/CD con Azure DevOps y Logic Apps.',
      'Desarrollo backend en C# para entornos moviles, realizando integraciones especificas con dispositivos de pago (Clover).',
    ],
  },
  {
    company: 'Axoft',
    role: 'Ssr Software Engineer',
    period: 'Septiembre 2022 - Junio 2023',
    location: 'Argentina',
    tasks: [
      'Desarrollo de nuevas funcionalidades y mantenimiento critico para el modulo de Stock del sistema de gestion (ERP).',
    ],
  },
  {
    company: 'Axoft',
    role: 'Jr Software Engineer',
    period: 'Octubre 2021 - Septiembre 2022',
    location: 'Argentina',
    tasks: [
      'Resolucion de incidentes y optimizacion del codigo trabajando con C# y Delphi para asegurar la estabilidad del producto.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <h2>
        <FaBriefcase className="section-icon" />
        Experiencia
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company} &middot; {exp.location}</p>
              <ul className="exp-tasks">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
