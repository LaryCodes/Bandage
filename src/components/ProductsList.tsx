"use client";

import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import ProductData, { Product as ProductType } from "@/components/ProductData";
import { urlFor } from "@/sanity/lib/client";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductData();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center my-4">Loading products...</p>;

  return (
    <div>
      <div className="text-center my-4">
        <p>Showing all {products.length} results</p>
      </div>

      {/* Shop Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <Cards
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            productImage={urlFor(product.productImage).url()}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-3">
        <button className="px-4 py-2 bg-gray-200">First</button>
        <button className="px-3 py-2 bg-white border">1</button>
        <button className="px-3 py-2 bg-blue-600 text-white">2</button>
        <button className="px-3 py-2 bg-white border">3</button>
        <button className="px-4 py-2 bg-gray-200">Next</button>
      </div>
    </div>
  );
};

export default ProductsList;
