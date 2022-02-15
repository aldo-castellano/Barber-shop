import React from "react";
import img from "../../assets/img/header.jpg";

const Discounts = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="discount-container">
        <img src={img} className="discount-img"></img>
        <div className="discount">
          <div className="discount-point">
            <h4>{data.point}</h4>
            <p>puntos</p>
          </div>
          <div className="discount-description">
            <p>{data.discount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Discounts;
