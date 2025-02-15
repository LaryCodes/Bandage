"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { remove } from "@/app/redux/cardslice";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: RootState) =>
    state.cart.map((item) => ({
      ...item,
      quantity: item.quantity ?? 1, // Ensures quantity is always a number
    }))
  );

  const removeItem = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item._id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <Image 
                    src={item.productImage} 
                    alt={item.title} 
                    width={50} 
                    height={50} 
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">${item.price} × {item.quantity}</p>
                  </div>
                </div>
                <Button 
                  variant="destructive" 
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
