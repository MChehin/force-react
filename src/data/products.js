import moto1 from "./img/tiendakawasaki.jpeg"
import moto2 from "./img/tiendaducati.jpeg"
import moto3 from "./img/tienda1.jpg"
import moto4 from "./img/tienda7.jpg"
import moto5 from "./img/tienda6.jpg"
import moto6 from "./img/tiendayamaha.jpg"
import tablero from "./img/tableromoto.jpg"




export const motos = [
    {id: 1, brand:'Kawasaki', name:' Ninja 400',  year:'1999', price:'6500', image: moto1, stock: '1' },
    {id: 2, brand:'Ducati', name:'1098', year:'2010', price:'15000', image: moto2, stock: '1' },
    {id: 3, brand:'Suzuki', name:'GS 750', year:'1978', price:'7000', image: moto3, stock: '1' },
    {id: 5, brand:'Yamaha', name:'Res 125', year:'1980', price:'5000', image: moto5, stock: '3' },
    {id: 4, brand:'Honda', name:'CBX-1050', year:'1980', price:'25000', image: moto4, stock: '1' },
    {id: 6, brand:'Yamaha', name:'YBR 125', year:'1980', price:'5000', image: moto6, stock: '2'},
]

export const hero = [
    {id: 7, image: tablero},
    
]