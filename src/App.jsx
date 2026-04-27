import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import RoomsPage from './pages/RoomsPage'
import GalleryPage from './pages/GalleryPage'

function AppContent() {
  const { isDark } = useTheme()

  return (
    <div className={`transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
