const Saludo = (props) => {
    return (
        <>
        <h1 className="text-3xl ml-10 pt-3"> Gracias por visitarnos</h1>
        <p className="text-3xl ml-10 pt-5"> FG {props.name}</p>
        <div>  {props.age} </div>
        </>
    )
}
export default Saludo
    