import { client } from "@/sanity/lib/client"
// import FeatureProducts from "@/app/components/FeatureProducts";
import ProductDetails from "@/components/ProductDetail";
// import { ProductType } from "@/app/types/type";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface ProductType {
  _id: string;
  title: string;
  priceWithoutDiscount: number | null;
  category: {
    _id: string;
    title: string;
  };
  tags: string[];
  price: number;
  badge: string | null;
  productImage: string;
  description: string;
  inventory: number;
}

interface Params {
  id: string;
}

const page = async ({ params }: { params: Params }) => {

  const query = `*[_type == "product" && _id == "${params.id}"][0]`
  const productData: ProductType = await client.fetch(query)

  return (
    <>
    <Header />
      <div className="flex justify-center items-center w-[1440px] mx-auto max-w-[90%] ">

        <Suspense>
        <ProductDetails productData={productData} />
        </Suspense>

        {/* <Suspense>
        {await FeatureProducts()}
        </Suspense> */}
        
      </div>
      <Footer />
    </>
  )
}

export default page