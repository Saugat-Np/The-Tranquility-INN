import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const SectionCTA = ({
  id = 'section-cta',
  title = 'Ready to Start?',
  description = 'Take the next step today',
  buttonText = 'Get Started',
  buttonHref = '#'
}) => {
  const { isDark } = useTheme()

  return (
    <div 
      id={id}
      className={`mt-16 sm:mt-20 lg:mt-24 p-8 sm:p-12 rounded-2xl backdrop-blur-md ${isDark ? 'bg-linear-to-r from-sky-400/20 to-green-400/10 border-sky-400/50' : 'bg-linear-to-r from-sky-400/30 to-green-400/20 border-sky-400/60'} border text-center`}
    >
      <h3 
        id={`${id}-title`} 
        className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-950'}`}
      >
        {title}
      </h3>
      
      <p 
        id={`${id}-description`} 
        className={`mb-8 text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
      >
        {description}
      </p>
      
      <a 
        id={`${id}-button`}
        href={buttonHref}
        className="inline-block px-10 py-4 bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg"
      >
        {buttonText}
      </a>
    </div>
  )
}

export default SectionCTA
