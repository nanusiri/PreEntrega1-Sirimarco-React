import React, { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const [selectedQuantity, setSelectedQuantity] = useState(0)
    const {addToCart} = useContext(CartContext)

    const handleAddToCart = (count) => {
        setSelectedQuantity(count)
        setShowItemCount(false)
        addToCart(item, count)
      }

    return(
    <div className="itemCard" id={item.id}>
        <h3>{item.nombre}</h3>
        <img src={item.img} alt={item.nombre} />
        <p>Precio: ${item.precio}</p>
        <p>Descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, ratione? Commodi illo magnam vitae non perspiciatis, iusto iste, voluptate fugiat corporis ad dolor vero harum necessitatibus accusamus. Quibusdam, aliquam in. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fuga provident mollitia quod inventore illo veniam earum voluptates delectus facere optio, ut dicta laudantium ea voluptate placeat. Maiores, iusto officia.</p>
        {showItemCount ? (
        <ItemCount stock={item.stock} onAdd={handleAddToCart} />
      ) : (
        <>
          <p>Cantidad seleccionada: {selectedQuantity}</p>
          <Link to={`/cart`}>
                <button>Ver el carrito</button>
          </Link>
        </>
      )}
      <p>Stock: {item.stock}</p>
    </div>
    )
}

export default ItemDetail