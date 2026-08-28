export interface ResearchOrg {
  id: string;
  code: string;
  name: string;
  nameEn: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string; // Lucide icon name or emoji
  color: string;
  headName: string;
  totalCenters: number;
  totalResearchers: number;
  featuredInventions: string[];
  researchCenters: string[];
  keyFacilities: string[];
}

export interface ElsaService {
  id: string;
  title: string;
  slug: string;
  category: 'Karakterisasi' | 'Genomik' | 'Nuklir' | 'Komputasi' | 'Maritim' | 'Pengujian Material';
  location: string;
  kstName: string;
  description: string;
  equipment: string[];
  sampleTypes: string[];
  turnaroundTime: string;
  accreditation: string;
  isPopular?: boolean;
}

export interface FundingScheme {
  id: string;
  code: string;
  title: string;
  slug: string;
  category: 'Kompetisi' | 'Ekspedisi' | 'Startup' | 'Invitasi' | 'Kolaborasi';
  maxGrant: string;
  duration: string;
  deadline: string;
  status: 'Open' | 'Upcoming' | 'Review';
  targetAudience: string;
  description: string;
  eligibility: string[];
}

export interface TalentProgram {
  id: string;
  title: string;
  slug: string;
  badge: string;
  duration: string;
  stipend: string;
  description: string;
  target: string;
  requirements: string[];
}

export interface StrategicFacility {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  specs: string;
  description: string;
  impact: string;
  icon: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Inovasi' | 'Siaran Pers' | 'Kebijakan' | 'Internasional' | 'Kemitraan';
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  views: number;
  imageUrl: string;
  tags: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Konferensi Internasional' | 'Webinar Ilmiah' | 'Sosialisasi Pendanaan' | 'Pameran Iptek';
  isOnline: boolean;
  registrationUrl: string;
}

