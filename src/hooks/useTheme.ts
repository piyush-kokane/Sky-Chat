import { useState, useEffect } from "react";

export function useTheme() {
  const savedTheme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState(savedTheme === "dark");

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return { isDark, toggleTheme };
}
