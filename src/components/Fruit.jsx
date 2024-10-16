import React from "react";

const Fruit = ({ name, color, price, emoji }) => {
  return (
    <div>
      <h1>
        {name} {color} {price} {emoji
        }
      </h1>
    </div>
  );
};

export default Fruit;
