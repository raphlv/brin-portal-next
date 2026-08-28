'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight, 
  MapPin, 
  Video
} from 'lucide-react';
import { NEWS_ARTICLES, EVENTS_LIST } from '@/lib/brinData';

export default function NewsAndEvents() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              Warta Sains & Informasi Publik
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Kabar Riset Terkini & Agenda Konferensi
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl font-medium">
              Publikasi siaran pers resmi, temuan ilmiah mutakhir peneliti Indonesia, serta agenda pameran inovasi berskala internasional.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800"
          >
            <span>Arsip Warta Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Content Layout: 2/3 News + 1/3 Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Column (2 cols) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS_ARTICLES.slice(0, 4).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image */}
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

                  {/* Article Content */}
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

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-medium">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[160px]">
                    {article.author}
                  </span>
                  <Link
                    href={`/news/${article.slug}`}
                    className="font-bold text-red-600 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Events & Agenda Column (1 col) */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <span>Agenda Riset 2026</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">
                  Live Agenda
                </span>
              </div>

              <div className="space-y-4">
                {EVENTS_LIST.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        {evt.type}
                      </span>
                      <span className="text-[11px] text-amber-700 font-semibold flex items-center gap-1">
                        {evt.isOnline ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                        {evt.isOnline ? 'Daring (Online)' : 'Luring (KST)'}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2 leading-snug">
                      {evt.title}
                    </h4>

                    <div className="text-[11px] text-slate-600 space-y-1 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{evt.date} &bull; {evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-end">
                      <Link
                        href={evt.registrationUrl}
                        target="_blank"
                        className="text-[11px] font-bold text-red-600 hover:text-red-800 inline-flex items-center gap-1"
                      >
                        <span>Registrasi Peserta</span> &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="mt-6 pt-5 border-t border-slate-200 text-center">
              <p className="text-xs font-semibold text-slate-700 mb-2">
                Berlangganan warta sains berkala BRIN
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Masukkan email Anda..."
                  className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                />
                <button className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs shrink-0 transition-colors shadow-sm">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
