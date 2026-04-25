import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const HeroBackground = ({ backgroundImage }) => {
  const { isDark } = useTheme()

  return (
    <>
      {/* Background Image with Blend */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Gradient Overlay - Adaptive to Theme */}
        <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-black/40 via-black/30 to-black/50' : 'bg-linear-to-b from-black/60 via-black/50 to-black/60'}`} />

        {/* Accent Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-r from-transparent via-transparent to-sky-600/5' : 'bg-linear-to-r from-transparent via-transparent to-blue-600/10'}`} />
      </div>

      {/* Animated Floating Elements */}
      <div className={`absolute top-20 right-10 w-72 h-72 ${isDark ? 'bg-pink-500/20' : 'bg-blue-400/10'} rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse hidden md:block`} />
      <div className={`absolute bottom-0 left-10 w-72 h-72 ${isDark ? 'bg-yellow-500/20' : 'bg-green-400/10'} rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse hidden md:block`} />
    </>
  )
}

export default HeroBackground
