'use client';

import React from 'react';
import { 
  Building2, 
  Users, 
  FlaskConical, 
  Award, 
  Coins, 
  FileText, 
  Globe2, 
  Atom 
} from 'lucide-react';
import { IMPACT_METRICS } from '@/lib/brinData';

export default function LiveImpactStats() {
  const stats = [
    {
      label: 'Organisasi Riset (OR)',
      value: IMPACT_METRICS.totalOrganizations,
      sub: 'Gugus Keilmuan Strategis',
      icon: Atom,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      label: 'Pusat Riset (PR)',
      value: IMPACT_METRICS.totalResearchCenters,
      sub: 'Laboratorium Terpadu',
      icon: Building2,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      label: 'Periset & Sivitas',
      value: IMPACT_METRICS.totalResearchers,
      sub: 'Peneliti, Perekayasa, & Analis',
      icon: Users,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      label: 'Fasilitas Lab ELSA',
      value: IMPACT_METRICS.totalLaboratoriesELSA,
      sub: 'Instrumen Terbuka (Open Access)',
      icon: FlaskConical,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      label: 'Paten & HKI Terdaftar',
      value: IMPACT_METRICS.totalPatentsRegistered,
      sub: 'Kekayaan Intelektual Nasional',
      icon: Award,
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
    {
      label: 'Dana Riset (RIIM)',
      value: IMPACT_METRICS.annualResearchFunding,
      sub: 'Alokasi Dana Abadi Riset',
      icon: Coins,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'Publikasi Scopus/WoS',
      value: IMPACT_METRICS.scopusWoSPublications,
      sub: 'Karya Ilmiah Bereputasi Global',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Kemitraan Global',
      value: IMPACT_METRICS.partnerUniversitiesGlobal,
      sub: 'Kolaborasi Lembaga Riset Dunia',
      icon: Globe2,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
  ];

  return (
    <section className="py-16 bg-slate-100/70 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-red-100 border border-red-200">
            Kekuatan Sains & Teknologi Nasional
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-3">
            Dampak Riset & Kapabilitas Ekosistem BRIN
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Metrik terukur dari integrasi seluruh sumber daya ilmu pengetahuan dan teknologi demi kemandirian bangsa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
