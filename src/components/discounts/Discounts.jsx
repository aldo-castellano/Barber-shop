import React from "react";

const Discounts = ({ data }) => {
  return (
    <>
      <div className="discount-container">
        <img src={data.img} className="discount-img"></img>
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
