import React from 'react'
import "./ModelosCard.css";
import { Link } from 'react-router-dom';


const ModelosCard = ( {mData, ForceReact: m}) => { 

  return (
          <div className='force-style m-5 p-2 '> 
            <div className='moto-card'> 
              <div className='text-2xl font-bold p-2 m-2'>{ m.brand} </div>
              <div className='text-2xl font-bold p-2 m-2'>{ m.title} </div>
              <img src={m.image} alt= "Moto en venta"/> 
              <div>Características: { m.description} </div>
              <div>Año: { m.year} </div>
              <div>Precio USD$: { m.price} </div>
              <div>Stock: { m.stock} </div>
          
          <Link to={`/motoData/${ m.id }`}>
          <button className="btn"> Detalle </button>
          </Link>
            </div> 
          </div>
    

  )
}

export default ModelosCard