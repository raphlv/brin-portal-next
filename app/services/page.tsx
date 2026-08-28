'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FlaskConical, 
  Search, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';
import { ELSA_SERVICES } from '@/lib/brinData';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Karakterisasi', 'Genomik', 'Nuklir', 'Komputasi', 'Maritim'];

  const filtered = ELSA_SERVICES.filter(service => {
    const matchesCat = selectedCategory === 'Semua' || service.category === selectedCategory;
    const matchesSearch = searchTerm.trim() === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-sky-700 font-semibold">E-Layanan Sains (ELSA)</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Open Access Research Labs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Katalog Fasilitas & Laboratorium Riset Terbuka
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Akses langsung ke 380+ instrumen laboratorium mutakhir kelas dunia milik BRIN untuk akademisi, mahasiswa, periset independen, dan industri manufaktur di seluruh Indonesia.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari alat (HR-TEM, Cryo-EM, NGS Sekuensing, Iradiator Gamma, HPC)..."
                className="w-full pl-12 pr-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-red-600 font-medium placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                    {service.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">
                    {service.kstName}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                  {service.description}
                </p>

                {/* Equipment Specs */}
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
                    <span className="text-[11px] font-bold text-emerald-700">{service.accreditation}</span>
                  </div>
                </div>

                {/* Sample Types */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Jenis Sampel Uji:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {service.sampleTypes.map((type, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-slate-50 text-[10px] text-slate-700 font-medium border border-slate-200">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                <a
                  href="https://elsa.brin.go.id"
                  target="_blank"
                  className="w-full py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-red-600/25 transition-all"
                >
                  <span>Ajukan di Portal ELSA</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ELSA Support & Help Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-slate-950 mb-2">
            Butuh Bimbingan Teknis atau Pengujian Kustom?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto mb-6 font-medium">
            Tim teknisi laboratorium dan periset BRIN siap membantu formulasi metode analisis, klirens etik riset, dan konsultasi pengujian industri.
          </p>
          <a
            href="https://wa.me/6281119333639"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/25 transition-all"
          >
            <span>Hubungi Helpdesk Layanan ELSA WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
