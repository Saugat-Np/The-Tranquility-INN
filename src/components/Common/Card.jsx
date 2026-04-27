export default function Card({ image, title, description, price, features, children, onClick, className = "" }) {
  return (
    <div className={`bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${className}`} onClick={onClick}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'}
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        {description && (
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        {price && (
          <div className="mb-4 text-2xl font-bold text-cyan-400">
            ₹{price.toLocaleString()}
          </div>
        )}

        {/* Actions */}
        {children && (
          <div>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
