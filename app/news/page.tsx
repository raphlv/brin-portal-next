'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  Search, 
  ArrowRight
} from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/brinData';

export default function NewsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Inovasi', 'Kebijakan', 'Internasional'];

  const filteredNews = NEWS_ARTICLES.filter(item => {
    const matchesCat = activeCategory === 'Semua' || item.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">Warta Riset & Berita</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Pusat Informasi Publik
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Warta Riset & Siaran Pers Ilmiah
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Menyajikan temuan penelitian mutakhir, kebijakan pendanaan ilmu pengetahuan dan teknologi, serta liputan kolaborasi sains internasional.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul berita, topik riset, atau nama pusat riset..."
              className="w-full pl-12 pr-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-xl text-[10px] font-bold bg-white/90 backdrop-blur-md text-red-700 shadow-md uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-red-600" />
                      {article.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-2 leading-snug">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 font-medium">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-slate-50 text-[10px] text-slate-600 font-medium border border-slate-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                  {article.author}
                </span>
                <Link
                  href={`/news/${article.slug}`}
                  className="font-bold text-red-600 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Baca Warta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
