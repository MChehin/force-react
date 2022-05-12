import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({ id }) => {

  const [moto, setMoto] = useState(null);

  useEffect(()=>{
    getProductById(id, setMoto);
  }, []);

  

  return (

    <div>

      { 
        moto ?

        <ItemDetail moto = {moto} />

        : <p>Cargando producto...</p> 
      }

    </div>

  )
}

export default ItemDetailContainer
