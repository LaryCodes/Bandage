"use client";
import React, { useState } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  // createdAt: string; // Assuming you have timestamps
}

interface FilterProps {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

const ProductFilter: React.FC<FilterProps> = ({ products, setFilteredProducts }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("newest");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;
    setSelectedFilter(filterValue);

    let sortedProducts = [...products];

    // if (filterValue === "newest") {
    //   sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    // } else if (filterValue === "oldest") {
    //   sortedProducts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    // } else
     if (filterValue === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filterValue === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="mb-4">
      <label className="text-gray-700 text-sm font-semibold">Sort By:</label>
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="ml-2 px-3 py-2 border rounded-md text-sm bg-white shadow-sm"
      >
        {/* <option value="newest">Newest</option>
        <option value="oldest">Oldest</option> */}
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
      </select>
    </div>
  );
};

export default ProductFilter;
