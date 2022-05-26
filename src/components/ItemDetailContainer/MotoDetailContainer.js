import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDarkMode } from "../../context/darkModeContext"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const {modelosId} = useParams()
    const [modelo, setModelo] = useState( {} )
    
    const darkMode = useDarkMode()
    
    useEffect(() => {
        
    (async () => {
            const modelos = await getItemDetail()  //función anónima asincrónica autoejecutable, que para la ejecución hasta obtener la respuesta de MotoDetail 
            setModelo (modelos)
        })()

    }, [modelosId])

    const getItemDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout(() =>{
                resolve(modelos.find((m) => m.id === Number  (modelosId)))
            }, 1000);
        })
    } 

    return (
        <>
        <ItemDetail modelo={modelo}/>
        </>
    )
}

export default ItemDetailContainer 
