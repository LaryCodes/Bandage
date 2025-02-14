import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-13',
  useCdn: false,
})

export interface Product {
  _id: string
  title: string
  price: number
  productImage: string // Fixing images array
  description?: string
  category?: string
  quantity?: number
  rating?: number
}

const productData = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    productImage,  
    description,
    category,
    quantity,
    rating
  }`

  try {
    const products = await client.fetch(query)
    console.log("✅ Fetched products thumnbnail:", products.thumbnail) // Debugging
    return products
  } catch (error) {
    console.error("❌ Error fetching products:", error)
    return []
  }
}

export default productData
