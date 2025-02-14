// This remains a Server Component
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductsList from '@/components/ProductsList'  // New Client Component
import arrow from '@/app/imagesTwo/Vector (13).png'

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

      {/* Category Images */}
      <div className="bg-gray-100 py-6 grid grid-cols-2 md:grid-cols-5 gap-4 mx-10">
        {[cat1, cat2, cat3, cat4, cat5].map((cat, index) => (
          <Image key={index} src={cat} alt={`Category ${index + 1}`} className="w-full" />
        ))}
      </div>

      {/* Product Listing */}
      <ProductsList />

      <Footer />
    </div>
  );
};

export default Page;
