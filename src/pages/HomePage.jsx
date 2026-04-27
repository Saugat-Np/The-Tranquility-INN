import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import HeroGallery from '../components/HeroGallery'
import FeaturedServices from '../components/Sections/FeaturedServices'
import MapSection from '../components/MapSection'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

export default function HomePage() {
  const { isDark } = useTheme()

  return (
    <div>
      <HeroSection />
      
      {/* Gallery in Hero Section */}
      <section className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-300 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <HeroGallery />
        </div>
      </section>

      <FeaturedServices />

      <MapSection />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
