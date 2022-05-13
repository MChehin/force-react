import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"



const Saludo = (props) => {
   const darkMode = useContext(DarkModeContext)
    
    return (
        <>
        <h1 className="text-3xl ml-10 pt-3"> Gracias por visitarnos</h1>
        <p className="text-3xl ml-10 pt-5"> FG {props.name}</p>
        <div>  {props.age} </div>
        <strong className="m-6">
            { darkMode ? 'Dark Mode: activado' : 
            'Dark Mode: desactivado' } 
        
        </strong>
        </>
    )
}
export default Saludo
    