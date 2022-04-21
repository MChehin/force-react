import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const stlyeParrafo = {
  border: 'solid 5px brown',
  fontsize: '10px',
  color: 'white', 
  backgroundColor: 'black',
  fontFamily: 'Roboto',
  padding: '10px'
}

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting=' ¡Gracias por tu visita!' ></ItemListContainer>
    <h1 style={{color:'brown'}} className="text-4xl font-bold self-center">FORCE GARAGE</h1>
    <p style={stlyeParrafo}>Con REACT</p>
    </>
  );
}

export default App;
