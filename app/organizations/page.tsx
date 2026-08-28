import React from 'react';
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

export default function OrganizationsDirectoryPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">12 Organisasi Riset</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Gugus Keilmuan Terpadu
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            12 Organisasi Riset & 85 Pusat Riset BRIN
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Struktur penelitian strategis nasional yang mengoordinasikan belasan ribu periset untuk memecahkan tantangan bangsa mulai dari reaktor energi nuklir, satelit antariksa, kesehatan, pangan, hingga kecerdasan artifisial.
          </p>
        </div>

        {/* 12 OR Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_ORGANIZATIONS.map((org) => {
            const Icon = iconMap[org.icon] || Atom;
            return (
              <div
                key={org.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between group"
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
                      className="px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border"
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
                  <p className="text-xs text-red-600 font-semibold mb-3 italic">
                    "{org.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                    {org.description}
                  </p>

                  {/* Key Research Centers Preview */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Pusat Riset (PR) Binaan:
                    </span>
                    <ul className="space-y-1">
                      {org.researchCenters.slice(0, 3).map((pr, i) => (
                        <li key={i} className="text-[11px] text-slate-700 font-medium flex items-start gap-1.5 truncate">
                          <span className="text-red-600 font-bold">&bull;</span>
                          <span className="truncate">{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Invensi Unggulan */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Invensi Strategis:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {org.featuredInventions.map((inv, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 text-[11px] text-slate-700 font-medium border border-slate-200"
                        >
                          {inv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link & Head Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-900 font-bold">{org.totalCenters} PR</span> &bull; {org.totalResearchers} Periset
                  </div>
                  <Link
                    href={`/organizations/${org.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Detail & Pusat Riset</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
