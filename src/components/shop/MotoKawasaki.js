import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"


const MotoKawasaki = () => {

    const [modelo, setModelo] = useState({}) 
 
    useEffect (( ) => {
     getMotoKawasaki()  
        
    }, [])

    useEffect(() => {
      console.log('state: ', modelo)
    }, [modelo])
    


const getMotoKawasaki = () => {
    const db = getFirestore()  
    const modelosDoc = doc(db,'ForceReact', 'TSqZMcRNKT0q6byZ6yCN')
    getDoc(modelosDoc) .then (result=> {
        if( result.exists() ) {
            console.log(result) 
            console.log('id', result.id) 
            console.log('data', result.data()) 
            setModelo({'id': result.id, ... result.data()})
        }
    }) 
    }

    return (
        <div key={modelo.id}>
        <div> {modelo.title} </div>
        <div> Precio: {modelo.price} </div>
        <div> Descripción: {modelo.description} </div>
        <div> Stock: {modelo.stock} </div>
        </div>
    )
}

export default MotoKawasaki()