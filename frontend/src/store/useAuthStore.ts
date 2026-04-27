import { create } from "zustand";
import api from "@/lib/axios";

interface User {
  id: number;
  name: string;
  email: string;
  member?: {
    height: number;
    weight: number;
    membership_expires_at: string;
  };
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  setAuth: (user: User, token: string) => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

/**
 * Auth Store (Zustand)
 * 
 * Mengelola status login secara global di seluruh aplikasi.
 * Fitur:
 * - Persistensi token di localStorage.
 * - Auto-login (checkAuth) saat halaman di-refresh.
 * - Sinkronisasi data user dan profil member.
 */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem("gymhub_token"),
  isAuthenticated: !!localStorage.getItem("gymhub_token"),
  isLoading: true,

  setAuth: (user, token) => {
    localStorage.setItem("gymhub_token", token);
    set({ user, token, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    try {
      await api.post("/logout");
    } finally {
      localStorage.removeItem("gymhub_token");
      set({ user: null, token: null, isAuthenticated: false, isLoading: false });
      window.location.href = "/login";
    }
  },

  checkAuth: async () => {
    set({ isLoading: true });
    const token = localStorage.getItem("gymhub_token");
    
    if (!token) {
      set({ user: null, isAuthenticated: false, isLoading: false });
      return;
    }

    try {
      // --- MOCK CONNECTION TEMPORARY ---
      // const response = await api.get("/me");
      set({ 
        user: { id: 1, name: "Mock User", email: "mock@example.com", role: "admin" } as any, 
        isAuthenticated: true, 
        isLoading: false 
      });
    } catch (error) {
      localStorage.removeItem("gymhub_token");
      set({ user: null, token: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