// 12 ORGANISASI RISET BRIN
export const RESEARCH_ORGANIZATIONS: ResearchOrg[] = [
  {
    id: '1',
    code: 'ORTN',
    name: 'Organisasi Riset Tenaga Nuklir',
    nameEn: 'Research Organization for Nuclear Energy',
    slug: 'tenaga-nuklir',
    tagline: 'Pemanfaatan Energi & Sains Nuklir untuk Kesejahteraan Bangsa',
    description: 'Menyelenggarakan riset, pengembangan, pengkajian reaktor daya, teknologi bahan bakar nuklir, keselamatan radiasi, dan pemanfaatan isotop medis.',
    icon: 'Atom',
    color: '#00F0FF',
    headName: 'Dr. Rohadi Awaludin',
    totalCenters: 7,
    totalResearchers: 940,
    featuredInventions: ['Radioisotop Terapi Kanker Lutesium-177', 'Varietas Padi Mutasi Radiasi Sidenuk', 'Uji Tak Merusak Radiografi Industri'],
    researchCenters: [
      'Pusat Riset Teknologi Reaktor Nuklir (PRTRN)',
      'Pusat Riset Teknologi Proses Radiasi (PRTPR)',
      'Pusat Riset Teknologi Bahan Nuklir dan Radiometri (PRTBNR)',
      'Pusat Riset Teknologi Keselamatan, Metrologi, dan Mutu Nuklir (PRTKM2N)',
      'Pusat Riset Teknologi Daur Bahan Bakar Nuklir dan Limbah Radioaktif (PRTDBBNLR)',
    ],
    keyFacilities: ['Reaktor Serbaguna G.A. Siwabessy (30 MW Serpong)', 'Reaktor TRIGA 2000 Bandung', 'Fasilitas Iradiator Gamma Merah Putih'],
  },
  {
    id: '2',
    code: 'ORPA',
    name: 'Organisasi Riset Penerbangan dan Antariksa',
    nameEn: 'Research Organization for Aeronautics and Space',
    slug: 'penerbangan-dan-antariksa',
    tagline: 'Eksplorasi Antariksa, Penginderaan Jauh, & Kemandirian Dirgantara',
    description: 'Fokus pada pengembangan satelit mikro pengamat bumi, sistem propulsi roket pengorbit, sains antariksa & cuaca antariksa, serta aerodinamika pesawat terbang.',
    icon: 'Rocket',
    color: '#38BDF8',
    headName: 'Prof. Dr. Erna Sri Adiningsih',
    totalCenters: 6,
    totalResearchers: 820,
    featuredInventions: ['Satelit Konstelasi Mikro LAPAN-A4/BRIN', 'Radar Cuaca Maritim S-Band', 'Teleskop Reflektor 3.8m Timau'],
    researchCenters: [
      'Pusat Riset Antariksa (PRA)',
      'Pusat Riset Penginderaan Jauh (PRPJ)',
      'Pusat Riset Teknologi Penerbangan (PRTP)',
      'Pusat Riset Teknologi Roket (PTR)',
    ],
    keyFacilities: ['Observatorium Nasional Timau (NTT)', 'Fasilitas Uji Terowongan Angin Subsonik (ILST Serpong)', 'Stasiun Bumi Satelit Parepare & Rumpin'],
  },
  {
    id: '3',
    code: 'OREI',
    name: 'Organisasi Riset Elektronika dan Informatika',
    nameEn: 'Research Organization for Electronics and Informatics',
    slug: 'elektronika-dan-informatika',
    tagline: 'Kecerdasan Artifisial, Superkomputasi, & Keamanan Siber Kedaulatan Data',
    description: 'Memimpin riset AI bahasa alami (LLM Bahasa Nusantara), komputasi kuantum, superkomputer HPC, chip mikroelektronika, IoT sensorik, dan kriptografi.',
    icon: 'Cpu',
    color: '#8B5CF6',
    headName: 'Dr. Budi Prawara',
    totalCenters: 7,
    totalResearchers: 1100,
    featuredInventions: ['Supercomputer AI Mahameru BRIN', 'Kriptografi Pasca-Kuantum Nasional', 'Sistem Peringatan Dini Bencana Berbasis IoT'],
    researchCenters: [
      'Pusat Riset Kecerdasan Artifisial dan Keamanan Siber (PRKAKS)',
      'Pusat Riset Sains Data dan Informasi (PRSDI)',
      'Pusat Riset Fotonika (PRF)',
      'Pusat Riset Telekomunikasi (PRT)',
      'Pusat Riset Elektronika (PRE)',
      'Pusat Riset Mekatronika Cerdas (PRMC)',
    ],
    keyFacilities: ['HPC Supercomputer Cluster Mahameru (2.4 PFLOPS)', 'Laboratorium Mikroelektronika Cleanroom Class 1000 Bandung', 'Fasilitas Uji Kompatibilitas Elektromagnetik (EMC)'],
  },
  {
    id: '4',
    code: 'ORKM',
    name: 'Organisasi Riset Kebumian dan Maritim',
    nameEn: 'Research Organization for Earth Sciences and Maritime',
    slug: 'kebumian-dan-maritim',
    tagline: 'Eksplorasi Laut Dalam, Mitigasi Bencana Geologi, & Iklim Maritim',
    description: 'Melakukan riset oseanografi laut dalam, pemetaan geodinamika lempeng tektonik, mitigasi tsunami dan gempa, serta pemodelan iklim ekstrim benua maritim.',
    icon: 'Ship',
    color: '#0284C7',
    headName: 'Prof. Dr. Ocky Karna Radjasa',
    totalCenters: 8,
    totalResearchers: 1250,
    featuredInventions: ['Peta Batimetri Laut Dalam Zona Ekonomi Eksklusif', 'Ina-TEWS Buoy Sensor Akustik Tsunami', 'Ekstraksi Senyawa Bioaktif Spons Laut Dalam'],
    researchCenters: [
      'Pusat Riset Oseanografi (PRO)',
      'Pusat Riset Laut Dalam (PRLD)',
      'Pusat Riset Geologi Kelautan (PRGK)',
      'Pusat Riset Kebencanaan Geologi (PRKG)',
      'Pusat Riset Iklim dan Atmosfer (PRIA)',
      'Pusat Riset Limnologi dan Sumber Daya Air (PRLSDA)',
    ],
    keyFacilities: ['Armada 5 Kapal Riset Samudera (KR Baruna Jaya I - VIII)', 'Laboratorium Instrumentasi Oseanografi Ancol', 'Stasiun Riset Laut Dalam Ambon'],
  },
  {
    id: '5',
    code: 'ORHL',
    name: 'Organisasi Riset Hayati dan Lingkungan',
    nameEn: 'Research Organization for Life Sciences and Environment',
    slug: 'hayati-dan-lingkungan',
    tagline: 'Konservasi Megabiodiversitas, Bioteknologi Hijau, & Genomik Hayati',
    description: 'Menjaga dan memanfaatkan keanekaragaman hayati tropis Nusantara, konservasi flora fauna endemik, restorasi ekosistem, serta bioprospeksi industri.',
    icon: 'Leaf',
    color: '#10B981',
    headName: 'Dr. Iman Hidayat',
    totalCenters: 8,
    totalResearchers: 1400,
    featuredInventions: ['Indonesia Biological Imaging Center (Cryo-EM)', 'Katalogisasi 3 Juta Spesimen Museum Zoologicum Bogoriense', 'Enzim Selulase Termofilik dari Mikroba Gunung Berapi'],
    researchCenters: [
      'Pusat Riset Biosistematika dan Evolusi (PRBE)',
      'Pusat Riset Ekologi dan Etnobiologi (PREE)',
      'Pusat Riset Mikrobiologi Terapan (PRMT)',
      'Pusat Riset Konservasi Tumbuhan, Kebun Raya, dan Kehutanan (PRKTKRK)',
      'Pusat Riset Biomassa dan Bioproduk (PRBB)',
    ],
    keyFacilities: ['Cryo-Electron Microscopy Cibinong', 'Museum Zoologicum Bogoriense & Herbarium Bogoriense (KST Soekarno)', 'Pusat Genomik Tumbuhan & Bank Benih Kebun Raya'],
  },
  {
    id: '6',
    code: 'ORK',
    name: 'Organisasi Riset Kesehatan',
    nameEn: 'Research Organization for Health',
    slug: 'kesehatan',
    tagline: 'Kemandirian Vaksin, Terapi Presisi, & Transformasi Fitofarmaka',
    description: 'Pengembangan teknologi vaksin platform mRNA & rekombinan, sel punca (stem cell), uji pra-klinis obat herbal terstandar, serta genomik patogen menular.',
    icon: 'HeartPulse',
    color: '#EF4444',
    headName: 'Prof. Dr. drh. NLP Indi Dharmayanti, M.Si.',
    totalCenters: 7,
    totalResearchers: 980,
    featuredInventions: ['Vaksin Merah Putih Rekombinan Protein', 'Kit Deteksi Dini Kanker Serviks Berbasis PCR-HPV', 'Herbal Imunomodulator Terstandar dari Daun Pegagan & Meniran'],
    researchCenters: [
      'Pusat Riset Vaksin dan Obat (PRVO)',
      'Pusat Riset Biomedis (PRB)',
      'Pusat Riset Kedokteran Preklinis dan Klinis (PRKPK)',
      'Pusat Riset Kesehatan Masyarakat dan Gizi (PRKMG)',
      'Pusat Riset Bahan Baku Obat dan Obat Tradisional (PRBBOOT)',
    ],
    keyFacilities: ['Laboratorium Biosafety Level 3 (BSL-3) Hewan & Manusia Cibinong', 'Fasilitas Animal Testing & Vivarium SPF', 'Laboratorium Karakterisasi Biofarmaka'],
  },
  {
    id: '7',
    code: 'ORPP',
    name: 'Organisasi Riset Pertanian dan Pangan',
    nameEn: 'Research Organization for Agriculture and Food',
    slug: 'pertanian-dan-pangan',
    tagline: 'Ketahanan Pangan Berkelanjutan, Smart Farming, & Pasca Panen',
    description: 'Penciptaan varietas tanaman pangan unggul tahan kekeringan, teknologi fermentasi pangan lokal, pakan ternak fungsional, dan mekanisasi pertanian cerdas.',
    icon: 'Wheat',
    color: '#F59E0B',
    headName: 'Dr. Puji Lestari',
    totalCenters: 7,
    totalResearchers: 1350,
    featuredInventions: ['Padi Gogo Biosalin untuk Lahan Pesisir', 'Beras Fortifikasi Nutrisi Zinc Anti-Stunting', 'Teknologi Pengemasan Pangan Retort Pouch Tahan Suhu Ruang 1 Tahun'],
    researchCenters: [
      'Pusat Riset Tanaman Pangan (PRTP)',
      'Pusat Riset Hortikultura dan Perkebunan (PRHP)',
      'Pusat Riset Peternakan (PRP)',
      'Pusat Riset Teknologi dan Proses Pangan (PRTPP)',
      'Pusat Riset Agroindustri (PRAI)',
    ],
    keyFacilities: ['Pilot Plant Pengolahan Pangan Steril KST Soekarno', 'Greenhouse Cerdas Berbasis IoT Gunungkidul', 'Laboratorium Uji Mutu Genetik Benih'],
  },
  {
    id: '8',
    code: 'ORNM',
    name: 'Organisasi Riset Nanoteknologi dan Material',
    nameEn: 'Research Organization for Nanotechnology and Materials',
    slug: 'nanoteknologi-dan-material',
    tagline: 'Material Maju, Metalurgi Ekstraksi Logam Tanah Jarang, & Semikonduktor',
    description: 'Riset sintesis nanomaterial cerdas, grafena lokal, membran filtrasi air nanopori, fotonika semikonduktor, dan ekstraksi mineral strategis nikel-litium.',
    icon: 'Sparkles',
    color: '#EC4899',
    headName: 'Prof. Dr. Ratno Nuryadi',
    totalCenters: 6,
    totalResearchers: 790,
    featuredInventions: ['Membran Nanofiltrasi Air Bersih', 'Nanokarbon & Grafena dari Arang Tempurung Kelapa', 'Pelapis Anti-Korosi Maritim Berbasis Nano-Silika'],
    researchCenters: [
      'Pusat Riset Material Maju (PRMM)',
      'Pusat Riset Nanoteknologi (PRN)',
      'Pusat Riset Metalurgi (PRM)',
      'Pusat Riset Kimia Maju (PRKM)',
      'Pusat Riset Fisika Kuantum (PRFK)',
    ],
    keyFacilities: ['High-Resolution Transmission Electron Microscope (HR-TEM 300kV)', 'X-Ray Photoelectron Spectroscopy (XPS)', 'Fasilitas Peleburan Plasma & Sintering Vakum'],
  },
  {
    id: '9',
    code: 'OREM',
    name: 'Organisasi Riset Energi dan Manufaktur',
    nameEn: 'Research Organization for Energy and Manufacture',
    slug: 'energi-dan-manufaktur',
    tagline: 'Transisi Energi Bersih, Ekosistem Kendaraan Listrik, & Manufaktur Cerdas',
    description: 'Inovasi baterai solid-state kendaraan listrik, sel surya perovskit efisiensi tinggi, turbin angin lepas pantai, hidrogen hijau, dan sistem robotika otomasi industri.',
    icon: 'Zap',
    color: '#EAB308',
    headName: 'Dr. Haznan Abimanyu',
    totalCenters: 7,
    totalResearchers: 910,
    featuredInventions: ['Pak Baterai EV Lithium Ferro Phosphate (LFP) Standar Nasional', 'Konverter Biodiesel B100 Minyak Nabati Non-Pangan', 'Sistem Turbin Pembangkit Listrik Tenaga Arus Laut'],
    researchCenters: [
      'Pusat Riset Konversi dan Konservasi Energi (PRKKE)',
      'Pusat Riset Teknologi Industri Proses dan Manufaktur (PRTIPM)',
      'Pusat Riset Teknologi Transportasi (PRTT)',
      'Pusat Riset Sistem Produksi Berkelanjutan dan Penilaian Daur Hidup (PRSBPPDH)',
    ],
    keyFacilities: ['Laboratorium Uji Karakteristik & Keamanan Baterai EV Serpong', 'Fasilitas Uji Emisi & Dinamometer Kendaraan', 'Laboratorium Piro-Metalurgi & Gasifikasi Biomassa'],
  },
  {
    id: '10',
    code: 'ORISH',
    name: 'Organisasi Riset Ilmu Pengetahuan Sosial dan Humaniora',
    nameEn: 'Research Organization for Social Sciences and Humanities',
    slug: 'sosial-dan-humaniora',
    tagline: 'Kajian Peradaban Nusantara, Dinamika Masyarakat, & Kesejahteraan',
    description: 'Mengkaji transformasi sosial, arkeologi maritim prasejarah, antropologi budaya nusantara, migrasi, dan penguatan harmoni kebangsaan.',
    icon: 'Users',
    color: '#6366F1',
    headName: 'Prof. Dr. Ahmad Najib Burhani',
    totalCenters: 7,
    totalResearchers: 850,
    featuredInventions: ['Penanggalan Lukisan Gua Tertua di Dunia (Maros, Sulawesi)', 'Indeks Harmoni Sosial & Moderasi Beragama', 'Database Digital Prasasti & Arkeologi Maritim Kepulauan'],
    researchCenters: [
      'Pusat Riset Arkeologi Prasejarah dan Sejarah (PRAPS)',
      'Pusat Riset Masyarakat dan Budaya (PRMB)',
      'Pusat Riset Agama dan Kepercayaan (PRAK)',
      'Pusat Riset Kependudukan (PRK)',
      'Pusat Riset Politik (PRP)',
    ],
    keyFacilities: ['Laboratorium Analisis Pertanggalan Karbon (C-14)', 'Pusat Arsip Sejarah Lisan Nusantara', 'Studio Etnografi Visual Digital'],
  },
  {
    id: '11',
    code: 'ORBS',
    name: 'Organisasi Riset Bahasa dan Sastra',
    nameEn: 'Research Organization for Language and Literature',
    slug: 'bahasa-dan-sastra',
    tagline: 'Preservasi Bahasa Daerah Nusantara, Korpus Digital, & Manuskrip Kuno',
    description: 'Dokumentasi dan revitalisasi 718 bahasa daerah di Indonesia, digitalisasi naskah kuno nusantara, pemrosesan bahasa alami daerah, dan diplomasi kebahasaan.',
    icon: 'BookOpen',
    color: '#14B8A6',
    headName: 'Dr. Herry Jogaswara',
    totalCenters: 5,
    totalResearchers: 520,
    featuredInventions: ['Korpus Digital Bahasa Nusantara Terbuka', 'Kamus Elektronik Bahasa Terancam Punah', 'Portal Alih Aksara Manuskrip Kuno Berbasis AI'],
    researchCenters: [
      'Pusat Riset Preservasi Bahasa dan Sastra (PRPBS)',
      'Pusat Riset Bahasa Daerah (PRBD)',
      'Pusat Riset Sastra Nusantara (PRSN)',
      'Pusat Riset Filologi dan Manuskrip (PRFM)',
    ],
    keyFacilities: ['Laboratorium Fonetik Akustik & Linguistik Forensik', 'Ruang Konservasi Manuskrip Kuno Bebas Asam', 'Studio Rekaman Oral Tradition Audio HD'],
  },
  {
    id: '12',
    code: 'ORTEKM',
    name: 'Organisasi Riset Tata Kelola Ekonomi & Kesejahteraan',
    nameEn: 'Research Organization for Governance, Economy and Community Welfare',
    slug: 'tata-kelola-ekonomi',
    tagline: 'Rekomendasi Kebijakan Berbasis Bukti (Evidence-Based Policy) untuk Indonesia',
    description: 'Menyusun analisis kebijakan makroekonomi, reformasi birokrasi, sistem jaminan sosial, ekonomi sirkular, dan ketimpangan regional.',
    icon: 'TrendingUp',
    color: '#06B6D4',
    headName: 'Dr. Agus Eko Nugroho',
    totalCenters: 6,
    totalResearchers: 640,
    featuredInventions: ['Model Makroekonometri Simulasi Dampak IKN', 'Evaluasi Nasional Efektivitas Bansos Terpadu', 'Peta Jalan Hilirisasi Industri Nikel Menuju Net Zero 2060'],
    researchCenters: [
      'Pusat Riset Ekonomi Terapan (PRET)',
      'Pusat Riset Kebijakan Publik (PRKP)',
      'Pusat Riset Koperasi, Korporasi, dan Ekonomi Kerakyatan (PRKKEK)',
      'Pusat Riset Sistem Jaminan Sosial (PRSJS)',
    ],
    keyFacilities: ['Policy Simulation & Big Data War Room Thamrin', 'Laboratorium Ekonometrika Spasial', 'Pusat Survei Panel Rumah Tangga Nasional'],
  },
];

