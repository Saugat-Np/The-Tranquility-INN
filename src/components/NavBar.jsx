import React, { useState } from 'react'
import logo from "../assets/logo.png" 
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-slate-950' : 'bg-white'} ${isDark ? 'border-sky-400/20' : 'border-sky-400/30'} border-b backdrop-blur-xl`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 relative">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Tranquility Inn logo"
            className="w-32 sm:w-36 lg:w-48 h-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-5 lg:gap-8 list-none m-0 p-0 ${isDark ? 'text-slate-200' : 'text-slate-700'} font-medium text-sm lg:text-base`}>
          <li><a href="#home" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Home</a></li>
          <li><a href="#menu" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Menu</a></li>
          <li><a href="#about" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>About</a></li>
          <li><a href="#specials" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Specials</a></li>
          <li><a href="#contact" className={`${isDark ? 'hover:text-sky-400' : 'hover:text-sky-600'} transition-colors`}>Contact</a></li>
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
          <a 
            href="#reservation" 
            className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors"
          >
            Book Now
          </a>
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
            <li><a href="#home" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#menu" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Menu</a></li>
            <li><a href="#about" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#specials" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Specials</a></li>
            <li><a href="#contact" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} transition-colors block`} onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <button
              onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all w-full text-center ${isDark ? 'bg-sky-400/20 text-sky-400' : 'bg-sky-400/20 text-sky-600'}`}
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <a 
              href="#reservation" 
              className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-full w-full text-center transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar