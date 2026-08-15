import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <img src={profileImg} alt="Federico Dominguez" className="profile-img" />
          <h1 className="name">Federico Dominguez</h1>
          <p className="title">Software Engineer</p>
          <p className="subtitle">.NET Developer | Azure DevOps | Linux</p>
        </div>

        <div className="location">
          <FaMapMarkerAlt />
          <span>Argentina</span>
        </div>

        <nav className="nav-links">
          <a href="#about">Sobre mi</a>
          <a href="#experience">Experiencia</a>
          <a href="#education">Educacion</a>
          <a href="#projects">Proyectos</a>
          <a href="#github">GitHub</a>
        </nav>

        <div className="social-links">
          <a href="https://github.com/Fede-Dominguez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/federicod23/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:fededominguez.ar@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
