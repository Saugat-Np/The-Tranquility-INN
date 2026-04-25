import React from 'react'
import ImageCard from '../Common/ImageCard'
import SectionHeader from '../Common/SectionHeader'
import SectionCTA from '../Common/SectionCTA'
import { useTheme } from '../../context/ThemeContext'

const Gallery = ({
  sectionId = 'gallery',
  badgeText = '📸 OUR SPACES',
  sectionTitle = 'Explore Our Gallery',
  sectionSubtitle = 'Discover the beauty and comfort of Tranquility Inn through our photo collection',
}) => {
  const { isDark } = useTheme()

  const images = [
    {
      id: 'gallery-room-1',
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
      alt: 'Luxury room with lake view',
      title: 'Deluxe Room',
      category: 'Rooms',
    },
    {
      id: 'gallery-room-2',
      src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=800&fit=crop',
      alt: 'Modern bedroom',
      title: 'Suite Bedroom',
      category: 'Rooms',
    },
    {
      id: 'gallery-view-1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
      alt: 'Mountain view',
      title: 'Mountain Views',
      category: 'Views',
    },
    {
      id: 'gallery-dining-1',
      src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=800&fit=crop',
      alt: 'Restaurant dining',
      title: 'Fine Dining',
      category: 'Dining',
    },
    {
      id: 'gallery-pool-1',
      src: 'https://images.unsplash.com/photo-1576519505003-13076db8cc57?w=800&h=800&fit=crop',
      alt: 'Resort pool',
      title: 'Infinity Pool',
      category: 'Amenities',
    },
    {
      id: 'gallery-adventure-1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
      alt: 'Adventure activity',
      title: 'Adventure Sports',
      category: 'Activities',
    },
  ]

  return (
    <section id={sectionId} className={`relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Background Gradient */}
      <div id={`${sectionId}-bg-gradient`} className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-slate-950 via-sky-900/10 to-slate-950' : 'bg-linear-to-b from-white via-sky-400/5 to-white'} pointer-events-none`}></div>

      {/* Content Container */}
      <div id={`${sectionId}-container`} className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header Component */}
        <SectionHeader
          id={`${sectionId}-header`}
          badgeText={badgeText}
          badgeIcon="📸"
          title={sectionTitle}
          subtitle={sectionSubtitle}
        />

        {/* Gallery Grid */}
        <div
          id={`${sectionId}-grid`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {images.map((image) => (
            <ImageCard
              key={image.id}
              {...image}
            />
          ))}
        </div>

        {/* Section CTA Component */}
        <SectionCTA
          id={`${sectionId}-cta`}
          title="Captivated by What You See?"
          description="Book your stay now and experience the beauty firsthand. Every moment at Tranquility Inn is picture-perfect."
          buttonText="Book Your Stay"
          buttonHref="#booking"
        />
      </div>
    </section>
  )
}

export default Gallery
