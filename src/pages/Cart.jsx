import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const {cartList} = useContext(CartContext)

    return(
        <div className="carrito">
           {cartList === [] ? (
           <p>Su carrito se encuentra vacio</p> ): (
           cartList.map((item) => (
                <h2 key={item.id}>{item.nombre}</h2>
           )))    
        }
        </div>
    )
}

export default Cart