// E-LAYANAN SAINS (ELSA) KATALOG
export const ELSA_SERVICES: ElsaService[] = [
  {
    id: 'elsa-1',
    title: 'High-Resolution Transmission Electron Microscopy (HR-TEM 300kV)',
    slug: 'hr-tem-300kv',
    category: 'Karakterisasi',
    location: 'Kawasan Sains dan Teknologi (KST) B.J. Habibie, Serpong',
    kstName: 'KST B.J. Habibie',
    description: 'Karakterisasi struktur nano pada resolusi atomik, kisi kristal, cacat kisi, dan analisis komposisi elemen kimia mikro dengan EDS.',
    equipment: ['FEI Tecnai G2 F30 S-TWIN 300 kV', 'Energy Dispersive X-ray Spectroscopy (EDS)', 'High-Angle Annular Dark-Field (HAADF) Detector'],
    sampleTypes: ['Nanopartikel padat', 'Lapisan tipis (thin films)', 'Serbuk logam/oksida', 'Material polimer terdoping'],
    turnaroundTime: '3 - 5 Hari Kerja',
    accreditation: 'ISO/IEC 17025:2017 Terakreditasi KAN',
    isPopular: true,
  },
  {
    id: 'elsa-2',
    title: 'Cryo-Electron Microscopy (Cryo-EM) 200kV / 300kV',
    slug: 'cryo-electron-microscopy',
    category: 'Genomik',
    location: 'Kawasan Sains dan Teknologi (KST) Soekarno, Cibinong',
    kstName: 'KST Soekarno',
    description: 'Visualisasi 3 dimensi struktur makromolekul biologis, kapsid virus, kompleks protein-reseptor, dan vesikel membran tanpa perlu kristalisasi.',
    equipment: ['Thermo Scientific Glacios Cryo-TEM 200kV', 'Vitrobot Mark IV Sample Plunger', 'Falcon 4 Direct Electron Detector'],
    sampleTypes: ['Protein terisolasi murni', 'Kapsid virus / VLP', 'Ribosom & kompleks enzim', 'Liposom'],
    turnaroundTime: '5 - 10 Hari Kerja',
    accreditation: 'World-Class Bio-Imaging Certified',
    isPopular: true,
  },
  {
    id: 'elsa-3',
    title: 'Next-Generation Sequencing (NGS - NovaSeq 6000 & Oxford Nanopore)',
    slug: 'ngs-genomic-sequencing',
    category: 'Genomik',
    location: 'Gedung Genomik Hayati, KST Soekarno, Cibinong',
    kstName: 'KST Soekarno',
    description: 'Sekuensing genomik menyeluruh (Whole Genome Sequencing / WGS), RNA-Seq transkriptomik, dan metagenomik mikrobioma untuk riset medis dan biodiversitas.',
    equipment: ['Illumina NovaSeq 6000 (Output hingga 6 Tb)', 'Oxford Nanopore PromethION 24', 'Qubit 4 Fluorometer & Bioanalyzer'],
    sampleTypes: ['DNA genomik murni (A260/280: 1.8-2.0)', 'Total RNA utuh (RIN > 7.0)', 'Sampel metagenomik lingkungan'],
    turnaroundTime: '7 - 14 Hari Kerja',
    accreditation: 'ISO 15189 & ISO 17025',
    isPopular: true,
  },
  {
    id: 'elsa-4',
    title: 'Fasilitas Komputasi Kinerja Tinggi (HPC Mahameru Supercomputer)',
    slug: 'hpc-mahameru-supercomputer',
    category: 'Komputasi',
    location: 'Pusat Data Nasional KST B.J. Habibie Serpong / KST Samaun Samadikun Bandung',
    kstName: 'KST B.J. Habibie',
    description: 'Akses komputasi awan berkecepatan tinggi dengan 2.4 PFLOPS daya komputasi untuk pemodelan iklim global, simulasi dinamika molekul, dan training model AI LLM.',
    equipment: ['NVIDIA DGX A100 SuperPOD (128x A100 GPUs)', 'AMD EPYC 7763 CPU Compute Nodes (4.096 Cores)', 'Lustre High-Speed Parallel Storage 4 PB'],
    sampleTypes: ['Skrip Python (PyTorch / TensorFlow)', 'Input simulasi GROMACS, LAMMPS, Quantum ESPRESSO', 'Dataset Big Data'],
    turnaroundTime: 'Akses Instan Berbasis Token / Kuota Proposal',
    accreditation: 'Tier-3 Data Center & Open Science Standards',
    isPopular: true,
  },
  {
    id: 'elsa-5',
    title: 'Layanan Uji Radiasi & Iradiator Gamma Sel Merah Putih (Co-60)',
    slug: 'iradiasi-gamma-merah-putih',
    category: 'Nuklir',
    location: 'Kawasan Nuklir Serpong, Tangerang Selatan',
    kstName: 'KST B.J. Habibie',
    description: 'Sterilisasi radiasi gamma untuk alat kesehatan steril, preservasi bahan makanan ekspor, mutasi radiasi benih tanaman, dan uji degradasi polimer.',
    equipment: ['Iradiator Gamma Kategori IV Cobalt-60 (Aktivitas 1 MCi)', 'Dosimeter Alanine & Fricke System', 'Chamber Iradiasi Kontrol Suhu'],
    sampleTypes: ['Alat kesehatan (spuit, kasa, implan)', 'Simplisia herbal & rempah', 'Benih pertanian', 'Sampel polimer'],
    turnaroundTime: '2 - 4 Hari Kerja',
    accreditation: 'BAPETEN & ISO 11137 Certified',
  },
  {
    id: 'elsa-6',
    title: 'Survei Oseanografi & Pemetaan Laut Dalam (KR Baruna Jaya)',
    slug: 'kapal-riset-baruna-jaya',
    category: 'Maritim',
    location: 'Pelabuhan Riset Nizam Zachman, Muara Baru, Jakarta',
    kstName: 'Pusat Riset Samudera',
    description: 'Penyewaan fasilitas kapal riset samudera dengan perlengkapan Multibeam Echosounder laut dalam (11.000m), CTD Rosette sampler, dan coring sedimen dasar laut.',
    equipment: ['Kongsberg EM 122 Deep Water Multibeam', 'Sea-Bird CTD Rosette 24-Bottle Carousel', 'Gravity Corer & Sub-Bottom Profiler'],
    sampleTypes: ['Survei batimetri laut', 'Sampel air laut multi-kedalaman', 'Sedimen inti dasar laut', 'Data akustik bawah air'],
    turnaroundTime: 'Sesuai Jadwal Pelayaran Ekspedisi',
    accreditation: 'IMO & BKI Class Certified Research Vessel',
  },
];

