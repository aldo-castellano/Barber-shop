import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-item">
          <Icon icon="akar-icons:home" className="nav-item-icon" />
          <p className="nav-item-text">inicio</p>
        </div>
        <div className="nav-item">
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
    </>
  );
};
export default Nav;
