import React, { useState, useEffect } from 'react';
import { Play, ShieldCheck, Heart, ArrowRight, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 23); // 14 mins 23 secs initially
  const [completedCount, setCompletedCount] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCompletedCount((c) => (c >= 200 ? 142 : c + 1));
          return Math.floor(Math.random() * (1200 - 600 + 1)) + 600;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} mins`;
  };
  return (
    <section id="hero" className="relative pt-28 pb-20 bg-white overflow-hidden">
      
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and CTAs - Col 7 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-blue-500 fill-current" />
              Empowering Families via Honest Marketing
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Aesthetic Video & Google Reviews That <span className="text-blue-600 relative inline-block">
                Build Trust
                <span className="absolute left-0 bottom-1.5 w-full h-2 bg-blue-200/60 -z-10 rounded"></span>
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              We coordinate real people and low-income families to test your products and deliver verified reviews. Build authentic brand authority while creating sustainable income channels for deserving households. Delivering 5-star customer feedback, one-by-one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-2xl shadow-lg shadow-blue-200 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Estimate Campaign Cost
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/918597537739?text=${encodeURIComponent("Hi Review Wala! I clicked the main CTA 'Chat via WhatsApp' in your website hero section. I would like to inquire about setting up a custom organic reviews campaign for my business!")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                Chat via WhatsApp
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              </motion.a>
            </div>

            {/* Quick social proof markers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              {[
                { val: '50+', label: 'Brands Delivered', color: 'text-slate-900' },
                { val: '10,000+', label: 'Reviews Posted', color: 'text-blue-600' },
                { val: '₹3.5M+', label: 'Family Income', color: 'text-emerald-600' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                >
                  <span className={`block text-2xl font-bold font-mono ${item.color}`}>{item.val}</span>
                  <span className="text-xs text-slate-500">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Interactive Mockup - Col 5 */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-3xl -rotate-3 scale-105 opacity-60 -z-10 blur-sm"></div>
            
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Campaign Monitor V1.0</span>
              </div>

              {/* Campaign Impact Banner Image / Hero Image Cover */}
              <div className="mb-4 rounded-2xl overflow-hidden aspect-video relative border border-slate-100 group shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
                  alt="Review Wala Impact Drive" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase font-black tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded-full mb-1.5 shadow-sm">
                    <Heart className="w-2.5 h-2.5 fill-current" /> Social Impact Cover
                  </span>
                  <h4 className="text-xs sm:text-sm font-black tracking-tight leading-tight">Empowering Regional Families One Review At A Time</h4>
                </div>
              </div>

              {/* Simulated Delivery Wave */}
              <div className="space-y-4">
                
                {/* Simulated Review Card */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-100 relative transition-colors hover:border-blue-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=120"
                        alt="Sadhana R."
                        className="w-10 h-10 rounded-full object-cover border border-blue-100 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Sadhana R. & Family</span>
                        <span className="text-[10px] text-slate-400 font-mono">Durgapur, WB</span>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-current animate-pulse" style={{ animationDelay: `${s * 150}ms` }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    "We tested the sunscreen and recorded our first selfie video review together. The payout helped cover our children's textbooks..."
                  </p>
                  <span className="absolute bottom-2 right-2 text-[8px] font-mono uppercase bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                    Video Completed
                  </span>
                </motion.div>

                {/* Simulated counting meter widget */}
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  href={`https://wa.me/918597537739?text=${encodeURIComponent(
                    `Hi Review Wala! I am watching your live review delivery meter (currently at ${completedCount}/200 with ${formatTime(timeLeft)} remaining for the next delivery). I would like to learn more about how we can start a staggered campaign like this!`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 block hover:bg-slate-950 hover:border-slate-700 transition-all cursor-pointer group text-left"
                >
                  <div className="flex justify-between items-center mb-1 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                      Live Counting Meter:
                    </span>
                    <span className="font-mono text-blue-400 font-bold group-hover:underline">
                      {completedCount} / 200 Delivered
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-1000" 
                      style={{ width: `${(completedCount / 200) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] mt-2 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-blue-500 fill-current" /> Supported 18 households
                    </span>
                    <span className="font-mono text-blue-400 font-bold group-hover:text-white transition-colors">
                      Next deliver: {formatTime(timeLeft)}
                    </span>
                  </div>
                </motion.a>

                {/* Micro-impact proof */}
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs text-emerald-800 font-medium leading-tight">
                    Each reviewer profile is matched, vetted, and paid 85% of standard commission!
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
