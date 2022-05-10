import React from "react";
import "./MotoCard.css"; 

const MotoCard = ( {motoData} ) => {
    return (
      <div className="moto-card">
          
          <strong>{motoData.brand}</strong>
          <img src= {motoData.image} alt={motoData.name}/>
          <h1>{motoData.name}</h1>
          <h2>{motoData.year}</h2>
          <h2>{motoData.price}</h2>
          
      </div>
    )
  }
  export default MotoCard
  