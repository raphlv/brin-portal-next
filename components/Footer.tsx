'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  MessageSquare, 
  Lock, 
  ArrowUpRight 
} from 'lucide-react';
import { SCIENCE_TECH_PARKS } from '@/lib/brinData';

export default function Footer() {
  return (
    <footer className="bg-[#0A0E17] text-slate-400 text-xs border-t-4 border-red-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand & Headquarters */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#0A0E17] rounded-[9px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-red-500" />
                </div>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white">
                  BRIN
                </span>
                <span className="block text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                  Badan Riset dan Inovasi Nasional
                </span>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed text-xs max-w-sm">
              Lembaga pemerintah nonkementerian yang menyelenggarakan penelitian, pengembangan, pengkajian, dan penerapan, serta invensi dan inovasi yang terintegrasi di Indonesia.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Kantor Pusat:</strong> Gedung B.J. Habibie, Jl. M.H. Thamrin No. 8, Jakarta Pusat 10340
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hotline WhatsApp: <a href="https://wa.me/6281119333639" target="_blank" className="text-white hover:text-red-400 font-semibold">+62 811-1933-3639</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email Layanan: <a href="mailto:ppid@brin.go.id" className="text-white hover:underline">ppid@brin.go.id</a></span>
              </div>
            </div>

            {/* BerAKHLAK Tag */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>BerAKHLAK &bull; Bangga Melayani Bangsa</span>
              </span>
            </div>
          </div>

          {/* Col 3: Portal Layanan Terbuka */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2.5">
              Layanan & Portofolio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  E-Layanan Sains (ELSA)
                </Link>
              </li>
              <li>
                <Link href="/funding" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  Pendanaan Riset (RIIM)
                </Link>
              </li>
              <li>
                <Link href="/talent" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  Degree by Research (DbR)
                </Link>
              </li>
              <li>
                <Link href="/talent" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  Post-Doctoral Fellowship
                </Link>
              </li>
              <li>
                <Link href="/innovations" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  Supercomputer Mahameru
                </Link>
              </li>
              <li>
                <a href="https://rin.brin.go.id" target="_blank" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  Repositori Ilmiah Nasional <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://jurnal.brin.go.id" target="_blank" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  Portal Jurnal Ilmiah Terbuka <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: 12 Organisasi Riset */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              Gugus Organisasi Riset
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/organizations/tenaga-nuklir" className="hover:text-white transition-colors">
                  OR Tenaga Nuklir (ORTN)
                </Link>
              </li>
              <li>
                <Link href="/organizations/penerbangan-dan-antariksa" className="hover:text-white transition-colors">
                  OR Penerbangan & Antariksa (ORPA)
                </Link>
              </li>
              <li>
                <Link href="/organizations/elektronika-dan-informatika" className="hover:text-white transition-colors">
                  OR Elektronika & Informatika (OREI)
                </Link>
              </li>
              <li>
                <Link href="/organizations/kebumian-dan-maritim" className="hover:text-white transition-colors">
                  OR Kebumian & Maritim (ORKM)
                </Link>
              </li>
              <li>
                <Link href="/organizations/hayati-dan-lingkungan" className="hover:text-white transition-colors">
                  OR Hayati & Lingkungan (ORHL)
                </Link>
              </li>
              <li>
                <Link href="/organizations/kesehatan" className="hover:text-white transition-colors">
                  OR Kesehatan (ORK)
                </Link>
              </li>
              <li>
                <Link href="/organizations" className="text-red-400 hover:underline font-bold">
                  Lihat Semua 12 OR &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kawasan Sains & Tata Kelola */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Kawasan Sains (KST)
            </h4>
            <ul className="space-y-2.5">
              {SCIENCE_TECH_PARKS.slice(0, 4).map((kst) => (
                <li key={kst.id}>
                  <Link href="/contact" className="hover:text-white transition-colors block">
                    <span className="font-semibold text-slate-200 block">{kst.name}</span>
                    <span className="text-[10px] text-slate-400 truncate block">{kst.focus}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <a 
                  href="https://www.lapor.go.id/instansi/badan-riset-dan-inovasi-nasional" 
                  target="_blank"
                  className="flex items-center gap-1.5 text-red-400 hover:text-white font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Pengaduan SP4N-LAPOR!</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Legal bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left text-xs">
            &copy; {new Date().getFullYear()} <strong>Badan Riset dan Inovasi Nasional (BRIN)</strong>. Hak Cipta Dilindungi Undang-Undang Republik Indonesia.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/profile" className="hover:text-white transition-colors">
              Struktur Organisasi
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              PPID & Keterbukaan Informasi
            </Link>
            <Link href="/admin" className="hover:text-red-400 transition-colors flex items-center gap-1 font-semibold">
              <Lock className="w-3 h-3" /> Panel Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
