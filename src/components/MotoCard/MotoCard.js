import React from "react";
import { Link } from 'react-router-dom';
import "./MotoCard.css";

const MotoCard = ( {motoData} ) => {

  const {image, brand, name, id, price, year} = motoData;  
  
  return (
      <article className="moto-card m-5">
          
          <strong>{motoData.brand}</strong>
          <img src= {motoData.image} alt={motoData.name}/>
          <h1>MODELO:{motoData.name}</h1>
          <h2>AÑO: {motoData.year}</h2>
          <h2>PRECIO: {motoData.price}</h2>
          <h2>STOCK:{motoData.stock}</h2>
          <div>
          <Link to={`/motoData/${ id }`}>
          <button className="btn"> Detalle </button>
          </Link>
            </div>
             
      </article>
    )
  }
  export default MotoCard
  


 