// PROGRAM PENDANAAN RIIM
export const FUNDING_SCHEMES: FundingScheme[] = [
  {
    id: 'riim-1',
    code: 'RIIM-KOMPETISI',
    title: 'RIIM Kompetisi Gelombang II 2026',
    slug: 'riim-kompetisi',
    category: 'Kompetisi',
    maxGrant: 'Hingga Rp 2.000.000.000 / Tahun',
    duration: 'Multi-Tahun (1 - 3 Tahun)',
    deadline: '31 Oktober 2026',
    status: 'Open',
    targetAudience: 'Dosen Perguruan Tinggi, Peneliti Lembaga Litbang, & Sivitas BRIN',
    description: 'Skema pendanaan kompetitif terbuka untuk riset dasar (TRL 1-3) dan riset terapan (TRL 4-6) di seluruh bidang keilmuan strategis nasional.',
    eligibility: ['Ketua periset berkualifikasi S3 dengan publikasi bereputasi', 'Memiliki rekam jejak riset sesuai bidang yang diajukan', 'Bermitra dengan minimal 1 institusi riset/kampus lain'],
  },
  {
    id: 'riim-2',
    code: 'RIIM-EKSPEDISI',
    title: 'RIIM Ekspedisi & Eksplorasi Biodiversitas Maritim',
    slug: 'riim-ekspedisi',
    category: 'Ekspedisi',
    maxGrant: 'Hingga Rp 3.500.000.000 / Ekspedisi',
    duration: '1 - 2 Tahun',
    deadline: '15 September 2026',
    status: 'Open',
    targetAudience: 'Konsorsium Periset Hayati, Oseanografi, & Arkeologi Nusantara',
    description: 'Pendanaan penuh untuk ekspedisi lapangan di wilayah 3T, laut dalam, gua purba, dan kanopi hutan hujan tropis demi mengungkap kekayaan plasma nutfah dan warisan peradaban.',
    eligibility: ['Melibatkan periset lintas disiplin', 'Menyetorkan duplikat spesimen ke Repositori Ilmiah Nasional (RIN)', 'Memiliki izin etik riset klirens etik'],
  },
  {
    id: 'riim-3',
    code: 'RIIM-STARTUP',
    title: 'RIIM Startup Inovasi Indonesia (PPBT)',
    slug: 'riim-startup',
    category: 'Startup',
    maxGrant: 'Hingga Rp 1.500.000.000 / Tenant',
    duration: '1 - 2 Tahun',
    deadline: '30 November 2026',
    status: 'Open',
    targetAudience: 'Perusahaan Rintisan Berbasis Teknologi (Deeptech Startups) & Inventor',
    description: 'Inkubasi dan akselerasi hilirisasi hasil invensi iptek BRIN / Perguruan Tinggi menuju skala komersial dan adopsi industri nasional.',
    eligibility: ['Memiliki prototipe teruji minimal TRL 7', 'Badan usaha PT / CV terdaftar', 'Memiliki komitmen investasi lanjutan dari mitra industri'],
  },
  {
    id: 'riim-4',
    code: 'RIIM-KOLABORASI',
    title: 'RIIM International Joint Research Fund (BRIN - Horizon Europe / JSPS)',
    slug: 'riim-kolaborasi-internasional',
    category: 'Kolaborasi',
    maxGrant: 'Matching Fund Hingga Rp 2.500.000.000',
    duration: '2 - 3 Tahun',
    deadline: '15 Desember 2026',
    status: 'Upcoming',
    targetAudience: 'Periset Indonesia yang berkolaborasi dengan Mitra Luar Negeri Resmi',
    description: 'Skema pendanaan bersama (matching fund) dengan badan riset global ternama untuk mengatasi tantangan perubahan iklim, energi baru terbarukan, dan ketahanan pandemi.',
    eligibility: ['Memiliki Counterpart Principal Investigator resmi di luar negeri', 'Proposal telah disetujui bersama oleh funding agency kedua negara'],
  },
];

