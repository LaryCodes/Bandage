"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    title: string;
    id : string;
    price: number;
    quantity: number;
    thumbnail: string;

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
            return state.filter((product) => product.id !== action.payload);
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

