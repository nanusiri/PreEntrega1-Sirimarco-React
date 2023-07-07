import React, { useContext } from "react";
import CarWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom"
import { CartContext } from "../context/CartContext";

const NavBar = () =>{
    const {cartList} = useContext(CartContext)

    return(
    <header>
        <div>
        <Link to="/">
            <h1 className="titulo">DRY-MEAT</h1>
        </Link>
        </div>
        <nav className="navbar">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/category/3">Condimentados</NavLink>
            <NavLink to="/category/2">Picante</NavLink>
            <NavLink to="#">Contacto</NavLink>
            {cartList.length > 0 && <NavLink to="/cart"><CarWidget/></NavLink>}
        </nav>
    </header>
    )
}    

export default NavBar;