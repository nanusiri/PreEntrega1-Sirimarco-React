import {getFirestore, collection, addDoc, Timestamp} from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { useContext, useState } from "react"

export const Checkout = () => {
    const {cartList, removeList, calculateTotal, redirect} = useContext(CartContext)

    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        email2: "",
    })

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: cartList,
            total: calculateTotal(),
            date: Timestamp.fromDate(new Date())
        }
        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(response => {
            if(response.id){
                alert("compra realizada con exito su codigo de compra es:" +response.id)
                removeList()
            }
        })
    }

    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const handleCheckout = () => {
        if(formValues.email === formValues.email2){
            sendOrder()
        } else {
            alert("ocurrio un error, verifique que los email coincidan")
        }
    }

    return(
        <>
            {!cartList.length ? (
                <>
                    {redirect()}
                </>
            ):(
                <>
                    <h2>Datos del comprador</h2>
                    
                    <form id="checkout-form">
                        <div className="">
                            <label>Nombre y Apellido</label>
                            <input
                            onChange={handleChange}
                            value={formValues.name}
                            type="text" 
                            name="name"
                            />
                        </div>
                        <div className="">
                            <label>Teléfono</label>
                            <input
                            onChange={handleChange}
                            value={formValues.phone}
                            type="text"
                            name="phone"
                            />
                        </div>
                        <div className="">
                            <label>Email</label>
                            <input
                            onChange={handleChange}
                            value={formValues.email}
                            type="email"
                            name="email"
                            />
                        </div>
                        <div className="">
                            <label>Vuelva a ingresar su Email</label>
                            <input
                            onChange={handleChange}
                            value={formValues.email2}
                            type="email"
                            name="email2"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleCheckout}
                        >
                            Finalizar compra
                        </button>
                    </form>

                </>
            )}
        </>
    )
}