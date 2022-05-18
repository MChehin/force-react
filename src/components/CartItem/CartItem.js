import React from "react";
import { useCartContext } from "../../context/CartContexProvider";
import "./CartItem.css" 



const CartItem = ({ MotoCard }) => {
  const { deleteById, removeOneUnit } = useCartContext();
  const { name, quantity, price, id } = MotoCard;

  return (
    <div className="cart-item">
      <h1>{name}</h1>
      <h4>Unidad/es: {quantity}</h4>
      <h4>Precio unitario: USD ${price}</h4>
      <button className="btn m-3" onClick={() => removeOneUnit(id)}>Eliminar 1</button>
      <button className="btn" onClick={() => deleteById(id)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
