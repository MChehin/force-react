import React from 'react'
import { motos } from "../../data/products"


const ItemDetail = ({motos}) => {
  return (
    <article>
        <img src={ motos.image } />
        <h1>{motos.brand}</h1>
        <h2>{motos.name}</h2>
        <h3>{motos.year}</h3>
        <p>${motos.price}</p>
    </article>
  )
}

export default ItemDetail