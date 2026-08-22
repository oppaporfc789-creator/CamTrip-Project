import React, { useState } from 'react';
import { Search, MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';

const Hero = ({ onSearch, onOpenBooking }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({ destination, duration, budget });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 mb-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
          Explore the World with WanderLux
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Discover Extraordinary <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-orange-300 to-brand-orange">
            Destinations & Journeys
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-light">
          Tailor-made itineraries, premium stays, and unforgettable adventures across 50+ countries.
        </p>

        {/* Quick Action */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all shadow-xl hover:shadow-orange-500/40 flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#destinations"
            className="px-8 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold transition-all"
          >
            View Popular Tours
          </a>
        </div>

        {/* Search / Filter Card */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl text-gray-800 max-w-4xl mx-auto">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Destination Input */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <MapPin className="text-primary-600 w-5 h-5 flex-shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-semibold text-gray-500">Location</label>
                <input
                  type="text"
                  placeholder="Where to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Duration Input */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <Calendar className="text-primary-600 w-5 h-5 flex-shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-semibold text-gray-500">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none"
                >
                  <option value="">Any Duration</option>
                  <option value="3-5">3-5 Days</option>
                  <option value="6-8">6-8 Days</option>
                  <option value="9+">9+ Days</option>
                </select>
              </div>
            </div>

            {/* Budget Input */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <DollarSign className="text-primary-600 w-5 h-5 flex-shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-semibold text-gray-500">Max Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none"
                >
                  <option value="">Any Budget</option>
                  <option value="700">Under $700</option>
                  <option value="1000">Under $1000</option>
                  <option value="1500">Under $1500</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full h-full min-h-[52px] bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-teal-500/30"
            >
              <Search className="w-5 h-5" />
              Search Tours
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Hero;