// MANAJEMEN TALENTA & BEASISWA
export const TALENT_PROGRAMS: TalentProgram[] = [
  {
    id: 'dbr',
    title: 'Degree by Research (DbR) S2 & S3',
    slug: 'degree-by-research',
    badge: 'Beasiswa Penuh',
    duration: 'S2 (2 Tahun) / S3 (3-4 Tahun)',
    stipend: 'Biaya Kuliah (UKT Penuh) + Uang Saku Bulanan + Biaya Bahan Riset di Lab BRIN',
    description: 'Program peningkatan kualifikasi pendidikan pascasarjana berbasis riset penuh di laboratorium BRIN bekerjasama dengan universitas top dalam dan luar negeri.',
    target: 'ASN, Dosen, Peneliti Muda, & Profesional Berbakat',
    requirements: ['Telah diterima di universitas mitra DbR (LoA)', 'Memiliki Co-Promotor dari periset BRIN', 'Proposal riset selaras dengan Prioritas Riset Nasional'],
  },
  {
    id: 'postdoc',
    title: 'Post-Doctoral Fellowship BRIN',
    slug: 'post-doctoral-fellowship',
    badge: 'Gaji Kompetitif Internasional',
    duration: '1 - 2 Tahun (Dapat Diperpanjang)',
    stipend: 'Honor Bulanan Setara Standar Internasional + Asuransi + Dana Mobilitas Riset',
    description: 'Peluang riset pasca-doktoral bagi lulusan S3 berprestasi (maksimal 5 tahun kelulusan) untuk memimpin proyek inovasi mutakhir di laboratorium BRIN.',
    target: 'Doktor Baru WNI & WNA dari Seluruh Dunia',
    requirements: ['Memiliki publikasi internasional bereputasi di Scopus Q1/Q2', 'Usia maksimal 40 tahun pada saat mendaftar'],
  },
  {
    id: 'visiting',
    title: 'Visiting Researcher & Visiting Professor Global',
    slug: 'visiting-researcher',
    badge: 'Mobilitas Peneliti',
    duration: '1 - 6 Bulan',
    stipend: 'Tiket PP Internasional + Akomodasi + Honor Kehormatan Riset',
    description: 'Mengundang profesor dan ilmuwan terkemuka dunia untuk melakukan riset bersama, transfer keahlian teknologi maju, dan pembimbingan di BRIN.',
    target: 'Profesor, Peneliti Senior Internasional, & Diaspora Indonesia',
    requirements: ['Memiliki h-index Scopus yang tinggi', 'Mengajukan rencana kerja riset dan workshop mentoring untuk periset muda BRIN'],
  },
  {
    id: 'mbkm-riset',
    title: 'Riset Kampus Merdeka (MBKM Riset & Magang Mahasiswa)',
    slug: 'mbkm-riset-brin',
    badge: 'Konversi 20 SKS',
    duration: '1 - 2 Semester (6 Bulan)',
    stipend: 'Akses Fasilitas Lab Gratis + Sertifikat Resmi BRIN + Mentoring Periset Senior',
    description: 'Memberikan kesempatan bagi mahasiswa S1 tingkat akhir untuk terjun langsung dalam kelompok riset nyata di laboratorium kelas dunia milik BRIN.',
    target: 'Mahasiswa S1/D4 Minimal Semester 5 dari Seluruh Kampus di Indonesia',
    requirements: ['IPK Minimal 3.00', 'Surat rekomendasi dari Dekan / Ketua Program Studi', 'Proposal topik tugas akhir yang relevan'],
  },
];

