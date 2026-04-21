import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Custom hook untuk mendeteksi perilaku scroll pada Navbar.
 *
 * Mengembalikan dua state:
 * - `isScrolled`: true jika user sudah scroll melewati threshold (navbar jadi solid).
 * - `isVisible`: true jika navbar harus ditampilkan (scroll ke atas / di posisi paling atas).
 *
 * Logika:
 * - Scroll ke bawah → navbar menghilang (`isVisible = false`)
 * - Scroll ke atas  → navbar muncul kembali (`isVisible = true`)
 * - Di posisi paling atas (scrollY < threshold) → navbar transparan & selalu terlihat
 */
export function useScrollNavbar(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // useRef agar nilai lastScrollY tidak memicu re-render setiap scroll event
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Tentukan apakah sudah melewati batas untuk background solid
    setIsScrolled(currentScrollY > threshold);

    // Tentukan arah scroll:
    // - Jika scroll ke atas (currentScrollY < lastScrollY) → tampilkan navbar
    // - Jika scroll ke bawah → sembunyikan navbar
    // - Jika masih di atas (< threshold) → selalu tampilkan
    if (currentScrollY <= threshold) {
      setIsVisible(true);
    } else if (currentScrollY < lastScrollY.current) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY.current) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, [threshold]);

  useEffect(() => {
    // `passive: true` meningkatkan performa scroll listener
    // karena browser tahu kita tidak akan memanggil preventDefault()
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isScrolled, isVisible };
}
