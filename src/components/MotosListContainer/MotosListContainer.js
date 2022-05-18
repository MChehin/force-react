import { useDeferredValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMotos } from "../../data/getMotos";
import MotoList from "../MotoList/MotoList";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner"




const MotosListContainer = () => {
  const [motos, setMotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams()




  useEffect(() => {
    setIsLoading(true);
    getMotos()
    .then( (result) => {
      if(categoryId) {
        setMotos(result.filter(moto => moto.brand === categoryId))
      } else {
        setMotos(result)
      }
    }) 
    .catch((err) => console.log('Se registró un error', err))
    .finally(() => setIsLoading(false))
    }, [categoryId])

    return(
      
      <div>
      <h1 className="text-3xl m-4">Nuestras motos</h1>
      {isLoading ?<LoadingSpinner/> : <MotoList motos={motos}/>}
      </div>
      
      )
      }

export default MotosListContainer 

