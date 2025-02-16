"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "@/app/redux/cardslice";
import { toast } from "sonner"; // Import toast for notifications

interface ProductProps {
  product: {
    _id: string;
    title: string;
    price: number;
    productImage: string;
    quantity: number;
  };
}

const AddToCart = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  function addCart() {
    const cartItem = {
      _id: product._id,
      title: product.title,
      price: product.price,
      productImage: product.productImage,
      quantity: product.quantity,
    };

    dispatch(add(cartItem));

    // Show toast notification
    toast.success(`${product.title} has been added to the cart!`, {
      duration: 3000, // Notification disappears in 3 seconds
    });
  }

  return (
    <button 
        onClick={addCart}
        className="w-[110px] px-3 py-2 bg-blue-500 text-white rounded-md text-sm"
        >
            Add to Cart 
        </button>
  );
};

export default AddToCart;
