"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    _id: string
    title: string
    price: number
    productImage: string // Fixing images array
    description?: string
    category?: string
    quantity?: number
    rating?: number

}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        add(state, action: PayloadAction<CartState>){
            state.push(action.payload);
        },
        remove(state, action: PayloadAction<string>){
            return state.filter((product) => product._id !== action.payload);
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

