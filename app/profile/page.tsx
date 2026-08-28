import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  Award, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Target
} from 'lucide-react';
import { IMPACT_METRICS } from '@/lib/brinData';

export default function ProfilePage() {
  const leadership = [
    {
      role: 'Ketua Dewan Pengarah BRIN',
      name: 'Prof. Dr. (H.C.) Hj. Megawati Soekarnoputri',
      sub: 'Memberikan arahan strategis haluan riset dan inovasi nasional',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    },
    {
      role: 'Kepala BRIN',
      name: 'Dr. Laksana Tri Handoko, M.Sc.',
      sub: 'Memimpin eksekusi program integrasi riset dan kelembagaan iptek',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    },
    {
      role: 'Wakil Kepala BRIN',
      name: 'Prof. Dr. Ir. Amarulla Octavian, M.Sc., DESD.',
      sub: 'Mengoordinasikan kebijakan operasional sains dan maritim',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">Profil Lembaga</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Tentang BRIN
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Profil Badan Riset dan Inovasi Nasional
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed font-medium">
            Satu-satunya badan riset pemerintah terintegrasi yang didirikan untuk mempercepat ekosistem penemuan ilmiah, hilirisasi inovasi industri, serta kedaulatan teknologi Indonesia.
          </p>
        </div>

        {/* Heritage & Legacy of B.J. Habibie */}
        <div className="p-8 sm:p-10 rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50 mb-14 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Warisan Sejarah Sains Nusantara
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Melanjutkan Cita-cita Prof. Dr.-Ing. B.J. Habibie
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                BRIN berakar dari visi besar pembangunan kemandirian teknologi nasional yang dirintis sejak era Prof. B.J. Habibie di Kawasan Puspiptek Serpong (kini KST B.J. Habibie). Melalui Perpres No. 78 Tahun 2021, seluruh entitas riset nasional (LIPI, BPPT, BATAN, LAPAN, dan Balitbang Kementerian) disatukan di bawah satu atap BRIN untuk menghilangkan duplikasi riset dan memaksimalkan anggaran sains.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-semibold shadow-sm">
                  🏛️ Kantor Pusat: <strong>Gedung B.J. Habibie Thamrin</strong>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-semibold shadow-sm">
                  📜 Dasar Hukum: <strong>UU No. 11/2019 & Perpres 78/2021</strong>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center shadow-md">
              <div className="text-4xl font-display font-extrabold text-red-600 mb-1">
                {IMPACT_METRICS.totalResearchers}
              </div>
              <div className="text-xs font-bold text-slate-900 mb-3">Sivitas & Talenta Riset Terpadu</div>
              <p className="text-[11px] text-slate-500 font-medium">
                Peleburan lebih dari 30+ lembaga riset kementerian menjadi 12 Organisasi Riset berstandar global.
              </p>
            </div>
          </div>
        </div>

        {/* Visi, Misi, & Nilai Budaya */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visi */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-5 border border-red-200">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Visi BRIN</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                "Terwujudnya Indonesia yang berdaulat, mandiri, dan berkepribadian berlandaskan gotong royong melalui penguasaan ilmu pengetahuan, teknologi, dan inovasi yang berkelanjutan."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-red-600 font-bold">
              Prioritas Riset Nasional (PRN) Menuju Indonesia Emas 2045
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5 border border-sky-200">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Misi Strategis</h3>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Membangun ekosistem riset terbuka (Open Science) yang inklusif dan berstandar internasional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Mengembangkan manajemen talenta nasional untuk mencetak periset unggul berkualifikasi doktoral.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Mendorong hilirisasi invensi iptek ke sektor industri guna meningkatkan daya saing ekonomi nasional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Menyediakan rekomendasi kebijakan berbasis bukti ilmiah (evidence-based policy) bagi pemerintah.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider px-3.5 py-1 rounded-full bg-red-100 border border-red-200">
              Pimpinan Lembaga
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 mt-3">
              Dewan Pengarah & Pimpinan BRIN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((lead, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 text-center flex flex-col items-center group transition-all"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-slate-200 p-1 group-hover:border-red-600 transition-colors">
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider mb-1">
                  {lead.role}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {lead.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {lead.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
