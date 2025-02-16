"use client";

import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-tr from-blue-600 to-purple-600">
      <div className="bg-white shadow-2xl rounded-lg ms:mx-7 mx-10 my-10 p-10 text-center max-w-md w-full animate-fadeIn">
        <CheckCircleIcon className="text-green-500 mx-auto w-16 h-16 mb-4" />
        <h1 className="md:text-4xl text-xl font-extrabold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-md md:text-xl text-gray-600">Thank you for your purchase.</p>

        <div className="bg-green-100 text-green-700 text-xl md:text-3xl font-bold p-3 rounded-md mt-5">
          ${amount}
        </div>

        <Link href="/products">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Continue Shopping 🛍️
          </button>
        </Link>
      </div>
    </main>
  );
}
