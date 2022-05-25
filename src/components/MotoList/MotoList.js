import React from "react";
import MotoCard from "../MotoCard/MotoCard";
import "./MotoList.css";
import { useDarkMode } from "../../context/darkModeContext";

const MotoList = ({motos}) => {
    const darkMode = useDarkMode ()

    return (
        <div className= "moto-list p-6">       
        {motos.map( moto => <MotoCard key={moto.id} motoData={moto} darkMode={darkMode}/> )}
        </div>
    )
}

export default MotoList 

