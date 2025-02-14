"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cardslice';

interface ProductProps {
    product: {
        _id: string;
        title: string;
        price: number;
        thumbnail: string;
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
            productImage: product.thumbnail, // Corrected key
            quantity: product.quantity,
        };
        dispatch(add(cartItem));
    }

    return (
        <button onClick={addCart}>
            Add to Cart hehe
        </button>
    );
};

export default AddToCart;
