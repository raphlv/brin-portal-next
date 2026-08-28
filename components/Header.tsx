'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { RESEARCH_ORGANIZATIONS } from '@/lib/brinData';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchResults = searchQuery.trim() === '' ? [] : [
    ...RESEARCH_ORGANIZATIONS.filter(o => 
      o.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      o.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(o => ({ title: `${o.code} - ${o.name}`, url: `/organizations/${o.slug}`, type: 'Organisasi Riset' })),
    { title: 'ELSA - E-Layanan Sains & Fasilitas Laboratorium', url: '/services', type: 'Layanan' },
    { title: 'RIIM - Skema Pendanaan Riset & Inovasi', url: '/funding', type: 'Pendanaan' },
    { title: 'Degree by Research (DbR) S2 & S3', url: '/talent', type: 'Beasiswa' },
    { title: 'Observatorium Nasional Timau NTT', url: '/innovations', type: 'Fasilitas Strategis' },
    { title: 'Supercomputer AI Mahameru BRIN', url: '/innovations', type: 'Fasilitas Strategis' },
  ];

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/profile', label: 'Profil' },
    { href: '/organizations', label: '12 OR', isDropdown: true },
    { href: '/services', label: 'Layanan ELSA' },
    { href: '/funding', label: 'Pendanaan RIIM' },
    { href: '/talent', label: 'Talenta & Beasiswa' },
    { href: '/innovations', label: 'Fasilitas' },
    { href: '/news', label: 'Warta Riset' },
    { href: '/contact', label: 'Kontak' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-sm' 
          : 'bg-white border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Left: Brand Logo & Title */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-0.5 shadow-sm group-hover:shadow-md transition-all flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-xl leading-none text-slate-950 tracking-tight">
                    BRIN
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                    Republik Indonesia
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold tracking-tight uppercase mt-0.5">
                  Badan Riset dan Inovasi Nasional
                </span>
              </div>
            </Link>

            {/* Middle: Symmetrical Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((item) => {
                const active = isLinkActive(item.href);

                if (item.isDropdown) {
                  return (
                    <div 
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown('or')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href="/organizations"
                        className={`h-9 px-3 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all ${
                          active 
                            ? 'bg-red-600 text-white shadow-sm' 
                            : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3 h-3 opacity-70" />
                      </Link>

                      {activeDropdown === 'or' && (
                        <div className="absolute top-full left-0 w-80 p-2.5 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 grid grid-cols-1 gap-0.5 animate-in fade-in zoom-in-95 duration-150">
                          <div className="px-3 py-1.5 text-[10px] font-bold text-red-600 uppercase tracking-wider border-b border-slate-100 mb-1">
                            Gugus 12 Organisasi Riset (OR)
                          </div>
                          {RESEARCH_ORGANIZATIONS.slice(0, 6).map((org) => (
                            <Link
                              key={org.id}
                              href={`/organizations/${org.slug}`}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-mono text-[10px] font-bold">
                                {org.code}
                              </span>
                              <span className="truncate">{org.name}</span>
                            </Link>
                          ))}
                          <div className="pt-2 border-t border-slate-100 mt-1">
                            <Link 
                              href="/organizations" 
                              className="block text-center py-1 text-xs text-red-600 font-bold hover:underline"
                            >
                              Lihat Semua 12 Organisasi Riset &rarr;
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={`h-9 px-3 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center justify-center transition-all ${
                      active 
                        ? 'bg-red-600 text-white shadow-sm' 
                        : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Symmetrical Actions (Search + Admin + Mobile Toggle) */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Quick Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="h-9 flex items-center gap-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 transition-all group"
                title="Pencarian Cepat (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-red-600 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-slate-600 whitespace-nowrap">Cari Riset...</span>
                <kbd className="hidden md:inline px-1 py-0.5 text-[9px] rounded bg-white text-slate-500 font-mono shadow-sm border border-slate-200">
                  ⌘K
                </kbd>
              </button>

              {/* Portal CMS Admin Button */}
              <Link
                href="/admin"
                className="h-9 flex items-center gap-1.5 px-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm hover:shadow-md transition-all whitespace-nowrap"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>CMS Admin</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden h-9 w-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[65px] bg-white/98 z-40 p-6 overflow-y-auto border-b border-slate-200 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 max-w-lg mx-auto">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`h-11 px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    active ? 'bg-red-600 text-white' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 mt-2">
              <Link 
                href="/admin" 
                onClick={() => setMobileMenuOpen(false)}
                className="h-11 px-4 rounded-xl text-sm font-bold bg-red-600 text-white flex items-center justify-center gap-2 shadow-md shadow-red-600/30"
              >
                <Lock className="w-4 h-4" /> Masuk CMS Admin
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Instant Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-start justify-center p-4 sm:pt-24 animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Input Header */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
              <Search className="w-5 h-5 text-red-600 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari alat lab ELSA, skema RIIM, nama Organisasi Riset, atau berita..."
                className="w-full bg-transparent border-none text-slate-900 text-sm focus:outline-none placeholder:text-slate-400 font-medium"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="p-3 max-h-96 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  Ketik kata kunci untuk mencari fasilitas laboratorium, pendanaan, atau riset BRIN...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.url}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-red-50 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-red-100 text-red-700">
                          {item.type}
                        </span>
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-red-700">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-red-600 font-bold">&rarr;</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500 text-xs">
                  Tidak ditemukan hasil untuk <strong className="text-slate-800">"{searchQuery}"</strong>
                </div>
              )}
            </div>

            {/* Quick Suggestions Footer */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Saran: <button onClick={() => setSearchQuery('Nuklir')} className="text-red-600 font-semibold hover:underline ml-1">Nuklir</button>, <button onClick={() => setSearchQuery('Cryo-EM')} className="text-red-600 font-semibold hover:underline ml-1">Cryo-EM</button>, <button onClick={() => setSearchQuery('RIIM')} className="text-red-600 font-semibold hover:underline ml-1">RIIM</button></span>
              <span className="text-slate-400">Tekan ESC untuk keluar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
