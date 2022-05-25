import React from 'react'
import "./ModelosCard.css";


const ModelosCard = ( {ForceReact: m}) => {
  return (
          <div className='force-style'> 
            <div className='moto-card'> 
              <div className='text-2xl font-bold p-2 m-2'>{ m.title} </div>
              <img src={m.image}/> 
              <div>Características: { m.description} </div>
              <div>Precio USD$: { m.price} </div>
              <div>Stock: { m.stock} </div>

            </div>
          </div>
    

  )
}

export default ModelosCard