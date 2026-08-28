import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Eye, 
  Tag
} from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/brinData';

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Indeks Warta Riset</span>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                <User className="w-4 h-4 text-red-600" />
                {article.author}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[11px] text-slate-500">
                <Eye className="w-3.5 h-3.5" /> {article.views} Pembaca
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden mb-10 border border-slate-200 bg-slate-100 shadow-md">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-12">
          <div className="prose max-w-none text-slate-700 text-base leading-relaxed space-y-6 font-medium">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5 text-red-600" /> Topik:
            </span>
            {article.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700 border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-slate-200 pt-10">
          <h3 className="text-xl font-bold text-slate-950 mb-6">
            Warta Terkait Lainnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/news/${rel.slug}`}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                    {rel.summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                  <span>Baca Selengkapnya</span> &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
