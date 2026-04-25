import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const ScrollIndicator = ({ text = 'Scroll to explore', hidden = false }) => {
  const { isDark } = useTheme()

  if (hidden) return null

  return (
    <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 left-1/2 transform -translate-x-1/2 animate-scrollBounce hidden sm:flex flex-col items-center z-20">
      <p className={`text-sm mb-4 font-medium ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>{text}</p>
      <svg
        className={`w-6 h-6 ${isDark ? 'text-sky-300' : 'text-sky-600'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  )
}

export default ScrollIndicator
