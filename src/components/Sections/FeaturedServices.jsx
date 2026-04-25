import React from 'react'
import ServiceCard from '../Common/ServiceCard'
import SectionHeader from '../Common/SectionHeader'
import SectionGrid from '../Common/SectionGrid'
import SectionCTA from '../Common/SectionCTA'
import { useTheme } from '../../context/ThemeContext'

const FeaturedServices = ({
  sectionId = 'featured-services',
  badgeText = '✨ OUR SERVICES',
  sectionTitle = 'What We Offer',
  sectionSubtitle = 'Explore our premium services designed to make your stay unforgettable',
}) => {
  const { isDark } = useTheme()
  
  const services = [
    {
      id: 'service-rooms',
      icon: '🛏️',
      title: 'Luxury Rooms',
      description: 'Experience comfort in our beautifully designed rooms and cottages with modern amenities, stunning lake views, and warm hospitality.',
      stats: [
        { value: '25+', label: 'Rooms' },
        { value: '⭐4.8', label: 'Rating' },
        { value: '🏆Best', label: 'Rated' }
      ],
      buttonText: 'Browse Rooms',
      buttonHref: '#rooms',
    },
    {
      id: 'service-events',
      icon: '🧗',
      title: 'Adventure Events',
      description: 'Thrilling adventures await! From trekking and hiking to paragliding and bungee jumping, create memories that last a lifetime.',
      stats: [
        { value: '12+', label: 'Events' },
        { value: '🌍World', label: 'Class' },
        { value: '👥5K+', label: 'Guests' }
      ],
      buttonText: 'Explore Events',
      buttonHref: '#events',
      variant: 'highlight',
    },
    {
      id: 'service-food',
      icon: '🍽️',
      title: 'Authentic Cuisine',
      description: 'Savor authentic Nepali delicacies and international dishes prepared by our expert chefs using fresh, local ingredients.',
      stats: [
        { value: '30+', label: 'Dishes' },
        { value: '🌟Fresh', label: 'Daily' },
        { value: '👨‍🍳Chef', label: 'Curated' }
      ],
      buttonText: 'View Menu',
      buttonHref: '#menu',
    }
  ]

  return (
    <section id={sectionId} className={`relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-amber-50'}`}>
      {/* Background Gradient */}
      <div id={`${sectionId}-bg-gradient`} className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-slate-950 via-sky-900/20 to-slate-950' : 'bg-linear-to-b from-amber-50 via-green-400/5 to-amber-50'} pointer-events-none`}></div>

      {/* Content Container */}
      <div id={`${sectionId}-container`} className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header Component */}
        <SectionHeader
          id={`${sectionId}-header`}
          badgeText={badgeText}
          badgeIcon="✨"
          title={sectionTitle}
          subtitle={sectionSubtitle}
        />

        {/* Section Grid Component */}
        <SectionGrid
          id={`${sectionId}-grid`}
          columns="lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </SectionGrid>

        {/* Section CTA Component */}
        <SectionCTA
          id={`${sectionId}-cta`}
          title="Ready to Start Your Journey?"
          description="Book your perfect experience today and discover the magic of Pokhara."
          buttonText="Start Booking Now"
          buttonHref="#booking"
        />
      </div>
    </section>
  )
}

export default FeaturedServices
