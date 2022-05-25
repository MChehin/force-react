import React from "react";
import { Link } from "react-router-dom";


const GoToCart = () => {
  return (
    <Link to="/cart">
      <button className="text-4xl">Ir al carrito</button>
    </Link>
  );
};

export default GoToCart;
