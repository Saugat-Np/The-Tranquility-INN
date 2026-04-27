import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function HeroGallery() {
  const { isDark } = useTheme()

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      title: 'Deluxe Room'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      title: 'Suite Bedroom'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Mountain View'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop',
      title: 'Fine Dining'
    },
  ]

  return (
    <div className="mt-12 sm:mt-16">
      <div className="text-center mb-8">
        <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>
          Explore Our Spaces
        </h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Experience the beauty of our hotel through stunning visuals
        </p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {images.map(image => (
          <div
            key={image.id}
            className={`relative h-32 sm:h-40 rounded-lg overflow-hidden group cursor-pointer ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Gallery'}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <p className={`text-white font-semibold text-sm sm:text-base`}>{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 sm:mt-8">
        <Link
          to="/gallery"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View Full Gallery →
        </Link>
      </div>
    </div>
  )
}
