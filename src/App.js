import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MotosContainer from './components/Motos.Container';
import Card from './components/Card';
import Saludo from './components/Saludo';
import Contador from './components/Contador';

{/*const stlyeParrafo = {
  border: 'solid 5px brown',
  fontsize: '10px',
  color: 'white', 
  backgroundColor: 'black',
  fontFamily: 'Roboto',
  padding: '10px'
}*/}

function App() {
  return (
    <>
    <NavBar></NavBar>
    {/*<ItemListContainer greeting=' ¡Gracias por tu visita!' ></ItemListContainer> 
    <h1 style={{color:'brown'}} className="text-4xl font-bold self-center">FORCE GARAGE</h1>
  <p style={stlyeParrafo}>Con REACT</p> 
  <Card title= 'Nueva tarjeta' nuevoComponente= {Saludo}></Card>
  <Contador></Contador>*/}
    <MotosContainer></MotosContainer>
    </>
  );
}

export default App;
