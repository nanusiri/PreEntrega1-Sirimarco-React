import React, { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleAddToCart = () => {
    onAdd(count);
  }

  return (
    <div className="itemCount">
      <div className="countControls">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount