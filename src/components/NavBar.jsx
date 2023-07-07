import React from "react";
import CarWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom"

const NavBar = () =>(
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
            <NavLink to="/cart"><CarWidget/></NavLink>
        </nav>
    </header>
)

export default NavBar;