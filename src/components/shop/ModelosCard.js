import React from 'react'
import "./ModelosCard.css";


const ModelosCard = ( {ForceReact: m}) => {
  return (
    <div className='moto-card'> 
            <div className='text-3xl font-bold'>{ m.title} </div>
            <div>Descripción: { m.description} </div>
            <div>Precio: { m.price} </div>
            <div>Stock: { m.stock} </div>
            
    </div>
  )
}

export default ModelosCard