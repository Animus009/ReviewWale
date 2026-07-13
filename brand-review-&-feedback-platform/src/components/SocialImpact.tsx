import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialImpactSection() {
  // Google Drive File IDs from the provided links
  const video1Id = "1Kt8T-6rOx7cgttt_7fzBotcXgXqKHDpt";
  const video2Id = "1sTAWTIxEh82BFRD0QlFWjYZvindG3fzv";

  // Build Google Drive Preview URLs
  const embedUrl1 = `https://drive.google.com/file/d/${video1Id}/preview`;
  const embedUrl2 = `https://drive.google.com/file/d/${video2Id}/preview`;

  return (
    <section id="social-videos" className="py-20 bg-slate-50 overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Centered Statement Above the Videos */}
        <div className="text-center max-w-lg mx-auto mb-10 px-4">
          <span className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full text-rose-700 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
            <Heart className="w-3 h-3 text-rose-500 fill-current" />
            Zero Hunger Pledge
          </span>
          <p className="text-slate-800 text-sm sm:text-base md:text-lg font-bold leading-relaxed px-1 sm:px-2">
            Every campaign purchase on our platform directly funds freshly cooked hot meals and dry ration drives to feed regional families in need.
          </p>
        </div>

        {/* Two Portrait Videos Side-by-Side */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-2xl mx-auto">
          
          {/* Portrait Video 1 Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[270px] aspect-[9/16] bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 shadow-lg group select-none"
          >
            {/* Embedded Google Drive Player */}
            <iframe
              src={embedUrl1}
              title="Campaign video 1"
              allow="autoplay; encrypted-media; picture-in-picture"
              className="w-full h-full object-cover scale-[1.25]" // Slight scale to crop player frames and borders beautifully
              style={{ border: 'none' }}
            />

            {/* Active Video Tag Label */}
            <div className="absolute bottom-4 left-4 z-30 bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg pointer-events-none">
              <span className="text-[10px] font-mono text-white font-bold">Campaign Drive V1</span>
            </div>
          </motion.div>

          {/* Portrait Video 2 Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-[270px] aspect-[9/16] bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 shadow-lg group select-none"
          >
            {/* Embedded Google Drive Player */}
            <iframe
              src={embedUrl2}
              title="Campaign video 2"
              allow="autoplay; encrypted-media; picture-in-picture"
              className="w-full h-full object-cover scale-[1.25]" // Slight scale to crop player frames and borders beautifully
              style={{ border: 'none' }}
            />

            {/* Active Video Tag Label */}
            <div className="absolute bottom-4 left-4 z-30 bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg pointer-events-none">
              <span className="text-[10px] font-mono text-white font-bold">Campaign Drive V2</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
