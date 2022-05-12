import React from "react";
import { Link } from 'react-router-dom';
import "./MotoCard.css";

const MotoCard = ( {motoData} ) => {

  const {image, brand, name, id, price, year} = motoData;  
  
  return (
      <article className="moto-card">
          
          <strong>{motoData.brand}</strong>
          <img src= {motoData.image} alt={motoData.name}/>
          <h1>{motoData.name}</h1>
          <h2>{motoData.year}</h2>
          <h2>{motoData.price}</h2>
          <div>
          <Link to={`/motoData/${ id }`}>
              <h3> { name } </h3>
          </Link>
            <span> ${ price } </span>
            </div>
      </article>
    )
  }
  export default MotoCard
  


 