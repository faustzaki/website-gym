import { useState, useEffect } from 'react';

// Type definitions - nantinya bisa dipisah ke file types terpisah bila aplikasi sudah besar
export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  avatar_url: string;
}

// Dummy data fallback jika backend belum ready
const DUMMY_TRAINERS: Trainer[] = [
  {
    id: 1,
    name: "ALEX STANDALL",
    specialty: "ELITE PROGRAM",
    avatar_url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=64&h=64"
  },
  {
    id: 2,
    name: "SARAH JENKINS",
    specialty: "STRENGTH & CONDITIONING",
    avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&h=64"
  },
  {
    id: 3,
    name: "MARCUS WEBB",
    specialty: "HIIT EXPERT",
    avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
  }
];

export const useTrainers = () => {
  const [trainers, setTrainers] = useState<Trainer[]>(DUMMY_TRAINERS);
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: Fetch ke Laravel REST API
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        // Mock fetch setup 
        // const response = await fetch('http://localhost:8000/api/trainers');
        // const data = await response.json();
        // setTrainers(data);
      } catch (error) {
        console.error("Gagal load data trainer dari database:", error);
      }
    };
    
    // fetchTrainers();
  }, []);

  // Interval carousel logic
  useEffect(() => {
    if (trainers.length <= 1) return;

    const intervalId = setInterval(() => {
      // Loop ke index selanjutnya secara berputar (cycle)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
    }, 5000); // interval setiap 5 detik

    // Cleanup function untuk memberhentikan loop jika komponen unmount
    return () => clearInterval(intervalId);
  }, [trainers]);

  return {
    currentTrainer: trainers[currentIndex],
    trainers,
    currentIndex,
  };
};
