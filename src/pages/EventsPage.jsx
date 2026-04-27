import { useState } from 'react';
import Card from '../components/Common/Card';
import Modal from '../components/Common/Modal';
import eventsData from '../data/events.json';
import { useTheme } from '../context/ThemeContext';

export default function EventsPage() {
  const { isDark } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    people: 1
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (event) => {
    setSelectedEvent(event);
    setIsBookingOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsBookingOpen(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', date: '', people: 1 });
      setSelectedEvent(null);
    }, 2000);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      {/* Page Header */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-5xl sm:text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Adventure Activities
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-slate-600'} text-lg`}>
            Discover thrilling experiences at The Tranquility Inn
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsData.map(event => (
              <Card
                key={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
                price={event.price}
              >
                <div className="space-y-2">
                  <p className="text-sm text-cyan-300 font-semibold">
                    Duration: {event.duration}
                  </p>
                  <button
                    onClick={() => handleBooking(event)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSubmitted(false);
          setFormData({ name: '', email: '', date: '', people: 1 });
        }}
        title={selectedEvent ? `Book: ${selectedEvent.title}` : 'Book Activity'}
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg className="w-12 h-12 text-green-400 mx-auto animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-green-400 font-semibold">Booking confirmed!</p>
            <p className="text-gray-300 text-sm mt-2">We'll contact you soon with details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 ${isDark ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'bg-gray-100 border-gray-300 text-slate-900 placeholder-gray-500'} border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all`}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 ${isDark ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'bg-gray-100 border-gray-300 text-slate-900 placeholder-gray-500'} border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2`}>
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-slate-900'} border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2`}>
                Number of People
              </label>
              <input
                type="number"
                name="people"
                min="1"
                max="20"
                value={formData.people}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-slate-900'} border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 mt-6"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}
