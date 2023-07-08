import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"
import { useEffect, useState } from "react"
//import { fetchedItems } from "../components/Items" 
import { doc, getDoc, getFirestore} from "firebase/firestore"

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
            try{
            const db = getFirestore()
            const queryDoc = doc(db, "items", id)
            
            const snapshot = await getDoc(queryDoc)
            return ({id: snapshot.id, ...snapshot.data()})
            }   catch (error) {
                console.error(error)
            }   finally {
                setIsLoading(false)
            }
        }
        fetchData().then((data) => {
            
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