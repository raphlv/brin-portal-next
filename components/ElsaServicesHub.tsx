'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FlaskConical, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ELSA_SERVICES } from '@/lib/brinData';

export default function ElsaServicesHub() {
  const [selectedCat, setSelectedCat] = useState<string>('Semua');

  const categories = ['Semua', 'Karakterisasi', 'Genomik', 'Nuklir', 'Komputasi', 'Maritim'];

  const filteredServices = selectedCat === 'Semua' 
    ? ELSA_SERVICES 
    : ELSA_SERVICES.filter(s => s.category === selectedCat);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <FlaskConical className="w-3.5 h-3.5" />
              E-Layanan Sains (ELSA) Terpadu
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Akses Terbuka Laboratorium & Fasilitas Riset
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl font-medium">
              Platform digital terpusat bagi perguruan tinggi, industri, startup, dan periset untuk memanfaatkan ratusan instrumen ilmiah berstandar internasional ISO/IEC 17025.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://elsa.brin.go.id"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md shadow-red-600/25 hover:bg-red-700 transition-all"
            >
              <span>Portal Resmi elsa.brin.go.id</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4-Step Workflow Visual */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-12">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            Alur Pengajuan Layanan Sains (ELSA BRIN):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 font-display font-bold flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Buat Akun & Login</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Daftarkan profil periset / instansi di portal ELSA.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 font-display font-bold flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Pilih Alat & Parameter</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Tentukan pengujian & kirim rincian spesifikasi sampel.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 font-display font-bold flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Verifikasi & Pengiriman</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Verifikasi kelayakan sampel & instruksi pengiriman fisik.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 font-display font-bold flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Uji & Laporan ISO</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Terima sertifikat hasil analisis digital terverifikasi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCat === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat === 'Semua' ? '🌟 Semua Layanan Lab' : cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                    {service.category}
                  </span>
                  {service.isPopular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Populer
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-medium">
                  {service.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2 pt-3 border-t border-slate-100 mb-4 text-xs">
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight font-medium">{service.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="text-[11px] font-medium">Waktu Uji: {service.turnaroundTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[11px] font-semibold text-emerald-700">{service.accreditation}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Open Access Multi-Disiplin</span>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-800 group-hover:translate-x-1 transition-transform"
                >
                  <span>Detail Spesifikasi</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-slate-200 hover:border-red-300 text-sm font-bold transition-all shadow-sm"
          >
            <span>Jelajahi 380+ Instrumen Laboratorium ELSA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
