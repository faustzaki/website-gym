import { useState, useCallback } from "react";

// --- TYPE DEFINITIONS ---

/** Kategori hasil BMI berdasarkan standar WHO */
type BMICategory = "underweight" | "normal" | "overweight" | "obese";

/** Struktur data hasil perhitungan BMI */
interface BMIResult {
  value: number;
  category: BMICategory;
  label: string;
  description: string;
  /** ID paket yang direkomendasikan berdasarkan kondisi BMI */
  recommendedPlan: "basic" | "pro" | "elite";
}

/** Return type dari hook useBMICalculator */
interface UseBMICalculator {
  weight: string;
  height: string;
  result: BMIResult | null;
  setWeight: (value: string) => void;
  setHeight: (value: string) => void;
  calculate: () => void;
  reset: () => void;
  isValid: boolean;
}

/**
 * Menentukan kategori BMI berdasarkan nilai kalkulasi.
 * Menggunakan standar WHO:
 * - < 18.5  = Underweight
 * - 18.5–24.9 = Normal
 * - 25–29.9 = Overweight
 * - >= 30   = Obese
 */
function getBMICategory(bmi: number): BMIResult {
  if (bmi < 18.5) {
    return {
      value: bmi,
      category: "underweight",
      label: "Kekurangan Berat",
      description:
        "Tubuhmu membutuhkan tambahan massa otot dan nutrisi yang tepat.",
      recommendedPlan: "pro",
    };
  }
  if (bmi < 25) {
    return {
      value: bmi,
      category: "normal",
      label: "Ideal",
      description:
        "Tubuhmu sudah dalam kondisi ideal. Pertahankan dan tingkatkan!",
      recommendedPlan: "basic",
    };
  }
  if (bmi < 30) {
    return {
      value: bmi,
      category: "overweight",
      label: "Kelebihan Berat",
      description:
        "Program pembakaran lemak intensif akan membantu mencapai berat idealmu.",
      recommendedPlan: "pro",
    };
  }
  return {
    value: bmi,
    category: "obese",
    label: "Obesitas",
    description:
      "Diperlukan program khusus dengan bimbingan personal trainer untuk hasil optimal.",
    recommendedPlan: "elite",
  };
}

/**
 * Custom hook untuk kalkulasi BMI.
 *
 * Memisahkan seluruh business logic dari UI:
 * - Validasi input berat/tinggi badan
 * - Kalkulasi BMI (berat / tinggi²)
 * - Penentuan kategori & rekomendasi paket
 *
 * @example
 * ```tsx
 * const { weight, height, result, setWeight, setHeight, calculate } = useBMICalculator();
 * ```
 */
export function useBMICalculator(): UseBMICalculator {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  // Validasi: berat 20-300kg, tinggi 100-250cm
  const isValid =
    Number(weight) >= 20 &&
    Number(weight) <= 300 &&
    Number(height) >= 100 &&
    Number(height) <= 250;

  const calculate = useCallback(() => {
    if (!isValid) return;

    const w = Number(weight);
    const h = Number(height) / 100; // konversi cm ke meter
    const bmi = w / (h * h);

    setResult(getBMICategory(Number(bmi.toFixed(1))));
  }, [weight, height, isValid]);

  const reset = useCallback(() => {
    setWeight("");
    setHeight("");
    setResult(null);
  }, []);

  return {
    weight,
    height,
    result,
    setWeight,
    setHeight,
    calculate,
    reset,
    isValid,
  };
}
