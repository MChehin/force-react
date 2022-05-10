import { motos } from "./products";

export const getMotos = () => {
return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(motos), 3000);
    })    
}
