'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Telescope, 
  Atom, 
  Ship, 
  Cpu, 
  MapPin, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { STRATEGIC_FACILITIES } from '@/lib/brinData';

const iconMap: Record<string, any> = {
  Telescope,
  Atom,
  Ship,
  Cpu,
};

export default function StrategicFacilities() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200">
            Infrastruktur Megasains Nasional
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Fasilitas Riset Strategis Berkelas Dunia
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">
            Investasi teknologi tinggi negara untuk mendorong terobosan astronomi antariksa, kemandirian energi nuklir damai, eksplorasi palung laut dalam, dan kedaulatan komputasi kecerdasan artifisial.
          </p>
        </div>

        {/* 4 Big Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STRATEGIC_FACILITIES.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Sparkles;
            return (
              <div 
                key={fac.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400 transition-all overflow-hidden flex flex-col group relative"
              >
                {/* Visual Header with Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                    <Icon className="w-4 h-4 text-red-600" />
                    <span>Fasilitas #{idx + 1}</span>
                  </div>

                  {/* Specs Pill */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-red-600 text-white shadow-lg inline-block truncate max-w-full">
                      ⚡ {fac.specs}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1">
                      {fac.name}
                    </h3>
                    <p className="text-xs font-bold text-red-600 mb-3">
                      {fac.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                      {fac.description}
                    </p>

                    {/* Impact Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        Dampak Strategis Nasional:
                      </span>
                      <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                        {fac.impact}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium">
                      <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{fac.location}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Terbuka untuk Kolaborasi</span>
                    <Link
                      href="/innovations"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Lihat Profil Fasilitas</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner KST */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200">
              Kawasan Sains & Teknologi (KST)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Jaringan 5 Kawasan Sains Utama di Seluruh Indonesia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">
              KST B.J. Habibie Serpong, KST Soekarno Cibinong, KST Samaun Samadikun Bandung, KST Siwabessy Pasar Jumat, dan KST Gatot Soebroto Jakarta.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs whitespace-nowrap transition-all shadow-md shadow-red-600/25 shrink-0"
          >
            Peta Lokasi Kawasan Sains &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
