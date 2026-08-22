import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import logo from '../assets/logo.jpg'; // Make sure the image is in src/assets/

const Navbar = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* CamTrip Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="CamTrip Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight leading-none ${
                scrolled ? 'text-[#0e2a52]' : 'text-white'
              }`}>
                Cam<span className="text-[#00a8b5]">Trip</span>
              </span>
              <span className={`text-[9px] tracking-widest font-semibold uppercase ${
                scrolled ? 'text-gray-500' : 'text-gray-300'
              }`}>
                Discover Cambodia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#00a8b5] ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#ff7a22] hover:bg-[#e06616] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Book a Tour
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#00a8b5] hover:bg-teal-50 rounded-lg transition"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 bg-[#ff7a22] text-white py-3 rounded-xl font-medium shadow-md flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Book a Tour
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;