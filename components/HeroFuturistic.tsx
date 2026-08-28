'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ArrowRight, 
  Atom, 
  FlaskConical, 
  GraduationCap, 
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { IMPACT_METRICS } from '@/lib/brinData';

export default function HeroFuturistic() {
  const [activeTab, setActiveTab] = useState<'all' | 'elsa' | 'riim' | 'or'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-10 pb-20 bg-gradient-to-b from-white via-slate-50 to-white cyber-grid-glow">
      {/* Soft Light Red Ambient Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Floating Pill */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-red-200 text-xs text-slate-800 shadow-md shadow-red-600/5 animate-float">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="font-bold text-red-600">PORTAL SAINS NASIONAL</span>
            <span className="text-slate-300">&bull;</span>
            <span className="font-semibold text-slate-700">Ekosistem Riset & Inovasi Terbuka Indonesia</span>
          </div>
        </div>

        {/* Main Title & Slogan */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
            Membangun Peradaban Melalui{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-700 to-red-800">
              Riset & Inovasi
            </span>{' '}
            Masa Depan.
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Pusat integrasi sains mutakhir Indonesia: Mengoperasikan 12 Organisasi Riset, 380+ laboratorium canggih terbuka di ELSA, serta pendanaan kompetitif untuk periset dan industri nasional.
          </p>
        </div>

        {/* White Multi-Category Search Bar */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 px-2 pb-3 mb-2 border-b border-slate-100 text-xs overflow-x-auto">
              <span className="text-slate-500 font-semibold mr-1 hidden sm:inline">Pencarian:</span>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  activeTab === 'all' 
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Semua Layanan
              </button>
              <button
                onClick={() => setActiveTab('elsa')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  activeTab === 'elsa' 
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                🔬 Lab ELSA
              </button>
              <button
                onClick={() => setActiveTab('riim')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  activeTab === 'riim' 
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                💰 Hibah RIIM
              </button>
              <button
                onClick={() => setActiveTab('or')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  activeTab === 'or' 
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                🏛️ 12 Organisasi Riset
              </button>
            </div>

            {/* Input & Action */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (searchTerm.trim()) {
                  window.location.href = `/services?q=${encodeURIComponent(searchTerm)}`;
                }
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={
                    activeTab === 'elsa' ? 'Cari alat laboratorium (contoh: TEM, Cryo-EM, Sekuensing NGS, Iradiator)...' :
                    activeTab === 'riim' ? 'Cari skema pendanaan (contoh: Ekspedisi, Kompetisi, Startup Deeptech)...' :
                    activeTab === 'or' ? 'Cari organisasi riset (contoh: Nuklir, Antariksa, AI & Elektronika)...' :
                    'Cari fasilitas sains, skema pendanaan, beasiswa, atau warta ilmiah...'
                  }
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 focus:border-red-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600/15 text-sm placeholder:text-slate-400 font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-sm shadow-md shadow-red-600/30 transition-all flex items-center gap-2 shrink-0 group"
              >
                <span>Telusuri</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* 4 Core Pillars White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: ELSA */}
          <Link 
            href="/services" 
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                Layanan Terbuka
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-red-600 transition-colors">
                E-Layanan Sains (ELSA)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Akses 380+ instrumen laboratorium mutakhir (HR-TEM, Cryo-EM, WGS Genomik, & Iradiator Nuklir).
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform pt-2 border-t border-slate-100">
              <span>Buka Katalog Fasilitas</span> &rarr;
            </div>
          </Link>

          {/* Card 2: RIIM Funding */}
          <Link 
            href="/funding" 
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                Hibah Kompetitif
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-red-600 transition-colors">
                Pendanaan Riset (RIIM)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Skema pendanaan multi-tahun hingga Rp 3,5 Milyar untuk riset kompetisi, ekspedisi, dan startup inovasi.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform pt-2 border-t border-slate-100">
              <span>Lihat Open Call Proposal</span> &rarr;
            </div>
          </Link>

          {/* Card 3: 12 Organisasi Riset */}
          <Link 
            href="/organizations" 
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Atom className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider block">
                Gugus Keilmuan
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-red-600 transition-colors">
                12 Organisasi Riset
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Jelajahi fokus keahlian 85 Pusat Riset mulai dari Tenaga Nuklir, Kedirgantaraan, Hayati, hingga AI.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform pt-2 border-t border-slate-100">
              <span>Eksplorasi Struktur OR</span> &rarr;
            </div>
          </Link>

          {/* Card 4: Talenta & Beasiswa */}
          <Link 
            href="/talent" 
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                Pengembangan SDM
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-red-600 transition-colors">
                Talenta & Beasiswa DbR
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Beasiswa S2/S3 Degree by Research penuh, fellowship Post-Doctoral, dan Magang Riset Kampus Merdeka.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform pt-2 border-t border-slate-100">
              <span>Daftar Program Talenta</span> &rarr;
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
