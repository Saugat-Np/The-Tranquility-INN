import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${isDark ? 'bg-slate-950 border-slate-800' : 'bg-gray-100 border-gray-200'} border-t transition-colors duration-300`}>
      <div className={`${isDark ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  🏨
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Tranquility Inn
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Paradise in Pokhara
                  </p>
                </div>
              </Link>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-4`}>
                Experience luxury accommodations and thrilling adventures in the heart of the Himalayas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/events" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/rooms" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Luxury Rooms
                  </a>
                </li>
                <li>
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Adventure Events
                  </a>
                </li>
                <li>
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Dining
                  </a>
                </li>
                <li>
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                    Spa & Wellness
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  📍 Pokhara, Nepal
                </li>
                <li className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  📞 +977 61 XXX XXXX
                </li>
                <li className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  ✉️ info@tranquilityinn.com
                </li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors text-lg`}>
                    f
                  </a>
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors text-lg`}>
                    𝕏
                  </a>
                  <a href="#" className={`${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors text-lg`}>
                    in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className={`my-8 sm:my-12 ${isDark ? 'border-slate-800' : 'border-gray-200'} border-t`}></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              © {currentYear} The Tranquility Inn. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className={`text-sm ${isDark ? 'text-gray-500 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                Privacy Policy
              </a>
              <a href="#" className={`text-sm ${isDark ? 'text-gray-500 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                Terms of Service
              </a>
              <a href="#" className={`text-sm ${isDark ? 'text-gray-500 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
