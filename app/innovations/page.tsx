import React from 'react';
import Link from 'next/link';
import { 
  Telescope, 
  Atom, 
  Ship, 
  Cpu, 
  MapPin, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { STRATEGIC_FACILITIES } from '@/lib/brinData';

const iconMap: Record<string, any> = {
  Telescope,
  Atom,
  Ship,
  Cpu,
};

export default function InnovationsPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">Fasilitas Strategis</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Infrastruktur Megasains
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Fasilitas Strategis & Terobosan Sains Nasional
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Menghubungkan peneliti Indonesia dengan fasilitas eksperimental megasains tercanggih untuk menopang kedaulatan teknologi antariksa, nuklir, laut dalam, dan superkomputer.
          </p>
        </div>

        {/* Detailed Facilities List */}
        <div className="space-y-12 mb-16">
          {STRATEGIC_FACILITIES.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Sparkles;
            return (
              <div
                key={fac.id}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all grid grid-cols-1 lg:grid-cols-2 gap-8 items-center group"
              >
                {/* Media Column */}
                <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold flex items-center gap-2 shadow-md">
                    <Icon className="w-4 h-4 text-red-600" />
                    <span>Megasains #{idx + 1}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-red-600 text-white shadow-lg inline-block">
                      ⚡ {fac.specs}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="space-y-4">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    {fac.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 group-hover:text-red-600 transition-colors">
                    {fac.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {fac.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Dampak Kedaulatan Nasional:
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                      {fac.impact}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 font-medium">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{fac.location}</span>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/services"
                      className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-xs shadow-md shadow-red-600/25 hover:bg-red-700 transition-all flex items-center gap-1.5"
                    >
                      <span>Akses via ELSA BRIN</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
