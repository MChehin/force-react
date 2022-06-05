import React from "react";
import { useCartContext } from "../../context/CartContexProvider";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";
import  "../../pages/aboutus";
import logo from "../../data/img/logo.jpg"




const NavBar = () => {
  const { totalCount } = useCartContext();
   
  return (
    <header className="nav-item text-gray-800 body-font">
      <div className="container bg-gray-300 mx-auto flex p-5 flex-col md:flex-row items-right">
      <Link to='/' className="flex title-font font-medium items-right text-gray-900 mb-4 md:mb-0">
      <img className="logo" src={ logo }  width={182} height={64} alt="" />
      </Link>
        <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-right">
          <Link to='' className="mr-5"> Inicio</Link>
          <Link to='/aboutus' className="mr-5"> QUIÉNES SOMOS </Link>
          <Link to='/Modelos' className="mr-5"> Nuestras motos </Link>
          <Link to='/MotosListContainer' className="mr-5"> TIENDA </Link>
          <Link to='/MotosListContainer/"Kawasaki"' className="mr-5"> Kawasaki </Link>
          <Link to='/MotosListContainer/"Ducati"' className="mr-5"> Ducati </Link>
          <Link to='/MotosListContainer/"Suzuki"' className="mr-5"> Suzuki </Link>
          <Link to='/MotosListContainer/"Yamaha"' className="mr-5"> Yamaha </Link>
          <Link to='/MotosListContainer/"Honda"' className="mr-5"> Honda </Link>
          
          <Link to='/CartItem/SaveOrder' className="mr-5"> Salvar orden </Link>
          {totalCount() > 0 && <CartWidget />}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
