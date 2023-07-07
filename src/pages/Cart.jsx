import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cartList, removeList, deleteItem} = useContext(CartContext)

    return(
        <div className="carrito">
           {cartList.length === 0 ? (
            <div>
                <p>Su carrito se encuentra vacio</p>
                <Link to={`/`}>
                    <button>Volver a comprar</button>
                </Link>
            </div>
            ): (
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