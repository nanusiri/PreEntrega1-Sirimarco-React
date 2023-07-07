import { createContext, useState } from "react";

const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
      if(isInCart(cartList.id)){
        setCartList (cartList.map(product => {
            return product.id === item.id ? 
            {...product,quantity:product.quantity + quantity} : product
        }))
      }else{
        setCartList([...cartList,{...item,quantity}])
      }
    }
    
    const removeList = () => {
        setCartList([])
    }
    
    const deleteItem = (itemId) => {
        setCartList((prevList) => prevList.filter((cartItem) => cartItem.id !== itemId))
    }

    const isInCart = (id) => 
        cartList.find((product) => product.id === id) ? true : false
    

    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, isInCart}}>
            <div>
                {children}
            </div>
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}