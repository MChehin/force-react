import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

  const [moto, setMoto] = useState(null);

  useEffect(()=>{
    getProductById(id, setMoto); get
  }, []);

  

  return (

    <div>

      { 
        moto ?

        <ItemDetail moto = {moto} />

        : <p>Cargando producto...</p> 
      }
      { isLoading ?<LoadingSpinner/> : moto.map( a => <MotoCard key={m.id} MotoData={m} />) 
            }   

    </div>

  )
}

export default ItemDetailContainer
