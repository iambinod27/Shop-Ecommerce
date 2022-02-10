import React from "react";

const Description = ({ desc, name }) => {
  return (
    <div className="info">
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Description;
