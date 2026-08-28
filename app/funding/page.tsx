import React from 'react';
import Link from 'next/link';
import { 
  Coins, 
  Clock, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { FUNDING_SCHEMES } from '@/lib/brinData';

export default function FundingPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">Pendanaan RIIM</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Dana Abadi Penelitian (LPDP)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Riset dan Inovasi untuk Indonesia Maju (RIIM)
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Program pendanaan kompetitif tahunan yang disediakan oleh BRIN bekerjasama dengan LPDP untuk mendukung riset dasar, terapan, ekspedisi keanekaragaman hayati, dan inkubasi startup deep-tech.
          </p>
        </div>

        {/* 4 Funding Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FUNDING_SCHEMES.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-xl bg-red-50 text-red-700 font-mono text-xs font-bold border border-red-200">
                    {scheme.code}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Deadline: {scheme.deadline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                  {scheme.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {scheme.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Plafon Hibah:</span>
                    <span className="text-red-600 font-bold font-mono text-sm">{scheme.maxGrant}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Durasi Kontrak:</span>
                    <span className="text-slate-800 font-bold">{scheme.duration}</span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-slate-800 block">
                    Kriteria & Syarat Pengusul:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    {scheme.eligibility.map((el, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <a
                  href="https://pendanaan.brin.go.id"
                  target="_blank"
                  className="flex-1 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-red-600/25 transition-all"
                >
                  <span>Kirim Proposal Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Proposal Submission Workflow */}
        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 text-center">
            Tahapan Seleksi Proposal RIIM BRIN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Pengajuan Daring</h4>
              <p className="text-xs text-slate-500 font-medium">Pengunggahan proposal & RAB melalui portal pendanaan.brin.go.id</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Seleksi Administrasi</h4>
              <p className="text-xs text-slate-500 font-medium">Pemeriksaan kelengkapan rekam jejak, izin klirens etik, & mitra.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Peer Review Ilmiah</h4>
              <p className="text-xs text-slate-500 font-medium">Penilaian substansi ilmiah oleh pakar reviewer independen bereputasi.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Penetapan & Kontrak</h4>
              <p className="text-xs text-slate-500 font-medium">Penandatanganan PKS kontrak pendanaan dan pencairan dana LPDP.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
