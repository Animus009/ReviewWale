import { Service, ProcessStep, Project, Testimonial, TeamMember, FAQItem, BlogPost, ReviewCampaign, BrandReview } from './types';

export const servicesData: Service[] = [
  {
    id: 'google-reviews',
    title: 'Verified Google Reviews',
    description: 'Authentic 5-star Google Reviews posted by real, verified individuals across different locations.',
    price: 200,
    icon: 'Search',
    features: [
      '100% Unique, real accounts',
      'Location-diverse reviewers',
      'Natural, staggered posting schedules',
      'No bot accounts or standard review templates',
    ],
    benefits: [
      'Boosts local SEO rank on Google Maps',
      'Increases trust for searching customers',
      'Outperforms generic ad campaigns by 3.5x',
      'Provides micro-income to local Indian households',
    ],
    ctaText: 'Start Google Campaign',
  },
  {
    id: 'video-reviews',
    title: 'High-Impact Video Testimonials',
    description: 'Enthusiastic, natural selfie-style video reviews of your brand or service created by diverse families and individuals.',
    price: 500,
    icon: 'Video',
    features: [
      'Spontaneous, non-scripted feel',
      'High-definition smartphone video feedback',
      'Diverse age groups and backgrounds',
      'Full usage rights for ads & social media',
    ],
    benefits: [
      'Increases landing page conversion rate by up to 80%',
      'Creates emotional connections with target audiences',
      'Perfect for TikTok, Instagram Reels, and YouTube Shorts',
      'Direct high-value income source for supporting families',
    ],
    ctaText: 'Book Video Campaign',
  },
  {
    id: 'product-reviews',
    title: 'Comprehensive Product Testing & Review',
    description: 'Physical product testing and organic content creation. Send your product to our network of households for premium detailed reviews.',
    price: 600,
    icon: 'Package',
    features: [
      'In-hand product demonstration photos & videos',
      'Authentic text-based and visual feedback',
      'Testing conducted by your target user persona',
      'Honest, constructive usability notes for your team',
    ],
    benefits: [
      'Showcases your physical product in real everyday settings',
      'Drives instant social proof on e-commerce platforms',
      'Provides premium high-wage work for homemakers',
      'Detailed, long-form content for product listings',
    ],
    ctaText: 'Launch Product Campaign',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation & Scope',
    description: 'Choose your desired review packages (Google, Video, or Product). Define your brand mission, key features to emphasize, and target demographics.',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Family & Reviewer Matching',
    description: 'We match your brand with real, verified reviewers and families from our community database who fit your customer profile.',
    icon: 'Users',
  },
  {
    number: '03',
    title: 'Honest Testing & Creation',
    description: 'Reviewers test your service or receive your product. They record authentic selfie video reviews or write tailored feedback detailing their genuine experience.',
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: 'Staggered Delivery & Tracker',
    description: 'Reviews are uploaded to your dashboard. Videos and links are delivered one-by-one, simulating an organic wave of community approval and feedback.',
    icon: 'TrendingUp',
  },
  {
    number: '05',
    title: 'Payout & Family Smile',
    description: 'Reviewers are instantly paid fair wages upon approval. Your business grows exponentially while providing life-changing secondary income to local households.',
    icon: 'Heart',
  },
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    clientName: 'Aura Organic Cosmetics',
    logo: '✨',
    industry: 'Beauty & Skincare',
    description: 'Sought to launch an organic facial serum with social proof on Instagram and their Shopify store.',
    serviceUsed: 'Product Testing + Video Reviews',
    beforeScore: 3.2,
    afterScore: 4.8,
    reviewsCount: 150,
    incomeGenerated: 90000,
    results: [
      'Boosted Shopify conversion rate by 142%',
      'Acquired 150 custom product testing clips',
      'Enabled 12 low-income homemakers to fund their kids educational fees for 3 months',
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'proj-2',
    clientName: 'Apex Fitness Gear',
    logo: '💪',
    industry: 'Athletic Wear',
    description: 'Wanted to establish credible reviews for a new line of ergonomic yoga mats and resistance bands.',
    serviceUsed: 'High-Impact Video Testimonials',
    beforeScore: 4.0,
    afterScore: 4.9,
    reviewsCount: 200,
    incomeGenerated: 100000,
    results: [
      'Generated over ₹3.4M in brand revenue in 60 days',
      '200 high-quality video reviews delivered',
      'Supported 22 families with micro-grants for essential utilities',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'proj-3',
    clientName: 'SipEnergy Drinks',
    logo: '⚡',
    industry: 'Food & Beverage',
    description: 'A local beverage brand seeking to boost their regional presence on Google Maps & local storefronts.',
    serviceUsed: 'Verified Google Reviews',
    beforeScore: 3.5,
    afterScore: 4.7,
    reviewsCount: 500,
    incomeGenerated: 100000,
    results: [
      'Ranked #1 in Google Maps local search for Energy Drinks in regional hubs',
      'Staggered posting over 30 days kept reviews perfectly organic',
      'Distributed income directly to 45 college students and young adults',
    ],
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Anjali Sharma',
    role: 'Founder',
    company: 'Aura Cosmetics',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    comment: 'The video reviews were stunningly authentic. Customers loved seeing real families talking about our face serum. Best of all, we knew our marketing budget was directly supporting families who needed the income. A beautiful double-sided mission!',
    reviewerLocation: 'Mumbai, MH',
  },
  {
    id: 'test-2',
    name: 'Vikram Malhotra',
    role: 'Growth Lead',
    company: 'FlexFit Wear',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    comment: 'We paid for 100 video reviews and watched them flow in one-by-one in our owner dashboard. The transparency of seeing exactly which family recorded each video was refreshing. Our ads convert 3x higher now.',
    reviewerLocation: 'Delhi, NCR',
  },
  {
    id: 'test-3',
    name: 'Sunita Deshmukh',
    role: 'Review Producer / Homemaker',
    company: 'Community Partner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    comment: 'With the ₹12,000 I earned from doing product and video reviews in my spare time, I could buy a sewing machine and support my family. I love sharing my real opinions on great products and getting paid fairly.',
    reviewerLocation: 'Pune, MH',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Rahul Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Former product designer who wanted to leverage corporate marketing budgets to distribute wealth to local Indian families.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    impactQuote: 'Empowering local families while driving astronomical organic brand growth.',
  },
  {
    name: 'Priyanka Sen',
    role: 'Director of Community Operations',
    bio: 'Oversees the verification and onboarding of over 5,000 reviewer families, ensuring fair payouts and proper guidelines.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    impactQuote: 'Every campaign helps put a genuine smile on a mother’s face.',
  },
  {
    name: 'Amit Patel',
    role: 'Lead Platform Architect',
    bio: 'Designed our proprietary Brand Dashboard and the review-tracking counting meter for total process transparency.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    impactQuote: 'Fusing bulletproof enterprise tech with real-world social impact.',
  },
];

export const faqItems: FAQItem[] = [
  {
    category: 'General',
    question: 'How does your platform support families?',
    answer: 'Unlike automated agencies or bot farms, we pay 85% of our revenue directly to verified families and individuals in our reviewer community. Every time you order a Google review (₹200), video review (₹500), or product review (₹600), a real person performs the review and earns honest, impactful money for their household.',
  },
  {
    category: 'Authenticity',
    question: 'Are these reviews compliant and safe for my brand?',
    answer: 'Yes! We only facilitate genuine, real-user experiences. Reviewers test your digital service or physical product and leave authentic, real-person accounts. We do not use bots, click farms, or duplicate scripts, which aligns with major platforms guidelines.',
  },
  {
    category: 'Process',
    question: 'What is the "one-by-one" delivery model?',
    answer: 'Once you launch a campaign, we do not dump all reviews at once, which could flag platform algorithms. Instead, reviews are delivered sequentially (one-by-one) onto your dashboard and live platforms, showing organic, progressive customer interest.',
  },
  {
    category: 'Pricing',
    question: 'What is the upfront deposit and quote process?',
    answer: 'For large campaigns (e.g., 200 reviews), you pay an upfront package rate (e.g. ₹100,000 for 200 video reviews). We review your brand guidelines, create a specialized campaign flow with our coordinators, and activate your Live Delivery Dashboard to track completion.',
  },
  {
    category: 'Products',
    question: 'How do physical product reviews work?',
    answer: 'You tell us how many units you want reviewed. We provide the shipping addresses of our selected reviewer households. Once they receive and test the product, they record high-quality demonstration/feedback videos and upload them.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Why User-Generated Video Reviews Convert 80% Better Than Professional Ads',
    excerpt: 'Modern consumers suffer from ad blindness. Learn how highly authentic, raw selfie-videos recorded by real families build immediate trust.',
    category: 'Marketing Strategy',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    author: {
      name: 'Rahul Mehta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=50',
    },
  },
  {
    id: 'post-2',
    title: 'Navigating Local SEO: The Power of Staggered Google Reviews',
    excerpt: 'Dumping 100 reviews in one day gets you banned. Explore the power of staggered, location-diverse reviews for climbing Google Maps rankings.',
    category: 'SEO Insights',
    date: 'July 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400',
    author: {
      name: 'Amit Patel',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=50',
    },
  },
  {
    id: 'post-3',
    title: 'Empowerment Economy: How Brands are Driving Social Impact in 2026',
    excerpt: 'Discover how top-tier DTC brands are shifting their massive marketing budgets away from tech giants and giving back directly to low-income families.',
    category: 'Social Impact',
    date: 'July 11, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400',
    author: {
      name: 'Priyanka Sen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=50',
    },
  },
];

// Initial mock data for the Brand Owner Dashboard
export const initialCampaigns: ReviewCampaign[] = [
  {
    id: 'camp-1',
    brandName: 'Aura Cosmetics',
    serviceType: 'video',
    targetCount: 200,
    completedCount: 142,
    totalCost: 100000, // 200 * ₹500
    status: 'active',
    dateStarted: '2026-06-15',
    familiesSupported: 18,
  },
  {
    id: 'camp-2',
    brandName: 'Aura Cosmetics',
    serviceType: 'google',
    targetCount: 500,
    completedCount: 500,
    totalCost: 100000, // 500 * ₹200
    status: 'completed',
    dateStarted: '2026-05-10',
    familiesSupported: 42,
  },
  {
    id: 'camp-3',
    brandName: 'Aura Cosmetics',
    serviceType: 'product',
    targetCount: 50,
    completedCount: 12,
    totalCost: 30000, // 50 * ₹600
    status: 'active',
    dateStarted: '2026-07-01',
    familiesSupported: 8,
  }
];

export const mockReviewsList: BrandReview[] = [
  {
    id: 'rev-1',
    reviewerName: 'Meera Deshpande',
    rating: 5,
    date: '2026-07-12',
    reviewType: 'video',
    content: 'The HydraGlow serum is incredibly lightweight and hydrating! My skin has been glowing for days. I highly recommend it!',
    status: 'delivered',
    videoDuration: '0:45',
    videoThumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    transcript: 'Hello guys! I am Meera, and I have been using the Aura HydraGlow Serum for the past week. Look at my skin, it literally shines. I love that it is made from organic plant extracts. Super lightweight, not sticky at all! You must try it.',
    impactScore: 85,
  },
  {
    id: 'rev-2',
    reviewerName: 'Karan Malhotra',
    rating: 5,
    date: '2026-07-11',
    reviewType: 'google',
    content: 'Excellent service and quick delivery from Aura Cosmetics! Their organic shampoo smells amazing and works wonders.',
    status: 'delivered',
    impactScore: 40,
  },
  {
    id: 'rev-3',
    reviewerName: 'Suresh Kumar & Family',
    rating: 5,
    date: '2026-07-10',
    reviewType: 'product',
    content: 'We received the family protection sunscreen pack. Excellent packaging, sweat resistant, and zero chemical white cast. Perfect for hot Indian summers!',
    status: 'delivered',
    videoDuration: '1:12',
    videoThumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    transcript: 'Namaste! We are the Kumar family from Jaipur. We tested the Aura Herbal Sunscreen during our trip. It is non-sticky and perfectly sweatproof. My wife and children used it too, and it gave amazing protection without any side effects. Highly recommended!',
    impactScore: 95,
  },
  {
    id: 'rev-4',
    reviewerName: 'Kavita Iyer',
    rating: 5,
    date: '2026-07-09',
    reviewType: 'video',
    content: 'Loved the night renewal cream. It leaves my skin feeling super supple and refreshed when I wake up.',
    status: 'delivered',
    videoDuration: '0:38',
    videoThumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    transcript: 'Hey friends, Kavita here. I am sharing my raw feedback for Aura Cosmetics’ Night Renewal Cream. The texture is extremely rich but absorbs immediately. The lavender scent is so calming for sleeping. A solid five stars!',
    impactScore: 78,
  },
  {
    id: 'rev-5',
    reviewerName: 'Rajesh Gokhale',
    rating: 4,
    date: '2026-07-08',
    reviewType: 'google',
    content: 'Very authentic products. The vitamin C toner feels fresh, though the spray nozzle could be slightly improved. Still a high-quality organic formula.',
    status: 'delivered',
    impactScore: 35,
  }
];

export const simulationPoolReviews: Omit<BrandReview, 'id' | 'date'>[] = [
  {
    reviewerName: 'Lata Patil',
    rating: 5,
    reviewType: 'video',
    content: 'I did a review on Aura Vitamin C face wash. Beautiful packaging, completely orange extract-based, and my dark spots are slowly fading.',
    status: 'delivered',
    videoDuration: '0:50',
    videoThumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=120',
    transcript: 'Hello everyone! I am Lata. I tried the Aura Vitamin C face wash for 10 days. It smells exactly like fresh oranges! It has faded my sunspots slightly and leaves my face feeling very clean and squeaky but not dry. Thank you Aura Cosmetics!',
    impactScore: 82,
  },
  {
    reviewerName: 'Arjun Sen',
    rating: 5,
    reviewType: 'google',
    content: 'Wonderful local initiative! Highly effective skincare range. Aura Cosmetics is doing great work for the society too.',
    status: 'delivered',
    impactScore: 30,
  },
  {
    reviewerName: 'Nisha Pillai & Homemakers Group',
    rating: 5,
    reviewType: 'product',
    content: 'We tested the full Ayurvedic hair care range. Hairfall reduced considerably within 3 washes. Incredible results!',
    status: 'delivered',
    videoDuration: '1:30',
    videoThumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    transcript: 'Hello! This is Nisha and my friends from Kochi. We received Aura’s Ayurvedic Hair Oil and Shampoo. We have been using it together. It smells of real Bhringraj and Amla. The density of our hair has improved, and hairfall is almost gone! This is a magical formulation.',
    impactScore: 110,
  },
  {
    reviewerName: 'Aditya Roy',
    rating: 4,
    reviewType: 'google',
    content: 'Premium charcoal clay mask. Removes deep sebum and blackheads instantly. Great for weekly detox skincare routine.',
    status: 'delivered',
    impactScore: 32,
  },
  {
    reviewerName: 'Sadhana Rao',
    rating: 5,
    reviewType: 'video',
    content: 'Excellent tea-tree gel for active acne control. Cools down redness overnight.',
    status: 'delivered',
    videoDuration: '0:42',
    videoThumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
    transcript: 'Hey guys, Sadhana here from Bangalore. If you suffer from frequent summer breakouts, Aura’s Tea Tree Gel is an absolute savior. It has a cooling menthol sensation that soothes itchy pimples and reduces them overnight. Love it!',
    impactScore: 88,
  }
];
