import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

// Inline Social SVG Icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { name: 'Facebook', component: FacebookIcon },
  { name: 'Twitter', component: TwitterIcon },
  { name: 'Instagram', component: InstagramIcon },
  { name: 'YouTube', component: YoutubeIcon },
];

const Footer = () => {
  return (
    <footer className="bg-[#0b1626] text-gray-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* CamTrip Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CamTrip Logo" className="h-11 w-auto bg-white/10 p-1 rounded-xl" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  Cam<span className="text-[#00a8b5]">Trip</span>
                </span>
                <span className="text-[9px] tracking-widest text-gray-400 font-semibold uppercase">
                  Discover Cambodia
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your premier travel gateway to discovering the wonders of Cambodia, Angkor Wat, pristine islands, and authentic cultural journeys.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map(({ name, component: IconComponent }) => (
                <a
                  key={name}
                  href="#home"
                  aria-label={name}
                  className="w-9 h-9 bg-gray-900 hover:bg-[#ff7a22] text-gray-400 hover:text-white rounded-full flex items-center justify-center transition"
                >
                  <IconComponent />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Destinations', 'Tour Packages', 'About Us', 'Travel Blog'].map((link) => (
                <li key={link}>
                  <a href="#home" className="hover:text-[#00a8b5] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cambodia Tours */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Top Tours</h4>
            <ul className="space-y-2.5 text-sm">
              {['Angkor Wat Sunrise', 'Koh Rong Islands', 'Phnom Penh Heritage', 'Kampot & Kep Escape', 'Mondulkiri Wildlife'].map((link) => (
                <li key={link}>
                  <a href="#destinations" className="hover:text-[#00a8b5] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff7a22] flex-shrink-0 mt-1" />
                <span>Phnom Penh & Siem Reap, Cambodia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff7a22] flex-shrink-0" />
                <span>+855 (0) 23 888 999</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff7a22] flex-shrink-0" />
                <span>info@camtrip.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} CamTrip Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#home" className="hover:underline">Privacy Policy</a>
            <a href="#home" className="hover:underline">Terms of Service</a>
            <a href="#home" className="hover:underline">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;