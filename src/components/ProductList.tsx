import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import productData from './ProductData';
import { useDispatch } from 'react-redux';
import { add } from '@/app/redux/cardslice';  

interface Product {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
}

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
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1,
        };
        dispatch(add(cartItem));
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <Cards
                        key={product.id}
                        thumbnail={product.thumbnail}
                        title={product.title}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
