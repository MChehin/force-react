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
import { BrowserRouter, Routes } from 'react-router-dom';
import MotoDetail from './components/ItemDetailContainer/MotoDetailContainer';
import AccesoriosContainer from './components/AccesoriosContainer/AccesoriosContainer';



function App() {
  const isBackgroundBlack = true;

  return (
    <>
    <div className={isBackgroundBlack ? 'background-black' : 'background-grey'} />
    <BrowserRouter>
    <NavBar></NavBar>
    <h1 style={{color:'brown'}} className="text-4xl font-bold self-center right ">Elegí tu próxima moto</h1>
    <Routes>
    <Route path='/' element={<Saludo name='María' age='36'/>} />
    <Route path='/MotosContainer/*' element={<MotosContainer/>} />
    <Route path='/MotosContainer/:motosId' element={<MotoDetail/>}/>
    <Route path='/AccesoriosContainer/*' element={<AccesoriosContainer/>} />
    <Route path='/AccesoriosContainer/:accesoriosId' element={<AcceDetail/>}/>
    </Routes>


   </BrowserRouter>   
  {/*<Card title= 'Nueva tarjeta' nuevoComponente= {Saludo}></Card>
  <Contador></Contador>*/}
  
    </>
  );
}

export default App;
