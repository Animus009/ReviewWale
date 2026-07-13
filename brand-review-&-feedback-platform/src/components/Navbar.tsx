import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Pricing Estimator', href: '#pricing-calculator' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">Review Wala</span>
              <span className="text-[10px] font-bold text-blue-600 block -mt-1 tracking-wider uppercase">Social Reviews</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Support Helpline Call to Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/918597537739?text=${encodeURIComponent("Hi Review Wala! I clicked the 'Helpline' button in the top navigation bar of your website. I have some questions about campaign operations.")}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 transition-all duration-300 shadow-sm"
            >
              Helpline: +91 8597537739
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`https://wa.me/918597537739?text=${encodeURIComponent("Hi Review Wala! I clicked the mobile 'Chat with Us' button in the mobile header. I would like to inquire about social proof campaigns.")}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 transition-all bg-slate-900 text-white"
            >
              Chat Us
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Open dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2.5 shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
