import './App.css'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import FeaturedServices from './components/Sections/FeaturedServices'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <NavBar/>
      <HeroSection/>
      <FeaturedServices/>
    </ThemeProvider>
  )
}

export default App
