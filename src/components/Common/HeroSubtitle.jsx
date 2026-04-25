import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const HeroSubtitle = ({ 
  id = 'hero-subtitle',
  subtitle = 'Discover luxury accommodations, thrilling adventures, and authentic Nepali cuisine in the heart of the Himalayas. Your journey to tranquility starts here.'
}) => {
  const { isDark } = useTheme()

  return (
    <p 
      id={id}
      className={`text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fadeInUp ${isDark ? 'text-slate-300' : 'text-white hero-subtitle-shadow'}`}
    >
      {subtitle}
    </p>
  )
}

export default HeroSubtitle
