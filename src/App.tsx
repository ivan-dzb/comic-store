import React from "react";
import { ThemeProvider } from "@emotion/react";
import MainPage from "pages/MainPage/MainPage";
import theme from "styles/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
