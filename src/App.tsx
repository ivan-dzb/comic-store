import React from "react";
import { ThemeProvider } from "@emotion/react";
import MainPage from "pages/MainPage/MainPage";
import theme from "styles/theme";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import AllComics from "pages/AllComics/AllComics"; 
import ByCharacter from "pages/ByCharacter/ByCharacter";

 const router = createBrowserRouter([
   { path: "/", element: <MainPage /> },
   { path: "all-comics", element: <AllComics /> },
 ]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="all-comics" element={<AllComics />} />
        <Route path="by-character" element={<ByCharacter />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
