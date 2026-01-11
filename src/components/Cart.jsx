import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../features/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc,item) => acc + item.price * item.quantity,0)
  return (
    <div>
      <h2>Cart</h2>
      {
        cartItems.length === 0 ?(
          <p>Cart is empty</p>
        ):(
          <>
          {
            cartItems.map((item) =>(
               <div key={item.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
              <h4>{item.title}</h4>
              <p>
                ${item.price} x {item.quantity}
              </p>
              <button onClick={() => dispatch(increment({ id: item.id }))}>+</button>
              <button onClick={() => dispatch(decrement({ id: item.id }))}>-</button>
              <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>
            </div>
            ))
          }
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </>
        )
      }
    </div>
  )
}

export default Cart