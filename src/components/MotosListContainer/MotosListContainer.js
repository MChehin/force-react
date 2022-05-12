import { useEffect, useState } from "react";
import { getMotos } from "../../data/getMotos";
import MotoList from "../MotoList/MotoList";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner"


const MotosListContainer = () => {
  const [motos, setMotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getMotos()
    .then( (result) => setMotos(result)) 
    .catch((err) => console.log('Se registró un error', err))
    .finally(() => setIsLoading(false))
    }, [])

    return(
      <>
      <h1>Motos Container</h1>
      {isLoading ?<LoadingSpinner/> : <MotoList motos={motos}/>}
      </>
      )
      }

export default MotosListContainer 

