import React from 'react'
import GoToCart from '../GoToCart/GoToCart';
import ItemCount from '../SetCount/SetCount';
import { useState } from "react";
import "./ItemDetail.css"
import { useCart } from '../../context/CartContexProvider';




const ItemDetail = ({moto, darkMode = false}) => {
  const { name, price, image, brand, year, id, stock, } = moto;
  const [countToAdd, setCountToAdd] = useState(0);
  const { addToCart, unitsPerProduct } = useCart();

 
  const handleOnAdd = (count) => {
    if (count + unitsPerProduct(id) > stock) {
      const availableToAdd = stock - unitsPerProduct(id);
      return alert(`Solamente podés agregar ${availableToAdd} producto`);
    }
    setCountToAdd(count);
    addToCart(moto, count);
  };

 
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'gray', 
        margin: '2px',
        }}
>
        <img src={ moto.image }/> 
        <h1>{moto.brand}</h1>
        <h2>{moto.name}</h2>
        <h3>{moto.year}</h3>
        <p>{moto.price}</p>
        <h4>Stock: {stock} unidad/es</h4>
        {countToAdd === 0 ? (
        <ItemCount stock={ stock } initial={ 1 } onAdd={handleOnAdd} />
      ) : (
        <GoToCart /> )}
    </div>
  )
}

export default ItemDetail


