import React, { useState } from "react";

import Modal from "../modal/Modal";

const Discounts = ({ data, activeModal }) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    activeModal ? setModal(!modal) : null;
  };
  return (
    <>
      {modal ? (
        // the Modal component receives the onClose props that as value should have the function of the event that activates or deactivates the Modal component
        <Modal onClose={handleClick}>
          <h1>hola</h1>
        </Modal>
      ) : null}

      <div className="discount-container" onClick={handleClick}>
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
