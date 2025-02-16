"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { remove } from "@/app/redux/cardslice";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/app/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface CartItem {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: RootState) =>
    state.cart.map((item) => ({
      ...item,
      quantity: item.quantity ?? 1,
    }))
  );

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Carts</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item._id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <Image src={item.productImage} alt={item.title} width={50} height={50} className="rounded-lg" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">${item.price} × {item.quantity}</p>
                  </div>
                </div>
                <Button variant="destructive" onClick={() => removeItem(item._id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Payment Options */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
      <SignedOut>
        <p className="text-gray-500">Please sign in to complete your purchase.</p>
        <button className=" bg-red-500 mx-14 my-5 px-6 py-3 rounded-lg text-white font-bold text-md"><SignInButton mode="modal"/></button>
      </SignedOut>
      <SignedIn>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setPaymentMethod("cod")}>Cash on Delivery</Button>
          <Button variant="outline" onClick={() => setPaymentMethod("online")}>Pay Online</Button>
        </div>
      </SignedIn>
      </div>

      <SignedIn>
      {/* Cash on Delivery */}
      {paymentMethod === "cod" && (
        <div className="mt-6 bg-green-100 p-4 rounded-md text-green-800">
          <p className="text-lg font-semibold">Your order has been placed successfully!</p>
          <p className="text-sm">You will pay <strong>${totalAmount.toFixed(2)}</strong> upon delivery.</p>
          <Link href="/order-booked" >
          <Button className="bg-gradient-to-r from-blue-400 to-red-500 mt-4 text-white font-bold">Book Order</Button>
          </Link>
        </div>
      )}

      {/* Online Payment */}
      {paymentMethod === "online" && (
        <div className="mt-6">
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold">Amount to pay:</h1>
            <h2 className="text-xl">
              Your total amount to be paid is <span className="font-bold">${totalAmount.toFixed(2)}</span>
            </h2>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(totalAmount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={totalAmount} />
          </Elements>
        </div>
      )}
      </SignedIn>
    </div>
  );
};

export default CartPage;
