import React from "react";
import MotoCard from "../AccesorioCard/AccesorioCard";


const AccesorioList = ({accesorios}) => {
    return (
        <div>       
        {accesorios.map( accesorios => <AccesorioCard key={accesorios.id} acceData={accesorios}/> )}
        </div>
    )
}

export default AccesorioList 