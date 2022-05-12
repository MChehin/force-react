import React from 'react'
import about from "../data/img/about.jpg"



const About = () => {
    
  return (
    <>
        <h1 className="font-extrabold ml-8 pt-4"> QUIENES SOMOS</h1>
        <div className= "grid grid-cols-6 gap-2 m-8">
        <div className= "col-start-1 col-end-3 pt-3">
        <p>Con más de 20 años de experiencia en el rubro, somos un taller líder de mecánica integral y custom de motos de Martínez.

Como verdaderos motociclistas sabemos que esta pasión no sólo se nutre de velocidad, sino principalmente del deseo de ver y sentir el entorno de una manera diferente. Por eso, cuando te acerques a nuestro taller vas a encontrar una respuesta basada en la experiencia. </p>
        </div>
        <div className= "col-start-3 col-end-5 pt-3">
        <p>Nuestros mecánicos abordan cada proyecto de forma dedicada y personalizada para cumplir y superar las expectativas de nuestros clientes.

Nos especializamos en servicio técnico (frenos, cambio de aceite y filtros, regulación de válvulas, motores, suspensión, mecánica general) y customización de motos. </p>
        </div>
        <div className='col-end-7 col-span-2'>
        <img className="about" src={ about }  width={400} height={200} alt="Taller" />
        </div>
        </div>
        </>
  )
}

export default About
