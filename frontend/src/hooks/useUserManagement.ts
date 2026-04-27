import { useMemo } from 'react';
import { useUserManagementStore } from '@/store/useUserManagementStore';
import { useDebounce } from './useDebounce';
import type { UserMember } from '@/lib/mock/dummy-users';
import * as XLSX from 'xlsx';

export function useUserManagement() {
  const {
    users,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    isFormOpen,
    setIsFormOpen,
    isDetailOpen,
    setIsDetailOpen,
    isDeleteOpen,
    setIsDeleteOpen,
    selectedUser,
    setSelectedUser,
    addUser,
    updateUser,
    deleteUser
  } = useUserManagementStore();

  const debouncedSearch = useDebounce(searchQuery, 300);


  // Filter Logic
  const filteredUsers = useMemo(() => {
    let result = users.filter(u => !u.is_deleted);

    // Apply Search
    if (debouncedSearch) {
      const lowerSearch = debouncedSearch.toLowerCase();
      result = result.filter(u => 
        u.nama.toLowerCase().includes(lowerSearch) || 
        u.email.toLowerCase().includes(lowerSearch)
      );
    }

    // Apply Tab Filter
    const now = new Date();
    if (activeTab === 'new') {
      const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
      result = result.filter(u => new Date(u.tanggal_daftar) >= threeDaysAgo);
    } else if (activeTab === 'inactive') {
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      result = result.filter(u => new Date(u.tanggal_aktivitas_terakhir) <= thirtyDaysAgo);
    }

    return result;
  }, [users, debouncedSearch, activeTab]);

  // Pagination Logic
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const paginatedUsers = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredUsers, currentPage, itemsPerPage]);

  // Export Logic
  const exportToExcel = (type: 'all' | 'current') => {
    const dataToExport = type === 'all' ? filteredUsers : paginatedUsers;
    
    if (dataToExport.length === 0) {
      alert("Tidak ada data untuk diekspor.");
      return;
    }

    const worksheetData = dataToExport.map((user, index) => ({
      No: index + 1,
      ID: user.id,
      Nama: user.nama,
      Email: user.email,
      'Status Langganan': user.status_langganan,
      'Tanggal Daftar': new Date(user.tanggal_daftar).toLocaleDateString('id-ID'),
      'Aktivitas Terakhir': new Date(user.tanggal_aktivitas_terakhir).toLocaleDateString('id-ID')
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Member");
    
    const dateStr = new Date().toISOString().split('T')[0];
    const fileName = `Data_Member_Gym_${dateStr}_${type === 'all' ? 'Semua' : 'Halaman_' + currentPage}.xlsx`;
    
    XLSX.writeFile(workbook, fileName);
  };

  // Handlers
  const handleCreateNew = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEdit = (user: UserMember) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleViewDetail = (user: UserMember) => {
    setSelectedUser(user);
    setIsDetailOpen(true);
  };

  const handleDeleteClick = (user: UserMember) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    if (selectedUser) {
      deleteUser(selectedUser.id);
      setIsDeleteOpen(false);
      setSelectedUser(null);
    }
  };

  const submitForm = (data: Omit<UserMember, 'id' | 'is_deleted' | 'password_masked'>) => {
    if (selectedUser) {
      updateUser(selectedUser.id, data);
    } else {
      addUser(data);
    }
    setIsFormOpen(false);
  };

  return {
    // State
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalItems,
    totalPages,
    
    // Data
    paginatedUsers,
    
    // Modals
    isFormOpen,
    setIsFormOpen,
    isDetailOpen,
    setIsDetailOpen,
    isDeleteOpen,
    setIsDeleteOpen,
    selectedUser,
    
    // Actions
    exportToExcel,
    handleCreateNew,
    handleEdit,
    handleViewDetail,
    handleDeleteClick,
    confirmDelete,
    submitForm
  };
}
