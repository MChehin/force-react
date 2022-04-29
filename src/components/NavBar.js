import React from "react";
import CartWidget from "./CartWidget";


const styleNav = {
backgroundColor: '#a6a6a6',
color: 'white',

}


const NavBar = () => {
  return (
    <header className="text-gray-800 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-5 text-xl border">FORCE GARAGE</span>
        </a>
        <nav style={styleNav} className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5"> INICIO </a>
          <a className="mr-5"> MOTOS </a>
          <a className="mr-5"> REPUESTOS </a>
          <a className="mr-5"> ACCESORIOS </a>
          <CartWidget></CartWidget>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
