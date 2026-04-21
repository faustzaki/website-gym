import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

/**
 * RegisterPage — Halaman pendaftaran member baru.
 *
 * Form input:
 * - Nama lengkap, Email, Password, Konfirmasi password.
 *
 * Fitur:
 * - Validasi: password dan konfirmasi harus cocok (client-side).
 * - Toggle visibility password.
 * - Nanti akan terkoneksi ke Laravel Sanctum via POST /api/register.
 */
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordsMatch = password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) return;

    setIsLoading(true);

    // TODO: Integrasi Laravel Sanctum
    // await axios.post('/api/register', { name, email, password, password_confirmation: confirmPassword });
    console.log("Register attempt:", { name, email, password });

    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Buat Akun Baru
        </h1>
        <p className="text-sm text-muted-foreground">
          Bergabung dan mulai perjalanan fitness Anda hari ini
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama Lengkap */}
        <div className="space-y-2">
          <label htmlFor="register-name" className="text-sm font-medium text-foreground">
            Nama Lengkap
          </label>
          <Input
            id="register-name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-11"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="register-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="register-email"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="register-password" className="text-sm font-medium text-foreground">
            Password
          </label>
          <div className="relative">
            <Input
              id="register-password"
              type={showPassword ? "text" : "password"}
              placeholder="Minimal 8 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="h-11 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Konfirmasi Password */}
        <div className="space-y-2">
          <label htmlFor="register-confirm" className="text-sm font-medium text-foreground">
            Konfirmasi Password
          </label>
          <Input
            id="register-confirm"
            type="password"
            placeholder="Ulangi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            className={`h-11 ${
              confirmPassword && !passwordsMatch
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
          />
          {confirmPassword && !passwordsMatch && (
            <p className="text-xs text-red-500">Password tidak cocok</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading || (!!confirmPassword && !passwordsMatch)}
          className="w-full h-11 bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-200 active:scale-[0.98]"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Memproses...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Daftar
              <ArrowRight size={16} />
            </span>
          )}
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-3 text-muted-foreground">
            Sudah punya akun?
          </span>
        </div>
      </div>

      {/* Login Link */}
      <Link to="/login">
        <Button
          variant="outline"
          className="w-full h-11 border-border text-foreground hover:bg-accent transition-all duration-200"
        >
          Masuk ke Akun
        </Button>
      </Link>
    </div>
  );
}
