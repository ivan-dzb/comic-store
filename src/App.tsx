import React from "react";
import { ThemeProvider } from "@emotion/react";
import MainPage from "pages/MainPage/MainPage";
import theme from "styles/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import AllComics from "pages/AllComics/AllComics"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/all-comics" element={<AllComics />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
