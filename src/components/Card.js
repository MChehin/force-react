const Card = ( {title, nuevoComponente} ) => {
    return (
      <div style={{border:'solid green 2px', margin:'20px', padding:'20px'}}>
          <strong>{title}</strong>
          {nuevoComponente( {name:'Marco', age:'27'} )}
      </div>
    )
  }
  export default Card
  