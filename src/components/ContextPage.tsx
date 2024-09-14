import { createContext, ReactNode, useContext, useState } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ContextPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <ThemeProvider>
      <div
        style={{
          padding: "10px",
          backgroundColor: theme === "dark" ? "rgb(0,0,0)" : "white",
          color: theme === "dark" ? "white" : "rgb(0,0,0)",
        }}
      >
        <h1>Change Color</h1>
        <button onClick={toggleTheme}>Change</button>
      </div>
    </ThemeProvider>
  );
};

export default ContextPage;
