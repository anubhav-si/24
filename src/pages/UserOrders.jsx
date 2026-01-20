import { Package, ChevronRight } from "lucide-react";

const orders = [
  {
    id: "ORD123456",
    date: "12 Jan 2026",
    total: "₹2,499",
    status: "Delivered",
    items: [
      {
        name: "Apple iPhone 14 Back Cover",
        image: "https://via.placeholder.com/80",
      },
      {
        name: "Wireless Earbuds",
        image: "https://via.placeholder.com/80",
      },
    ],
  },
  {
    id: "ORD654321",
    date: "05 Jan 2026",
    total: "₹1,199",
    status: "Shipped",
    items: [
      {
        name: "Men Running Shoes",
        image: "https://via.placeholder.com/80",
      },
    ],
  },
];

const statusStyles = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function UserOrders() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Your Orders
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track, return or view details of your purchases
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-2xl shadow-sm"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-4 border-b">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">
                    Order ID
                  </p>
                  <p className="font-medium text-gray-900">
                    {order.id}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500">
                    Order Date
                  </p>
                  <p className="text-gray-900">
                    {order.date}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500">
                    Total
                  </p>
                  <p className="font-medium text-gray-900">
                    {order.total}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Products */}
              <div className="px-6 py-4 space-y-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg border object-cover"
                    />
                    <p className="text-gray-900 text-sm">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:underline">
                  <Package className="w-4 h-4" />
                  Track Order
                </button>

                <button className="flex items-center gap-2 text-sm font-medium text-black">
                  View Order Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (for later use) */}
        {/* 
        <div className="bg-white rounded-2xl border p-12 text-center">
          <Package className="mx-auto w-10 h-10 text-gray-400" />
          <h2 className="mt-4 font-medium text-gray-900">
            No orders yet
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Start shopping to see your orders here
          </p>
        </div>
        */}
      </div>
    </div>
  );
}
