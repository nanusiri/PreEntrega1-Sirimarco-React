import React from "react";
import CarWidget from "./CartWidget";

const NavBar = () =>(
    <header>
        <div>
            <h1 className="titulo">DRY-MEAT</h1>
        </div>
        <nav className="navbar">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Quienes somos?</a>
            <a href="#">Contacto</a>
            <a href="#"><CarWidget/></a>
        </nav>
    </header>
)

export default NavBar;