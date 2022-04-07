import React from "react";

const Service = () => {
  const data = [
    { name: "Corte de cabello y Barba" },
    { name: "Tinte de Pelo" },
    { name: "Tinte de Pelo" },
    { name: "Corte de cabello y Barba" },
  ];
  return (
    <div>
      <h2 className="title">Servicios</h2>
      <div className="service-container">
        {data.map((data, key) => (
          <div key={key} className="service">
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
