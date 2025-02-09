
const productData = async () => {

    interface Products {
        id: string
        title: string
        price: number
        image: string
        description?: string
        category?: string
        quantity?: number
        rating?: number
    }

    const data = await fetch('https://dummyjson.com/products')
    const res = await data.json()
    return res.products
   
}

export default productData
