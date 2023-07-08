import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemList = () => {
    const  [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {categoryId} = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            try{
            const db = getFirestore()

            const categoryRef = categoryId
                ? query(collection(db,"items"), where ("categoryId", "==", categoryId))
                : collection(db, "items")

            const snapshot = await getDocs(categoryRef)
            return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
            }   catch (error) {
                    console.error(error)
            }   finally {
                setIsLoading(false)
            }
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