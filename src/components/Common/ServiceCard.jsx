import React from 'react'
import Button from './Button'
import { useTheme } from '../../context/ThemeContext'

const ServiceCard = ({ 
  id,
  icon, 
  title, 
  description, 
  stats,
  buttonText,
  buttonHref,
  variant = 'default'
}) => {
  const { isDark } = useTheme()

  const variants = {
    default: isDark ? 'bg-slate-900/60 hover:bg-slate-900/80 border-sky-400/40' : 'bg-white/80 hover:bg-white border-sky-400/40',
    highlight: isDark ? 'bg-green-900/40 hover:bg-green-900/60 border-green-400/60' : 'bg-green-100/50 hover:bg-green-100 border-green-400/60',
  }

  return (
    <div 
      id={id}
      className={`group p-6 sm:p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${variants[variant]}`}
    >
      {/* Icon */}
      <div id={`${id}-icon`} className="text-5xl sm:text-6xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 id={`${id}-title`} className={`text-xl sm:text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h3>

      {/* Description */}
      <p id={`${id}-description`} className={`text-sm sm:text-base mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        {description}
      </p>

      {/* Stats */}
      {stats && (
        <div id={`${id}-stats`} className="flex gap-4 mb-6 py-4 border-t border-sky-400/20 border-b">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              id={`${id}-stat-${index}`}
              className="flex-1 text-center"
            >
              <div id={`${id}-stat-${index}-value`} className="text-lg sm:text-xl font-bold text-sky-400">
                {stat.value}
              </div>
              <div id={`${id}-stat-${index}-label`} className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button */}
      {buttonText && (
        <Button 
          id={`${id}-button`}
          href={buttonHref} 
          variant="primary"
          className="w-full text-center"
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export default ServiceCard
