"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cardslice';

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
            _id: product._id, // Ensure _id is included
            title: product.title,
            price: product.price,
            productImage: product.productImage, // Corrected key
            quantity: product.quantity,
        };
        dispatch(add(cartItem));
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
