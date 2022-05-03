import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MotosContainer from './components/Motos.Container/Motos.Container';
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
    <h1 style={{color:'brown'}} className="text-4xl font-bold self-center">Elegí tu próxima moto</h1>
    <MotosContainer/> 
  {/*<Card title= 'Nueva tarjeta' nuevoComponente= {Saludo}></Card>
  <Contador></Contador>*/}
    </>
  );
}

export default App;
