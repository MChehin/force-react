import React from "react";
import MotoCard from "../MotoCard/MotoCard";
import "./MotoList.css";
import { useDarkMode } from "../../context/darkModeContext";

const MotoList = ({modelos}) => {
    const darkMode = useDarkMode ()

    return (
        <div className= "moto-list p-6">       
        {modelos.map( modelo => <MotoCard key={modelo.id} modeloData={modelo} darkMode={darkMode}/> )}
        </div>
    )
}

export default MotoList 

