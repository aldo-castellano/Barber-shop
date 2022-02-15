import React from "react";
import DiscountsMain from "./DiscountsMain";
import Service from "./Service";

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
      </main>
    </>
  );
};

export default Main;
