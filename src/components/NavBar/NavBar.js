import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";
import  "../../pages/aboutus";
import logo from "../../data/img/logo.jpg"



const NavBar = () => {
  return (
    <header className="nav-item text-gray-600 body-font">
      <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
      <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="logo" src={ logo }  width={182} height={64} alt="" />
      </Link>
        <nav clasName="nav-link" className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
          <Link to='' className="mr-5"> Inicio</Link>
          <Link to='/MotosListContainer' className="mr-5"> MOTOS </Link>
          <Link to='/MotosListContainer/Kawasaki' className="mr-5"> Kawasaki </Link>
          <Link to='/MotosListContainer/Ducati' className="mr-5"> Ducati </Link>
          <Link to='/MotosListContainer/Suzuki' className="mr-5"> Susuki </Link>
          <Link to='/MotosListContainer/Yamaha' className="mr-5"> Yamaha </Link>
          <Link to='/MotosListContainer/Honda' className="mr-5"> Honda </Link>
          <Link to='/aboutus' className="mr-5"> QUIÉNES SOMOS </Link>
          <CartWidget></CartWidget>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
/* Kawasaki, Ducati, Suzuki, Yamaha, Honda */