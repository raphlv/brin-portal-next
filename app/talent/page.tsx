import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { TALENT_PROGRAMS } from '@/lib/brinData';

export default function TalentPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-amber-700 font-semibold">Manajemen Talenta Nasional</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Pengembangan Kapasitas Periset
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Beasiswa Degree by Research & Program Fellowship
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Inisiatif strategis BRIN untuk melahirkan ribuan doktor dan peneliti unggul baru melalui beasiswa pascasarjana berbasis riset, mobilitas peneliti diaspora, dan magang riset mahasiswa.
          </p>
        </div>

        {/* Talent Programs Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TALENT_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                    {prog.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Durasi: <strong>{prog.duration}</strong>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {prog.description}
                </p>

                {/* Benefits Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs space-y-2">
                  <div>
                    <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">Fasilitas Beasiswa:</span>
                    <p className="text-slate-800 font-semibold mt-0.5">{prog.stipend}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Sasaran Peserta:</span>
                    <p className="text-slate-700 mt-0.5 font-medium">{prog.target}</p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-slate-900 block">
                    Persyaratan Utama:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    {prog.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://beasiswa.brin.go.id"
                  target="_blank"
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 transition-all"
                >
                  <span>Daftar Beasiswa & Fellowship</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
