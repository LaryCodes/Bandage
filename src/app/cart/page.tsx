"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { remove } from "../redux/cardslice";

const CartPage = () => {  // Changed to PascalCase
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const removeItem = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id} className="flex justify-between items-center p-2 border-b">
              <span>{item.title} - ${item.price}</span>
              <button 
                onClick={() => removeItem(item._id)} 
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
