import React from "react";
import DiscountsMain from "./DiscountsMain";
import Service from "./Service";
import Button from "../../components/buttons/Button";
import Modal from "../../components/modal/Modal";

const Main = () => {
  return (
    <>
      <main className="main">
        <header className="header">
          <h1 className="header-logo">
            barber<span> shop</span>
          </h1>
        </header>

        <DiscountsMain></DiscountsMain>
        <Service></Service>

        <Button text="pedir cita" route="/reserve"></Button>
      </main>
    </>
  );
};

export default Main;
