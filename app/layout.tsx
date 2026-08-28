import './globals.css';
import type { Metadata } from 'next';
import TopNoticeBar from '@/components/TopNoticeBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BRIN — Badan Riset dan Inovasi Nasional Republik Indonesia',
  description: 'Portal resmi Badan Riset dan Inovasi Nasional (BRIN). Pusat integrasi sains, 12 Organisasi Riset, E-Layanan Sains (ELSA), Pendanaan RIIM, dan Beasiswa Riset Nasional.',
  keywords: 'BRIN, Badan Riset dan Inovasi Nasional, ELSA BRIN, Pendanaan RIIM, Degree by Research, Organisasi Riset, Megasains Indonesia',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-red-600 selection:text-white">
        <TopNoticeBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
