import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const HeroHeading = ({ 
  id = 'hero-heading',
  heading = 'Experience ', 
  headingHighlight = 'Paradise', 
  headingEnd = ' in Pokhara' 
}) => {
  const { isDark } = useTheme()

  return (
    <h1 
      id={id}
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 md:mb-8 leading-tight animate-fadeInDown tracking-tight text-white ${isDark ? '' : 'hero-text-shadow'}`}
    >
      {heading}
      <span id={`${id}-highlight`} className="text-sky-500 drop-shadow-lg">
        {headingHighlight}
      </span>
      {headingEnd}
    </h1>
  )
}

export default HeroHeading
