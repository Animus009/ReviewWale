import React, { useState } from 'react';
import { Sparkles, Heart, Users, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PricingCalculator() {
  const [googleCount, setGoogleCount] = useState<number>(100);
  const [videoCount, setVideoCount] = useState<number>(50);
  const [productCount, setProductCount] = useState<number>(20);
  const [isSaved, setIsSaved] = useState(false);
  const [brandName, setBrandName] = useState('');

  const googlePrice = 200;
  const videoPrice = 500;
  const productPrice = 600;

  const totalGoogle = googleCount * googlePrice;
  const totalVideo = videoCount * videoPrice;
  const totalProduct = productCount * productPrice;
  const grandTotal = totalGoogle + totalVideo + totalProduct;

  // Let's calculate families supported
  // Every ₹5,000 generated supports 1 family for a month with secondary micro-income.
  const familiesSupported = Math.max(1, Math.round(grandTotal / 5000));
  const totalReviews = googleCount + videoCount + productCount;

  // Form submit to simulate saving campaign estimate
  const handleLaunchCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) {
      return;
    }

    const messageText = `Hi Review Wala! I just calculated a custom campaign estimate for my brand: "${brandName}".
- Google Reviews: ${googleCount} reviews (₹${totalGoogle.toLocaleString()})
- Video Reviews: ${videoCount} reviews (₹${totalVideo.toLocaleString()})
- Product Testing: ${productCount} reviews (₹${totalProduct.toLocaleString()})
- Total Estimate: ₹${grandTotal.toLocaleString()}
- Families Supported: ${familiesSupported} families

Please help us set up and start this campaign!`;

    const url = `https://wa.me/918597537739?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 5000);
  };

  return (
    <section id="pricing-calculator" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase px-3 py-1 bg-blue-50 rounded-full">
            Interactive Quote Estimator
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Calculate Your ROI & Social Impact
          </h2>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            Customize your reviews mix, estimate the upfront cost, and visualize how your marketing budget empowers local Indian families with life-changing secondary income.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Controls Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                Customize Your Package
              </h3>

              {/* Service 1: Google Reviews */}
              <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 hover:border-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: '3s' }}></span>
                    <label className="font-semibold text-slate-800">Google Reviews</label>
                  </div>
                  <span className="text-sm text-slate-500 font-mono">₹200 / review</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={googleCount}
                    onChange={(e) => setGoogleCount(parseInt(e.target.value) || 0)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <input
                    type="number"
                    min="0"
                    value={googleCount}
                    onChange={(e) => setGoogleCount(Math.min(1000, parseInt(e.target.value) || 0))}
                    className="w-20 px-2 py-1 text-center font-mono border border-slate-200 rounded bg-white text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>0 reviews</span>
                  <span className="font-semibold text-slate-600">Subtotal: ₹{totalGoogle.toLocaleString()}</span>
                  <span>500+ reviews</span>
                </div>
              </div>

              {/* Service 2: Video Reviews */}
              <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 hover:border-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <label className="font-semibold text-slate-800">Video Testimonials</label>
                  </div>
                  <span className="text-sm text-slate-500 font-mono">₹500 / review</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="300"
                    step="5"
                    value={videoCount}
                    onChange={(e) => setVideoCount(parseInt(e.target.value) || 0)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <input
                    type="number"
                    min="0"
                    value={videoCount}
                    onChange={(e) => setVideoCount(Math.min(1000, parseInt(e.target.value) || 0))}
                    className="w-20 px-2 py-1 text-center font-mono border border-slate-200 rounded bg-white text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>0 reviews</span>
                  <span className="font-semibold text-slate-600">Subtotal: ₹{totalVideo.toLocaleString()}</span>
                  <span>300+ reviews</span>
                </div>
              </div>

              {/* Service 3: Product Reviews */}
              <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 hover:border-amber-100">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    <label className="font-semibold text-slate-800">Physical Product Testing</label>
                  </div>
                  <span className="text-sm text-slate-500 font-mono">₹600 / review</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="2"
                    value={productCount}
                    onChange={(e) => setProductCount(parseInt(e.target.value) || 0)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <input
                    type="number"
                    min="0"
                    value={productCount}
                    onChange={(e) => setProductCount(Math.min(500, parseInt(e.target.value) || 0))}
                    className="w-20 px-2 py-1 text-center font-mono border border-slate-200 rounded bg-white text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>0 reviews</span>
                  <span className="font-semibold text-slate-600">Subtotal: ₹{totalProduct.toLocaleString()}</span>
                  <span>100+ reviews</span>
                </div>
              </div>
            </div>

            {/* Campaign Inquiry Submission */}
            <form onSubmit={handleLaunchCampaign} className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                  <label htmlFor="calculator-brand-name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Submit Campaign Request
                  </label>
                  <input
                    id="calculator-brand-name"
                    type="text"
                    required
                    placeholder="Enter your brand name (e.g. Aura Cosmetics)"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all duration-300 focus:border-blue-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm shrink-0"
                >
                  Get Custom Campaign Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              <AnimatePresence>
                {isSaved && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-600 font-medium text-xs mt-3 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    Proposal request received for "{brandName}"! Our coordinator team based in Durgapur (+91 8597537739) will contact you shortly with a personalized proposal.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Social Impact & Summary Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <span className="text-xs font-semibold text-blue-400 bg-blue-950/50 border border-blue-900/50 rounded-full px-3 py-1 uppercase tracking-wider">
                Investment & Impact Summary
              </span>

              <div className="mt-8">
                <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Total Upfront Deposit</span>
                <div className="flex items-baseline gap-1.5">
                  <motion.span 
                    key={grandTotal}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl sm:text-5xl font-mono font-extrabold text-blue-400"
                  >
                    ₹{grandTotal.toLocaleString()}
                  </motion.span>
                  <span className="text-slate-400 text-sm">INR</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 italic">
                  *100% transparent pricing. Upfront payment directly funds verified households.
                </p>
              </div>

              {/* Counting Meter Display */}
              <div className="mt-8 border-t border-slate-800 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl hover:border-slate-750 transition-colors">
                    <Users className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-xs text-slate-400 block">Total Reviews</span>
                    <motion.span 
                      key={totalReviews}
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-xl font-mono font-bold text-white block"
                    >
                      {totalReviews}
                    </motion.span>
                  </div>
                  <div className="bg-blue-950/20 border border-blue-900/30 p-4 rounded-xl hover:border-blue-900/50 transition-colors">
                    <Heart className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-xs text-blue-400 block">Families Empowered</span>
                    <motion.span 
                      key={familiesSupported}
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-xl font-mono font-bold text-blue-400 block"
                    >
                      ~{familiesSupported}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Value list */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-100">Staggered Delivery Included</h5>
                    <p className="text-xs text-slate-400">
                      Distributed one-by-one naturally to prevent brand platform flagging.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-100">100% Direct Payouts</h5>
                    <p className="text-xs text-slate-400">
                      Funds are distributed safely to real homemakers and regional families.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-100">Dynamic Live Tracking</h5>
                    <p className="text-xs text-slate-400">
                      Watch live video clips and verify ratings as they compile in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 relative z-10">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
                <span>Income distributed to families:</span>
                <span className="font-mono text-emerald-400 font-semibold">₹{Math.round(grandTotal * 0.85).toLocaleString()}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed text-center italic bg-slate-800/20 p-3 rounded-lg border border-slate-800/40">
                "We launched Aura Cosmetics in 2025 and supported 15 families while bringing our average Google Maps rating from 3.2 to 4.8!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
