import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, MessageCircle, Send, CheckCircle2, Phone, MapPin, Clock, Heart, Star } from 'lucide-react';
import { faqItems, blogPosts } from '../data';

// ----------------------------------------------------
// FAQS COMPONENT
// ----------------------------------------------------
export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Answers & Clarity
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Everything you need to know about our review sourcing model, payouts, and compliance safety.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-5 flex justify-between items-center font-bold text-slate-900 hover:bg-blue-50/20 text-sm sm:text-base gap-4"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    {item.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm border-t border-slate-50 leading-relaxed bg-slate-50/30">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// BLOG COMPONENT
// ----------------------------------------------------
export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Knowledge Hub
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Latest Industry & Social Insights
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Read guides on user-generated content, organic SEO strategies, and the progress of the micro-income gig economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white font-mono text-[9px] uppercase font-bold py-1 px-2.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-mono text-slate-400 block mb-2">
                    {post.date} • {post.readTime}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-3 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author footer */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
                </div>
                <span className="text-xs text-blue-600 font-bold flex items-center gap-0.5 cursor-pointer hover:underline">
                  Read article <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// CONTACT SECTION WITH FORM & MAPS & WHATSAPP
// ----------------------------------------------------
// ----------------------------------------------------
// CONTACT SECTION WITH MAPS & WHATSAPP ONLY
// ----------------------------------------------------
export function ContactSection() {
  // Simulated whatsapp send
  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [showWhatsappChat, setShowWhatsappChat] = useState(false);

  const handleWhatsappSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappMsg.trim()) return;
    const url = `https://wa.me/918597537739?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(url, '_blank');
    setWhatsappMsg('');
    setShowWhatsappChat(false);
  };

  return (
    <section id="contact-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Connect With Our Team
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Launch Your Staggered Campaign
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Have questions about physical shipping logistics or specific targeting? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Information & Map - Col 5 */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-slate-900">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 text-xs sm:text-sm text-slate-600">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-800">Phone Support</span>
                    <span>+91 8597537739</span>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-800">Community Head Office</span>
                    <span>Fuljhor, Aryabhatta , Durgapur 713212</span>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm text-slate-600">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-800">Hours</span>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Regional Map Illustration */}
            <div className="bg-slate-900/5 p-4 rounded-2xl border border-slate-100 text-center relative overflow-hidden h-44 flex flex-col justify-center items-center">
              <MapPin className="w-8 h-8 text-blue-500 animate-bounce mb-2" />
              <span className="font-bold text-xs text-slate-800 block">Durgapur Operations Base</span>
              <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed mt-1">
                Connecting 5,000+ reviewers in Durgapur, Kolkata, Mumbai, Jaipur, Kochi, & Delhi. Direct UPI disbursements on validation.
              </p>
              <div className="absolute top-2 right-2 bg-blue-600 text-white font-mono text-[8px] font-bold py-0.5 px-2 rounded uppercase">
                Active Node
              </div>
            </div>

            {/* Floating WhatsApp chat trigger */}
            <div>
              <button
                onClick={() => setShowWhatsappChat(!showWhatsappChat)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-100"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Chat with Campaign Lead on WhatsApp
              </button>

              {/* simulated whatsapp panel */}
              {showWhatsappChat && (
                <form onSubmit={handleWhatsappSend} className="mt-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl animate-fade-in">
                  <span className="text-[10px] text-emerald-800 font-bold block mb-2 uppercase font-mono">Whatsapp simulation</span>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      required
                      placeholder="Hi Review Wala, we need 200 reviews for our cosmetics brand..."
                      value={whatsappMsg}
                      onChange={(e) => setWhatsappMsg(e.target.value)}
                      className="flex-1 bg-white border border-emerald-200 text-xs px-3 py-2 rounded-xl text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <button type="submit" className="bg-emerald-600 text-white p-2 rounded-xl hover:bg-emerald-700 shrink-0">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Campaign Proposal Card - Col 7 */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-150 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <MessageCircle className="w-6 h-6 fill-current text-emerald-600" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Get a Custom Campaign Proposal
                  </h3>
                  <p className="text-[10px] sm:text-xs text-emerald-600 font-extrabold uppercase tracking-wider mt-0.5">
                    Fast & Premium Support on WhatsApp
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Skip the complicated forms! We coordinate all our bespoke campaigns and pilot programs directly through our secure WhatsApp channels for speed, transparency, and personal coordination.
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">What you'll receive in 30 minutes:</h4>
                <ul className="space-y-3">
                  {[
                    { title: 'Tailored Quotation', text: 'Custom pricing based on your required volume (Google Maps, Reels, or product reviews).' },
                    { title: 'Geographic Match Profile', text: 'A review distribution plan matching your target cities and consumer profile in India.' },
                    { title: 'Staggered Timeline Strategy', text: 'A natural, organic posting schedule to ensure complete platform safety.' },
                    { title: 'Sample Formats & Terms', text: 'A PDF copy of our service level agreement and direct payout verification proofs.' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-xs text-slate-600">
                      <span className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-md flex items-center justify-center font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <strong className="text-slate-800 font-bold">{item.title}:</strong> {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-6 sm:mt-8">
              <a
                href={`https://wa.me/918597537739?text=${encodeURIComponent("Hi Review Wala! I would like to request a Custom Campaign Proposal for my brand. I want to discuss targeting, volume pricing, and staggered timelines.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-6 rounded-2xl text-xs sm:text-sm text-center transition-all shadow-md shadow-emerald-100 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Request Custom Campaign Proposal via WhatsApp →
              </a>
              <span className="block text-center text-[10px] text-slate-400 mt-3 font-mono">
                Clicking opens a prefilled chat with our campaign operations team (+91 8597537739)
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// FOOTER COMPONENT
// ----------------------------------------------------
export function FooterSection() {
  const [showPolicy, setShowPolicy] = useState<'privacy' | 'terms' | null>(null);

  const policyContent = {
    privacy: "Review Wala respects user data and reviewer privacy. We disburse 85% of payouts directly to verified household UPI details. No bot logs or account credentials are stored on our servers. Verified reviews are staggered organically to fully respect Google Maps, TikTok, and social media platform guidelines.",
    terms: "By launching a campaign, the brand owner guarantees that product samples shipped to households are safe, clinically tested, and free of toxic components. Payments are processed upfront in INR and held in a secure community coordinator trust until direct reviewer approval."
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Logo block - Col 4 */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4.5 h-4.5 text-white fill-current" />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">Review Wala</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We bridge the gap between enterprise brands seeking organic reviews and regional Indian households seeking micro-income opportunities. Proudly operating since 2025.
            </p>
          </div>

          {/* Quick links - Col 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#about-us" className="hover:text-blue-400 transition-colors">Our Genesis</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Review Solutions</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a>
              <a href="#pricing-calculator" className="hover:text-blue-400 transition-colors">Interactive Estimator</a>
            </div>
          </div>

          {/* Services - Col 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services Matrix</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#services" className="hover:text-blue-400 transition-colors">Google Maps Reviews (₹200)</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Video Testimonials (₹500)</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Physical Product Testing (₹600)</a>
            </div>
          </div>

          {/* Support / Help Desk - Col 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Help Desk</h4>
            <div className="flex flex-col space-y-1 text-xs">
              <span className="text-blue-400 font-mono font-bold">+91 8597537739</span>
              <span className="text-[10px] text-slate-500">Mon - Sat: 9:00 AM - 7:00 PM IST</span>
              <span className="text-[10px] text-slate-500 mt-1">Durgapur Head Office</span>
            </div>
          </div>

        </div>

        {/* Footer legal & policy details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <span>© 2026 Review Wala Social Reviews. All rights reserved. Created in Durgapur, India.</span>
          
          <div className="flex gap-4">
            <button onClick={() => setShowPolicy('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button onClick={() => setShowPolicy('terms')} className="hover:text-blue-400 transition-colors">Terms & Conditions</button>
          </div>
        </div>

        {/* Popup policy */}
        {showPolicy && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 max-w-md w-full p-6 rounded-2xl shadow-2xl relative text-slate-300">
              <button onClick={() => setShowPolicy(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
              <h4 className="font-bold text-white text-base mb-3 uppercase tracking-wider">
                {showPolicy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h4>
              <p className="text-xs leading-relaxed italic bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                {policyContent[showPolicy]}
              </p>
              <button
                onClick={() => setShowPolicy(null)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-xl text-xs mt-6"
              >
                Accept & Close
              </button>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
}
