import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ClipLoader from "react-spinners/ClipLoader";
import "./styles/index.css";

// Lazy load sections
const Header = lazy(() => import("./sections/Header"));
const SoftwareProjects = lazy(() => import("./sections/SoftwareProjects"));
const DesignProjects = lazy(() => import("./sections/DesignProjects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Footer = lazy(() => import("./sections/Footer"));

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
      root.style.setProperty("--background", "linear-gradient(45deg, #192019, #323232, #192019, #545454)");
      root.style.setProperty("--text", "#e8e8e8");
      root.style.setProperty("--border", "#424242");
      root.style.setProperty("--nav-background", "#424242");
      root.style.setProperty("--light-border", "#ffffff");
    } else {
      root.style.setProperty("--primary", "#2ecc71");
      root.style.setProperty("--secondary", "#494d4a");
      root.style.setProperty("--card", "#f0f0f0");
      root.style.setProperty("--card-secondary", "#dbdbdb");
      root.style.setProperty("--background", "linear-gradient(-45deg, white, #e0ffed, white, #bbe3b8)");
      root.style.setProperty("--text", "#40403f");
      root.style.setProperty("--border", "#b3b3b3");
      root.style.setProperty("--nav-background", "#e9f0e9");
      root.style.setProperty("--light-border", "#828281");
    }
  };

  useEffect(() => {
    updateCssVariables(toggleDarkMode ? "dark" : "light");
  }, [toggleDarkMode]);

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: getComputedStyle(document.documentElement).getPropertyValue("--primary").trim(),
      },
      background: {
        default: getComputedStyle(document.documentElement).getPropertyValue("--background").trim(),
        paper: getComputedStyle(document.documentElement).getPropertyValue("--background").trim(),
      },
      text: {
        primary: getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),
      },
    },
    typography: {
      fontFamily: "Satoshi, Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Navbar toggleDarkMode={toggleDarkMode} toggleDarkTheme={toggleDarkTheme} />
        <Suspense fallback={<div className="loader-container"><ClipLoader color={"#2ecc71"} loading={true} size={50} /></div>}>
          <Header />
          <SoftwareProjects />
          <DesignProjects />
          <Experiences />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
