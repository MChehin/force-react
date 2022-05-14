import { useCartContext } from "../../context/CartContexProvider"
import CartItem from "../CartItem/CartItem.js";


const Cart = () => {
  const { cartList, emptyCart, totalPrice } = useCartContext();

  return (
    <div>
      {cartList.map((MotoCard) => (
        <CartMotoCard key={MotoCard.id} MotoCard={MotoCard} />
      ))}
      {cartList.length > 0 ? (
        <>
          <button onClick={() => emptyCart()}>Limpiar carrito de compras</button>
          <h1>Precio total: ${totalPrice()}</h1>
        </>
      ) : (
        <h1>Carrito vacío</h1>
      )}
    </div>
  );
};

export default Cart;
