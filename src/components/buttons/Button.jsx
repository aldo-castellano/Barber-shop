import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, route }) => {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate(route)}>
      {text}
    </button>
  );
};

export default Button;