// FASILITAS STRATEGIS NASIONAL
export const STRATEGIC_FACILITIES: StrategicFacility[] = [
  {
    id: 'fac-1',
    name: 'Observatorium Nasional Timau',
    subtitle: 'Mata Indonesia Menatap Antariksa Dalam',
    location: 'Gunung Timau, Amfoang Tengah, Kupang, NTT',
    specs: 'Teleskop Optik 3.8 Meter + Fasilitas Pemantauan Cuaca Antariksa',
    description: 'Observatorium astronomi optik terbesar di kawasan Asia Tenggara. Dipilih karena kondisi langit NTT yang memiliki jumlah malam cerah tertinggi dan polusi cahaya sangat minim.',
    impact: 'Mendeteksi eksoplanet, asteroid berpotensi bahaya bagi bumi (NEO), dan evolusi galaksi purba.',
    icon: 'Telescope',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fac-2',
    name: 'Reaktor Serbaguna G.A. Siwabessy (RSG-GAS)',
    subtitle: 'Jantung Teknologi Nuklir Damai Indonesia',
    location: 'Kawasan Sains dan Teknologi B.J. Habibie, Serpong, Banten',
    specs: 'Reaktor Riset Tipe Kolam Daya Termal 30 MW (Megawatt)',
    description: 'Reaktor nuklir riset terbesar di belahan bumi selatan. Beroperasi sejak 1987 untuk produksi radioisotop kesehatan, pemuliaan benih tanaman, dan uji bahan bakar reaktor masa depan.',
    impact: 'Memasok 100% kebutuhan radioisotop medis rumah sakit se-Indonesia untuk diagnosis dan terapi kanker.',
    icon: 'Atom',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fac-3',
    name: 'Armada Kapal Riset Samudera KR Baruna Jaya',
    subtitle: 'Penjelajah Palung Laut Dalam & Oseanografi Nusantara',
    location: 'Wilayah Operasional Seluruh Perairan Yurisdiksi Indonesia',
    specs: 'Kapal Kelas Samudera Dilengkapi Multibeam Sonar 11.000m & Laboratorium On-Board',
    description: 'Armada riset maritim tangguh yang telah menjelajahi ribuan mil laut untuk pemetaan sumber daya migas laut dalam, arkeologi bawah air, dan pemantauan gempa megathrust.',
    impact: 'Mendukung kedaulatan batas landas kontinen laut Indonesia di PBB dan mitigasi tsunami real-time.',
    icon: 'Ship',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fac-4',
    name: 'Supercomputer AI "Mahameru" HPC Cluster',
    subtitle: 'Kedaulatan Komputasi & AI Berkecepatan Tinggi',
    location: 'KST B.J. Habibie Serpong & KST Samaun Samadikun Bandung',
    specs: 'Daya Komputasi 2.4 PFLOPS + 128 Unit NVIDIA DGX A100 Tensor Core',
    description: 'Infrastruktur superkomputer paling mutakhir di Indonesia yang disediakan gratis untuk seluruh ilmuwan, universitas, dan periset nasional untuk percepatan deep-tech.',
    impact: 'Memproses model iklim BMKG, sekuensing genom ribuan sampel dalam hitungan jam, dan training AI Bahasa Indonesia.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
];

// ARTIKEL WARTA & BERITA RISET
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Periset BRIN Temukan Spesies Baru Katak Mini Endemik di Hutan Pegunungan Papua',
    slug: 'spesies-baru-katak-mini-papua-brin',
    category: 'Inovasi',
    summary: 'Tim periset dari Organisasi Riset Hayati dan Lingkungan (ORHL) BRIN berhasil mengidentifikasi spesies baru vertebrata amfibi dengan teknik integrasi morfologi dan DNA barcoding.',
    content: `Tim peneliti dari Pusat Riset Biosistematika dan Evolusi Organisasi Riset Hayati dan Lingkungan (ORHL) Badan Riset dan Inovasi Nasional (BRIN) bersama kolaborator internasional mengumumkan penemuan spesies baru katak pohon berukuran mini dari pedalaman hutan pegunungan Papua Tengah.

Penemuan ini dipublikasikan secara resmi di jurnal taksonomi internasional bereputasi tinggi. Menurut ketua tim peneliti, spesies ini memiliki keunikan berupa pola vokal akustik yang khas serta adaptasi morfologi pada jari kaki yang sangat cocok untuk kanopi lumut basah di ketinggian 2.400 meter di atas permukaan laut.

"Melalui fasilitas pengurutan genom mutakhir di KST Soekarno Cibinong, kami dapat memastikan bahwa perbedaan genetika spesies ini mencapai lebih dari 8.5% dibandingkan kerabat terdekatnya, menjadikannya spesies valid yang belum pernah tercatat sebelumnya dalam sejarah sains dunia," jelasnya.

Penemuan ini menegaskan kembali bahwa hutan hujan tropis Indonesia masih menyimpan jutaan misteri keanekaragaman hayati yang menanti untuk diselidiki dan dilestarikan demi masa depan kemanusiaan.`,
    date: '27 Agustus 2026',
    readTime: '4 Menit Baca',
    author: 'Biro Komunikasi Publik dan Informasi BRIN',
    views: 1420,
    imageUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?q=80&w=1000&auto=format&fit=crop',
    tags: ['Biodiversitas', 'ORHL', 'Papua', 'Biosistematika', 'Spesies Baru'],
  },
  {
    id: 'news-2',
    title: 'BRIN Buka Call for Proposals RIIM Gelombang II 2026 dengan Total Anggaran Rp 200 Miliar',
    slug: 'call-for-proposals-riim-gelombang-2-2026',
    category: 'Kebijakan',
    summary: 'Skema pendanaan kompetitif Riset dan Inovasi untuk Indonesia Maju (RIIM) resmi dibuka untuk seluruh periset perguruan tinggi, industri, dan lembaga riset di seluruh Indonesia.',
    content: `Badan Riset dan Inovasi Nasional (BRIN) secara resmi membuka penerimaan proposal pendanaan riset skema Riset dan Inovasi untuk Indonesia Maju (RIIM) Gelombang II Tahun 2026.

Skema yang dibuka mencakup RIIM Kompetisi, RIIM Ekspedisi Eksplorasi, dan RIIM Startup Inovasi Indonesia dengan total alokasi dana pendanaan mencapai lebih dari Rp 200 Miliar yang bersumber dari Dana Abadi Penelitian LPDP.

Kepala BRIN menyampaikan bahwa seleksi proposal dilakukan secara transparan, berbasis peer-review independen internasional tanpa memandang asal institusi. Seluruh proposal wajib diajukan melalui portal digital pendanaan.brin.go.id sebelum tanggal penutupan 31 Oktober 2026.`,
    date: '25 Agustus 2026',
    readTime: '3 Menit Baca',
    author: 'Direktorat Pendanaan Riset dan Inovasi',
    views: 3890,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    tags: ['RIIM', 'Pendanaan Riset', 'Open Call', 'Inovasi', 'LPDP'],
  },
  {
    id: 'news-3',
    title: 'Kolaborasi BRIN & Lembaga Antariksa Global Sukses Uji Kalibrasi Sensor Satelit di Observatorium Timau',
    slug: 'uji-kalibrasi-sensor-satelit-observatorium-timau',
    category: 'Internasional',
    summary: 'Observatorium Nasional Timau di Nusa Tenggara Timur membuktikan kualitas langit malam Indonesia terbaik di Asia Tenggara dengan suksesnya uji coba teleskop 3.8 meter.',
    content: `Organisasi Riset Penerbangan dan Antariksa (ORPA) BRIN berhasil melaksanakan sesi observasi malam pertama (first light calibration) untuk instrumen spektrograf inframerah pada Teleskop Nasional Timau 3.8m di Kupang, NTT.

Pengamatan dilakukan bersama konsorsium astronom internasional untuk melacak orbit pecahan sampah antariksa di orbit geostasioner serta mengamati bintang variabel muda di galaksi Bimasakti bagian selatan.

Data awal menunjukkan kejernihan atmosfer di atas Gunung Timau mencapai standar kualitas dunia (seeing < 0.8 arcsecond), menjadikan fasilitas ini garda terdepan diplomasi astronomi Indonesia di pentas global.`,
    date: '22 Agustus 2026',
    readTime: '5 Menit Baca',
    author: 'Pusat Riset Antariksa BRIN',
    views: 2150,
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop',
    tags: ['Antariksa', 'Observatorium Timau', 'ORPA', 'Astronomi', 'NTT'],
  },
  {
    id: 'news-4',
    title: 'Uji Klinis Vaksin Rekombinan Baru Karya Peneliti BRIN Menunjukkan Efikasi Tinggi',
    slug: 'uji-klinis-vaksin-rekombinan-brin',
    category: 'Inovasi',
    summary: 'Pusat Riset Vaksin dan Obat (PRVO) BRIN mengumumkan hasil uji praklinis kandidat vaksin rekombinan yang dikembangkan secara mandiri di fasilitas BSL-3 Cibinong.',
    content: `Kemajuan signifikan dicapai oleh para peneliti di Organisasi Riset Kesehatan (ORK) BRIN dalam pengembangan platform vaksin rekombinan buatan dalam negeri.

Uji coba imunogenisitas laboratorium menunjukkan titer antibodi netralisasi yang sangat kuat dan stabil terhadap berbagai varian patogen mutan. Pengembangan ini memanfaatkan teknologi kultur sel mamalia termodifikasi di laboratorium Biosafety Level 3 (BSL-3) Kawasan Sains dan Teknologi Soekarno.

Tahapan selanjutnya adalah persiapan uji klinis Fase 1 bekerjasama dengan industri farmasi BUMN Bio Farma untuk mempercepat kemandirian ketahanan kesehatan nasional.`,
    date: '19 Agustus 2026',
    readTime: '4 Menit Baca',
    author: 'Pusat Riset Vaksin dan Obat BRIN',
    views: 1980,
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vaksin', 'ORK', 'Kesehatan', 'BSL-3', 'Biofarma'],
  },
];

