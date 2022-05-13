import React from 'react'
import { motos } from "../../data/products"


const ItemDetail = ({moto}) => {
  return (
    <article>
        <img src={ moto.image } />
        <h1>{moto.brand}</h1>
        <h2>{moto.name}</h2>
        <h3>{moto.year}</h3>
        <p>${moto.price}</p>
    </article>
  )
}

export default ItemDetail