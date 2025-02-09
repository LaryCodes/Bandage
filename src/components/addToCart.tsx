"use client";
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cardslice';  



interface Product {
    product: {
        id: string
        title: string
        price: number
        thumbnail: string
        quantity: number
    }
}

const addToCart = ({product}:Product) => {
    const dispatch = useDispatch()
    function addCart(){
       const cartItem = {...product,quantity: product.quantity } 
         dispatch(add(cartItem))
    }

  return (
    <button 
    onClick={addCart}
    >
        Add to Cart hehe
    </button>
  )
}

export default addToCart
