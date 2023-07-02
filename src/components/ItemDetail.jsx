import React, { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const [selectedQuantity, setSelectedQuantity] = useState(0)

    const handleAddToCart = (count) => {
        setSelectedQuantity(count)
        setShowItemCount(false)
      }

    const handleFinishPurchase = () => {
        // Aquí puedes implementar la lógica para finalizar la compra, como agregar el ítem al carrito
        // y redirigir al usuario a la página de carrito ('/cart').
    
        // Por ahora, simplemente redireccionamos al usuario a la página vacía de carrito ('/cart').
        window.location.href = "/cart";
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
          <button onClick={handleFinishPurchase}>Terminar mi compra</button>
        </>
      )}
      <p>Stock: {item.stock}</p>
    </div>
    )
}

export default ItemDetail