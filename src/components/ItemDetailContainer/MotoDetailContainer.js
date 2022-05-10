import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motos } from "../../data/products"

const MotoDetail = () => {
    const {motosId} = useParams()
    const [moto, setMoto] = useState( {} )
   
    useEffect(() => {
        
    (async () => {
            const motos = await getMotoDetail()  //función anónima asincrónica autoejecutable, que para la ejecución hasta obtener la respuesta de MotoDetail 
            setMoto(motos)
        })()

    }, [motosId])

    const getMotoDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout(() =>{
                resolve(motos.find((m) => m.id === Number  (motosId)))
            }, 1000);
        })
    } 

    return (
        <>
        <div>MotoDetail -{motosId} </div>
        <strong className="p-2">{moto.id} </strong>
        <strong className="p-2">{moto.brand} </strong>
        <strong className="p-2">{moto.name} </strong>
        <img className="p-2">{moto.image} </img>
        <strong className="p-2">{moto.price} </strong>
        </>
    )
}

export default MotoDetail 