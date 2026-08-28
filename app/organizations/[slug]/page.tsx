import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Atom, 
  Rocket, 
  Cpu, 
  Ship, 
  Leaf, 
  HeartPulse, 
  Wheat, 
  Sparkles, 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Award,
  MapPin
} from 'lucide-react';
import { RESEARCH_ORGANIZATIONS } from '@/lib/brinData';

const iconMap: Record<string, any> = {
  Atom,
  Rocket,
  Cpu,
  Ship,
  Leaf,
  HeartPulse,
  Wheat,
  Sparkles,
  Zap,
  Users,
  BookOpen,
  TrendingUp,
};

export function generateStaticParams() {
  return RESEARCH_ORGANIZATIONS.map((org) => ({
    slug: org.slug,
  }));
}

export default function OrgDetailPage({ params }: { params: { slug: string } }) {
  const org = RESEARCH_ORGANIZATIONS.find((o) => o.slug === params.slug);

  if (!org) {
    notFound();
  }

  const Icon = iconMap[org.icon] || Atom;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-red-600">Beranda</Link>
          <span>/</span>
          <Link href="/organizations" className="hover:text-red-600">12 Organisasi Riset</Link>
          <span>/</span>
          <span className="text-red-600 font-semibold">{org.code}</span>
        </div>

        {/* Hero Header */}
        <div className="p-8 sm:p-10 rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-5">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center border shrink-0 shadow-sm"
                style={{ 
                  backgroundColor: `${org.color}15`, 
                  borderColor: `${org.color}40`,
                  color: org.color 
                }}
              >
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <span 
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold tracking-wider uppercase border inline-block mb-2 shadow-sm"
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    borderColor: '#E2E8F0',
                    color: '#DC2626' 
                  }}
                >
                  {org.code} &bull; {org.nameEn}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950">
                  {org.name}
                </h1>
                <p className="text-sm font-bold text-red-600 italic mt-1">
                  "{org.tagline}"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
              <div>
                <div className="text-2xl font-display font-extrabold text-slate-900">{org.totalCenters}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Pusat Riset</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-display font-extrabold text-red-600">{org.totalResearchers}+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Periset Sivitas</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-700 mt-6 leading-relaxed max-w-4xl font-medium">
            {org.description}
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Col 1 & 2: Research Centers (PR) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-red-600" />
                <span>Pusat-Pusat Riset (PR) di Bawah {org.code}</span>
              </h2>

              <div className="space-y-4">
                {org.researchCenters.map((pr, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{pr}</h4>
                      <p className="text-xs text-slate-600 mt-1 font-medium">
                        Menyelenggarakan penelitian spesifik bidang, uji karakterisasi, serta pengkajian teknologi terapan berstandar global.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invensi Unggulan Detail */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Invensi & Terobosan Iptek Unggulan</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {org.featuredInventions.map((inv, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-800">{inv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Key Facilities & Collaboration CTA */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-red-600" />
                <span>Fasilitas Laboratorium Unggulan</span>
              </h3>
              <ul className="space-y-3">
                {org.keyFacilities.map((fac, idx) => (
                  <li key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-0.5">{fac}</span>
                    <span className="text-[11px] text-red-600 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Akses via ELSA BRIN
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="/services"
                  className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-red-600/25 transition-all"
                >
                  <span>Ajukan Uji Lab di ELSA</span> &rarr;
                </Link>
              </div>
            </div>

            {/* Funding Opportunity Box */}
            <div className="p-6 sm:p-8 rounded-3xl border border-amber-200 bg-amber-50/70 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Peluang Riset Bersama {org.code}
              </h3>
              <p className="text-xs text-slate-700 mb-4 leading-relaxed font-medium">
                Dosen dan peneliti eksternal dapat berkolaborasi menggunakan skema pendanaan RIIM dan Beasiswa Degree by Research.
              </p>
              <Link
                href="/funding"
                className="w-full py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 shadow-sm transition-all"
              >
                <span>Lihat Skema Pendanaan RIIM</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
