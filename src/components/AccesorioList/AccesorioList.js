import React from "react";
import AccesorioCard from "../AccesorioCard/AccesorioCard";
import "./AccesorioList.css"

const AccesorioList = ({accesorios}) => {
    return (
        <div className= "acce-list">       
        {accesorios.map( accesorios => <AccesorioCard key={accesorios.id} acceData={accesorios}/> )}
        </div>
    )
}

export default AccesorioList 