export type SubscriptionStatus = 'Aktif' | 'Tidak Aktif' | 'Pending';

export interface UserMember {
  id: string;
  nama: string;
  email: string;
  password_masked: string;
  status_langganan: SubscriptionStatus;
  tanggal_daftar: string;
  tanggal_aktivitas_terakhir: string;
  is_deleted: boolean;
}

const generateRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

export const generateDummyUsers = (count: number = 50): UserMember[] => {
  const users: UserMember[] = [];
  const statuses: SubscriptionStatus[] = ['Aktif', 'Tidak Aktif', 'Pending'];
  const firstNames = ['Budi', 'Siti', 'Andi', 'Rina', 'Joko', 'Ayu', 'Doni', 'Lestari', 'Eko', 'Sari', 'Rudi', 'Dewi', 'Agus', 'Tari', 'Hendra'];
  const lastNames = ['Santoso', 'Wijaya', 'Kusuma', 'Pratama', 'Hidayat', 'Putri', 'Sari', 'Setiawan', 'Nugroho', 'Saputra'];

  const now = new Date();
  const pastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
    
    // Simulate some new users (registered within last 3 days)
    const isNew = Math.random() > 0.8;
    const registerDate = isNew 
      ? generateRandomDate(new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), now)
      : generateRandomDate(pastYear, new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000));

    // Simulate inactive users (last activity > 30 days ago)
    const isInactiveActivity = Math.random() > 0.7;
    const activityDate = isInactiveActivity
      ? generateRandomDate(pastYear, new Date(now.getTime() - 31 * 24 * 60 * 60 * 1000))
      : generateRandomDate(new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000), now);

    // Status mapping based on activity date for realistic mock
    let status: SubscriptionStatus = statuses[Math.floor(Math.random() * statuses.length)];
    if (isInactiveActivity) {
      status = 'Tidak Aktif';
    } else if (isNew) {
      status = 'Aktif';
    }

    users.push({
      id: `USR-${Math.floor(1000 + Math.random() * 9000)}-${i}`,
      nama: fullName,
      email: email,
      password_masked: '********',
      status_langganan: status,
      tanggal_daftar: registerDate,
      tanggal_aktivitas_terakhir: activityDate,
      is_deleted: false,
    });
  }

  return users;
};

// Singleton data
export const DUMMY_USERS_INITIAL = generateDummyUsers(55);
