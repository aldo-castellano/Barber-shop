import React from "react";
import reactDom from "react-dom";

const Modal = ({ children, onClose }) => {
  return reactDom.createPortal(
    <div className="modal-container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p onClick={onClose}>X</p>
        {children}
      </div>
    </div>,
    document.getElementById("root"),
  );
};

export default Modal;
