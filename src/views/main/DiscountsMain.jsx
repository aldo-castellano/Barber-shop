import React from "react";
import img from "../../assets/img/header.jpg";
import Carousel from "../../components/carusell/Carousel";
import Discounts from "../../components/discounts/Discounts";

const DiscountsMain = () => {
  const dataDiscounts = [
    { point: 200, discount: "50% en un corte de cabello", img: img },
    { point: 100, discount: "50% en un corte de barba", img: img },
    { point: 50, discount: "20% en un corte de tinte de cabello", img: img },
  ];
  return (
    <Carousel title="Descuentos">
      {dataDiscounts.map((discount, key) => (
        <div key={key}>
          <Discounts data={discount}></Discounts>
        </div>
      ))}
    </Carousel>
  );
};
export default DiscountsMain;
