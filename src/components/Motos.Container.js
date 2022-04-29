import { useEffect, useState } from "react";
import { motos as motosData } from "../data/motos";
import MotoCard from "./MotoCard";

const MotosContainer = () => {

  const [motos, setMotos] = useState([])

  useEffect(() => {
    const getMotos = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(motosData)
      }, 2000)
    })

    getMotos.then( (result) => {
      console.log('La promesa se completó con éxito', result);
      setMotos(result)
    }).catch((err) => {
        console.log('Se registró un error', err);
    })

    console.log('Fin del efecto');
  }, [])

  return (
    <div>
      {motos.map( moto => <MotoCard key={moto.id} motoData={moto}/> )}
    </div>
  )
}
export default MotosContainer
