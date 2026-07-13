import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
  const customTestimonials = [
    {
      id: 'test-1',
      name: 'Anjali Sharma',
      role: 'Founder',
      company: 'Aura Cosmetics',
      rating: 5,
      comment: 'The video reviews were stunningly authentic. Customers loved seeing real families talking about our face serum. Best of all, we knew our marketing budget was directly supporting families who needed the income. A beautiful double-sided mission!',
      isReviewer: false,
    },
    {
      id: 'test-2',
      name: 'Sunita Deshmukh',
      role: 'Review Producer',
      company: 'Homemaker Partner',
      rating: 5,
      comment: 'With the ₹12,000 I earned from doing product and video reviews in my spare time, I could buy a sewing machine and support my family. I love sharing my real opinions on great products and getting paid fairly.',
      isReviewer: true,
    },
    {
      id: 'test-3',
      name: 'Vikram Malhotra',
      role: 'Growth Lead',
      company: 'FlexFit Wear',
      rating: 5,
      comment: 'We paid for 100 video reviews and watched them flow in one-by-one in our owner dashboard. The transparency of seeing exactly which family recorded each video was refreshing. Our ads convert 3x higher now.',
      isReviewer: false,
    },
    {
      id: 'test-4',
      name: 'Rajesh Patil',
      role: 'Local Guide & Reviewer',
      company: 'Student Partner',
      rating: 5,
      comment: 'Being part of the regional Google Maps review team allows me to highlight great local businesses. The transparency of the payouts is excellent, and it gives students like me reliable pocket money.',
      isReviewer: true,
    },
    {
      id: 'test-5',
      name: 'Priya Nair',
      role: 'Product Marketer',
      company: 'AyurGlow Skincare',
      rating: 5,
      comment: 'We sent our physical skincare kits to 50 homemakers and received stunning 30-second reels of them using it. It is organic content that resonates far better than any professional model could achieve.',
      isReviewer: false,
    },
    {
      id: 'test-6',
      name: 'Meera Bai',
      role: 'Verified Homemaker',
      company: 'Community Partner',
      rating: 5,
      comment: 'Reviewing household items has given me a sense of independence. I can earn an additional ₹8,000 to ₹10,000 every month without leaving my home. It is a very dignified and encouraging way to earn.',
      isReviewer: true,
    },
    {
      id: 'test-7',
      name: 'Amit Singhal',
      role: 'Digital Marketing Lead',
      company: 'SipEnergy Brands',
      rating: 5,
      comment: 'Staggered campaigns on Google Maps improved our local storefront footfall by 180%. The team is based in Durgapur (+91 8597537739) and handled the scheduling perfectly so it remained 100% organic.',
      isReviewer: false,
    },
    {
      id: 'test-8',
      name: 'Kavitha Ramasamy',
      role: 'Review Producer',
      company: 'Student Partner',
      rating: 5,
      comment: 'The micro-payouts for verified product testing helped me fund my online learning course. Writing detailed product feedback is extremely easy and flexible.',
      isReviewer: true,
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Hear From Our Partners & Reviewers
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            Real feedback from our satisfied brand clients and empowered home reviewers. Authentic experiences built on transparency, quality, and mutual support.
          </p>
        </div>

        {/* Testimonials Grid (8 Reviews, No Photos, No Listen, No Inquire Campaign) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customTestimonials.map((testimonial, idx) => {
            const initials = getInitials(testimonial.name);
            const isReviewer = testimonial.isReviewer;

            return (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 12px 25px -10px rgba(0,0,0,0.05)" }}
                className={`border rounded-3xl p-6 flex flex-col justify-between shadow-xs transition-all duration-350 ${
                  isReviewer 
                    ? 'bg-emerald-50/25 border-emerald-100/60 hover:border-emerald-200' 
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <div>
                  {/* Category Badge & Rating */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                      isReviewer 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}>
                      {isReviewer ? 'Reviewer' : 'Brand Client'}
                    </span>
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 text-xs leading-relaxed italic mb-6">
                    "{testimonial.comment}"
                  </p>
                </div>

                {/* Footer Section (No Photos) */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    {/* Initials Placeholder instead of photo */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-extrabold text-white shrink-0 shadow-xs ${
                      isReviewer 
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                        : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                    }`}>
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-xs text-slate-900 truncate">{testimonial.name}</h4>
                      <p className="text-[9px] text-slate-500 truncate">{testimonial.role}</p>
                      <p className="text-[8px] font-mono text-slate-400 truncate">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
