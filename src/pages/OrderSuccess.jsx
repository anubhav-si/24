import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-sm max-w-md w-full p-8 text-center">
        
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />

        <h1 className="text-2xl font-semibold mt-4">
          Order Placed Successfully
        </h1>

        <p className="text-gray-600 mt-2">
          Thank you for shopping with us. Your order has been confirmed.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mt-6 text-left">
          <p className="text-sm text-gray-600">Order ID</p>
          <p className="font-medium text-gray-900">
            #ORD12345678
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            View Orders
          </button>

          <button className="w-full border py-3 rounded-lg hover:bg-gray-100 transition">
            Continue Shopping
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          You will receive order updates via SMS & Email
        </p>
      </div>
    </div>
  );
}
