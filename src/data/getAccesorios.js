import { accesorios } from "./products";

export const getAccesorios = () => {
return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(accesorios), 3000);
    })    
}