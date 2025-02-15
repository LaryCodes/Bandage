import { client, urlFor } from "@/sanity/lib/client"
import { ProductType } from "./ProductDetail"
import Cards from "./Cards";

const query = `*[_type == "product"] | order(_createdAt desc) [1...5]`;


const FeatureProducts = async () => {
  const productData: ProductType[] = await client.fetch(query)
  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main">Featured Products</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {productData.map((product) => (
          <Cards
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            productImage={urlFor(product.productImage).url()}
          />
        ))}
      </div>
        </div>
      </div>
    </>
  )
}

export default FeatureProducts