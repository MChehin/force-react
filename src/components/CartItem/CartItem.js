import React from "react";
import { useCartContext } from "../../context/CartContexProvider";
import "./CartItem.css" 



const CartItem = ({ MotoCard }) => {
  const { deleteById, removeOneUnit } = useCartContext();
  const { name, quantity, price, id } = MotoCard;

  return (
    <div className="cart-item">
      <h1>{name}</h1>
      <h4>Unidades: {quantity}</h4>
      <h4>Precio unitario: ${price}</h4>
      <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
      <button onClick={() => deleteById(id)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
