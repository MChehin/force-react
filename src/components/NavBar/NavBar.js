import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";





const NavBar = () => {
  return (
    <header className="nav-item text-gray-600 body-font">
      <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
      <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src= './data/img/logo.jpg'  width={182} height={64}/>
          <span className="ml-5 text-xl border">FORCE GARAGE</span>
      </Link>
        
        <nav clasName="nav-link" className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
          <Link to='' className="mr-5"> Inicio</Link>
          <Link to='/MotosContainer' className="mr-5"> MOTOS </Link>
          <Link to='/AccesoriosContainer' className="mr-5"> ACCESORIOS </Link>
          <CartWidget></CartWidget>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
