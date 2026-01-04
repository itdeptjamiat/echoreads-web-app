'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import Link from 'next/link';

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

const LibraryClient: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'rating'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);

  // Hardcoded magazines data (same as homepage)
  const magazines: Magazine[] = [
    {
      id: 'genz',
      title: 'GenZ',
      description: 'This Urdu edition focuses specifically on Generation Z\'s remarkable success in business and entrepreneurship.',
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
      description: 'This edition explores the concept of freedom from both Islamic and universal human rights perspectives.',
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
      description: 'This edition centers on Jamaluddin Afghani, a pioneering Muslim intellectual and reformer.',
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
      description: 'This edition analyzes the current global political landscape and how Islamic movements are positioning themselves.',
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
      description: 'This special edition is dedicated entirely to Gaza and Palestinian resistance.',
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
      description: 'This edition addresses the mental health crisis faced by call center employees in Pakistan.',
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
      description: 'This powerful edition argues that decolonization is not merely a right but a moral obligation.',
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
      description: 'This Urdu edition focuses on Iran\'s resistance movements and their significance.',
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
      description: 'This critical edition examines the hidden costs and consequences of capitalist development.',
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
      description: 'This spiritually focused edition explores the deep spiritual and psychological dimensions of Islamic prayer.',
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
      description: 'This Urdu edition discusses the foundations of love for Prophet Muhammad.',
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
      description: 'Islamophobia Questions Value System highlights how prejudice against Muslims doesn\'t merely harm individuals.',
      imagePath: '/magzines/Islamophobia Questions Value System.webp',
      category: 'Social Issues',
      views: 26700,
      likes: 1980,
      rating: 4.8,
      date: '2024-12-05'
    }
  ];

  // Children's Digests data
  const childrenDigests: Magazine[] = [
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

  const allItems = [...magazines, ...childrenDigests];
  const categories = ['all', ...Array.from(new Set(allItems.map(m => m.category)))];

  const filteredMagazines = magazines.filter(magazine => {
    const matchesSearch = magazine.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      magazine.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || magazine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedMagazines = [...filteredMagazines].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'rating':
        return b.rating - a.rating;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Header */}
      <section className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Library
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Browse our complete collection of magazines, articles, and digests
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search magazines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-500'
                  : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-400'
              }`}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-accent-gold text-button-text'
                    : theme === 'dark'
                      ? 'bg-primary-background text-primary-text hover:bg-gray-800'
                      : 'bg-white text-light-primary-text hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Sort & View Toggle */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular' | 'rating')}
              className={`px-4 py-2 rounded-lg border-2 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-primary-background border-gray-700 text-primary-text'
                  : 'bg-white border-gray-300 text-light-primary-text'
              }`}
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-accent-gold text-button-text'
                    : theme === 'dark'
                      ? 'bg-primary-background text-primary-text'
                      : 'bg-white text-light-primary-text'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'list'
                    ? 'bg-accent-gold text-button-text'
                    : theme === 'dark'
                      ? 'bg-primary-background text-primary-text'
                      : 'bg-white text-light-primary-text'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Corner Section */}
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
              Kids Corner
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Fun and educational stories for young readers
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {childrenDigests.map((digest) => (
              <Link
                key={digest.id}
                href={`/content/${digest.id}`}
                className={`group flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-800 hover:border-accent-gold' 
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
                }`}
              >
                <div className="relative w-full sm:w-32 md:w-40 lg:w-48 h-48 sm:h-32 md:h-40 lg:h-48 flex-shrink-0 overflow-hidden">
                  {digest.rating >= 4.8 && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-accent-gold text-button-text shadow-lg">
                        ⭐ Premium
                      </span>
                    </div>
                  )}
                  <Image
                    src={digest.imagePath}
                    alt={`${digest.title} - ${digest.description.substring(0, 100)}`}
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
                        {digest.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-[9px] sm:text-xs font-semibold backdrop-blur-md flex-shrink-0 ${
                        theme === 'dark' 
                          ? 'bg-black/50 text-accent-gold border border-accent-gold/30' 
                          : 'bg-white/80 text-accent-gold border border-accent-gold/30'
                      }`}>
                        {digest.category}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      {digest.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className={`flex items-center gap-0.5 sm:gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {formatNumber(digest.views)}
                      </span>
                      <span className={`flex items-center gap-0.5 sm:gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        {formatNumber(digest.likes)}
                      </span>
                    </div>
                    <span className={`flex items-center gap-0.5 sm:gap-1 font-semibold ${
                      theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
                    }`}>
                      <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {digest.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Magazines Grid/List */}
      <section className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {sortedMagazines.map((magazine) => (
                <Link
                  key={magazine.id}
                  href={`/content/${magazine.id}`}
                  className={`group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] block ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-800 hover:border-accent-gold' 
                      : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
                  }`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={magazine.imagePath}
                      alt={`${magazine.title} - ${magazine.description.substring(0, 100)}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="p-2 sm:p-3 lg:p-5">
                    <h3 className={`font-bold text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-accent-gold ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {magazine.title}
                    </h3>
                    <div className="flex items-center justify-between text-[9px] sm:text-xs">
                      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {formatNumber(magazine.views)} views
                      </span>
                      <span className={`font-semibold ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>
                        ⭐ {magazine.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {sortedMagazines.map((magazine) => (
                <Link
                  key={magazine.id}
                  href={`/content/${magazine.id}`}
                  className={`group flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] block ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-800 hover:border-accent-gold' 
                      : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
                  }`}
                >
                  <div className="relative w-full sm:w-32 md:w-40 lg:w-48 h-48 sm:h-32 md:h-40 lg:h-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={magazine.imagePath}
                      alt={`${magazine.title} - ${magazine.description.substring(0, 100)}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 192px"
                    />
                  </div>
                  <div className="flex-1 p-3 sm:p-4 lg:p-6">
                    <h3 className={`font-bold text-base sm:text-lg lg:text-xl mb-2 transition-colors duration-300 group-hover:text-accent-gold ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {magazine.title}
                    </h3>
                    <p className={`text-xs sm:text-sm lg:text-base mb-3 line-clamp-2 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      {magazine.description}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-3">
                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {formatNumber(magazine.views)} views
                        </span>
                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {formatNumber(magazine.likes)} likes
                        </span>
                      </div>
                      <span className={`font-semibold ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>
                        ⭐ {magazine.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LibraryClient;

