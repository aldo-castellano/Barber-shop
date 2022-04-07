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
        // the Discount component receives the props data that must have an object as a value (point, discount, description, img) and avtiveModal that receives 'true' or 'false' to activate or not the modal
        <Discounts key={key} data={discount} activeModal={true}></Discounts>
      ))}
    </Carousel>
  );
};
export default DiscountsMain;
