import React from 'react'
import Cards from './cards'
import productData from './productData'
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cardslice';  

interface Product {
    
    id: string
        title: string
        price: number
        thumbnail: string
        quantity: number
    
}

const productList = async () => {
       const dispatch = useDispatch()
        function addCart(product:Product){
           const cartItem = {title:product.title,quantity: 1} 
             dispatch(add(cartItem))
        }
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
        <div>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product:Products) => { 
              return (
              <Cards
                thumbnail = {product.thumbnail}
                key={product.id}
                title={product.title}
                price={product.price}
                id = {product.id}
              />)
            }
            )}
            
          </div>
        </div>
      )
}

export default productList
