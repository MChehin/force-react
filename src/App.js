import React from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useState } from "react";
import CartContextProvider from "./context/CartContexProvider"
import "./App.css";
import AppRouter from "./components/Routes/AppRouter";


function App() {
 
  const [darkMode, setDarkMode] = useState(false)

  const darkModeHandler = () => {
    setDarkMode( currentState => !currentState)
    }

  return (
    <>
      <CartContextProvider>
      <DarkModeContext.Provider value={darkMode}>
      <AppRouter />
      </DarkModeContext.Provider>
      </CartContextProvider>
      {/*<Card title= 'Nueva tarjeta' nuevoComponente= {Saludo}></Card>
  <Contador></Contador>*/}
    </>
  );
}

export default App;
