import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import './GithubProfile.css'

function GithubProfile() {
  return (
    <section id="github">
      <h2>
        <FaGithub className="section-icon" />
        Mas en GitHub
      </h2>

      <a
        className="gh-card"
        href="https://github.com/Fede-Dominguez/Fede-Dominguez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={profileImg} alt="Avatar de Fede-Dominguez" className="gh-avatar" />
        <div className="gh-info">
          <div className="gh-user">
            Fede-Dominguez
            <span className="gh-tag">
              <FaBook /> README de perfil
            </span>
          </div>
          <p className="gh-bio">
            Backend Developer | .NET / C# | Microservicios &amp; APIs REST | SQL Server |
            Azure DevOps | Docker | Linux | ReactJS
          </p>
          <p className="gh-desc">
            El README de presentacion completo, con mas informacion, el resto de los
            proyectos y las formas de contacto.
          </p>
        </div>
        <FaExternalLinkAlt className="gh-external" />
      </a>
    </section>
  )
}

export default GithubProfile
