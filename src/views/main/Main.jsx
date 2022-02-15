import React from "react";
import DiscountsMain from "./DiscountsMain";
import Service from "./Service";
import Button from "../../components/buttons/Button";
import Nav from "../../components/nav/Nav";

const Main = () => {
  return (
    <>
      <main className="container main">
        <header className="header">
          <h1 className="header-logo">
            barber<span> shop</span>
          </h1>
        </header>

        <DiscountsMain></DiscountsMain>
        <Service></Service>
        <Button text="pedir cita"></Button>
        <Nav></Nav>
      </main>
    </>
  );
};

export default Main;
