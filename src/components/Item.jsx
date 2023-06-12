import React from "react"

const Item = ({item}) => {

    return(
        <div className="itemCard" id={item.id}>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.precio}</p>
            <p>Stock: ${item.stock}</p>
        </div>
    )

}

export default Item