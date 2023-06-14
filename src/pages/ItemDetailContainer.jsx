import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"
import { useEffect, useState } from "react"
import { fetchedItems } from "../components/Items" 

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
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
                <p className="loading">Cargando producto...</p>
            ) : item ? (
                <ItemDetail item={item}/>
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    )
}

export default ItemDetailContainer