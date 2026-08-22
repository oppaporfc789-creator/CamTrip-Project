import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-700 via-teal-700 to-emerald-800 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="text-orange-300 font-semibold text-sm tracking-wider uppercase">
              Exclusive Travel Deals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
              Get 20% Off Your Next Expedition
            </h2>
            <p className="text-teal-100 text-base mb-8 font-light">
              Subscribe to our newsletter for flash sales, curated guides, and secret travel tips.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-teal-300" />
                Thank you for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-3.5 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange flex-1 text-sm shadow-inner"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-semibold transition shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;