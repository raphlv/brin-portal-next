'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  ExternalLink, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { SCIENCE_TECH_PARKS } from '@/lib/brinData';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Kerjasama Riset',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">Kontak & Lokasi</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Kantor Pusat & Kawasan Sains Terpadu
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Hubungi layanan informasi publik BRIN, ajukan permohonan kunjungan ilmiah, atau diskusikan inisiasi kerjasama riset dan hilirisasi industri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Headquarters Card */}
          <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                Kantor Pusat Lembaga:
              </span>
              <h3 className="text-2xl font-bold text-slate-950">
                Gedung B.J. Habibie
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                Jl. M.H. Thamrin No. 8, Kebon Sirih, Menteng, Jakarta Pusat, DKI Jakarta 10340
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Jam Layanan Terpadu:</strong>
                  <p className="text-slate-500">Senin - Jumat: 08.00 - 16.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Hotline WhatsApp Resmi:</strong>
                  <p><a href="https://wa.me/6281119333639" target="_blank" className="text-red-600 font-bold hover:underline">+62 811-1933-3639</a></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Email Layanan PPID:</strong>
                  <p><a href="mailto:ppid@brin.go.id" className="text-slate-800 font-semibold hover:underline">ppid@brin.go.id</a></p>
                </div>
              </div>
            </div>

            {/* LAPOR! Box */}
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
              <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-red-600" />
                <span>Pengaduan SP4N-LAPOR!</span>
              </h4>
              <p className="text-[11px] text-slate-600 mb-3 leading-relaxed font-medium">
                Kanal aspirasi dan pengaduan resmi pelayanan publik pemerintah RI.
              </p>
              <a
                href="https://www.lapor.go.id/instansi/badan-riset-dan-inovasi-nasional"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800"
              >
                <span>Buat Laporan</span> &rarr;
              </a>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950 mb-2">
              Formulir Permohonan Informasi & Kerjasama
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-medium">
              Kirimkan pertanyaan atau tawaran kolaborasi riset langsung ke unit kerja terkait di BRIN.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Pesan Anda Berhasil Terkirim</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
                  Terima kasih atas pesan Anda. Petugas layanan informasi publik BRIN akan menghubungi Anda melalui email dalam 1x24 jam kerja.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 shadow-sm"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Nama Lengkap:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Dr. Budi Santoso"
                      className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Alamat Email:
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@instansi.ac.id"
                      className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Kategori Keperluan:
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                  >
                    <option value="Kerjasama Riset">Kerjasama Riset & Industri</option>
                    <option value="Layanan Lab ELSA">Pertanyaan Layanan Laboratorium ELSA</option>
                    <option value="Pendanaan RIIM">Konsultasi Pendanaan RIIM</option>
                    <option value="Beasiswa DbR">Informasi Beasiswa Degree by Research</option>
                    <option value="Kunjungan Ilmiah">Permohonan Kunjungan Ilmiah / Studi Banding</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Isi Pesan / Rincian Kebutuhan:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan penjelasan permohonan informasi atau proposal kerjasama Anda..."
                    className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/25 transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirimkan Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5 Kawasan Sains & Teknologi (KST) Directory */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider px-3.5 py-1 rounded-full bg-red-100 border border-red-200">
              Jaringan Fasilitas Nasional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
              Direktori 5 Kawasan Sains dan Teknologi (KST)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCIENCE_TECH_PARKS.map((kst) => (
              <div
                key={kst.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all space-y-3"
              >
                <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                  {kst.facilitiesCount}+ Fasilitas Lab
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {kst.name}
                </h3>
                <p className="text-xs text-red-600 font-bold">
                  {kst.focus}
                </p>
                <div className="flex items-start gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">{kst.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
