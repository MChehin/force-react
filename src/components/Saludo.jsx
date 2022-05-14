import { useContext } from "react"
import { DarkModeContext } from "../context/darkModeContext";



const Saludo = (props) => {
   const darkMode = useContext(DarkModeContext)
    
    return (
        <div className={darkMode && 'bg-gray-800'}>
        <h1 className="text-gray-400 text-3xl ml-10 pt-3"> Gracias por visitarnos</h1>
        <p className="text-3xl text-gray-400 ml-10 pt-5"> FG {props.name}</p>
        <div>  {props.age} </div>
        <strong className=" text-gray-400 ml-10">
            { darkMode ? 'Dark Mode: activado' : 
            'Dark Mode: desactivado' } 
        
        </strong>
        </div>
    )
}
export default Saludo
    