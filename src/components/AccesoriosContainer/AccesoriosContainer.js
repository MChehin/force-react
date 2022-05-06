import React, { useEffect, useState } from 'react'
import { accesorios } from '../../data/accesorios'
import LoadingSpinner from '../LoadingSpinner/Loading.Spinner'
import AccesorioCard from '../AccesorioCard/AccesorioCard'

const AccesoriosContainer = () => {

    const [accesorios, setAccesorios] = useState([])
    const [isLoading, setIsLoading] = useState ( true )

   useEffect(() => {
       getAccesorios().then ( acceData => {
           setIsLoading(  false )
          setAccesorios( acceData ) 
       })
   },[]) 
   
   const getAccesorios = () => { 
       return new Promise ((resolve, reject) =>{
           setTimeout(() => {
               resolve(accesorios)
           }, 2000);
       }) 
    }
    
    return (
        <div> 
            { isLoading ?<LoadingSpinner/> : accesorios.map( a => <AccesorioCard key={a.id} acceData={a} />) 
            }   
         </div>   
    )
 }
 export default AccesoriosContainer
 