import { motos } from "./motos";

export const getMotos = () => {
return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(motos), 3000);
    })    
}
