import { createContext, useContext, useState } from "react";
export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((MotoCard) => MotoCard.id === id);
  };

  const addToCart = (MotoCard, quantity) => {
    if (isInCart(MotoCard.id)) {
      return setCartList(
        cartList.map((motoData) =>
          motoData.id === MotoCard.id
            ? { ...motoData, quantity: motoData.quantity + quantity }
            : motoData
        )
      );
    }
    setCartList([...cartList, { ...MotoCard, quantity }]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const deleteById = (id) => {
    setCartList(cartList.filter((MotoCard) => MotoCard.id !== id));
  };

  const removeOneUnit = (id) => {
    if (unitsPerProduct(id) === 1) {
      return deleteById(id);
    }
    setCartList(
      cartList.map((motoData) =>
        motoData.id === id
          ? { ...motoData, quantity: motoData.quantity - 1 }
          : motoData
      )
    );
  };

  const totalCount = () => {
    return cartList.reduce((total, MotoCard) => total + MotoCard.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (total, MotoCard) => total + MotoCard.quantity * MotoCard.price,
      0
    );
  };

  const unitsPerProduct = (id) => {
    const foundInCart = cartList.find((MotoCard) => MotoCard.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteById,
        totalCount,
        totalPrice,
        removeOneUnit,
        unitsPerProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
