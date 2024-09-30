/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (pizza) => {
        const index = cart.findIndex((item) => item.id === pizza.id);
        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].quantity += 1;
            setCart(newCart);
        } else {
            setCart([...cart, { ...pizza, quantity: 1 }]);
    }
    }

    const removeFromCart = (pizzaId) => {
        const index = cart.findIndex((item) => item.id === pizzaId);
        if (index === -1) return;
        let newCart = [...cart];
    
        if (newCart[index].quantity > 1) {
          newCart[index].quantity -= 1;
        } else {
          newCart = newCart.filter((item) => item.id !== pizzaId);
        }
        setCart(newCart);
      };

      const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      };

      const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}
