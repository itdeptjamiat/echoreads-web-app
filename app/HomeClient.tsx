'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import HeroSection from '@/components/UI/HeroSection';
import MagazineScroll from '@/components/UI/MagazineScroll';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Link from 'next/link';
import Image from 'next/image';

interface Magazine {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  category: string;
  views: number;
  likes: number;
  rating: number;
  date: string;
}

const HomeClient: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  // Hardcoded magazines data with enhanced properties
  const magazines: Magazine[] = [
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
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Your Digital Reading Companion"
        subtitle="Welcome to EchoReads"
        description="Discover the world's best magazines, articles, and digests in one beautiful app. Read anywhere, anytime with our seamless reading experience."
        primaryButtonText="Download App"
        primaryButtonLink="/download"
        secondaryButtonText="Explore Library"
        secondaryButtonLink="/library"
      />

      {/* Infinite Auto-Scrolling Magazines Section */}
      <section className={`py-8 sm:py-12 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
          <MagazineScroll magazines={magazines} />
        </div>
      </section>

      {/* Divide magazines into 3 groups and show in 3 different layouts */}
      {(() => {
        const groupSize = Math.ceil(magazines.length / 3);
        const group1 = magazines.slice(0, groupSize);
        const group2 = magazines.slice(groupSize, groupSize * 2);
        const group3 = magazines.slice(groupSize * 2);

        return (
          <>
            {/* Layout 1: Grid Layout - First Group */}
            <section className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-primary-background' 
                : 'bg-light-primary-background'
            }`}>
              <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    Featured Collection
                  </h2>
                  <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Discover our curated selection
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {group1.map((magazine) => (
                    <Link
                      key={magazine.id}
                      href={`/content/${magazine.id}`}
                      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-800 hover:border-accent-gold' 
                          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
                      }`}
                    >
                      {magazine.rating >= 4.8 && (
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
                          <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-accent-gold text-button-text shadow-lg">
                            ⭐
                          </span>
                        </div>
                      )}
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                        <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold backdrop-blur-md ${
                          theme === 'dark' 
                            ? 'bg-black/50 text-accent-gold border border-accent-gold/30' 
                            : 'bg-white/80 text-accent-gold border border-accent-gold/30'
                        }`}>
                          {magazine.category}
                        </span>
                      </div>
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={magazine.imagePath}
                          alt={`${magazine.title} - ${magazine.description.substring(0, 100)}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <div className="p-2 sm:p-3 lg:p-5">
                        <h3 className={`font-bold text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-accent-gold ${
                          theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                        }`}>
                          {magazine.title}
                        </h3>
                        <div className="flex items-center justify-between text-[10px] sm:text-xs">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className={`flex items-center gap-0.5 sm:gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              {formatNumber(magazine.views)}
                            </span>
                          </div>
                          <span className={`flex items-center gap-0.5 sm:gap-1 font-semibold ${
                            theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
                          }`}>
                            <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {magazine.rating}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Layout 2: Horizontal Cards - Second Group */}
            <section className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-section-background' 
                : 'bg-light-section-background'
            }`}>
              <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    Trending Now
                  </h2>
                  <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Most popular reads
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {group2.map((magazine) => (
                    <Link
                      key={magazine.id}
                      href={`/content/${magazine.id}`}
                      className={`group flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-800 hover:border-accent-gold' 
                          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
                      }`}
                    >
                      <div className="relative w-full sm:w-32 md:w-40 lg:w-48 h-48 sm:h-32 md:h-40 lg:h-48 flex-shrink-0 overflow-hidden">
                        {magazine.rating >= 4.8 && (
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
                            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-accent-gold text-button-text shadow-lg">
                              ⭐ Premium
                            </span>
                          </div>
                        )}
                        <Image
                          src={magazine.imagePath}
                          alt={`${magazine.title} - ${magazine.description.substring(0, 100)}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 192px"
                        />
                      </div>
                      <div className="flex-1 p-3 sm:p-4 lg:p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className={`font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-accent-gold flex-1 ${
                              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                            }`}>
                              {magazine.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-[9px] sm:text-xs font-semibold backdrop-blur-md flex-shrink-0 ${
                              theme === 'dark' 
                                ? 'bg-black/50 text-accent-gold border border-accent-gold/30' 
                                : 'bg-white/80 text-accent-gold border border-accent-gold/30'
                            }`}>
                              {magazine.category}
                            </span>
                          </div>
                          <p className={`text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 transition-colors duration-300 ${
                            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                          }`}>
                            {magazine.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] sm:text-xs">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className={`flex items-center gap-0.5 sm:gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              {formatNumber(magazine.views)}
                            </span>
                            <span className={`flex items-center gap-0.5 sm:gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                              </svg>
                              {formatNumber(magazine.likes)}
                            </span>
                          </div>
                          <span className={`flex items-center gap-0.5 sm:gap-1 font-semibold ${
                            theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
                          }`}>
                            <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {magazine.rating}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Layout 3: Premium Card Layout - Third Group */}
            <section className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-primary-background' 
                : 'bg-light-primary-background'
            }`}>
              <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    Premium Selection
                  </h2>
                  <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Handpicked for you
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {group3.map((magazine, index) => (
                    <Link
                      key={magazine.id}
                      href={`/content/${magazine.id}`}
                      className={`group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-section-background via-gray-900 to-section-background border border-gray-800/50 hover:border-accent-gold/50' 
                          : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50 hover:border-accent-gold/50'
                      }`}
                    >
                      {/* Premium Glow Effect */}
                      {magazine.rating >= 4.8 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/10 group-hover:via-accent-gold/5 group-hover:to-accent-gold/10 transition-all duration-500 z-0" />
                      )}
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                        {magazine.rating >= 4.8 && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-accent-gold to-yellow-400 text-button-text shadow-lg backdrop-blur-sm">
                            ⭐ Premium
                          </span>
                        )}
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                          theme === 'dark' 
                            ? 'bg-black/60 text-accent-gold border-accent-gold/40' 
                            : 'bg-white/90 text-accent-gold border-accent-gold/40'
                        }`}>
                          {magazine.category}
                        </span>
                      </div>

                      {/* Image Container with Overlay */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={magazine.imagePath}
                          alt={`${magazine.title} - ${magazine.description.substring(0, 100)}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-125"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        
                        {/* Content Overlay on Image */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10">
                          <h3 className={`font-bold text-base sm:text-lg lg:text-xl mb-2 line-clamp-2 transition-colors duration-300 text-white group-hover:text-accent-gold drop-shadow-lg ${
                            theme === 'dark' ? '' : ''
                          }`}>
                            {magazine.title}
                          </h3>
                          <p className={`text-xs sm:text-sm line-clamp-2 mb-3 text-gray-200 group-hover:text-white transition-colors duration-300 ${
                            theme === 'dark' ? '' : ''
                          }`}>
                            {magazine.description}
                          </p>
                          
                          {/* Stats Bar */}
                          <div className="flex items-center justify-between pt-3 border-t border-white/20">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <span className="flex items-center gap-1 text-white/90 text-xs sm:text-sm">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                {formatNumber(magazine.views)}
                              </span>
                              <span className="flex items-center gap-1 text-white/90 text-xs sm:text-sm">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                {formatNumber(magazine.likes)}
                              </span>
                            </div>
                            <span className="flex items-center gap-1 bg-accent-gold/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-white font-bold text-xs sm:text-sm shadow-lg">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {magazine.rating}
                            </span>
                          </div>
                        </div>

                        {/* Shine Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      })()}

      {/* App Features Section */}
      <section className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Why Choose EchoReads?
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Experience reading like never before
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: '📱',
                title: 'Mobile First',
                description: 'Optimized for reading on your phone and tablet'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Instant loading and smooth navigation'
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Elegant interface that adapts to your theme'
              },
              {
                icon: '📚',
                title: 'Vast Library',
                description: 'Access to thousands of premium publications'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4">{feature.icon}</div>
                <h3 className={`text-sm sm:text-base lg:text-xl font-semibold mb-1 sm:mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeClient;

