import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import GithubProfile from './components/GithubProfile'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Projects />
        <GithubProfile />
      </main>
    </div>
  )
}

export default App
