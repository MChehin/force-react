import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import ModelosCard from './ModelosCard'

const Modelos = () => {
    
    const [modelos, setModelos] = useState([]) 
    
    useEffect(() => {
        getModelos()    
    }, []) 

        const getModelos = () => {
            const db = getFirestore()
            const modelosCollection = collection(db, 'ForceReact')
            getDocs( modelosCollection ) .then(snapshot => {
                if (snapshot.size > 0) {
                    console.log(snapshot.docs);
                    const ids = snapshot.docs.map( d => d.id ).join(',')
                    console.log('ids:', ids); 

                    const modelosData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
                    console.log(modelosData);
                    setModelos(modelosData)
                }
            }  )   
        }

    return (
        <>
        <div>Modelos</div>
        {modelos.map( m => <ModelosCard key={m.id}  forcereact={m} />)} 
        </>
  )
}

export default Modelos 