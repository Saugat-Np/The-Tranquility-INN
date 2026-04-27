import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png" 
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-slate-950' : 'bg-white'} ${isDark ? 'border-sky-400/20' : 'border-sky-400/30'} border-b backdrop-blur-xl`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Tranquility Inn logo"
            className="w-32 sm:w-36 lg:w-48 h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-5 lg:gap-8 list-none m-0 p-0 ${isDark ? 'text-slate-200' : 'text-slate-700'} font-medium text-sm lg:text-base`}>
          <li><Link to="/" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Home</Link></li>
          <li><Link to="/events" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Events</Link></li>
          <li><Link to="/rooms" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Rooms</Link></li>
          <li><Link to="/gallery" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Gallery</Link></li>
        </ul>

        {/* Theme Toggle & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-all ${isDark ? 'bg-sky-400/20 hover:bg-sky-400/40 text-sky-400' : 'bg-sky-400/20 hover:bg-sky-400/40 text-sky-600'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Desktop CTA */}
          <Link 
            to="/rooms" 
            className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className={`md:hidden flex flex-col gap-1 cursor-pointer bg-none border-none p-2`}
        >
          <span className={`w-6 h-0.5 ${isDark ? 'bg-slate-200' : 'bg-slate-700'} block`}></span>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-slate-200' : 'bg-slate-700'} block`}></span>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-slate-200' : 'bg-slate-700'} block`}></span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className={`absolute top-full left-0 right-0 md:hidden ${isDark ? 'bg-slate-950/98' : 'bg-white/98'} ${isDark ? 'border-sky-400/20' : 'border-sky-400/30'} border-t backdrop-blur-xl p-4 flex flex-col gap-3 list-none m-0`}>
            <li><Link to="/" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/events" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Events</Link></li>
            <li><Link to="/rooms" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Rooms</Link></li>
            <li><Link to="/gallery" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <button
              onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all w-full text-center ${isDark ? 'bg-sky-400/20 text-sky-400' : 'bg-sky-400/20 text-sky-600'}`}
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <Link 
              to="/rooms" 
              className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-full w-full text-center transition-colors mt-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar