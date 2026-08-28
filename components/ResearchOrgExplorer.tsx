'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Atom, 
  Rocket, 
  Cpu, 
  Ship, 
  Leaf, 
  HeartPulse, 
  Wheat, 
  Sparkles, 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp,
  ArrowRight,
  Building2
} from 'lucide-react';
import { RESEARCH_ORGANIZATIONS } from '@/lib/brinData';

const iconMap: Record<string, any> = {
  Atom,
  Rocket,
  Cpu,
  Ship,
  Leaf,
  HeartPulse,
  Wheat,
  Sparkles,
  Zap,
  Users,
  BookOpen,
  TrendingUp,
};

export default function ResearchOrgExplorer() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'tech' | 'bio' | 'social'>('all');

  const filteredOrgs = RESEARCH_ORGANIZATIONS.filter(org => {
    if (selectedFilter === 'tech') return ['ORTN', 'ORPA', 'OREI', 'ORNM', 'OREM'].includes(org.code);
    if (selectedFilter === 'bio') return ['ORHL', 'ORK', 'ORPP', 'ORKM'].includes(org.code);
    if (selectedFilter === 'social') return ['ORISH', 'ORBS', 'ORTEKM'].includes(org.code);
    return true;
  });

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              12 Organisasi Riset (OR) & 85 Pusat Riset
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Pilar Keilmuan & Pusat Riset BRIN
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl font-medium">
              Struktur gugus riset non-struktural yang mewadahi ribuan peneliti kelas dunia dalam mengembangkan invensi strategis bagi kemajuan industri dan masyarakat.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs shrink-0 overflow-x-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                selectedFilter === 'all' 
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua (12)
            </button>
            <button
              onClick={() => setSelectedFilter('tech')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                selectedFilter === 'tech' 
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⚡ Deeptech & Nuklir (5)
            </button>
            <button
              onClick={() => setSelectedFilter('bio')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                selectedFilter === 'bio' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌿 Hayati & Pangan (4)
            </button>
            <button
              onClick={() => setSelectedFilter('social')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                selectedFilter === 'social' 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏛️ Sosial & Humaniora (3)
            </button>
          </div>
        </div>

        {/* 12 OR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrgs.map((org) => {
            const Icon = iconMap[org.icon] || Atom;
            return (
              <div
                key={org.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all"
                      style={{ 
                        backgroundColor: `${org.color}15`, 
                        borderColor: `${org.color}30`,
                        color: org.color 
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold tracking-wider uppercase border"
                      style={{ 
                        backgroundColor: `${org.color}10`, 
                        borderColor: `${org.color}25`,
                        color: org.color 
                      }}
                    >
                      {org.code}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1">
                    {org.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-600 italic mb-3">
                    "{org.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 font-medium">
                    {org.description}
                  </p>

                  {/* Invensi Unggulan Pill */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Invensi & Fokus Unggulan:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {org.featuredInventions.slice(0, 2).map((inv, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-[11px] font-medium border border-slate-200 truncate max-w-full"
                        >
                          &bull; {inv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Metrics & Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                    <span><strong className="text-slate-800">{org.totalCenters}</strong> Pusat Riset</span>
                    <span>&bull;</span>
                    <span><strong className="text-slate-800">{org.totalResearchers}</strong> Periset</span>
                  </div>
                  <Link
                    href={`/organizations/${org.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-800 transition-colors group-hover:translate-x-1"
                  >
                    <span>Detail OR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/organizations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-100 hover:bg-red-50 hover:text-red-700 border border-slate-200 hover:border-red-300 text-slate-800 text-sm font-bold transition-all shadow-sm"
          >
            <span>Buka Direktori Lengkap 85 Pusat Riset BRIN</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
