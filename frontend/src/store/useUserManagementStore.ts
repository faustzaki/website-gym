import { create } from 'zustand';
import { DUMMY_USERS_INITIAL, type UserMember } from '@/lib/mock/dummy-users';

export type TabFilter = 'all' | 'new' | 'inactive';

interface UserManagementState {
  users: UserMember[];
  searchQuery: string;
  activeTab: TabFilter;
  currentPage: number;
  itemsPerPage: number;
  
  // UI States
  isFormOpen: boolean;
  isDetailOpen: boolean;
  isDeleteOpen: boolean;
  selectedUser: UserMember | null;
  
  // Actions
  setSearchQuery: (query: string) => void;
  setActiveTab: (tab: TabFilter) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  
  // UI Actions
  setIsFormOpen: (open: boolean) => void;
  setIsDetailOpen: (open: boolean) => void;
  setIsDeleteOpen: (open: boolean) => void;
  setSelectedUser: (user: UserMember | null) => void;
  
  // CRUD Actions
  addUser: (user: Omit<UserMember, 'id' | 'is_deleted' | 'password_masked'>) => void;
  updateUser: (id: string, data: Partial<UserMember>) => void;
  deleteUser: (id: string) => void; // Soft delete
}

export const useUserManagementStore = create<UserManagementState>((set) => ({
  users: DUMMY_USERS_INITIAL,
  searchQuery: '',
  activeTab: 'all',
  currentPage: 1,
  itemsPerPage: 10,
  isFormOpen: false,
  isDetailOpen: false,
  isDeleteOpen: false,
  selectedUser: null,
  
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }), // reset page on search
  setActiveTab: (tab) => set({ activeTab: tab, currentPage: 1 }), // reset page on tab change
  setCurrentPage: (page) => set({ currentPage: page }),
  setItemsPerPage: (items) => set({ itemsPerPage: items, currentPage: 1 }),
  setIsFormOpen: (open) => set({ isFormOpen: open }),
  setIsDetailOpen: (open) => set({ isDetailOpen: open }),
  setIsDeleteOpen: (open) => set({ isDeleteOpen: open }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  
  addUser: (userData) => set((state) => {
    const newUser: UserMember = {
      ...userData,
      id: `USR-${Math.floor(1000 + Math.random() * 9000)}-NEW`,
      password_masked: '********',
      is_deleted: false,
    };
    return { users: [newUser, ...state.users] };
  }),
  
  updateUser: (id, data) => set((state) => ({
    users: state.users.map(u => u.id === id ? { ...u, ...data } : u)
  })),
  
  deleteUser: (id) => set((state) => ({
    users: state.users.map(u => u.id === id ? { ...u, is_deleted: true } : u)
  }))
}));
