import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [pria, setPria] = useState("PRIA");
  const [wanita, setwanita] = useState("WANITA");

  return (
    <>
      <ThemeContext.Provider value={{ pria, wanita }}>{children}</ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
