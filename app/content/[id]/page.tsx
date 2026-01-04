'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { useMagazine } from '@/hooks/useMagazine';
import ContentLoader from '@/components/UI/ContentLoader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import { StructuredData } from '@/components/SEO/StructuredData';
import { getPageUrl, getAbsoluteUrl } from '@/lib/seo';

// Hardcoded magazines data (matching homepage/library)
const hardcodedMagazines = [
  {
    id: 'genz',
    title: 'GenZ',
    description: 'This Urdu edition focuses specifically on Generation Z\'s remarkable success in business and entrepreneurship. It analyzes the unique characteristics, skills, and approaches that make young people particularly effective in modern business environments.',
    imagePath: '/magzines/GenZ.webp',
    category: 'Business',
    views: 12500,
    likes: 890,
    rating: 4.8,
    date: '2024-01-15'
  },
  {
    id: 'freedom',
    title: 'Freedom',
    description: 'This edition explores the concept of freedom from both Islamic and universal human rights perspectives. It examines how Islam views freedom as a core value while also recognizing it as a fundamental right that every human deserves regardless of their background.',
    imagePath: '/magzines/Freedom.webp',
    category: 'Philosophy',
    views: 18900,
    likes: 1240,
    rating: 4.9,
    date: '2024-02-20'
  },
  {
    id: 'jamal-ul-deen-afgani',
    title: 'Jamal-UL-Deen Afgani',
    description: 'This edition centers on Jamaluddin Afghani, a pioneering Muslim intellectual and reformer. It discusses his contributions to Islamic thought and his vision for unity among Muslims across sectarian divides.',
    imagePath: '/magzines/Jamal-UL-Deen Afgani.webp',
    category: 'History',
    views: 15200,
    likes: 980,
    rating: 4.7,
    date: '2024-03-10'
  },
  {
    id: 'the-global-landscape',
    title: 'The Global Landscape The Islamic Movement',
    description: 'This edition analyzes the current global political landscape and how Islamic movements are positioning themselves within it. It examines geopolitical shifts, power dynamics, and the role of Muslim communities.',
    imagePath: '/magzines/The Global Landscape The Islamic Movement.webp',
    category: 'Politics',
    views: 22100,
    likes: 1560,
    rating: 4.6,
    date: '2024-04-05'
  },
  {
    id: 'gaza-palestinian-resistance',
    title: 'Gaza and Palestinian resistance',
    description: 'This special edition is dedicated entirely to Gaza and Palestinian resistance. It presents Gaza as a powerful symbol of determination, steadfastness, and unwavering loyalty in the face of occupation and oppression.',
    imagePath: '/magzines/Gaza and Palestinian resistance.webp',
    category: 'Social Issues',
    views: 45600,
    likes: 3420,
    rating: 5.0,
    date: '2024-05-12'
  },
  {
    id: 'toxic-call-center',
    title: 'The Toxic Call Center',
    description: 'This edition addresses the mental health crisis faced by call center employees in Pakistan. It explores how toxic work environments, demanding targets, and customer abuse create severe psychological stress.',
    imagePath: '/magzines/The Toxic Call Center.webp',
    category: 'Social Issues',
    views: 17800,
    likes: 1120,
    rating: 4.5,
    date: '2024-06-18'
  },
  {
    id: 'decolonization',
    title: 'Decolonization is not just a right it\'s obligation',
    description: 'This powerful edition argues that decolonization is not merely a right but a moral obligation for formerly colonized nations. It examines how colonial mindsets and structures continue to dominate politics, education, and culture.',
    imagePath: '/magzines/decolonization is not just a right it\'s obligation.webp',
    category: 'Politics',
    views: 23400,
    likes: 1890,
    rating: 4.9,
    date: '2024-07-22'
  },
  {
    id: 'mukamat-e-iran',
    title: 'Mukamat-e-iran bzurg',
    description: 'This Urdu edition focuses on Iran\'s resistance movements and their significance in the broader context of Middle Eastern politics. It examines how Iran positions itself against Western hegemony.',
    imagePath: '/magzines/Mukamat-e-iran bzurg.webp',
    category: 'Politics',
    views: 16700,
    likes: 980,
    rating: 4.4,
    date: '2024-08-30'
  },
  {
    id: 'real-cost-capitalist',
    title: 'The Real Cost of Capitalist Progress',
    description: 'This critical edition examines the hidden costs and consequences of capitalist development. Using the subtitle "From Utopia to Disillusionment," it explores how capitalism\'s promises of prosperity often lead to inequality.',
    imagePath: '/magzines/The Real Cost of Capitalist Progress.webp',
    category: 'Philosophy',
    views: 19800,
    likes: 1340,
    rating: 4.7,
    date: '2024-09-14'
  },
  {
    id: 'essence-salah',
    title: 'The Essence of Salah Prayer',
    description: 'This spiritually focused edition explores the deep spiritual and psychological dimensions of Islamic prayer (Salah). It examines why prayer is essential beyond mere ritual, discussing how Salah provides mental peace.',
    imagePath: '/magzines/The Essence of Salah Prayer.webp',
    category: 'Religion',
    views: 31200,
    likes: 2450,
    rating: 4.9,
    date: '2024-10-08'
  },
  {
    id: 'foundations-love-prophet',
    title: 'The foundations of love for Prophet Muhammad (Peace Be Upon Him)',
    description: 'This Urdu edition discusses the foundations of love for Prophet Muhammad (Peace Be Upon Him). It explores what it truly means to love the Prophet, going beyond mere emotional attachment.',
    imagePath: '/magzines/the foundations of love for Prophet Muhammad (Peace Be Upon Him).webp',
    category: 'Religion',
    views: 28900,
    likes: 2120,
    rating: 5.0,
    date: '2024-11-20'
  },
  {
    id: 'islamophobia',
    title: 'Islamophobia Questions Value System',
    description: 'Islamophobia Questions Value System highlights how prejudice against Muslims doesn\'t merely harm individuals—it exposes deeper contradictions within a society\'s moral claims.',
    imagePath: '/magzines/Islamophobia Questions Value System.webp',
    category: 'Social Issues',
    views: 26700,
    likes: 1980,
    rating: 4.8,
    date: '2024-12-05'
  },
  // Children's Digests
  {
    id: 'adventures-wonderland',
    title: 'Paigam For Kids',
    description: 'A magical journey through enchanting stories that spark imagination and creativity. This delightful digest features colorful characters, exciting adventures, and valuable life lessons that inspire young readers to dream big and explore the world around them.',
    imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1755120079051-v3eqssv4yw.jpg',
    category: 'Children',
    views: 15200,
    likes: 1120,
    rating: 4.9,
    date: '2024-01-20'
  },
  {
    id: 'fun-learning-stories',
    title: 'Fun Learning Stories',
    description: 'Educational tales that make learning enjoyable and engaging for young minds. This digest combines fun narratives with important concepts, helping children develop reading skills while discovering new ideas about science, nature, friendship, and everyday adventures.',
    imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754468368740-6v5vpx5w3li.jpg',
    category: 'Children',
    views: 18900,
    likes: 1450,
    rating: 4.8,
    date: '2024-02-15'
  },
  {
    id: 'magical-tales-collection',
    title: 'Magical Tales Collection',
    description: 'Enchanting stories filled with wonder, friendship, and adventure. This collection brings together timeless tales that capture the hearts of young readers, featuring brave heroes, magical creatures, and exciting quests that teach important values like kindness, courage, and empathy.',
    imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705416524-jgx366ewqks.jpg',
    category: 'Children',
    views: 22100,
    likes: 1780,
    rating: 5.0,
    date: '2024-03-10'
  },
  {
    id: 'kids-corner-adventures',
    title: 'Kids Corner Adventures',
    description: 'Exciting stories designed to inspire young minds and foster curiosity. This digest features age-appropriate content that encourages exploration, creativity, and learning through engaging narratives, interactive elements, and beautiful illustrations that make reading a joyful experience.',
    imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705612592-h11yf0v64wq.jpg',
    category: 'Children',
    views: 16700,
    likes: 1320,
    rating: 4.7,
    date: '2024-04-05'
  }
];

const ContentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const { magazine: apiMagazine, loading: apiLoading, error: apiError } = useMagazine(id as string || '');
  const [isReading, setIsReading] = useState(false);
  const [magazine, setMagazine] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useScrollToTop();

  useEffect(() => {
    // Check if it's a hardcoded magazine first
    const hardcodedMag = hardcodedMagazines.find(m => m.id === id);
    
    if (hardcodedMag) {
      // Convert hardcoded format to API format
      setMagazine({
        _id: hardcodedMag.id,
        name: hardcodedMag.title,
        image: hardcodedMag.imagePath,
        description: hardcodedMag.description,
        category: hardcodedMag.category,
        views: hardcodedMag.views,
        likes: hardcodedMag.likes,
        downloads: 0,
        rating: hardcodedMag.rating,
        type: 'free',
        magazineType: hardcodedMag.category === 'Children' ? 'digest' : 'magazine',
        reviews: [],
        createdAt: hardcodedMag.date
      });
      setLoading(false);
    } else if (!apiLoading) {
      // Use API magazine if available
      if (apiMagazine) {
        setMagazine(apiMagazine);
      }
      setLoading(false);
    }
  }, [id, apiMagazine, apiLoading]);

  const handleReadNow = () => {
    setIsReading(true);
    router.push('/pricing');
  };

  const handleDownloadApp = () => {
    router.push('/download');
  };

  if (loading || apiLoading) {
    return <ContentLoader text="Loading content..." />;
  }

  if ((apiError && !magazine) || !magazine) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Content Not Found
          </h1>
          <p className={`text-lg mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            The content you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <button
            onClick={() => router.push('/library')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                : 'bg-accent-gold text-button-text hover:bg-yellow-400'
            }`}
          >
            Browse Library
          </button>
        </div>
      </div>
    );
  }

  const getContentTypeLabel = (type: string) => {
    switch (type) {
      case 'magazine': return 'Magazine';
      case 'article': return 'Article';
      case 'digest': return 'Digest';
      default: return 'Content';
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'magazine': return '📰';
      case 'article': return '📄';
      case 'digest': return '📋';
      default: return '📖';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  // Prepare structured data
  const productData = {
    name: magazine.name || magazine.title,
    description: magazine.description,
    image: magazine.image || magazine.imagePath,
    category: magazine.category,
    rating: magazine.rating,
    reviewsCount: magazine.reviews?.length || 0,
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Library', url: '/library' },
    { name: magazine.name || magazine.title || 'Content', url: `/content/${id}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <StructuredData type="Product" data={productData} />
      <StructuredData type="BreadcrumbList" data={{ items: breadcrumbItems }} />
      <StructuredData type="Article" data={{
        title: magazine.name || magazine.title,
        description: magazine.description,
        image: magazine.image || magazine.imagePath,
        datePublished: magazine.createdAt || magazine.date,
      }} />

      <div className={`min-h-screen transition-colors duration-300 scroll-smooth ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <section className={`relative py-12 sm:py-16 lg:py-20 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Magazine Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={magazine.image || magazine.imagePath || 'https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads'}
                    alt={`${magazine.name || magazine.title} - ${magazine.description?.substring(0, 100) || 'Magazine cover'}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads';
                    }}
                  />
                </div>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold ${
                    magazine.type === 'pro' 
                      ? 'bg-accent-gold text-button-text' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {magazine.type === 'pro' ? 'PRO' : 'FREE'}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/90 text-white backdrop-blur-sm">
                    {getContentTypeIcon(magazine.magazineType || 'magazine')} {getContentTypeLabel(magazine.magazineType || 'magazine')}
                  </span>
                </div>
                {magazine.rating >= 4.8 && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-accent-gold text-button-text shadow-lg">
                      ⭐ Premium
                    </span>
                  </div>
                )}
              </div>

              {/* Magazine Details */}
              <div className="space-y-6 order-1 lg:order-2">
                <div>
                  <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.name || magazine.title}
                  </h1>
                  <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-6 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {magazine.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className={`text-center p-4 sm:p-5 rounded-xl transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-primary-background border border-gray-800' : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {formatNumber(magazine.views || 0)}
                    </div>
                    <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Views
                    </div>
                  </div>
                  <div className={`text-center p-4 sm:p-5 rounded-xl transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-primary-background border border-gray-800' : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {formatNumber(magazine.likes || 0)}
                    </div>
                    <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Likes
                    </div>
                  </div>
                  <div className={`text-center p-4 sm:p-5 rounded-xl transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-primary-background border border-gray-800' : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {formatNumber(magazine.downloads || 0)}
                    </div>
                    <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Downloads
                    </div>
                  </div>
                  <div className={`text-center p-4 sm:p-5 rounded-xl transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-primary-background border border-gray-800' : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {magazine.rating ? magazine.rating.toFixed(1) : '0.0'}
                    </div>
                    <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Rating
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={handleReadNow}
                    disabled={isReading}
                    className={`flex-1 px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 ${
                      isReading
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-accent-gold text-button-text hover:bg-yellow-400 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isReading ? 'Redirecting...' : '📖 Read Now'}
                  </button>
                  <button
                    onClick={handleDownloadApp}
                    className={`px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 border-2 ${
                      theme === 'dark'
                        ? 'bg-primary-background text-primary-text hover:bg-gray-800 border-gray-600 hover:border-gray-500'
                        : 'bg-white text-light-primary-text hover:bg-gray-100 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    📱 Download App
                  </button>
                </div>

                {/* Category Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-primary-background text-primary-text border border-gray-800' : 'bg-white text-light-primary-text border border-gray-200'
                }`}>
                  📂 {magazine.category}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        {magazine.reviews && magazine.reviews.length > 0 && (
          <section className={`py-12 sm:py-16 lg:py-20 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
          }`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Reviews ({magazine.reviews.length})
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {magazine.reviews.map((review: any, index: number) => (
                  <div
                    key={review._id || index}
                    className={`p-4 sm:p-6 rounded-xl transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-section-background border border-gray-800' : 'bg-light-section-background border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center text-button-text font-bold">
                          {review.userId ? review.userId.toString().slice(-2) : 'U'}
                        </div>
                        <div>
                          <div className={`font-semibold transition-colors duration-300 ${
                            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                          }`}>
                            User {review.userId || index + 1}
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < (review.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                      }`}>
                        {review.time ? new Date(review.time).toLocaleDateString() : 'Recently'}
                      </div>
                    </div>
                    <p className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      {review.review || 'No review text available.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Library Button */}
        <section className={`py-12 sm:py-16 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center">
              <button
                onClick={() => router.push('/library')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text hover:bg-gray-800 border border-gray-600 hover:border-gray-500'
                    : 'bg-white text-light-primary-text hover:bg-gray-100 border border-gray-300 hover:border-gray-400'
                }`}
              >
                ← Back to Library
              </button>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 z-50 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
            theme === 'dark'
              ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
              : 'bg-accent-gold text-button-text hover:bg-yellow-400'
          }`}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ContentDetail;
