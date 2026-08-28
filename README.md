<div align="center">

# 🔬 BRIN — Badan Riset dan Inovasi Nasional (Next.js 14 Modern Portal)

### *Modern, Futuristic & State-of-the-Art Digital Ecosystem of Indonesia's National Research and Innovation Agency*

[![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

</div>

## 🌟 Tentang Proyek (Overview)

**BRIN Portal Next.js** adalah modernisasi portal resmi **Badan Riset dan Inovasi Nasional (BRIN)** Republik Indonesia ([brin.go.id](https://www.brin.go.id/)). Dibangun menggunakan arsitektur **Next.js 14 App Router**, **React 18**, **TypeScript**, dan **Tailwind CSS** dengan konsep desain **Informatif, Futuristik (Masa Depan), dan Kekinian** yang diselaraskan secara presisi dengan identitas palet warna logo resmi BRIN.

Portal ini mengintegrasikan seluruh ekosistem riset nasional: **12 Organisasi Riset (OR)**, **85 Pusat Riset (PR)**, katalog instrumen laboratorium terbuka **E-Layanan Sains (ELSA)**, skema hibah kompetitif **Riset dan Inovasi untuk Indonesia Maju (RIIM)**, program **Manajemen Talenta Nasional & Beasiswa Degree by Research (DbR)**, serta etalase fasilitas megasains strategis (Observatorium Timau, Reaktor Nuklir Serpong, Kapal Riset Baruna Jaya, & Supercomputer Mahameru).

---

## 🎨 Palet Warna Resmi Logo BRIN & Sci-Tech Theme

| Warna | Kode HEX | Nilai RGB | Penggunaan Visual |
| :--- | :--- | :--- | :--- |
| **BRIN Crimson Red (Warna Utama)** | `#DC2626` / `#E02424` | `rgb(224, 36, 36)` | Tombol CTA utama, badge inovasi, aksen logo, dan glow effect |
| **Deep Space Navy** | `#0B132B` / `#070C18` | `rgb(7, 12, 24)` | Latar belakang kosmik modern, navbar kaca transparan, dan footer |
| **Cyber Cyan / Neon Blue** | `#00F0FF` / `#38BDF8` | `rgb(0, 240, 255)` | Border neon sains, partikel data, status aktif, dan indikator lab |
| **Quantum Purple & Gold** | `#8B5CF6` / `#FBBF24` | `rgb(139, 92, 246)` | Aksen deeptech, supercomputing, dan plafon dana hibah |
| **Pure White & Slate** | `#FFFFFF` / `#F8FAFC` | `rgb(248, 250, 252)` | Tipografi tajam kontras tinggi dan kartu konten |

---

## 🚀 Fitur Unggulan

### 1. 🌌 Hero Futuristik & Instant Multi-Category Search (`/`)
- Desain berlatar partikel grid kosmik sains dengan efek *holographic glassmorphism*.
- Kolom pencarian multi-kategori instan untuk mencari instrumen lab ELSA, skema dana RIIM, organisasi riset, atau beasiswa.
- Kartu akses cepat (ELSA Lab Access, RIIM Funding, 12 OR, Beasiswa DbR).

### 2. 🏛️ Direktori 12 Organisasi Riset (OR) & 85 Pusat Riset (`/organizations` & `/organizations/[slug]`)
- Menampilkan profil lengkap:
  1. **ORTN** (Tenaga Nuklir)
  2. **ORPA** (Penerbangan dan Antariksa)
  3. **OREI** (Elektronika dan Informatika)
  4. **ORKM** (Kebumian dan Maritim)
  5. **ORHL** (Hayati dan Lingkungan)
  6. **ORK** (Kesehatan)
  7. **ORPP** (Pertanian dan Pangan)
  8. **ORNM** (Nanoteknologi dan Material)
  9. **OREM** (Energi dan Manufaktur)
  10. **ORISH** (Ilmu Pengetahuan Sosial dan Humaniora)
  11. **ORBS** (Bahasa dan Sastra)
  12. **ORTEKM** (Tata Kelola Ekonomi dan Kesejahteraan Masyarakat)
- Halaman detail dinamis per OR dengan rincian Pusat Riset bawahan, invensi unggulan, dan fasilitas andalan.

### 3. 🔬 E-Layanan Sains (ELSA) & Laboratorium Terbuka (`/services`)
- Akses katalog 380+ instrumen ilmiah kelas dunia (HR-TEM 300kV, Cryo-Electron Microscope, Sekuensing Genomik NGS NovaSeq, Iradiator Gamma Merah Putih, Supercomputer HPC).
- Panduan alur pengujian sampel terstandar **ISO/IEC 17025:2017**.

### 4. 💰 Program Pendanaan Riset & Inovasi (RIIM) (`/funding`)
- Rincian skema hibah kompetitif: RIIM Kompetisi, RIIM Ekspedisi Eksplorasi Biodiversitas, RIIM Startup Inovasi Indonesia, dan RIIM Kolaborasi Internasional.
- Alur seleksi proposal 4 tahap dari pengajuan daring hingga pencairan dana LPDP.

### 5. 🎓 Manajemen Talenta Nasional & Beasiswa (`/talent`)
- Beasiswa penuh **Degree by Research (DbR)** jenjang S2 & S3.
- **Post-Doctoral Fellowship** untuk doktor baru berprestasi global.
- Program **Visiting Researcher** dan **Magang Riset MBKM**.

### 6. 🛰️ Fasilitas Megasains Strategis Nasional (`/innovations`)
- Observatorium Nasional Timau NTT (Teleskop Optik 3.8m).
- Reaktor Serbaguna G.A. Siwabessy 30 MW Serpong.
- Armada Kapal Riset Samudera KR Baruna Jaya I-VIII.
- Supercomputer AI "Mahameru" HPC Cluster (2.4 PFLOPS).

### 7. 📰 Warta Riset, Berita, & Agenda Ilmiah (`/news` & `/news/[slug]`)
- Siaran pers resmi, temuan ilmiah terbaru, waktu baca (*reading time*), tag topik, dan agenda konferensi internasional (InaRI Expo, ICAMN).

### 8. 📍 Direktori 5 Kawasan Sains & Teknologi (KST) & Kontak (`/contact`)
- KST B.J. Habibie (Serpong), KST Soekarno (Cibinong), KST Samaun Samadikun (Bandung), KST Siwabessy (Pasar Jumat), KST Gatot Soebroto (Jakarta).
- Formulir permohonan informasi & kanal pengaduan SP4N-LAPOR!.

### 9. ⚙️ CMS Control Center Admin Dashboard (`/admin`)
- Panel monitoring statistik 12 OR, katalog instrumen ELSA, skema RIIM, dan manajemen publikasi warta berita baru.

---

## 🛠️ Panduan Menjalankan Aplikasi di Lokal

```bash
# 1. Masuk ke direktori proyek
cd c:\laragon\www\brin-portal-next

# 2. Install dependensi (jika belum)
npm install

# 3. Jalankan server pengembangan
npm run dev

# 4. Buka di browser
# http://localhost:3008

# 5. Build Produksi
npm run build
npm start
```

---

<div align="center">
  <sub>© 2026 Badan Riset dan Inovasi Nasional (BRIN) Republik Indonesia. All Rights Reserved.</sub>
</div>
