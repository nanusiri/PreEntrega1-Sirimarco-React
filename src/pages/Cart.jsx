import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { Checkout } from "../components/Checkout"

const Cart = () => {
    const {cartList, removeList, deleteItem, calculateSubtotal, calculateTotal} = useContext(CartContext)

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
                    <div className="contenedorCarrito">
                        {cartList.map((item) => (
                            <div key={item.id} className="itemCart">
                                <h3 className="tituloCarrito">{item.nombre}</h3>
                                <p>Precio unitario: ${item.precio}</p>
                                <p>Unidades: {item.quantity}</p>
                                <p>Subtotal: ${calculateSubtotal(item)}</p>
                                <button onClick={()=>deleteItem(item.id)}>Eliminar producto del carrito</button>
                            </div>
                        ))}
                    </div>
                <h3>Total: ${calculateTotal()}</h3>    
                <button onClick={removeList}>Limpiar carrito</button>
           </div>
           )    
        }
        <Checkout/>
        </div>
    )
}

export default Cart