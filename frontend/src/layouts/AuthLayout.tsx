import { Outlet, Link } from "react-router-dom";
import logoImg from "@/assets/Gemini_Generated_Image_kmomnfkmomnfkmom-removebg-preview.png";

/**
 * AuthLayout — Layout khusus halaman Login & Register.
 *
 * Desain: Split-screen layout.
 * - Kiri: Panel dekoratif (branding + gambar gym) — hanya tampil di desktop.
 * - Kanan: Form area tempat <Outlet /> merender LoginPage / RegisterPage.
 *
 * Kenapa split-screen?
 * - Best practice UX untuk auth pages.
 * - Memanfaatkan layar lebar untuk branding sambil tetap fokus ke form.
 * - Di mobile, panel kiri disembunyikan sehingga form langsung terlihat.
 */
export default function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* ====== PANEL KIRI: Branding (Hanya Desktop) ====== */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0A0A0A]">
        {/* Background gradient dekoratif */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]" />

        {/* Konten branding */}
        <div className="relative z-10 flex flex-col justify-between p-12">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Gym Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-white text-2xl font-bold tracking-tight">
              Gym<span className="text-red-600">Hub</span>
            </span>
          </Link>

          {/* Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
              Mulai Perjalanan
              <br />
              <span className="text-red-600">Fitness</span> Anda
            </h1>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Bergabung dengan ribuan member yang telah mentransformasi hidup
              mereka. Akses jadwal latihan, pantau progres, dan raih target
              kebugaran Anda.
            </p>
          </div>

          {/* Bottom decorative dots */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* ====== PANEL KANAN: Form Area ====== */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo untuk mobile (di desktop tersembunyi karena ada di panel kiri) */}
          <div className="lg:hidden flex justify-center mb-10">
            <Link to="/" className="flex flex-col items-center gap-2">
              <img src={logoImg} alt="Gym Logo" className="h-16 w-auto object-contain" />
              <span className="text-foreground text-2xl font-bold tracking-tight">
                Gym<span className="text-red-600">Hub</span>
              </span>
            </Link>
          </div>

          {/* 
            <Outlet /> akan merender LoginPage atau RegisterPage
            tergantung URL yang aktif.
          */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
