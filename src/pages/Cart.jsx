import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {removeProductFromCart} from "../reduxstore/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
 
  const cartItems = useSelector((state)=>state.cart.cartitem);
 
  
    

  const removeItem = (id) => {
  
    dispatch(removeProductFromCart(id));
    
  };
  
    
    const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  
  
  return (
    <div className="bg-gray-100 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-8 bg-white rounded-xl shadow-sm">
          <div className="border-b px-4 sm:px-6 py-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {cartItems.length} items
            </p>
          </div>

          {cartItems.map(item => (
            <div
              key={item._id}
              className="px-4 sm:px-6 py-5 border-b last:border-b-0"
            >
              {/* ITEM CONTAINER */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                {/* Image */}
                <img
                  src={item.images[0].url}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain bg-gray-50 rounded-lg mx-auto sm:mx-0"
                />

                {/* Details */}
                <div className="flex-1">
                  <h2 className="font-medium text-gray-900 text-base sm:text-lg">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Brand: {item.brand ||  "premium" }
                  </p>

                  <p className="text-sm text-green-600 mt-1">
                    {item.stock || 25}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="px-3 py-1 text-lg hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-4">{item.qty||5}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="px-3 py-1 text-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item._id)}
                      className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="sm:text-right flex sm:block justify-between items-center mt-2 sm:mt-0">
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{item.price * (item.qty || 1)}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} each
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: PRICE SUMMARY */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 lg:sticky lg:top-24">
            <h3 className="text-lg font-semibold text-gray-900">
              Price Details
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal || 5000}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Platform Fee</span>
                <span>₹0</span>
              </div>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{subtotal || 5000}</span>
            </div>

            <Link to="/checkout">
              <button className="mt-6 w-full bg-black text-white py-3 sm:py-4 rounded-lg hover:bg-gray-800 transition font-medium">
                Proceed to Checkout
              </button>
            </Link>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Safe & Secure Payments · Easy Returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
