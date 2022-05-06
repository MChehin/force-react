import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motos } from "../../data/motos"

const MotoDetail = () => {
    const {motosId} = useParams()
    const [motos, setMotos] = useState( {} )
   
    useEffect(() => {
        
    (async () => {
            const motos = await getMotoDetail()  //función anónima asincrónica autoejecutable, que para la ejecución hasta obtener la respuesta de MotoDetail 
            setMotos(motos)
        })()

    }, [motosId])

    const getMotoDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout(() =>{
                resolve(motos.find(m => m.id == motosId))
            }, 1000);
        })
    } 

    return (
        <>
        <div>MotoDetail -{motosId} </div>
        <strong className="p-2">{motos.id} </strong>
        <strong className="p-2">{motos.brand} </strong>
        <strong className="p-2">{motos.name} </strong>
        <strong className="p-2">{motos.image} </strong>
        <strong className="p-2">{motos.price} </strong>
        </>
    )
}

export default MotoDetail 