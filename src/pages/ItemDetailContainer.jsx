import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"
import { useEffect, useState } from "react"
//import { fetchedItems } from "../components/Items" 
import { collection, getDocs, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        /*const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const selectedItem = fetchedItems.find((item) => item.id === Number(id))
                    resolve(selectedItem)
                }, 2000)
            })
        }*/
        const fetchData = async () => {
            const db = getFirestore()
            const itemsCollection = collection(db, "items")
            
            const snapshot = await getDocs(itemsCollection)
            return snapshot.docs.map(doc => ({id: doc.id, ...doc.data}))
        }
        fetchData().then((data) => {
            console.log(data)
            if (data) {
              setItem(data)
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