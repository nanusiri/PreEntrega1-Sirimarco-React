import React from "react"
import {Link} from 'react-router-dom'

const Item = ({item}) => {

    return(
        <div className="itemCard" id={item.id}>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.precio}</p>
            <Link to={`/item/${item.id}`}>
                <button>Ver detalles del producto</button>
            </Link>
            <p>Stock: {item.stock}</p>
        </div>
    )

}

export default Item