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

  const categories = ['all', ...Array.from(new Set(magazines.map(m => m.category)))];

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