// AGENDA KONFERENSI & ACARA RISET
export const EVENTS_LIST: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Indonesia Research and Innovation Expo (InaRI Expo 2026)',
    date: '15 - 18 Oktober 2026',
    time: '09.00 - 17.00 WIB',
    location: 'ICC Building, KST Soekarno Cibinong, Bogor',
    type: 'Pameran Iptek',
    isOnline: false,
    registrationUrl: 'https://inariexpo.brin.go.id',
  },
  {
    id: 'evt-2',
    title: 'International Conference on Advanced Materials and Nanotechnology (ICAMN 2026)',
    date: '22 - 23 September 2026',
    time: '08.30 - 16.30 WIB',
    location: 'Auditorium Gedung B.J. Habibie, Jakarta Pusat',
    type: 'Konferensi Internasional',
    isOnline: true,
    registrationUrl: 'https://icamn.brin.go.id',
  },
  {
    id: 'evt-3',
    title: 'Sosialisasi & Bimbingan Teknis Pengajuan Proposal RIIM 2026 Batch II',
    date: '05 September 2026',
    time: '13.30 - 15.30 WIB',
    location: 'Live Streaming Zoom & YouTube BRIN Indonesia',
    type: 'Sosialisasi Pendanaan',
    isOnline: true,
    registrationUrl: 'https://pendanaan.brin.go.id/webinar',
  },
];

