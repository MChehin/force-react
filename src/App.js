import React from "react";
import "./App.css";
import { buildQueries } from "@testing-library/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import MotosContainer from "./components/MotosListContainer/MotosListContainer";
import Card from "./components/Card";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MotoDetail from "./components/ItemDetailContainer/MotoDetailContainer";
import MotoCard from "./components/MotoCard/MotoCard";
import NotFound404 from "./pages/NotFound404";
import DetailPage from "./pages/detailpage";
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
          <Route path="/MotosListContainer/*" element={<MotosContainer />} />
          <Route path="/MotosListContainer/:motosId" element={<MotoDetail />} />
          <Route path="/motos/:id" element={<DetailPage />} />
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
