import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const {cartList, removeList, deleteItem} = useContext(CartContext)

    return(
        <div className="carrito">
           {cartList.length === 0 ? (
           <p>Su carrito se encuentra vacio</p> ): (
            <div>
                <h2>Items del carrito:</h2>
                    {cartList.map((item) => (
                        <div key={item.id}>
                            <h3>{item.nombre}</h3>
                            <p>Precio unitario: ${item.precio}</p>
                            <p>Unidades: {item.quantity}</p>
                            <button onClick={deleteItem}>Eliminar producto del carrito</button>
                        </div>
                    ))}
                <button onClick={removeList}>Limpiar carrito</button>
           </div>
           )    
        }
        </div>
    )
}

export default Cart