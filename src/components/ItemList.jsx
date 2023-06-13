import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = () => {
    const  [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {categoryId} = useParams()
    
    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve) => {
                setIsLoading(true)
                setTimeout(() => {
                    const fetchedItems = [
                        {
                            id: 1,
                            nombre: "BEEF JERKY: Original",
                            precio: 700,
                            stock: 10,
                            img: "https://cdn.shopify.com/s/files/1/0186/5049/7124/products/1000000924280gJLBFORIGJERKCAHERO.png?v=1620250955",
                            categoryId: 1
                        },
                        {
                            id: 2,
                            nombre: "BEEF JERKY: Sweet & Hot",
                            precio: 800,
                            stock: 0,
                            img: "https://images.albertsons-media.com/is/image/ABS/960130428-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available",
                            categoryId: 2
                        },
                        {
                            id: 3,
                            nombre: "BEEF JERKY: Teriyaki",
                            precio: 750,
                            stock: 5,
                            img: "https://www.jacklinks.com/shop/media/catalog/product/1/0/10000017985_3.25oz_jl_bf_teri_jerk_hero_2.png",
                            categoryId: 3
                        },
                        {
                            id:4,
                            nombre: "BEEF JERKY: Peppered",
                            precio: 750,
                            stock: 8,
                            img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFtNDYxeDRkakwuX1NMMTUwMF8uanBn.jpg",
                            categoryId: 3
                        }
                    ]
                    const filteredItems = categoryId
                        ? fetchedItems.filter((item) => item.categoryId === Number(categoryId))
                        : fetchedItems

                    resolve(filteredItems)
                }, 2000)
            })
        }
        fetchData().then((fetchedItems) => {
            setItems(fetchedItems)
            setIsLoading(false)
        })
    },[categoryId])

    return(
        <div className="itemList">
            {isLoading ? (
                <p className="loading">Cargando productos...</p>
            ): (
                items.map((item) => (
                    <Item key={item.id} item={item} id={item.id}/>
                ))
            )}
        </div>
    )
}

export default ItemList