import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const fetchedItems = [
                        {
                            id: 1,
                            nombre: "BEEF JERKY: Original",
                            precio: 700,
                            stock: 10,
                            img: "https://cdn.shopify.com/s/files/1/0186/5049/7124/products/1000000924280gJLBFORIGJERKCAHERO.png?v=1620250955",
                            categoryid: 1
                        },
                        {
                            id: 2,
                            nombre: "BEEF JERKY: Sweet & Hot",
                            precio: 800,
                            stock: 0,
                            img: "https://images.albertsons-media.com/is/image/ABS/960130428-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available",
                            categoryid: 2
                        },
                        {
                            id: 3,
                            nombre: "BEEF JERKY: Teriyaki",
                            precio: 750,
                            stock: 5,
                            img: "https://www.jacklinks.com/shop/media/catalog/product/1/0/10000017985_3.25oz_jl_bf_teri_jerk_hero_2.png",
                            categoryid: 3
                        },
                        {
                            id:4,
                            nombre: "BEEF JERKY: Peppered",
                            precio: 750,
                            stock: 8,
                            img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFtNDYxeDRkakwuX1NMMTUwMF8uanBn.jpg",
                            categoryid: 3
                        }
                    ]
                    const selectedItem = fetchedItems.find((item) => item.id === Number(id))
                    resolve(selectedItem)
                }, 2000)
            })
        }
        fetchData().then((fetchedItem) => {
            if (fetchedItem) {
              setItem(fetchedItem)
              setIsLoading(false)
            } else {
              setIsLoading(false)
            }
        })
    }, [id])

    return(
        <div>
            {isLoading ? (
                <p>Cargando producto...</p>
            ) : item ? (
                <ItemDetail item={item}/>
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    )
}

export default ItemDetailContainer