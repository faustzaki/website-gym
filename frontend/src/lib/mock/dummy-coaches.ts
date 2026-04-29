// ============================================================
// Dummy Data Coach — 15 data dengan variasi lengkap
// ============================================================

export type CoachStatus = 'Aktif' | 'Nonaktif';
export type CoachGender = 'Laki-laki' | 'Perempuan';

export type CoachSpecialization =
  | 'Yoga Trainer'
  | 'Zumba Instructor'
  | 'Strength Training'
  | 'Cardio Specialist'
  | 'CrossFit Coach'
  | 'Pilates Instructor'
  | 'Boxing Trainer'
  | 'Personal Trainer';

export interface CoachSocialMedia {
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

export interface CoachCertification {
  name: string;
  file_url: string; // Simulasi URL
}

export interface Coach {
  id: string;
  nama: string;
  email: string;
  password_masked: string;
  tanggal_lahir: string;
  jenis_kelamin: CoachGender;
  no_hp: string;
  spesialisasi: CoachSpecialization[];
  bio: string;
  foto_url: string;
  sertifikasi: CoachCertification[];
  social_media: CoachSocialMedia;
  status: CoachStatus;
  created_at: string;
}

/** Daftar spesialisasi yang tersedia (untuk filter & dropdown form) */
export const COACH_SPECIALIZATIONS: CoachSpecialization[] = [
  'Yoga Trainer',
  'Zumba Instructor',
  'Strength Training',
  'Cardio Specialist',
  'CrossFit Coach',
  'Pilates Instructor',
  'Boxing Trainer',
  'Personal Trainer',
];

/**
 * Helper: generate avatar URL dari ui-avatars.com
 * Digunakan sebagai placeholder foto profile coach.
 */
function avatarUrl(name: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128&bold=true`;
}

/**
 * 15 Dummy Coach Data
 *
 * Komposisi:
 * - Status: 10 Aktif, 5 Nonaktif
 * - Spesialisasi: tersebar di semua jenis
 * - Gender: 8 Laki-laki, 7 Perempuan
 * - Social media: sebagian terisi, sebagian kosong
 * - Sertifikasi: sebagian punya, sebagian tidak
 */
export const DUMMY_COACHES: Coach[] = [
  {
    id: 'COACH-001',
    nama: 'Rizky Pratama',
    email: 'rizky.pratama@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1990-05-15',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567001',
    spesialisasi: ['Strength Training', 'Personal Trainer'],
    bio: 'Pelatih berpengalaman 8 tahun di bidang strength & conditioning. Spesialisasi pada program pembentukan otot dan peningkatan performa atletik.',
    foto_url: avatarUrl('Rizky Pratama'),
    sertifikasi: [
      { name: 'NSCA-CSCS', file_url: '/certs/rizky-cscs.pdf' },
      { name: 'ACE Personal Trainer', file_url: '/certs/rizky-ace.pdf' },
    ],
    social_media: { instagram: '@rizky.fit', youtube: 'RizkyFitness' },
    status: 'Aktif',
    created_at: '2024-01-10T08:00:00Z',
  },
  {
    id: 'COACH-002',
    nama: 'Sari Dewi Utami',
    email: 'sari.dewi@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1993-08-22',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567002',
    spesialisasi: ['Yoga Trainer', 'Pilates Instructor'],
    bio: 'Instruktur yoga bersertifikasi RYT-500 dengan fokus pada Vinyasa dan Hatha Yoga. Percaya bahwa keseimbangan tubuh dan pikiran adalah kunci kesehatan.',
    foto_url: avatarUrl('Sari Dewi'),
    sertifikasi: [
      { name: 'RYT-500 Yoga Alliance', file_url: '/certs/sari-ryt500.pdf' },
    ],
    social_media: { instagram: '@sari.yoga', tiktok: '@sariyogaflow' },
    status: 'Aktif',
    created_at: '2024-02-05T09:30:00Z',
  },
  {
    id: 'COACH-003',
    nama: 'Andi Kurniawan',
    email: 'andi.kurniawan@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1988-12-03',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567003',
    spesialisasi: ['CrossFit Coach', 'Strength Training'],
    bio: 'CrossFit Level 2 Trainer. Berpengalaman melatih atlet kompetisi dan membantu pemula menguasai gerakan fungsional.',
    foto_url: avatarUrl('Andi Kurniawan'),
    sertifikasi: [
      { name: 'CrossFit Level 2', file_url: '/certs/andi-cf2.pdf' },
    ],
    social_media: { instagram: '@andi.crossfit' },
    status: 'Aktif',
    created_at: '2024-02-20T10:00:00Z',
  },
  {
    id: 'COACH-004',
    nama: 'Maya Anggraini',
    email: 'maya.anggraini@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1995-03-11',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567004',
    spesialisasi: ['Zumba Instructor'],
    bio: 'Licensed Zumba Instructor sejak 2018. Energi tinggi dan selalu membawa semangat positif di setiap kelas.',
    foto_url: avatarUrl('Maya Anggraini'),
    sertifikasi: [
      { name: 'Zumba B1 License', file_url: '/certs/maya-zumba.pdf' },
    ],
    social_media: { instagram: '@maya.zumba', tiktok: '@mayazumbadance' },
    status: 'Aktif',
    created_at: '2024-03-01T11:00:00Z',
  },
  {
    id: 'COACH-005',
    nama: 'Budi Setiawan',
    email: 'budi.setiawan@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1985-07-28',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567005',
    spesialisasi: ['Boxing Trainer'],
    bio: 'Mantan atlet tinju nasional. Kini fokus membagikan ilmu boxing untuk kebugaran dan self-defense.',
    foto_url: avatarUrl('Budi Setiawan'),
    sertifikasi: [],
    social_media: { instagram: '@budi.boxing' },
    status: 'Nonaktif',
    created_at: '2024-03-15T08:30:00Z',
  },
  {
    id: 'COACH-006',
    nama: 'Ratna Sari Widodo',
    email: 'ratna.widodo@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1992-11-07',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567006',
    spesialisasi: ['Pilates Instructor', 'Yoga Trainer'],
    bio: 'Certified Pilates Instructor dengan keahlian di Reformer dan Mat Pilates. Fokus pada postur tubuh dan rehabilitasi cedera.',
    foto_url: avatarUrl('Ratna Sari'),
    sertifikasi: [
      { name: 'STOTT Pilates', file_url: '/certs/ratna-stott.pdf' },
    ],
    social_media: {},
    status: 'Aktif',
    created_at: '2024-04-01T07:00:00Z',
  },
  {
    id: 'COACH-007',
    nama: 'Fajar Nugroho',
    email: 'fajar.nugroho@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1991-09-18',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567007',
    spesialisasi: ['Cardio Specialist'],
    bio: 'Spesialis program HIIT dan cardio endurance. Membantu klien mencapai target body fat ideal dengan pendekatan saintifik.',
    foto_url: avatarUrl('Fajar Nugroho'),
    sertifikasi: [
      { name: 'ACSM Certified', file_url: '/certs/fajar-acsm.pdf' },
    ],
    social_media: { youtube: 'FajarCardioLab' },
    status: 'Aktif',
    created_at: '2024-04-15T09:00:00Z',
  },
  {
    id: 'COACH-008',
    nama: 'Dian Puspita',
    email: 'dian.puspita@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1994-06-25',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567008',
    spesialisasi: ['Personal Trainer', 'Cardio Specialist'],
    bio: 'Personal trainer yang fokus pada transformasi body composition untuk wanita. Program disesuaikan dengan siklus hormonal dan nutrisi.',
    foto_url: avatarUrl('Dian Puspita'),
    sertifikasi: [
      { name: 'NASM-CPT', file_url: '/certs/dian-nasm.pdf' },
    ],
    social_media: { instagram: '@dian.trainer', tiktok: '@dianfitlife' },
    status: 'Aktif',
    created_at: '2024-05-01T10:30:00Z',
  },
  {
    id: 'COACH-009',
    nama: 'Hendro Wijaya',
    email: 'hendro.wijaya@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1987-02-14',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567009',
    spesialisasi: ['Strength Training'],
    bio: 'Pelatih powerlifting berlisensi IPF. Sudah melatih lebih dari 200 klien mencapai target PR mereka.',
    foto_url: avatarUrl('Hendro Wijaya'),
    sertifikasi: [
      { name: 'IPF Coach License', file_url: '/certs/hendro-ipf.pdf' },
    ],
    social_media: { instagram: '@hendro.power' },
    status: 'Nonaktif',
    created_at: '2024-05-20T08:00:00Z',
  },
  {
    id: 'COACH-010',
    nama: 'Ayu Lestari',
    email: 'ayu.lestari@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1996-04-30',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567010',
    spesialisasi: ['Yoga Trainer'],
    bio: 'Instruktur Yin Yoga dan meditasi. Pendekatan holistik untuk membantu mengelola stres dan meningkatkan fleksibilitas.',
    foto_url: avatarUrl('Ayu Lestari'),
    sertifikasi: [
      { name: 'RYT-200 Yoga Alliance', file_url: '/certs/ayu-ryt200.pdf' },
    ],
    social_media: { instagram: '@ayu.yinyoga' },
    status: 'Aktif',
    created_at: '2024-06-10T11:00:00Z',
  },
  {
    id: 'COACH-011',
    nama: 'Rendi Saputra',
    email: 'rendi.saputra@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1989-10-09',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567011',
    spesialisasi: ['CrossFit Coach'],
    bio: 'CrossFit Level 1 Trainer dengan spesialisasi Olympic Weightlifting. Kompetitor aktif di ajang lokal dan nasional.',
    foto_url: avatarUrl('Rendi Saputra'),
    sertifikasi: [
      { name: 'CrossFit Level 1', file_url: '/certs/rendi-cf1.pdf' },
    ],
    social_media: {},
    status: 'Nonaktif',
    created_at: '2024-07-01T09:00:00Z',
  },
  {
    id: 'COACH-012',
    nama: 'Fitri Rahmawati',
    email: 'fitri.rahmawati@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1993-01-19',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567012',
    spesialisasi: ['Zumba Instructor', 'Cardio Specialist'],
    bio: 'Instruktor Zumba dan dance fitness. Spesialisasi kelas untuk ibu-ibu dan program penurunan berat badan berbasis tari.',
    foto_url: avatarUrl('Fitri Rahmawati'),
    sertifikasi: [
      { name: 'Zumba B2 License', file_url: '/certs/fitri-zumba.pdf' },
    ],
    social_media: { instagram: '@fitri.dance', youtube: 'FitriDanceFit' },
    status: 'Aktif',
    created_at: '2024-07-15T10:00:00Z',
  },
  {
    id: 'COACH-013',
    nama: 'Dedi Hermawan',
    email: 'dedi.hermawan@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1986-08-05',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567013',
    spesialisasi: ['Boxing Trainer', 'CrossFit Coach'],
    bio: 'Pelatih Muay Thai dan Boxing. Menggabungkan teknik bela diri dengan program fitness untuk hasil maksimal.',
    foto_url: avatarUrl('Dedi Hermawan'),
    sertifikasi: [],
    social_media: { instagram: '@dedi.muaythai' },
    status: 'Aktif',
    created_at: '2024-08-01T08:30:00Z',
  },
  {
    id: 'COACH-014',
    nama: 'Lina Kartika',
    email: 'lina.kartika@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1997-12-12',
    jenis_kelamin: 'Perempuan',
    no_hp: '081234567014',
    spesialisasi: ['Cardio Specialist'],
    bio: 'Spesialis kelas indoor cycling dan treadmill HIIT. Membawa energi motivasi tinggi untuk setiap sesi latihan.',
    foto_url: avatarUrl('Lina Kartika'),
    sertifikasi: [
      { name: 'Schwinn Cycling', file_url: '/certs/lina-schwinn.pdf' },
    ],
    social_media: {},
    status: 'Nonaktif',
    created_at: '2024-08-20T07:00:00Z',
  },
  {
    id: 'COACH-015',
    nama: 'Wahyu Prasetyo',
    email: 'wahyu.prasetyo@gymhub.com',
    password_masked: '********',
    tanggal_lahir: '1990-06-17',
    jenis_kelamin: 'Laki-laki',
    no_hp: '081234567015',
    spesialisasi: ['Personal Trainer', 'Strength Training', 'Cardio Specialist'],
    bio: 'Personal trainer dengan spesialisasi program untuk executive dan profesional sibuk. Program efisien 45 menit yang bisa dilakukan di mana saja.',
    foto_url: avatarUrl('Wahyu Prasetyo'),
    sertifikasi: [
      { name: 'ACE Personal Trainer', file_url: '/certs/wahyu-ace.pdf' },
      { name: 'Precision Nutrition L1', file_url: '/certs/wahyu-pn.pdf' },
    ],
    social_media: { instagram: '@wahyu.pt', youtube: 'WahyuFitPro', tiktok: '@wahyufitpro' },
    status: 'Aktif',
    created_at: '2024-09-01T10:00:00Z',
  },
];
