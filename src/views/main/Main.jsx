import React from "react";
import logo from "../../assets/img/header.jpg";
import Carousel from "../../components/carusell/Carousel";
import Discounts from "../../components/discounts/Discounts";

const Main = () => {
  const dataDiscounts = [
    { point: 200, discount: "50% en un corte de cabello" },
    { point: 100, discount: "50% en un corte de barba" },
    { point: 50, discount: "20% en un corte de tinte de cabello" },
  ];
  return (
    <>
      <main>
        <div className="container">
          <header className="header">
            <h1 className="header-logo">
              barber<span> shop</span>{" "}
            </h1>
          </header>

          <Carousel title="Descuentos">
            {dataDiscounts.map((discount, key) => (
              <Discounts key={key} data={discount}></Discounts>
            ))}
          </Carousel>
        </div>
      </main>
    </>
  );
};

export default Main;
