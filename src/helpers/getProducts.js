import motoData from "../components/MotoList/MotoList";

export const getProductById = async (id, setState) => {
    try {
        const moto = motoData.find(m=> m.id == id )
        setState(moto); 
    }
    catch (error) {
    console.log(error);
}

}  