import React from "react";
import { Link } from 'react-router-dom';
import "./MotoCard.css";


const MotoCard = ( {motoData, darkMode = false} ) => {

  const {image, brand, name, id, price, year} = motoData;  

  
  return (
      <div className={`moto-card1 m-5 p-2  ${darkMode ? 'bg-black-300' : '' }`}>
          
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
             
      </div>
    )
  }
  export default MotoCard
  


 