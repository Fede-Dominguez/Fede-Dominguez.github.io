import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const education = [
  {
    institution: 'Universidad Nacional de Lanus',
    degree: 'Licenciatura en Analisis de Sistemas Informaticos',
    period: '2020 - 2026',
  },
  {
    institution: 'EducacionIT',
    degree: 'Linux SysAdmin',
    period: '2026',
  },
  {
    institution: 'Coderhouse',
    degree: 'Full Stack Software Developer',
    period: '2021',
  },
]

function Education() {
  return (
    <section id="education">
      <h2>
        <FaGraduationCap className="section-icon" />
        Educacion
      </h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="edu-icon-wrapper">
              <FaGraduationCap />
            </div>
            <div className="edu-info">
              <h3>{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <span className="edu-period">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
