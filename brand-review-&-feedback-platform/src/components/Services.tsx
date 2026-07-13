import React from 'react';
import { Search, Video, Package, ShieldCheck, Check } from 'lucide-react';
import { servicesData } from '../data';
import { motion } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-blue-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-blue-600" />;
      case 'Package':
        return <Package className="w-6 h-6 text-amber-600" />;
      default:
        return <Search className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Our Review Solutions
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Tailored Social Proof Categories
          </h2>
          <p className="text-slate-600 text-lg mt-3 leading-relaxed">
            Choose the reviews format that matches your marketing goals. All packages support staggering schedules and fair family wages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, idx) => {
            const isVideo = service.id === 'video-reviews';
            const themeBg = service.id === 'video-reviews' ? 'border-blue-200 shadow-blue-100/50' : service.id === 'google-reviews' ? 'border-blue-100' : 'border-amber-100';
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 15px 35px -10px rgba(0,0,0,0.06)" }}
                className={`bg-white border rounded-3xl p-8 shadow-sm flex flex-col justify-between transition-all duration-300 relative group ${themeBg}`}
              >
                {isVideo && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 animate-pulse" style={{ animationDuration: '3s' }}>
                    Most Popular & Highest Conversion
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {getIcon(service.icon)}
                    </span>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-slate-400 font-semibold">Price per feedback</span>
                      <span className="text-2xl font-mono font-black text-slate-900">₹{service.price}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-4 mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Campaign Deliverables</span>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2 text-xs text-slate-600 items-start">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits list */}
                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Expected Business ROI</span>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex gap-2 text-xs text-slate-600 items-start">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="italic font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const messageText = `Hi Review Wala! I am interested in your "${service.title}" campaign solution. Please share details and pricing on how we can get started!`;
                      const url = `https://wa.me/918597537739?text=${encodeURIComponent(messageText)}`;
                      window.open(url, '_blank');
                      onSelectService(service.id);
                    }}
                    className={`w-full font-bold py-3.5 px-6 rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 ${
                      isVideo 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200' 
                        : 'bg-slate-950 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {service.ctaText}
                  </motion.button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
