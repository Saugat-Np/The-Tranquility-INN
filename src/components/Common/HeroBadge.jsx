import React from 'react'
import Badge from './Badge'

const HeroBadge = ({ 
  id = 'hero-badge',
  badgeText = 'WELCOME', 
  badgeIcon = '✨'
}) => {
  return (
    <div id={id} className="mb-3 sm:mb-6">
      <Badge id={`${id}-content`} icon={badgeIcon}>
        {badgeText}
      </Badge>
    </div>
  )
}

export default HeroBadge
