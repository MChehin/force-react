const MotoCard = ( {motoData} ) => {
    return (
      <div style={{border:'solid black 5px', margin:'15px', padding:'5px', backgroundColor:'#a6a6a6', color:'#6b3923' }}>
          <strong>{motoData.name}</strong>
          <div>{motoData.brand}</div>
          <div>{motoData.year}</div>
          <div>{motoData.price}</div>
          <img src= {motoData.image} alt={motoData.name}/>
      </div>
    )
  }
  export default MotoCard
  