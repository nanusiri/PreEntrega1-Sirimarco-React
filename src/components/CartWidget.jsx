import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../context/CartContext";

export const CarWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  return(
      <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="notification-badge">{totalQuantity()}</span>
    </div>
  );

}

export default CarWidget