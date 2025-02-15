import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import productData from './ProductData';
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cardslice';  
import { Product } from '@/components/ProductData'

// interface Product {
//     id: string;
//     title: string;
//     price: number;
//     thumbnail: string;
//     quantity: number;
// }

const ProductList: React.FC = () => { // Capitalized component name
    const dispatch = useDispatch();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productData();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    function addCart(product: Product) {
        const cartItem = {
            _id: product._id,
            title: product.title,
            price: product.price,
            productImage: product.productImage,
            quantity: 1,
        };
        dispatch(add(cartItem));
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <Cards
                        key={product._id}
                        productImage={product.productImage}
                        title={product.title}
                        price={product.price}
                        id={product._id}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
