import React from "react";
import MotoCard from "../MotoCard/MotoCard";
import "./MotoList.css";

const MotoList = ({motos}) => {
    return (
        <div className= "moto-list">       
        {motos.map( moto => <MotoCard key={moto.id} motoData={moto}/> )}
        </div>
    )
}

export default MotoList 