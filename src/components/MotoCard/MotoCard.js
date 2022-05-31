import React from "react";
import { Link } from 'react-router-dom';
import "./MotoCard.css";


const MotoCard = ( {modelosData, ForceReact: m} ) => {

  const {image, brand, title, description, id, price, year} = modelosData;  

  
  return (
      <div className={`moto-card1 m-5 p-2}`}>
          
          <strong>{m.brand}</strong>
          <img src= {m.image} alt={m.title}/>
          <h1>{m.description}</h1>
          <h2>DESCRIPCIÓN:{m.description}</h2>
          <h3>AÑO: {m.year}</h3>
          <h2>PRECIO: {m.price}</h2>
          <h3>STOCK:{m.stock}</h3>
          
          <div>
          <Link to={`/modelosData/${ id }`}>
          <button className="btn"> Detalle </button>
          </Link>
            </div>             
      </div>
    )
  }
  export default MotoCard
  


 