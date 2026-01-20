import { useState } from "react";
import { CreditCard, Wallet, ShieldCheck } from "lucide-react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Checkout
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Securely complete your purchase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-8 space-y-8">

            {/* ADDRESS */}
            <div className="bg-white rounded-2xl shadow-sm border">
              <div className="px-6 py-5 border-b">
                <h2 className="text-lg font-medium text-gray-900">
                  Delivery Address
                </h2>
              </div>

              <div className="px-6 py-6 grid grid-cols-1 gap-5">
                <div>
                  <label className="text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      City
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full border rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Pincode
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full border rounded-xl px-4 py-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="bg-white rounded-2xl shadow-sm border">
              <div className="px-6 py-5 border-b">
                <h2 className="text-lg font-medium text-gray-900">
                  Payment Method
                </h2>
              </div>

              <div className="px-6 py-6 space-y-4">

                {/* CARD */}
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center gap-4 p-5 rounded-xl border cursor-pointer transition ${
                    paymentMethod === "card"
                      ? "border-black bg-gray-50"
                      : "hover:border-gray-400"
                  }`}
                >
                  <CreditCard />
                  <div>
                    <p className="font-medium">Credit / Debit Card</p>
                    <p className="text-sm text-gray-500">
                      Visa, Mastercard, RuPay
                    </p>
                  </div>
                </div>

                {/* UPI */}
                <div
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex items-center gap-4 p-5 rounded-xl border cursor-pointer transition ${
                    paymentMethod === "upi"
                      ? "border-black bg-gray-50"
                      : "hover:border-gray-400"
                  }`}
                >
                  <Wallet />
                  <div>
                    <p className="font-medium">UPI / Wallet</p>
                    <p className="text-sm text-gray-500">
                      PhonePe, GPay, Paytm
                    </p>
                  </div>
                </div>

                {/* CARD FORM */}
                {paymentMethod === "card" && (
                  <div className="mt-4 grid gap-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="border rounded-xl px-4 py-3"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="border rounded-xl px-4 py-3"
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        className="border rounded-xl px-4 py-3"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-24">
              <h3 className="text-lg font-medium">
                Order Summary
              </h3>

              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹7,998</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">FREE</span>
                </div>
              </div>

              <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹7,998</span>
              </div>

              <button className="mt-6 w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition font-medium">
                Place Order
              </button>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 justify-center">
                <ShieldCheck size={14} />
                Secure & encrypted payments
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
