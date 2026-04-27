import React from 'react'
import Button from './Button'

const HeroButtonGroup = ({ 
  id = 'hero-buttons',
  primaryButtonText = 'Book Now',
  primaryButtonHref = '/rooms',
  secondaryButtonText = 'Explore Events',
  secondaryButtonHref = '/events'
}) => {
  return (
    <div id={id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fadeInUp justify-center w-full px-4 sm:px-0">
      <Button 
        id={`${id}-primary`}
        to={primaryButtonHref} 
        variant="primary"
      >
        {primaryButtonText}
      </Button>
      <Button 
        id={`${id}-secondary`}
        to={secondaryButtonHref} 
        variant="secondary"
      >
        {secondaryButtonText}
      </Button>
    </div>
  )
}

export default HeroButtonGroup
