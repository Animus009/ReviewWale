import React from 'react';
import { Heart, ShieldCheck, HelpCircle, Users, Award, Zap, Users2, CheckCircle2, PhoneCall, FileText, Wallet, FileSpreadsheet, HardDrive } from 'lucide-react';
import { motion } from 'motion/react';

const ceoImage = '/src/assets/images/regenerated_image_1783966999173.png';


// ----------------------------------------------------
// ABOUT US COMPONENT
// ----------------------------------------------------
export function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text content - Col 7 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Our Genesis & Mission
            </span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight animate-fade-in">
              Shifting Marketing Budgets Directly to Local Households
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Founded in **2025**, Review Wala emerged from a simple question: *What if brands could buy real, verified organic human feedback while directly uplifting communities?* 
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Large marketing networks pocket over 90% of review margins, delivering automated spam or bots that harm brand reputation. We turned this model upside down. We recruited and verified over 5,000 homemakers, retired citizens, and students across India to form our local reviewer network.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.05)" }}
                className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300"
              >
                <span className="text-xs font-bold text-blue-600 block mb-1">OUR VISION</span>
                <p className="text-xs text-slate-500">
                  To build the most transparent feedback-as-a-service agency in the world, funneling advertising funds back into local households.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.05)" }}
                className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300"
              >
                <span className="text-xs font-bold text-blue-600 block mb-1">OUR MISSION</span>
                <p className="text-xs text-slate-500">
                  Drive massive conversion growth for 500+ corporate brands while helping 10,000+ Indian families achieve secondary financial independence.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual content - Col 5 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 relative"
          >
            <div className="absolute inset-0 bg-blue-100/20 rounded-3xl rotate-2 scale-102 -z-10"></div>
            
            {/* Added Community Photo */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=800"
                alt="Happy multi-generational Indian family smiling warmly together"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">Empowered Communities</span>
                  <p className="text-white text-xs font-bold leading-snug">Supporting 5,000+ local Indian households with secondary income.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                Why Brands Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  { title: 'Zero Bot Guarantee', text: 'Each review is left by a unique real person with a real physical IP.' },
                  { title: 'Staggered Safety Timing', text: 'Reviews are delivered one-by-one to maintain fully natural growth curves.' },
                  { title: 'Video License Rights', text: 'Video testimonials are delivered in raw 1080p formats with full brand ad rights.' },
                  { title: 'Genuine Social Impact', text: '85% of each review fee goes straight into the bank accounts of community partners.' },
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// STATISTICS COMPONENT
// ----------------------------------------------------
export function StatsSection() {
  const stats = [
    { value: '50+', label: 'Brands Partnered', detail: 'Organic beauty, consumer products, and SaaS.' },
    { value: '10k+', label: 'Verified Reviews', detail: 'Videos, maps and products tested.' },
    { value: '150+', label: 'Families Supported', detail: 'Providing monthly school fees & secondary income.' },
    { value: '99.4%', label: 'Retention Rate', detail: 'Brands renewing active review schedules monthly.' },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center space-y-2 border-r last:border-0 border-slate-800 px-4"
            >
              <span className="block text-4xl sm:text-5xl font-mono font-black text-blue-400">
                {stat.value}
              </span>
              <span className="block text-sm font-bold text-white">
                {stat.label}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// PROCESS COMPONENT (Our Process)
// ----------------------------------------------------
export function ProcessSection() {
  const customSteps = [
    {
      number: '01',
      title: 'Requirements & Time Discussion',
      description: 'First, we speak to understand the specific requirements and determine the necessary time needed for each project.',
      icon: PhoneCall,
      detail: 'Discussion & Alignment'
    },
    {
      number: '02',
      title: 'Script & Format Selection',
      description: 'The brand provides the script. Choose the format once our customer success team calls you. Only 30-second videos will be given.',
      icon: FileText,
      detail: 'Brand Script & 30-Sec Videos'
    },
    {
      number: '03',
      title: 'Quote, Agreement & Deposit',
      description: 'Once we provide the project quotation, we start working immediately on the agreement of the brand. A first half (50%) payment is done.',
      icon: Wallet,
      detail: 'First Half Pay Done'
    },
    {
      number: '04',
      title: 'Live Tracking via Shared Excel',
      description: 'Track progress in real-time. Live updates on how many reviews are delivered will be provided in an Excel file and shared with you.',
      icon: FileSpreadsheet,
      detail: 'Live Excel Sheet Updates'
    },
    {
      number: '05',
      title: 'Final Secure Drive Delivery',
      description: 'Once the full project is completed, we will provide and transfer all custom video reviews directly on a secure Google Drive link provided by your brand.',
      icon: HardDrive,
      detail: 'Google Drive Link Delivery'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How We Work With You
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            A secure, structured, and completely transparent step-by-step workflow customized for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left items-stretch">
          {customSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.08)" }}
                className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col justify-between hover:border-blue-200 transition-all duration-300 group relative"
              >
                <div className="absolute top-4 right-4 text-3xl font-mono font-black text-blue-200/40 group-hover:text-blue-500/20 transition-colors">
                  {step.number}
                </div>
                
                <div>
                  <span className="w-10 h-10 bg-white shadow-xs border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-bold transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-950 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="text-[10px] font-mono text-slate-400 mt-6 border-t border-slate-100 pt-3">
                  {step.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// TEAM COMPONENT
// ----------------------------------------------------
export function TeamSection() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const ceo = {
    name: 'Aniket Mukherjee',
    role: 'Chief Executive Officer',
    company: 'Review Wala',
    image: ceoImage,
    bio: 'Aniket founded Review Wala with a vision to channel corporate advertising and branding budgets directly back into regional Indian households. Under his leadership, the platform has grown to support thousands of families with dignified micro-incomes while delivering authentic, staggered social proof that drives genuine conversions for our brand partners.',
    impact: 'Pioneered 100% direct-to-family micro-payments via UPI, helping homemakers and students fund education and small businesses.'
  };

  const initials = getInitials(ceo.name);

  return (
    <section id="team" className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Meet Our Founder
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Review Wala is built on a foundation of trust, quality, and direct community empowerment.
          </p>
        </div>

        {/* CEO Feature Card with Full-Size Image Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white border border-slate-150 rounded-3xl shadow-sm max-w-5xl mx-auto text-left relative overflow-hidden hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12"
        >
          {/* Left Column - Full Size Image */}
          <div className="md:col-span-5 relative h-96 md:h-auto min-h-[450px] bg-slate-100 overflow-hidden group">
            <img 
              src={ceo.image} 
              alt={ceo.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay gradients for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
            
            {/* Overlay Badge details */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-widest font-mono text-blue-400 bg-blue-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-blue-800/40 font-bold">
                Founder & Visionary
              </span>
              <h4 className="text-white text-lg font-black mt-2 leading-tight">{ceo.name}</h4>
              <p className="text-slate-300 text-xs mt-0.5">Durgapur, West Bengal, India</p>
            </div>
          </div>
          
          {/* Right Column - Story & Bio */}
          <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/60 rounded-full blur-3xl -z-10"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {ceo.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-extrabold tracking-wider uppercase mt-1">
                    {ceo.role}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400">
                    Founder, {ceo.company}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-black text-white shrink-0 shadow-xs">
                  {initials}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{ceo.bio}"
              </p>

              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 text-xs text-blue-800 font-semibold leading-relaxed mb-6">
                <span className="block text-[10px] uppercase tracking-wider text-blue-500 mb-1">Our Core Commitment</span>
                {ceo.impact}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-400">Direct CEO Hotline Enabled</span>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Online & Active
                </span>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/918597537739?text=${encodeURIComponent("Hi Aniket! I read about your mission as CEO of Review Wala on your website. I would like to explore partnering with you for a custom organic campaigns proposal!")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 px-6 rounded-xl text-xs transition-all flex items-center gap-2 shadow-xs group"
              >
                Connect with Aniket on WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
