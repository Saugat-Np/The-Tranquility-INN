import { useState } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={`bg-slate-800 rounded-lg shadow-2xl max-w-md w-full border border-slate-700 transition-all duration-300 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
