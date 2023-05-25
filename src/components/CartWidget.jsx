import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CarWidget = () => {

    return(
        <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="notification-badge">5</span>
      </div>
    );

}

export default CarWidget