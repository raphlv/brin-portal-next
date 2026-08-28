'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function TopNoticeBar() {
  return (
    <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-700 h-9 hidden md:flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Announcement with Ticker */}
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-600 text-white font-bold text-[10px] tracking-wide uppercase shadow-sm shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Pengumuman
          </span>
          <p className="truncate text-slate-700 text-xs font-medium">
            <strong className="text-red-600">[OPEN CALL]</strong> Pendaftaran Proposal RIIM Gelombang II 2026 &bull; Akses Terbuka Laboratorium Sains di ELSA BRIN
          </p>
        </div>

        {/* Right: Quick Links & BerAKHLAK */}
        <div className="flex items-center gap-4 shrink-0 text-[11px]">
          <div className="flex items-center gap-1 text-slate-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>BerAKHLAK &bull; Bangga Melayani Bangsa</span>
          </div>
          <div className="h-3 w-px bg-slate-300" />
          <Link 
            href="/funding" 
            className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-1 font-semibold whitespace-nowrap"
          >
            Portal RIIM <ArrowRight className="w-3 h-3" />
          </Link>
          <div className="h-3 w-px bg-slate-300" />
          <Link 
            href="/services" 
            className="text-sky-700 hover:text-sky-900 transition-colors font-semibold whitespace-nowrap"
          >
            Layanan ELSA
          </Link>
        </div>
      </div>
    </div>
  );
}
