---
trigger: always_on
---

# Core Development Rules

## Arsitektur & Logika
- **Modular & Type-Safe**: Selalu buat kode yang modular dan type-safe.
- **Pemisahan Logika**: Pisahkan logika dari UI (gunakan custom hooks).
- **Type-Safety**: Gunakan JSDoc atau TypeScript untuk memastikan type-safety.
- **Penempatan File**: Setiap kali membuat file baru, tanyakan di folder mana file tersebut sebaiknya diletakkan sesuai standar React/Laravel.

## Komponen & Styling
- **Fokus Komponen**: Jika diminta membuat komponen tertentu, buat komponen itu saja tanpa merubah hal lain yang tidak relevan.
- **Wajib shadcn/ui**: Selalu gunakan komponen dari `shadcn/ui` untuk semua elemen UI dasar (button, card, modal, form, dialog, dll).
- **Hindari Default HTML**: Jangan gunakan HTML default atau custom component jika sudah tersedia di `shadcn/ui`.
- **Path Import**: Pastikan import komponen `shadcn/ui` berasal dari `@/components/ui/*`.
- **Tailwind Utility**: Selalu gunakan utilitas Tailwind CSS untuk styling tambahan; hindari penggunaan inline styles. Tailwind bukan pengganti fungsionalitas komponen utama.

## Asset & Fallback
- **Storage Backend**: Gunakan Laravel Storage untuk pengelolaan gambar.
- **Fallback UI**: Terapkan mekanisme fallback yang cerdas jika gambar pada antarmuka gagal dimuat atau tidak tersedia.

## Komunikasi
- **Klarifikasi**: Sebelum membuat kode, tanyakan kebutuhan detail jika instruksi belum jelas.