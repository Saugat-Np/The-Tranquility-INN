import React from 'react'
import Badge from './Badge'
import { useTheme } from '../../context/ThemeContext'

const SectionHeader = ({
  id = 'section-header',
  badgeText = '✨ SECTION',
  badgeIcon = '✨',
  title = 'Section Title',
  subtitle = 'Section subtitle goes here'
}) => {
  const { isDark } = useTheme()

  return (
    <div id={id} className="text-center mb-12 sm:mb-16 lg:mb-20">
      {/* Badge */}
      <div id={`${id}-badge-wrapper`} className="mb-4">
        <Badge id={`${id}-badge`} icon={badgeIcon}>
          {badgeText}
        </Badge>
      </div>

      {/* Title */}
      <h2 
        id={`${id}-title`} 
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-950'}`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p 
        id={`${id}-subtitle`} 
        className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default SectionHeader
