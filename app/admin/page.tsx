'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Lock, 
  FlaskConical, 
  Coins, 
  Newspaper, 
  Plus, 
  Building2
} from 'lucide-react';
import { 
  RESEARCH_ORGANIZATIONS, 
  ELSA_SERVICES, 
  FUNDING_SCHEMES, 
  NEWS_ARTICLES, 
  IMPACT_METRICS 
} from '@/lib/brinData';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'funding' | 'news'>('overview');
  const [newsList, setNewsList] = useState(NEWS_ARTICLES);
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Inovasi' | 'Siaran Pers' | 'Kebijakan' | 'Internasional'>('Inovasi');
  const [newSummary, setNewSummary] = useState('');

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem = {
      id: `news-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: newCategory,
      summary: newSummary || 'Rangkuman siaran pers riset nasional terbaru dari Badan Riset dan Inovasi Nasional.',
      content: newSummary || 'Konten lengkap siaran pers dan warta iptek nasional.',
      date: '28 Agustus 2026',
      readTime: '3 Menit Baca',
      author: 'Pusat Komunikasi Publik BRIN',
      views: 1,
      imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1000&auto=format&fit=crop',
      tags: ['BRIN', newCategory, 'Iptek'],
    };

    setNewsList([newItem, ...newsList]);
    setNewTitle('');
    setNewSummary('');
    setShowAddNewsModal(false);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-red-100 text-red-700 text-xs font-bold border border-red-200 flex items-center gap-1">
                <Lock className="w-3 h-3" /> BRIN Control Center
              </span>
              <span className="text-xs text-slate-500 font-medium">&bull; Administrator Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Dashboard Manajemen Data Riset & Layanan Sains
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddNewsModal(true)}
              className="px-4 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/25 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Warta Baru</span>
            </button>
            <Link
              href="/"
              className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-all"
            >
              Lihat Website &rarr;
            </Link>
          </div>
        </div>

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500">Total Organisasi Riset</span>
              <Building2 className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-3xl font-display font-extrabold text-slate-900">12 OR</div>
            <span className="text-[11px] text-slate-500 mt-1 block font-medium">85 Pusat Riset Aktif</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500">Instrumen Lab ELSA</span>
              <FlaskConical className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-display font-extrabold text-slate-900">{IMPACT_METRICS.totalLaboratoriesELSA}</div>
            <span className="text-[11px] text-emerald-600 mt-1 block font-bold">&bull; ISO 17025 Open Access</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500">Skema RIIM Aktif</span>
              <Coins className="w-4 h-4 text-red-600" />
            </div>
            <div className="text-3xl font-display font-extrabold text-slate-900">4 Skema</div>
            <span className="text-[11px] text-slate-500 mt-1 block font-medium">Dana Abadi LPDP</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500">Warta Publikasi</span>
              <Newspaper className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-3xl font-display font-extrabold text-slate-900">{newsList.length} Rilis</div>
            <span className="text-[11px] text-slate-500 mt-1 block font-medium">Siaran Pers Terpublikasi</span>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Ringkasan 12 OR
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Katalog Lab ELSA ({ELSA_SERVICES.length})
          </button>
          <button
            onClick={() => setActiveTab('funding')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'funding'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Pendanaan RIIM ({FUNDING_SCHEMES.length})
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'news'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Kelola Warta Riset ({newsList.length})
          </button>
        </div>

        {/* Tab 1: Overview OR */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 font-bold text-slate-900 text-sm">
              Daftar 12 Organisasi Riset & Kepala OR
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="p-4">Kode OR</th>
                    <th className="p-4">Nama Organisasi Riset</th>
                    <th className="p-4">Kepala Organisasi</th>
                    <th className="p-4">Pusat Riset</th>
                    <th className="p-4">Total Periset</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {RESEARCH_ORGANIZATIONS.map((org) => (
                    <tr key={org.id} className="hover:bg-red-50/50 transition-colors">
                      <td className="p-4 font-mono font-bold text-red-600">{org.code}</td>
                      <td className="p-4 font-bold text-slate-900">{org.name}</td>
                      <td className="p-4">{org.headName}</td>
                      <td className="p-4 font-bold">{org.totalCenters} PR</td>
                      <td className="p-4">{org.totalResearchers}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Aktif Operasional
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Services */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 font-bold text-slate-900 text-sm">
              Instrumen Laboratorium ELSA Terbuka
            </div>
            <div className="divide-y divide-slate-100 font-medium">
              {ELSA_SERVICES.map((s) => (
                <div key={s.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-sky-100 text-sky-800">
                        {s.category}
                      </span>
                      <span className="text-xs text-slate-500">{s.kstName}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{s.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-amber-700 block font-bold">Turnaround: {s.turnaroundTime}</span>
                    <span className="text-[11px] text-emerald-700 font-semibold">{s.accreditation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Funding */}
        {activeTab === 'funding' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 font-bold text-slate-900 text-sm">
              Skema Hibah Pendanaan RIIM
            </div>
            <div className="divide-y divide-slate-100 font-medium">
              {FUNDING_SCHEMES.map((f) => (
                <div key={f.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-red-100 text-red-700 font-mono">
                      {f.code}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{f.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{f.targetAudience}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-red-600 font-mono block">{f.maxGrant}</span>
                    <span className="text-[11px] text-emerald-700 font-bold">Deadline: {f.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: News Management */}
        {activeTab === 'news' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Daftar Warta Ilmiah & Siaran Pers</span>
              <button
                onClick={() => setShowAddNewsModal(true)}
                className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Tambah Rilis
              </button>
            </div>
            <div className="divide-y divide-slate-100 font-medium">
              {newsList.map((n) => (
                <div key={n.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">
                      {n.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{n.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{n.author} &bull; {n.date}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/news/${n.slug}`}
                      className="text-xs font-bold text-red-600 hover:underline"
                    >
                      Lihat Halaman
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Tambah Warta Baru */}
        {showAddNewsModal && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Publikasi Warta Riset Baru
              </h3>
              <form onSubmit={handleAddNews} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Judul Artikel:
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Contoh: Terobosan Riset Baterai LFP BRIN..."
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Kategori:
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e: any) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                  >
                    <option value="Inovasi">Inovasi</option>
                    <option value="Siaran Pers">Siaran Pers</option>
                    <option value="Kebijakan">Kebijakan</option>
                    <option value="Internasional">Internasional</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Ringkasan Berita:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    placeholder="Tuliskan rangkuman pokok temuan ilmiah..."
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddNewsModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/25"
                  >
                    Publikasikan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
