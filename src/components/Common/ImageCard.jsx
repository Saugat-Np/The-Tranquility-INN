import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const ImageCard = ({
  id,
  src,
  alt = 'Gallery image',
  title,
  category,
}) => {
  const { isDark } = useTheme()
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <div
      id={id}
      className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
    >
      {/* Image */}
      <img
        id={`${id}-image`}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Overlay */}
      <div
        id={`${id}-overlay`}
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4 sm:p-6 ${
          isDark
            ? 'bg-linear-to-t from-black/80 via-black/40 to-transparent'
            : 'bg-linear-to-t from-black/70 via-black/30 to-transparent'
        }`}
      >
        {/* Category */}
        {category && (
          <span
            id={`${id}-category`}
            className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 ${
              isDark ? 'text-sky-300' : 'text-sky-200'
            }`}
          >
            {category}
          </span>
        )}

        {/* Title */}
        {title && (
          <h3
            id={`${id}-title`}
            className="text-sm sm:text-lg font-bold text-white"
          >
            {title}
          </h3>
        )}
      </div>

      {/* Loading skeleton */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          } animate-pulse`}
        />
      )}
    </div>
  )
}

export default ImageCard
