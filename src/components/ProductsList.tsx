"use client";

import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import ProductData, { Product as ProductType } from "@/components/ProductData";
import { urlFor } from "@/sanity/lib/client";
import ProductFilter from "./ProductFilter";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductData();
        setProducts(data);
        setFilteredProducts(data); // Default: show all products
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
      {/* Popularity Section */}
      <div className="w-full h-[98px] flex justify-center items-center mt-12">
        <div className="w-full max-w-screen-xl flex flex-col sm:flex sm:flex-row md:pr-24 justify-between items-center py-[24px] px-4">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] pb-5 md:pl-20 md:text-xl text-[#737373]">
            Showing {filteredProducts.length} out of {products.length} results
          </div>
          
          {/* Filter Component */}
          <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />
        </div>
      </div>

      {/* Shop Section */}
      <div className="container pl-9 ms:pl-14 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {filteredProducts.map((product) => (
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
