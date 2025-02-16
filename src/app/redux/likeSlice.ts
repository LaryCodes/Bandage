import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
}

interface LikeState {
  likedProducts: Product[];
}

const initialState: LikeState = {
  likedProducts: [],
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<Product>) => {
      const index = state.likedProducts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index !== -1) {
        state.likedProducts.splice(index, 1); // Remove if already liked
      } else {
        state.likedProducts.push(action.payload); // Add if not liked
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
