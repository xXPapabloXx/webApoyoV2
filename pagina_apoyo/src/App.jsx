import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'


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
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar onSelect={setCurrentView} />
      <div className="p-4">
        {renderView()}
      </div>
    </div>
  )
}

export default App;