// STATISTIK NASIONAL RISET BRIN
export const IMPACT_METRICS = {
  totalOrganizations: 12,
  totalResearchCenters: 85,
  totalResearchers: '14.500+',
  totalLaboratoriesELSA: '380+',
  totalPatentsRegistered: '4.350+',
  annualResearchFunding: 'Rp 1,4 T+',
  scopusWoSPublications: '18.900+',
  partnerUniversitiesGlobal: '120+',
};

// KAWASAN SAINS & TEKNOLOGI (KST)
export const SCIENCE_TECH_PARKS = [
  {
    id: 'kst-habibie',
    name: 'KST B.J. Habibie (Serpong)',
    focus: 'Teknologi Nuklir, Energi Terbarukan, Material Maju, Manufaktur, & Aerodinamika',
    location: 'Kawasan Puspiptek Serpong, Tangerang Selatan, Banten',
    facilitiesCount: 140,
  },
  {
    id: 'kst-soekarno',
    name: 'KST Soekarno (Cibinong)',
    focus: 'Hayati, Biodiversitas, Genomik, Vaksin & Obat, Pertanian Tropis, & Biosains',
    location: 'Jl. Raya Jakarta-Bogor Km 46, Cibinong, Jawa Barat',
    facilitiesCount: 110,
  },
  {
    id: 'kst-samadikun',
    name: 'KST Samaun Samadikun (Bandung)',
    focus: 'Mikroelektronika, Telekomunikasi, Komputasi Kinerja Tinggi, & Kebencanaan Geologi',
    location: 'Jl. Sangkuriang, Dago, Coblong, Kota Bandung, Jawa Barat',
    facilitiesCount: 65,
  },
  {
    id: 'kst-siwabessy',
    name: 'KST Siwabessy (Pasar Jumat)',
    focus: 'Aplikasi Isotop Medis, Pengolahan Limbah Nuklir, & Dosimetri Radiasi',
    location: 'Jl. Lebak Bulus Raya No. 49, Cilandak, Jakarta Selatan',
    facilitiesCount: 45,
  },
  {
    id: 'kst-soebroto',
    name: 'KST Gatot Soebroto (Jakarta Pusat)',
    focus: 'Pusat Kebijakan Publik, Sains Sosial Humaniora, & Kantor Pusat BRIN',
    location: 'Gedung B.J. Habibie, Jl. M.H. Thamrin No. 8, Jakarta Pusat',
    facilitiesCount: 20,
  },
];
