import React from 'react'
import HeroBadge from '../Common/HeroBadge'
import HeroHeading from '../Common/HeroHeading'
import HeroSubtitle from '../Common/HeroSubtitle'
import HeroButtonGroup from '../Common/HeroButtonGroup'

const HeroContent = ({
  badgeText = "THE TRANQUILITY INN",
  badgeIcon = '✨',
  heading = 'Experience ',
  headingHighlight = 'Paradise',
  headingEnd = ' in Pokhara',
  subtitle = 'Discover luxury accommodations, thrilling adventures, and authentic Nepali cuisine in the heart of the Himalayas. Your journey to tranquility starts here.',
  primaryButtonText = 'Book Now',
  primaryButtonHref = '/rooms',
  secondaryButtonText = 'Explore Events',
  secondaryButtonHref = '/events',
}) => {
  return (
    <div id='hero-content' className="flex flex-col items-center justify-center min-h-full sm:min-h-full">
      {/* Badge Component */}
      <HeroBadge
        id="hero-badge"
        badgeText={badgeText}
        badgeIcon={badgeIcon}
      />

      {/* Heading Component */}
      <HeroHeading
        id="hero-heading"
        heading={heading}
        headingHighlight={headingHighlight}
        headingEnd={headingEnd}
      />

      {/* Subtitle Component */}
      <HeroSubtitle
        id="hero-subtitle"
        subtitle={subtitle}
      />

      {/* Button Group Component */}
      <HeroButtonGroup
        id="hero-button-group"
        primaryButtonText={primaryButtonText}
        primaryButtonHref={primaryButtonHref}
        secondaryButtonText={secondaryButtonText}
        secondaryButtonHref={secondaryButtonHref}
      />
    </div>
  )
}

export default HeroContent
