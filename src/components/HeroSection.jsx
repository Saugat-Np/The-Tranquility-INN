import React from 'react'
import heroImage from '../assets/heropageimage.png'
import HeroBackground from './Common/HeroBackground'
import HeroContent from './Sections/HeroContent'
import ScrollIndicator from './Common/ScrollIndicator'
import { useTheme } from '../context/ThemeContext'
import '../styles/animations.css'

const HeroSection = () => {
  const { isDark } = useTheme()

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-0 sm:pt-0 lg:pt-0 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Background */}
      <HeroBackground backgroundImage={heroImage} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-5 md:py-5">
        {/* Hero Content */}
        <HeroContent
          badgeText="THE TRANQUILITY INN"
          badgeIcon="✨"
          heading="Experience "
          headingHighlight="Paradise"
          headingEnd=" in Pokhara"
          subtitle="Discover luxury accommodations, thrilling adventures, and authentic Nepali cuisine in the heart of the Himalayas. Your journey to tranquility starts here."
          primaryButtonText="Book Now"
          primaryButtonHref="#rooms"
          secondaryButtonText="Explore Events"
          secondaryButtonHref="#events"
        />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator text="Scroll to explore" />
    </div>
  )
}

export default HeroSection