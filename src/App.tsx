import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import Banner from "./components/Banner";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1388, // Upravena hodnota
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ResponsiveAppBar />
      <Banner />
    </ThemeProvider>
  );
}

export default App;
