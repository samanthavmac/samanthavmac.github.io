// App.js

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./sections/Header";
import About from "./sections/About";
import SoftwareProjects from "./sections/SoftwareProjects";
import DesignProjects from "./sections/DesignProjects";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "react-switch";

import "./styles/index.css";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const updateCssVariables = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.style.setProperty("--primary", "#2ecc71");
      root.style.setProperty("--secondary", "#D9FDD6");
      root.style.setProperty("--card", "#212121");
      root.style.setProperty("--card-secondary", "#424242");
      root.style.setProperty(
        "--background",
        "linear-gradient(45deg, #192019, #323232, #192019, #545454)"
      );
      root.style.setProperty("--text", "#e8e8e8");
      root.style.setProperty("--border", "#424242");
      root.style.setProperty("--nav-background", "#424242");
      root.style.setProperty("--light-border", "#ffffff");
    } else {
      root.style.setProperty("--primary", "#2ecc71");
      root.style.setProperty("--secondary", "#494d4a");
      root.style.setProperty("--card", "#f0f0f0");
      root.style.setProperty("--card-secondary", "#dbdbdb");
      root.style.setProperty(
        "--background",
        "linear-gradient(-45deg, white, #e0ffed, white, #bbe3b8)"
      );
      root.style.setProperty("--text", "#40403f");
      root.style.setProperty("--border", "#b3b3b3");
      root.style.setProperty("--nav-background", "#e9f0e9");
      root.style.setProperty("--light-border", "#828281");
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: getComputedStyle(document.documentElement)
          .getPropertyValue("--primary")
          .trim(),
      },
      background: {
        default: getComputedStyle(document.documentElement)
          .getPropertyValue("--background")
          .trim(),
        paper: getComputedStyle(document.documentElement)
          .getPropertyValue("--background")
          .trim(),
      },
      text: {
        primary: getComputedStyle(document.documentElement)
          .getPropertyValue("--text")
          .trim(),
      },
    },
    typography: {
      fontFamily: "Satoshi, Arial, sans-serif",
    },
  });

  useEffect(() => {

    // Update CSS variables when mode changes
    updateCssVariables(toggleDarkMode ? "dark" : "light");
  }, [toggleDarkMode]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <div className="switch-container">
          <img src="/images/icons/sun-icon.png" alt="Sun Icon" />
          <Switch
            checked={toggleDarkMode}
            onChange={toggleDarkTheme}
            onColor="#2ecc71"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            uncheckedIcon={false}
            checkedIcon={false}
            height={30}
            width={60}
            handleDiameter={30}
          />
          <img src="/images/icons/moon-icon.png" alt="Moon Icon" />
        </div>
        <Navbar />
        <Header />
        <SoftwareProjects />
        <DesignProjects />
        <Experiences />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
