import { createContext, useState } from "react";

const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([...cartList, item])
    }
    const removeList = () => {
        setCartList([])
    }
    const deleteItem = (item) => {
        const updatedItems = cartList.filter((cartItem) => cartItem.id !== item.id)
        setCartList(updatedItems)
    }
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            <div>
                {children}
            </div>
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}