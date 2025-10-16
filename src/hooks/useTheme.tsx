import { createContext, useContext, useState, useEffect, type ReactNode } from "react";


interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches; // get system theme

  const savedTheme = localStorage.getItem("theme"); // get saved theme

  const initialTheme = savedTheme
    ? savedTheme === "dark"
    : systemTheme;

  const [isDark, setIsDark] = useState(initialTheme);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}