import { useCartContext } from "../../context/CartContexProvider"
import CartItem from "../CartItem/CartItem.js";



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
          <h1>Precio total: USD ${totalPrice()}</h1>
          
        </>
      ) : (
        <h1>Carrito vacío</h1>
      )}
    </div>
  );
};

export default Cart;
