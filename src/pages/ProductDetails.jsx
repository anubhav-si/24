import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductDetails() {
  const [qty, setQty] = useState(1);

  const product = {
    title: "Premium Headphones",
    price: 2999,
    oldPrice: 3999,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155228f9f4",
    description:
      "Experience immersive sound with premium build quality and long-lasting comfort.",
    rating: 4.5,
    reviews: 128,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Image */}
      <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg max-h-[400px] object-contain"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
          <span className="text-gray-700 font-medium">
            {product.rating}
          </span>
          <span className="text-gray-400 text-sm">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-lg line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
          <span className="text-green-600 font-medium">
            Save ₹{product.oldPrice - product.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-6 leading-relaxed">
          {product.description}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-6">
          <span className="font-medium text-gray-800">Quantity</span>
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="px-4 py-2 text-lg"
            >
              −
            </button>
            <span className="px-4">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-4 py-2 text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-8 w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
