import React from "react";

export const ThemeSwitch = React.createContext({
  theme: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeSwitchProvider = ThemeSwitch.Provider;

export default function useThemSwitch() {
  return React.useContext(ThemeSwitch);
}
