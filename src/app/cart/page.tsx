"use client";
import React from 'react'
import { CartState, removeFromCart } from '../redux/cardslice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';

const page = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state:RootState) => state.cart)
    function removeItem(id:string){
        dispatch(removeFromCart(id))
    }
  return (
    <div>
      
    </div>
  )
}

export default page
