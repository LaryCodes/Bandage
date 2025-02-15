'use client'

import { useState } from 'react';
import { urlFor } from "@/sanity/lib/image";
import { Heart, ShoppingCart, Eye, Minus, Plus, Link } from "lucide-react";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

interface ProductDetailsProps {
  productData: ProductType;
  error?: any;
}

const ProductDetails = ({ productData, error }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  if (error || !productData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Product Not Found</h2>
          <p className="text-muted-foreground">
            We couldn&apos;t find the product you are looking for
          </p>
        </Card>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Sales':
        return 'destructive';
      case 'New':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/10">
              <Image 
                src={urlFor(productData.productImage).url()} 
                alt={productData.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {productData.badge && (
                <Badge 
                  variant={getBadgeVariant(productData.badge)}
                  className="absolute top-4 left-4 text-sm"
                >
                  {productData.badge}
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-4">
                {productData.title}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-semibold">
                  ${productData.price}
                </span>
                {productData.priceWithoutDiscount && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${productData.priceWithoutDiscount}
                  </span>
                )}
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <AddToCart
                product={{
                  title: productData.title,
                  price: productData.price,
                  productImage: urlFor(productData.productImage).url(),
                  _id: productData._id,
                  quantity: quantity
                }}
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Add to Wishlist</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View Cart</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Eye className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Quick View</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Additional Info */}
            {productData.category && (
              <div className="pt-6 border-t">
                <dl className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-medium">Category:</dt>
                    <dd className="text-muted-foreground">{productData.category.title}</dd>
                  </div>
                  {productData.tags && productData.tags.length > 0 && (
                    <div className="flex gap-2">
                      <dt className="font-medium">Tags:</dt>
                      <dd className="text-muted-foreground">
                        {productData.tags.join(', ')}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;