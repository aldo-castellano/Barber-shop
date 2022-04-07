import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    const parametro = pathname;
    const removeColor = document.querySelectorAll(".nav-item");
    removeColor.forEach((element) => element.classList.remove("item-color"));
    const addColor = document.getElementsByClassName(`${parametro}`);
    addColor[0].classList.add("item-color");
  });

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-item /" onClick={() => navigate("/")}>
          <Icon icon="akar-icons:home" className="nav-item-icon" />
          <p className="nav-item-text">inicio</p>
        </div>
        <div className="nav-item /reserve" onClick={() => navigate("/reserve")}>
          <Icon icon="ic:outline-date-range" className="nav-item-icon" />
          <p className="nav-item-text">reservar</p>
        </div>
        <div className="nav-item">
          <Icon icon="lucide:message-circle" className="nav-item-icon" />
          <p className="nav-item-text">contacto</p>
        </div>
        <div className="nav-item">
          <Icon icon="akar-icons:person" className="nav-item-icon" />
          <p className="nav-item-text">mi perfil</p>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
