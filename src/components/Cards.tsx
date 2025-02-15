import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { urlFor } from "@/sanity/lib/client";

interface Card {
  id: string;
  title: string;
  price: number;
  productImage: string;
  quantity?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Cards = (props: Card) => {
  return (
    <div className="p-4 flex flex-col items-center border border-gray-200 rounded-lg shadow-lg w-[250px]">
      {/* Image Container with Fixed Size */}
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
      <p className="text-gray-600 text-lg font-semibold mt-1">
        ${props.price.toFixed(2)}
      </p>

      {/* Buttons Container */}
      <div className="flex w-full justify-center gap-2 mt-3">
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
