// This remains a Server Component
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductsList from '@/components/ProductsList'  // New Client Component
import arrow from '@/app/imagesTwo/Vector (13).png'
import clients from "@/app/imagesTwo/desktop-clients-1.png";


import cat1 from '@/app/imagesTwo/card-item.png';
import cat2 from '@/app/imagesTwo/card-item (1).png';
import cat3 from '@/app/imagesTwo/card-item (2).png';
import cat4 from '@/app/imagesTwo/card-item (3).png';
import cat5 from '@/app/imagesTwo/card-item (4).png';

const Page = () => {
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

      {/* Category Section */}
      <div className=" bg-[#FAFAFA] py-8">
        <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-[90px] lg:ml-[70px]">
          <Image
            src={cat1}
            alt="1"
            className=" md:w-full lg:w-full"
          />
          <Image
            src={cat2}
            alt="2"
            className=" md:w-full lg:w-full"
          />
          <Image
            src={cat3}
            alt="3"
            className=" md:w-full lg:w-full"
          />
          <Image
            src={cat4}
            alt="4"
            className=" md:w-full lg:w-full"
          />
          <Image
            src={cat5}
            alt="5"
            className="md:w-full lg:w-full"
          />
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative mt-12">
        <Image src={clients} alt="clients" className="w-full" />
      </div>

      {/* Product Listing */}
      <ProductsList />

      <Footer />
    </div>
  );
};

export default Page;
