import React from 'react';
import { Award, Users, MapPin, Smile } from 'lucide-react';


const stats = [
  { icon: Smile, label: 'Happy Travelers', value: '18K+' },
  { icon: MapPin, label: 'Global Destinations', value: '75+' },
  { icon: Users, label: 'Expert Tour Guides', value: '120+' },
  { icon: Award, label: 'Years Experience', value: '12+' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80"
              alt="Travelers"
              className="rounded-3xl shadow-lg w-full h-72 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&w=600&q=80"
              alt="Scenery"
              className="rounded-3xl shadow-lg w-full h-72 object-cover mt-8"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <span className="text-3xl font-extrabold text-brand-orange">4.9/5</span>
              <span className="text-xs text-gray-600 font-medium">Customer Rating<br />over 3,500+ reviews</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-brand-orange font-bold text-sm tracking-wider uppercase">
              About WanderLux
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              We Craft Immersive Travels That Stay With You Forever
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              Founded by passionate explorers, WanderLux provides authentic holiday experiences tailored to solo wanderers, couples, and families alike. We bridge modern travel convenience with local cultural immersion.
            </p>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Every route is personally tested, eco-conscious, and designed with flexibility in mind to ensure effortless, stress-free journeys.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-left">
                    <Icon className="w-6 h-6 text-primary-600 mb-2" />
                    <h4 className="text-2xl font-black text-gray-900">{item.value}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;