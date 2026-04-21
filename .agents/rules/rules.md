---
trigger: always_on
---

[RULES]
- Selalu buat kode yang modular dan type-safe
- Jika saya minta komponen tertentu, buat komponen itu saja
- Sebelum membuat kode, tanyakan kebutuhan detail jika belum jelas
- Gunakan JSDoc atau TypeScript untuk type-safety
- Pisahkan logic dari UI (custom hooks)
- Selalu gunakan komponen berbasis Tailwind, bukan inline style
- Gunakan Laravel Storage untuk pengelolaan gambar
- Setiap kali membuat file baru, tanyakan pada saya di folder mana file tersebut sebaiknya diletakkan sesuai dengan standar React/Laravel
- Menerapkan mekanisme fallback cerdas jika gambar pada interface website tidak muncul atau gagal dimuat.


- Selalu gunakan komponen dari shadcn/ui untuk semua elemen UI seperti button, card, modal, form, dan dialog.
- Jangan gunakan HTML default atau custom component jika sudah tersedia di shadcn/ui.
- Gunakan Tailwind CSS hanya untuk styling tambahan, bukan menggantikan komponen utama.
- Pastikan import komponen dari "@/components/ui/*"