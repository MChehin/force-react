import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MotosListContainer from "./components/MotosListContainer/MotosListContainer";
import Saludo from "./components/Saludo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MotoDetail from "./components/ItemDetailContainer/MotoDetailContainer";
import NotFound404 from "./pages/NotFound404";
import About from "./pages/aboutus";
import { DarkModeContext } from "./components/context/darkModeContext";
import { useState } from "react";
import ToggleDarkMode from "./components/ToggleDarkMode/ToggleDarkMode";


function App() {
 
  const [darkMode, setDarkMode] = useState(false)

  const darkModeHandler = () => {
    setDarkMode( currentState => !currentState)
    }

  return (
    <>
      <DarkModeContext.Provider value={darkMode}>
      <BrowserRouter>
        <NavBar></NavBar>
        <ToggleDarkMode darkMode={darkMode} darkModeHandler = {darkModeHandler} />
        <h1
          style={{ color: "brown" }}
          className="text-4xl font-bold self-center right ml-6 "
        >
          Mecánica integral y custom de motos
        </h1>
        
        <Routes>
          <Route path="/" element={<Saludo/>} />
          <Route path="/MotosListContainer" element={<MotosListContainer />} />
          <Route path="/MotosListContainer/:categoryId" element={<MotosListContainer />} />
          <Route path="/motoData/:motosId" element={<MotoDetail />} />
          <Route path="/aboutus/*" element={<About/>}/>
          <Route path="*" element={<NotFound404 />}/>
        </Routes>
      </BrowserRouter>
      </DarkModeContext.Provider>
      {/*<Card title= 'Nueva tarjeta' nuevoComponente= {Saludo}></Card>
  <Contador></Contador>*/}
    </>
  );
}

export default App;
