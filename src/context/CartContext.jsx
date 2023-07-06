import { createContext, useState } from "react";

const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        const existingItem = cartList.find((cartItem) => cartItem.id === item.id)
        if (existingItem) {
            setCartList((prevList) =>
            prevList.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            )
            )
        }
         
    }
    
    const removeList = () => {
        setCartList([])
    }
    
    const deleteItem = (itemId) => {
        setCartList((prevList) => prevList.filter((cartItem) => cartItem.id !== itemId))
    }

    const isInCart = (id) => {
        return cartList.some((cartItem) => cartItem.id === id)
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, isInCart}}>
            <div>
                {children}
            </div>
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}