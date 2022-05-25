import React, { useState } from "react";
import HeroSlide from "./HeroSlide";
import tablero from "../../data/img/tableromoto.jpg"


const HeroContainer = () => {
  const slides = [

    {
    id: 7, 
    img: tablero 
    }
   
  ];

  const [index, setIndex] = useState(0);

  const changeSlide = (i) => {
    setIndex( i );
  }

  return <HeroSlide 
            slide={slides[index]}     
            changeSlide={changeSlide} 
            arrayIndex={slides.map(el=> el.id)}/>;
};

export default HeroContainer;