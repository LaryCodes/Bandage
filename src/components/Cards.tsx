"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { urlFor } from "@/sanity/lib/client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleLike } from "@/app/redux/likeSlice";
import { Heart, HeartOff } from "lucide-react"; // Import icons

interface Card {
  id: string;
  title: string;
  price: number;
  productImage: string;
  quantity?: number;
}

const Cards = (props: Card) => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: RootState) => state.likes.likedProducts);
  const isLiked = likedProducts.some((product) => product._id === props.id);

  return (
    <div className="p-4 flex flex-col items-center border border-gray-200 rounded-lg shadow-xl w-[250px] relative">
      {/* Like Button */}
      <button
        onClick={() => dispatch(toggleLike({
          _id: props.id,
          title: props.title,
          price: props.price,
          productImage: urlFor(props.productImage).url(),
        }))}
        className="absolute top-2 right-2 text-red-500"
      >
        {isLiked ? <Heart className="w-6 h-6 fill-red-500" /> : <HeartOff className="w-6 h-6" />}
      </button>

      {/* Image Container */}
      <div className="w-full h-[180px] flex justify-center">
        {props.productImage ? (
          <Image
            width={200}
            height={180}
            src={props.productImage}
            alt={props.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <p className="text-red-500">No Image Available</p>
        )}
      </div>

      {/* Product Title */}
      <h5 className="font-bold text-[16px] text-center text-[#252B42] mt-2">
        {props.title}
      </h5>

      {/* Price */}
      <p className="text-gray-600 text-lg font-semibold mt-1">${props.price.toFixed(2)}</p>

      {/* Buttons */}
      <div className="flex w-full justify-center gap-1 font-semibold text-white rounded-md text-sm mt-3">
        <AddToCart
          product={{
            title: props.title,
            price: props.price,
            productImage: urlFor(props.productImage).url(),
            _id: props.id,
            quantity: props.quantity ?? 1,
          }}
        />
        <Link href={`/products/${props.id}`}>
          <button className="w-[110px] px-3 py-2 bg-gray-800 text-white rounded-md text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
