import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motos } from "../../data/products"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const {motosId} = useParams()
    const [moto, setMoto] = useState( {} )
   
    useEffect(() => {
        
    (async () => {
            const motos = await getItemDetail()  //función anónima asincrónica autoejecutable, que para la ejecución hasta obtener la respuesta de MotoDetail 
            setMoto(motos)
        })()

    }, [motosId])

    const getItemDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout(() =>{
                resolve(motos.find((m) => m.id === Number  (motosId)))
            }, 1000);
        })
    } 

    return (
        <>
        <ItemDetail moto={moto}/>
        </>
    )
}

export default ItemDetailContainer 