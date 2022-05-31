import { collection, doc, getDoc, getFirestore, where, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDarkMode } from "../../context/darkModeContext"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const {motosId} = useParams()
    const [modelo, setModelo] = useState( {} )
    

    const darkMode = useDarkMode()
    
    useEffect(() => {
        
    (async () => {
            const modelos = await getItemDetail()  //función anónima asincrónica autoejecutable, que para la ejecución hasta obtener la respuesta de MotoDetail 
            setModelo({...modelos.data(), id:modelos.id })
        })()

    }, [motosId])

    const getItemDetail = () => {
        
        const db = getFirestore();
            const itemDet = doc(db, "ForceReact", motosId);
            console.log({itemDet})
            return getDoc(itemDet)

   }

    return (
        <>
        <ItemDetail moto={modelo}/>
        </>
    )
}

export default ItemDetailContainer 
