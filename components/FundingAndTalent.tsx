'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Coins, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { FUNDING_SCHEMES, TALENT_PROGRAMS } from '@/lib/brinData';

export default function FundingAndTalent() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Pendanaan RIIM */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Coins className="w-3.5 h-3.5" />
                  Pendanaan Riset & Inovasi (RIIM)
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Open Call Hibah Riset Kompetitif
                </h2>
              </div>
              <Link 
                href="/funding" 
                className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 shrink-0"
              >
                Lihat Semua <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {FUNDING_SCHEMES.map((scheme) => (
                <div 
                  key={scheme.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-red-50 text-red-700 font-mono text-[10px] font-bold border border-red-200">
                      {scheme.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Deadline: {scheme.deadline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1.5">
                    {scheme.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-medium">
                    {scheme.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
                    <span className="text-red-600 font-bold font-mono">
                      💰 {scheme.maxGrant}
                    </span>
                    <Link
                      href="/funding"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-red-600"
                    >
                      <span>Panduan Proposal</span> &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Manajemen Talenta & Beasiswa DbR */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Manajemen Talenta Nasional (MTN)
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Beasiswa S2/S3 & Fellowship Riset
                </h2>
              </div>
              <Link 
                href="/talent" 
                className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 shrink-0"
              >
                Lihat Semua <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {TALENT_PROGRAMS.map((prog) => (
                <div 
                  key={prog.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                      {prog.badge}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Durasi: <strong>{prog.duration}</strong>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-medium">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
                    <span className="text-emerald-700 font-semibold text-[11px] truncate max-w-[280px]">
                      🎯 Target: {prog.target}
                    </span>
                    <Link
                      href="/talent"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 hover:text-amber-900"
                    >
                      <span>Syarat Beasiswa</span> &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
