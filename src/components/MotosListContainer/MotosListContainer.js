import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useDeferredValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MotoList from "../MotoList/MotoList";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner"



const MotosListContainer = () => {
  const [modelos, setModelos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams()


const getModelosList = () => {
            const db = getFirestore()
            const modelosCollection = collection(db, 'ForceReact')
            getDocs( modelosCollection ) .then(snapshot => {
                if (snapshot.size > 0) {
                    console.log(snapshot.docs);
                    const ids = snapshot.docs.map( d => d.id ).join(',')
                    console.log('ids:', ids); 

                    const modelosData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
                    console.log(modelosData);
                    setModelos (modelosData)
                }
            }  )   
        }

  useEffect(() => {
    setIsLoading(true);
    getModelosList ()
    .then( (result) => {
      if(categoryId) {
        setModelos(result.filter(modelos => modelos.title === categoryId))
      } else {
        setModelos(result)
      }
    }) 
    .catch((err) => console.log('Se registró un error', err))
    .finally(() => setIsLoading(false))
    }, [categoryId])

    return(
      <>
	<div  className='text-4xl text-white bg-black p-2 m-4'>Nuestras Motos</div>
        {modelos.map( m => <MotoList key={m.id}  ForceReact={m} />)} 
      </>
      )
      }

export default MotosListContainer 
