import React from "react";
import { Link } from "react-router-dom";
import  "../../pages/aboutus";
import logo from "../../data/img/logo.jpg"
import "./footer.css"



const Footer = () => {
  
  return (
    <footer className="text-gray-800 body-font">
      <div className="container bg-gray-300 mx-auto flex p-1 flex-col md:flex-row items-center">
      <Link to='/' className="flex title-font font-medium items-right text-gray-900 mb-4 md:mb-0">
      <img className="footer-logo" src={ logo } alt="Logo Force Garage" />
      </Link>
      <div className="footer__mecanica md:ml-auto ">
                                <h5 className="text-xl">MECÁNICA INTEGRAL Y CUSTOM</h5>
      </div>

        <div className="footer-social md:ml-auto ">
          <ul>
          <li><Link to='https://www.instagram.com/forcegaragemotos/' className="li-clase"> Instagram </Link></li>
          <li><Link to='https://www.facebook.com/Force-Garage-123559546152383' className="li-clase"> Facebook </Link></li>
          <li><Link to='https://www.youtube.com/channel/UCnz5gM82K-8QPB9PZuozmIg' className="li-clase"> Youtube </Link> </li>
          </ul>
          </div>
      </div>
      <div class="footer-credito">
                        <a className="footer__hallway" href="https://www.somoshallway.com"> ©HALLWAY 2022</a>
          </div>
    </footer>
  );
};

export default Footer;
