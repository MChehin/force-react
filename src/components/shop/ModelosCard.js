import React from 'react'


const ModelosCard = ( {forcereact: m}) => {
  return (
    <div> 
            <div>Descripción: { m.description} </div>
            <div>Precio: { m.price} </div>
            <div>Stock: { m.stock} </div>
            <div>Id: { m.id} </div>
    </div>
  )
}

export default ModelosCard