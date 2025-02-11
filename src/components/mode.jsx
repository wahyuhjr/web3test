"use client";

import { Sun, Moon } from "lucide-react"; // Import ikon matahari dan bulan
import { useTheme } from "next-themes"; // Untuk mengelola tema
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme(); // Ambil fungsi setTheme dan tema saat ini

  return (
    <Button
      variant="ghost" // Variant ghost untuk tampilan tombol yang minimalis
      size="sm" // Ukuran kecil
      onClick={() => setTheme(theme === "light" ? "dark" : "light")} // Toggle tema
      className="p-2" // Padding untuk tombol
    >
      {/* Ikon matahari, muncul saat mode light */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      {/* Ikon bulan, muncul saat mode dark */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {/* Teks untuk aksesibilitas */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}