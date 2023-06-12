import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    return(
        <div>
            <h2 className="subtitulo">{props.greeting}</h2>
            <div>
                <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer;