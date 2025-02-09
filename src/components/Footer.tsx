import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      {/* Bandage Heading */}
      <div className="border-b border-gray-300 bg-gray-50 pl-4 py-5">
        <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
      </div>

      {/* Middle Section */}
      <div className="bg-white w-full grid grid-cols-1 sm:grid sm:grid-cols-5 justify-around py-6">
        {/* Column 1 */}
        <div className="w-1/2 sm:w-auto px-4">
          <h3 className="font-semibold text-gray-800">Company Info</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="w-1/2 sm:w-auto px-4">
          <h3 className="font-semibold text-gray-800">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
            <li><a href="#" className="hover:text-blue-500">License</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="w-1/2 sm:w-auto px-4">
          <h3 className="font-semibold text-gray-800">Features</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
            <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
            <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
            <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
          </ul>
        </div>
        {/* Email Form Section */}
        <div className="w-full sm:w-auto px-4">
          <h3 className="font-semibold text-gray-800">Get In Touch</h3>
          <form className="mt-4 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-b-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
              Lore ipsum dolor Amit.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
