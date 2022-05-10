import React from "react"; 

const AccesorioCard = ( {acceData} ) => {
    return (
      <div className="border-4 m-2 p-2">
          <strong>{acceData.brand}</strong>
          <img className="h-20 w-20" src= {acceData.image} alt={acceData.articulo}/>
          <h1>{acceData.articulo}</h1>
          <h2>{acceData.year}</h2>
          <h2>{acceData.price}</h2>
          
      </div>
    )
  }
  export default AccesorioCard