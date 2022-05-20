import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import ModelosCard from './ModelosCard'

const Modelos = () => {
    
    const [modelos, setModelos] = useState([]) 
    const [modelosEco, setModelosEco] = useState([]) 
    
    useEffect(() => {
        getModelos()   
        getModelosEco() 
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

        const getModelosEco = async () => {
            const db = getFirestore()
            const modelosCollection = collection(db, 'ForceReact')
            const q = query(modelosCollection, where( 'price', '<', 10000 ) ) 
            
            const snapshot = await getDocs(q )
                if (snapshot.size > 0) {
                    const modelosEcoData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
                    setModelosEco(modelosEcoData)
                }   
        }

    return (
        <>
        <div>Modelos</div>
        {modelos.map( m => <ModelosCard key={m.id}  ForceReact={m} />)} 
        <div className='text-3xl font-bold'>Modelos en Promo</div>
        {modelosEco.map( m => <div key={m.id}> { m.title }</div>)} 
        </>
  )
}

export default Modelos 