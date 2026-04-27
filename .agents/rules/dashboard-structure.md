---
trigger: always_on
---

# Dashboard Structure (3-Tier Roles)

## 1. User (Peserta)
- **Fokus Utama**: Manajemen kegiatan kursus dan pelatihan personal.
- **Fitur Utama**: Akses materi pelatihan, jadwal kegiatan, progres latihan, dan modul latihan mandiri.
- **Fitur Tambahan**: Kalender interaktif (sinkronisasi dengan input Coach).

## 2. Coach (Pelatih)
- **Fokus Utama**: Operasional pelatihan dan kurikulum materi.
- **Fitur Utama**: Upload/update materi & modul, menentukan jadwal member (kalender), memantau progres harian member yang dibimbing.
- **Pembatasan**: TIDAK memiliki akses ke laporan keuangan atau manajemen user global.

## 3. Admin (Pengelola/Owner)
- **Kontrol Pengguna Global**: Menambah/membatasi akses Member dan Coach.
- **Manajemen SDM**: Menetapkan Coach spesifik untuk kursus/member tertentu.
- **Laporan Keuangan**: Dashboard finansial (transaksi, pendapatan kursus, laporan biaya).
- **Kontrol Manajerial**: Audit sistem dan operasional kursus secara keseluruhan.

## Instruksi Operasional
- Gunakan struktur ini untuk pembuatan kode, skema database (`roles` table), dan desain UI/UX.
- Pastikan ada pemisahan logika (Middleware/Guards) yang jelas antara Admin, Coach, dan User.
- Gunakan indikator visual yang berbeda (warna/badge) untuk setiap role agar pengguna tidak bingung.
