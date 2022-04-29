const Saludo = (props) => {
    return (
        <>
        <h1 className="text-3xl"> Nuevo componente </h1>
        <div className="text-3xl"> Saludos {props.name}</div>
        <div> Tenés {props.age} años</div>
        </>
    )
}
export default Saludo
    