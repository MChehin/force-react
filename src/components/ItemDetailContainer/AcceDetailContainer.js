import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { accesorios } from "../../data/products"


const AcceDetail = () => {
    const {accesoriosId} = useParams()
    const [accesorios, setAccesorios] = useState( {} )
   
    useEffect(() => {
        
    (async () => {
            const accesorios = await getAcceDetail()  //función anónima asincrónica autoejecutable, que para la ejecución hasta obtener la respuesta de MotoDetail 
            setAccesorios(accesorios)
        })()

    }, [accesoriosId])

    const getAcceDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout(() =>{
                resolve(accesorios.find(a => a.id == accesoriosId))
            }, 1000);
        })
    } 
    
    return (
        <>
        <div>Accesorios Detail -{accesoriosId} </div>
        <strong className="p-2">{accesorios.id} </strong>
        <strong className="p-2">{accesorios.brand} </strong>
        <strong className="p-2">{accesorios.product} </strong>
        <strong className="p-2">{accesorios.image} </strong>
        <strong className="p-2">{accesorios.price} </strong>
        </>
    )
}

export default AcceDetail 