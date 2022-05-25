import React from 'react'
import "./ModelosCard.css";


const ModelosCard = ( {ForceReact: m}) => {
  return (
          <div className='grid grid-cols-3'> 
            <div className='moto-card'> 
              <div className='text-2xl font-bold'>{ m.title} </div>
              <div>{ m.image} </div>
              <div>Descripción: { m.description} </div>
              <div>Precio USD$: { m.price} </div>
              <div>Stock: { m.stock} </div>

            </div>
          </div>
    

  )
}

export default ModelosCard