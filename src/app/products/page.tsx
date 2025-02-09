import Image from 'next/image'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import productData from '@/components/ProductData'
import arrow from "@/app/imagesTwo/Vector (13).png";
import cat1 from "@/app/imagesTwo/card-item.png";
import cat2 from "@/app/imagesTwo/card-item (1).png";
import cat3 from "@/app/imagesTwo/card-item (2).png";
import cat4 from "@/app/imagesTwo/card-item (3).png";
import cat5 from "@/app/imagesTwo/card-item (4).png";
import drop from "@/app/imagesTwo/Vector (14).png";
import frame from "@/images/Frame 31.png";
import clients from "@/app/imagesTwo/desktop-clients-1.png";
import pic9 from "@/app/imagesTwo/product-cover-5 (8).png";
import pic10 from "@/app/imagesTwo/product-cover-5 (9).png";
import pic11 from "@/app/imagesTwo/product-cover-5 (10).png";
import pic12 from "@/app/imagesTwo/product-cover-5 (11).png";
import pic13 from "@/app/imagesTwo/product-cover-5 (12).png";
import pic14 from "@/app/imagesTwo/product-cover-5 (13).png";
import pic15 from "@/app/imagesTwo/product-cover-5 (14).png";
import pic16 from "@/app/imagesTwo/product-cover-5 (15).png";
import pic17 from "@/app/imagesTwo/product-cover-5 (16).png";
import pic18 from "@/app/imagesTwo/product-cover-5 (17).png";
import pic19 from "@/app/imagesTwo/product-cover-5 (18).png";
import pic20 from "@/app/imagesTwo/product-cover-5 (19).png";

import CardText from "@/components/Card";
import Link from 'next/link'

const page = async () => {

  interface Products {
    id: string
    title: string
    price: number
    thumbnail: string
    description?: string
    category?: string
    quantity?: number
    rating?: number
}

  const products = await productData();

  return (
    <><div>
      <Header />

      {/* Shop Title */}
      <div className="w-full h-[32px] flex justify-center items-center mt-[10px] mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
      </div>

      {/* Breadcrumb */}
      <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
          <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                <Link
                href = "/"
                >
                Home
                </Link>
              </div>
              <Image src={arrow} alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42] ">
                Shop
              </h6>
          </div>
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

      {/* Popularity Section */}
      <div className="w-full h-[98px] flex justify-center items-center mt-12">
        <div className="w-full max-w-screen-xl flex justify-between items-center py-[24px] px-4">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div>
          <div className="flex gap-4 items-center">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center relative">
              <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
              <Image
                src={drop}
                alt="drop"
                className="absolute top-[10px] left-[10px]"
              />
            </button>
            <button className="w-[94px] h-[50px] flex justify-center items-center bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>


      {/* Clients Section */}
      <div className="relative mt-12">
        <Image src={clients} alt="clients" className="w-full" />
      </div>

      {/* Shop Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Products) => {
          return (
            <Cards
              thumbnail={product.thumbnail}
              key={product.id}
              title={product.title}
              price={product.price}
              id={product.id} />)
        }
        )}
      </div>

      {/* Pagination */}
      <div className="w-full max-w-[313px] mx-auto mt-[100px] border border-gray-300 rounded-lg shadow-md">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-gray-100 text-gray-600 font-extrabold py-2 px-4 border border-gray-300 rounded-l-md shadow-md cursor-pointer">
            First
          </div>
          <div className="bg-white text-blue-600 py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
            1
          </div>
          <div className="bg-blue-600 text-white py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
            2
          </div>
          <div className="bg-white text-blue-600 py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
            3
          </div>
          <div className="bg-white text-blue-600 py-2 px-4 border border-gray-300 rounded-r-md shadow-md cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div><Footer /></>
  )
}

export default page
