import React from "react"; 

const AccesorioCard = ( {acceData} ) => {
    return (
      <div className="border-4 m-2 p-2">
          <strong>{acceData.brand}</strong>
          <h1>{acceData.product}</h1>
          <h2>{acceData.year}</h2>
          <h2>{acceData.price}</h2>
          <img className="h-20 w-20" src= {acceData.image} alt={acceData.product}/>
      </div>
    )
  }
  export default AccesorioCard