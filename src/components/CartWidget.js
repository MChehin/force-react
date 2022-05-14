import React from 'react';
import CartLogo from '../data/img/cart.png'; 
import { NavLink } from "react-router-dom";
import "./CartWidget.css";
import { useCartContext } from "../context/CartContexProvider";




const CartWidget = () => {
  const { totalCount } = useCartContext();
  return (
    <NavLink to="/cart">
    <div className='cart-widget'>
    <img src={CartLogo} alt="cart" className="cart-logo" />
    <span className="units">{totalCount()}</span>
     </div>
    </NavLink>
  );
};

export default CartWidget;