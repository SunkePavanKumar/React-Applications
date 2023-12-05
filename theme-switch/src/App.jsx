import "./App.css";
import { React } from "react";
import { useState } from "react";
import useThemSwitch, { ThemeSwitchProvider } from "./context/ThemeContex";

function App() {
  const { theme, darkMode, lightMode } = useThemSwitch();
  const [themeMode, setThemeMode] = useState("light");
  function changeTheme(setThemeMode) {
    if (themeMode === "light") {
      setThemeMode("dark");
      document.querySelector("html").classList.remove("dark", "light");
      document.querySelector("html").classList.add(themeMode);
      document.querySelector("html").style.backgroundColor = "black";
    } else {
      setThemeMode("light");
      document.querySelector("html").classList.remove("dark", "light");
      document.querySelector("html").classList.add(themeMode);
      document.querySelector("html").style.backgroundColor = "white";
    }
  }

  return (
    <ThemeSwitchProvider>
      <div className="p-10 m-8 bg-gray-400 h-72 w-1/2">
        <h1>Theme Changer</h1>
        <div className=" float-right">
          <button
            type="toggle"
            className=" bg-amber-200 rounded p-2 hover:bg-black hover:text-white"
            onClick={() => changeTheme(setThemeMode)}
          >
            enable
          </button>
        </div>
      </div>
    </ThemeSwitchProvider>
  );
}

export default App;
