import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

  const [product, setProduct] = useState(null);

  useEffect(()=>{
    getProductById(id, setProduct);
  }, []);

  

  return (

    <div>

      { 
        product ?

        <ItemDetail product = {product} />

        : <p>Cargando producto...</p> //poner el spinner 
      }
      { isLoading ?<LoadingSpinner/> : accesorios.map( a => <AccesorioCard key={a.id} acceData={a} />) 
            }   

    </div>

  )
}

export default ItemDetailContainer