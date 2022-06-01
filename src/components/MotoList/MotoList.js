import React from "react";
import MotoCard from "../MotoCard/MotoCard";
import "./MotoList.css";

const MotoList = ({modelos}) => {
    
    return (
        <div className= "moto-list p-6">       
        
        {modelos.map( m => <MotoCard key={m.id}  ForceReact={m} />)}
        </div>
    )
}

export default MotoList 

