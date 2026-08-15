import { FaUser } from 'react-icons/fa'
import './About.css'

const skills = [
  'C# / .NET',
  'Azure DevOps',
  'SQL Server',
  'MySQL',
  'ReactJS',
  'Angular',
  'JavaScript',
  'Linux',
  'AWS',
  'CI/CD',
  'Git',
  'REST APIs',
]

function About() {
  return (
    <section id="about">
      <h2>
        <FaUser className="section-icon" />
        Sobre mi
      </h2>

      <div className="about-text">
        <p>
          Desarrollador de software con <strong>5+ años de experiencia</strong>, enfocado en
          el ecosistema .NET (C#) y arquitecturas backend. Me dedico a construir y mantener
          soluciones robustas, trabajando tanto con sistemas monoliticos como con microservicios.
        </p>
        <p>
          Para gestionar el ciclo de vida de las aplicaciones y los despliegues, me apoyo
          fuertemente en <strong>Azure DevOps</strong> y en mi experiencia administrando
          entornos <strong>Linux</strong>. Complemento mi trabajo en el backend con conocimiento
          solido en <strong>ReactJS</strong>, lo que me permite involucrarme de manera integral
          en los proyectos.
        </p>
        <p>
          Mi enfoque es simple: escribir codigo limpio, sostenible y buscar siempre que la
          tecnologia resuelva problemas de negocio reales sin sumar complejidad innecesaria.
        </p>
      </div>

      <div className="skills-container">
        <h3>Tecnologias</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
