import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const Badge = ({ id, children, icon = '✨', className = '', variant = 'light' }) => {
  const { isDark } = useTheme()

  const variantStyles = {
    light: isDark ? 'bg-sky-400/20 border-sky-400/40 hover:border-sky-400/60 text-sky-300' : 'bg-sky-400/70 border-sky-400/80 hover:border-sky-400/100 text-white font-bold',
    dark: isDark ? 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50 text-slate-300' : 'bg-slate-100/50 border-slate-300/50 hover:border-slate-400/50 text-slate-700',
  }

  return (
    <div id={id} className={`inline-block rounded-full backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 border transition-all duration-300 animate-fadeInDown ${variantStyles[variant]} ${className}`}>
      <p className="text-xs sm:text-sm font-semibold tracking-widest">
        {icon} {children}
      </p>
    </div>
  )
}

export default Badge
