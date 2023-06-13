import React from "react"

const ItemDetail = ({item}) => {
    
    return(
    <div className="itemCard" id={item.id}>
        <h3>{item.nombre}</h3>
        <img src={item.img} alt={item.nombre} />
        <p>Precio: ${item.precio}</p>
        <p>Descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, ratione? Commodi illo magnam vitae non perspiciatis, iusto iste, voluptate fugiat corporis ad dolor vero harum necessitatibus accusamus. Quibusdam, aliquam in. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fuga provident mollitia quod inventore illo veniam earum voluptates delectus facere optio, ut dicta laudantium ea voluptate placeat. Maiores, iusto officia.</p>
        <p>Stock: {item.stock}</p>
    </div>
    )
}

export default ItemDetail