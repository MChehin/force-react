import React from 'react'
import { useCartContext } from "../../context/CartContexProvider";
import GoToCart from '../GoToCart/GoToCart';
import ItemCount from '../SetCount/SetCount';
import { useState } from "react";
import "./ItemDetail.css"



const ItemDetail = ({moto}) => {
  const { name, price, image, brand, year, id, stock, } = moto;
  const [countToAdd, setCountToAdd] = useState(0);
  const { addToCart, unitsPerProduct } = useCartContext();
 
  const handleOnAdd = (count) => {
    if (count + unitsPerProduct(id) > stock) {
      const availableToAdd = stock - unitsPerProduct(id);
      return alert(`Solamente podés agregar ${availableToAdd} producto`);
    }
    setCountToAdd(count);
    addToCart(moto, count);
  };

 
  return (
    <article>
        <img src={ moto.image } />
        <h1>{moto.brand}</h1>
        <h2>{moto.name}</h2>
        <h3>{moto.year}</h3>
        <p>{moto.price}</p>
        <h4>Stock: {stock} unidades</h4>
        {countToAdd === 0 ? (
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
      ) : (
        <GoToCart /> )}
    </article>
  )
}

export default ItemDetail


