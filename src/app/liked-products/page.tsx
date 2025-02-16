"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Cards from "@/components/Cards";
import ProductData, { Product as ProductType } from "@/components/ProductData";


const LikedProductsPage = () => {
  const likedProducts = useSelector((state: RootState) => state.likes.likedProducts);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Liked Products ❤️</h1>

      {likedProducts.length === 0 ? (
        <p className="text-gray-500">No liked products yet.</p>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedProducts.map((product:ProductType) => (
            <Cards
              key={product._id}
              id={product._id}
              title={product.title}
              price={product.price}
              productImage={product.productImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedProductsPage;
