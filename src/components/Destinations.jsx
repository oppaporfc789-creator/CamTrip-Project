import React, { useState } from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import { destinations } from '../data/travelData';

const categories = ["All", "Beach & Islands", "Tropical Paradise", "Cultural & Heritage", "Mountains & Snow", "Nature & Wildlife"];

const Destinations = ({ onSelectDestination }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filtered = activeTab === "All"
    ? destinations
    : destinations.filter(d => d.category === activeTab);

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-brand-orange font-bold text-sm tracking-wider uppercase">
              Featured Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Popular Vacation Spots
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-gray-700 transition"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  {item.duration}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>{item.rating}</span>
                      <span className="text-gray-400 text-xs">({item.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-gray-500 block">Starting from</span>
                    <span className="text-2xl font-black text-gray-900">${item.price}</span>
                    <span className="text-xs text-gray-500"> /person</span>
                  </div>

                  <button
                    onClick={() => onSelectDestination(item)}
                    className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-semibold transition shadow-sm hover:shadow-teal-500/30"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;