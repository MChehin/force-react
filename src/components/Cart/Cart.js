import { useCartContext } from "../../context/CartContexProvider"
import CartItem from "../CartItem/CartItem.js";
import GoToForm from '../GoToForm/GoToForm';



const Cart = () => {
  const { cartList, emptyCart, totalPrice } = useCartContext();



  return (
    <div className="cart-style">
      {cartList.map((MotoCard) => (
        <CartItem key={MotoCard.id} MotoCard={MotoCard} />
      ))}
      {cartList.length > 0 ? (
        <>
          <button className="btn m-5" onClick={() => emptyCart()}>Limpiar carrito de compras</button>
          <h1 className="text-2xl font-semibold ml-3 p-2">Precio total: USD ${totalPrice() }</h1>
          
        </>
      ) : (
        <h1 className="text-2xl font-semibold ml-3 p-40">Carrito vacío</h1>
      )}
      <GoToForm/>
    </div>
    
  );
};

export default Cart;
