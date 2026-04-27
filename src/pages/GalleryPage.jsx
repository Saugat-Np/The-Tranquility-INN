import { useState } from 'react';
import Modal from '../components/Common/Modal';
import galleryData from '../data/gallery.json';
import { useTheme } from '../context/ThemeContext';

export default function GalleryPage() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('images');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setIsPreviewOpen(true);
  };

  const handleVideoClick = (video) => {
    setSelectedItem(video);
    setIsPreviewOpen(true);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      {/* Page Header */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-5xl sm:text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Gallery
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-slate-600'} text-lg`}>
            Explore the beauty and experiences at The Tranquility Inn
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto flex gap-4">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-8 py-3 font-bold rounded-lg transition-all duration-300 ${
              activeTab === 'images'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                : isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-3 font-bold rounded-lg transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                : isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
            }`}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'images' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.images.map(image => (
                <div
                  key={image.id}
                  onClick={() => handleImageClick(image)}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/500x400?text=Image+Not+Found'}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                      <p className="text-white font-semibold">Click to View</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-cyan-500/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {image.category}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.videos.map(video => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/500x400?text=Video+Thumbnail'}
                  />
                  
                  {/* Overlay with Play Button */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                        <svg className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-white font-semibold mt-2">Click to Play</p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {video.duration}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      <Modal
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setSelectedItem(null);
        }}
        title={selectedItem?.title || 'Media Preview'}
      >
        {selectedItem && (
          <div className="space-y-4">
            {activeTab === 'images' ? (
              <div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full rounded-lg"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/500x400?text=Image+Not+Found'}
                />
                <p className="text-gray-300 text-sm mt-4">{selectedItem.category}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-sm">{selectedItem.title}</p>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {selectedItem.duration}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
