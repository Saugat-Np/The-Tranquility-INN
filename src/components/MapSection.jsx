import { useTheme } from '../context/ThemeContext';
import locationInMap from '../assets/location_in_map.png';

export default function MapSection() {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} font-semibold mb-2`}>
            📍 FIND US
          </p>
          <h2 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Our Location
          </h2>
          <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'} text-lg max-w-2xl mx-auto`}>
            Nestled in the heart of Pokhara, Nepal. Visit us and experience the beauty of the Himalayas.
          </p>
        </div>

        {/* Map Container */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img src={locationInMap} alt="location in map" />
        </div>

        {/* Google Maps Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/dir//Tranquility%20Inn%20Pokhara%20Nepal%20Lakeside%20Kaski%20District/@28.211287,83.983624,16z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Directions 🧭
          </a>
        </div>

        {/* Location Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
            <div className="text-4xl mb-3">📍</div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>
              Address
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Lakeside, Pokhara<br />
              Kaski District<br />
              Nepal
            </p>
          </div>

          {/* Phone */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
            <div className="text-4xl mb-3">📞</div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>
              Contact
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Phone: +977 61 XXX XXXX<br />
              Email: info@tranquilityinn.com<br />
              Toll Free: 1-800-STAY
            </p>
          </div>

          {/* Hours */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
            <div className="text-4xl mb-3">🕐</div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>
              Hours
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Check-in: 2:00 PM<br />
              Check-out: 11:00 AM<br />
              24/7 Front Desk
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
