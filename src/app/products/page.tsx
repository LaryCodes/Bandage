"use client";

import Image from 'next/image'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductData from '@/components/ProductData'
import { Product as ProductType } from '@/components/ProductData'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/client'

import arrow from '@/app/imagesTwo/Vector (13).png';
import drop from '@/app/imagesTwo/Vector (14).png';
import clients from '@/app/imagesTwo/desktop-clients-1.png';
import cat1 from '@/app/imagesTwo/card-item.png';
import cat2 from '@/app/imagesTwo/card-item (1).png';
import cat3 from '@/app/imagesTwo/card-item (2).png';
import cat4 from '@/app/imagesTwo/card-item (3).png';
import cat5 from '@/app/imagesTwo/card-item (4).png';

// Fetch Products (Using async-await)
const Page = async () => {
  const products: ProductType[] = await ProductData();

  return (
    <div>
    <Header />
    <div className="text-center my-5">
      <h2 className="text-2xl font-bold">Shop</h2>
    </div>
    <div className="flex justify-center items-center gap-4 mb-5">
      <Link href="/">
        <span className="text-gray-500">Home</span>
      </Link>
      <Image src={arrow} alt="arrow" width={10} height={10} />
      <span className="font-bold">Shop</span>
    </div>

    <div className="bg-gray-100 py-6 grid grid-cols-2 md:grid-cols-5 gap-4 mx-10">
      {[cat1, cat2, cat3, cat4, cat5].map((cat, index) => (
        <Image key={index} src={cat} alt={'Category ${index + 1}'} className="w-full" />
      ))}
    </div>
    
    <div className="text-center my-4">
      <p>Showing all {products.length} results</p>
    </div>

      {/* Shop Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">

        {products.map((product) => {

          return (
            <Cards
              key={product._id}
              id={product._id}
              title={product.title}
              price={product.price}
              productImage={urlFor(product.productImage).url()}
            />
          );
        })}
      </div>

      <div className="flex justify-center mt-10 gap-3">
        <button className="px-4 py-2 bg-gray-200">First</button>
        <button className="px-3 py-2 bg-white border">1</button>
        <button className="px-3 py-2 bg-blue-600 text-white">2</button>
        <button className="px-3 py-2 bg-white border">3</button>
        <button className="px-4 py-2 bg-gray-200">Next</button>
      </div>

      <Footer />
    
    </div>
  );
};

export default Page;
