import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/main/Main";
import Nav from "./components/nav/Nav";
import Reserve from "./views/cita/Reserve";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  );
};

export default App;
