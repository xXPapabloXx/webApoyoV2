import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/template/NavBar'
import Footer from './components/template/Footer'
import LogServices from './pages/LogServices'
import Confect from './pages/Confect'
import Blog from './pages/Blog'




function App() {
  const [currentView, setCurrentView] = useState('home')

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'log_services':
        return <LogServices />
      case 'confect':
        return <Confect />
      case 'blog':
        return <Blog />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar onSelect={setCurrentView} />
      <div>
        {renderView()}
      </div>
      <Footer />
    </div>
  )
}

export default App;