---
trigger: always_on
---

# Lucide Icons Rules

- **Larangan**: Jangan pernah meng-import icon social media / brand (seperti Instagram, Twitter/X, YouTube, dll) dari `lucide-react`. Ikon-ikon tersebut sudah dihapus di versi terbaru karena isu lisensi trademark.
- **Solusi**: Jika mendapati permintaan atau kebutuhan membuat logo sosial media, buat komponen SVG mentah secara manual di dalam file bersangkutan. Pastikan komponen tersebut memiliki prop support seperti `size` dan `className` agar selaras dengan komponen dari `lucide-react`.
