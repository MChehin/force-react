import { children, createContext } from "react";


const CartContext = createContext({
    itemDetail: [],
    addToCart: () => {}

})

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider value={ {} }>
       {children} 
    </CartContext.Provider> 
  )
}

export default CartProvider