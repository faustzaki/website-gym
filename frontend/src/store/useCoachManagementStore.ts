// ============================================================
// Zustand Store — Coach Management
// ============================================================
//
// Menyimpan state global untuk modul Manajemen Coach.
// Terpisah dari store User Management agar tidak saling
// mengganggu dan mudah di-maintain.
// ============================================================

import { create } from 'zustand';
import type { Coach, CoachStatus, CoachSpecialization, CoachGender } from '@/lib/mock/dummy-coaches';

interface CoachManagementState {
  // Data
  coaches: Coach[];

  // Filters
  searchQuery: string;
  filterStatus: CoachStatus | 'Semua';
  filterSpecialization: CoachSpecialization | 'Semua';
  filterGender: CoachGender | 'Semua';

  // Pagination
  currentPage: number;
  itemsPerPage: number;

  // Loading & Error
  isLoading: boolean;

  // UI States (Modal/Dialog)
  isDetailOpen: boolean;
  isDeactivateOpen: boolean;
  selectedCoach: Coach | null;

  // Actions — Setters
  setCoaches: (coaches: Coach[]) => void;
  setSearchQuery: (query: string) => void;
  setFilterStatus: (status: CoachStatus | 'Semua') => void;
  setFilterSpecialization: (spec: CoachSpecialization | 'Semua') => void;
  setFilterGender: (gender: CoachGender | 'Semua') => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  setIsLoading: (loading: boolean) => void;
  setIsDetailOpen: (open: boolean) => void;
  setIsDeactivateOpen: (open: boolean) => void;
  setSelectedCoach: (coach: Coach | null) => void;

  // Actions — CRUD (memperbarui state lokal setelah service call berhasil)
  addCoach: (coach: Coach) => void;
  updateCoachInStore: (id: string, data: Partial<Coach>) => void;
  deactivateCoachInStore: (id: string) => void;
}

export const useCoachManagementStore = create<CoachManagementState>((set) => ({
  // Initial State
  coaches: [],
  searchQuery: '',
  filterStatus: 'Semua',
  filterSpecialization: 'Semua',
  filterGender: 'Semua',
  currentPage: 1,
  itemsPerPage: 10,
  isLoading: false,
  isDetailOpen: false,
  isDeactivateOpen: false,
  selectedCoach: null,

  // Setters
  setCoaches: (coaches) => set({ coaches }),
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  setFilterStatus: (status) => set({ filterStatus: status, currentPage: 1 }),
  setFilterSpecialization: (spec) => set({ filterSpecialization: spec, currentPage: 1 }),
  setFilterGender: (gender) => set({ filterGender: gender, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setItemsPerPage: (items) => set({ itemsPerPage: items, currentPage: 1 }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsDetailOpen: (open) => set({ isDetailOpen: open }),
  setIsDeactivateOpen: (open) => set({ isDeactivateOpen: open }),
  setSelectedCoach: (coach) => set({ selectedCoach: coach }),

  // CRUD — Update state lokal
  addCoach: (coach) =>
    set((state) => ({ coaches: [coach, ...state.coaches] })),

  updateCoachInStore: (id, data) =>
    set((state) => ({
      coaches: state.coaches.map((c) => (c.id === id ? { ...c, ...data } : c)),
    })),

  deactivateCoachInStore: (id) =>
    set((state) => ({
      coaches: state.coaches.map((c) =>
        c.id === id ? { ...c, status: 'Nonaktif' as const } : c
      ),
    })),
}));
