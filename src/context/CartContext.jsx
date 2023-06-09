import { createContext, useState } from "react";

const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
      if(isInCart(item.id)){
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

    const isInCart = (id) => cartList.find((product) => product.id === id) ? true : false
    
    const totalQuantity = () => {
        const totalUnidades = cartList.reduce((total, product) => total + product.quantity, 0)
        return totalUnidades
    }
    
    const calculateSubtotal = (product) => {
        return product.precio * product.quantity
    }

    const calculateTotal = () => {
        const total = cartList.reduce((accumulator, product) => {
          const subtotal = calculateSubtotal(product)
          return accumulator + subtotal
        }, 0)
        return total
    }

    const redirect = () => {
        setTimeout(() => {
            window.location = origin
        }, 1000)
    }
    
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, isInCart, totalQuantity, calculateSubtotal, calculateTotal, redirect}}>
            <div>
                {children}
            </div>
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}