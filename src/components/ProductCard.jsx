import { ShoppingCart, Heart, Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition overflow-hidden">

      {/* Image */}
      <div className="relative">
        <img
          src={product.images[0].url}
          alt={product.name
}
          className="h-56 w-full object-cover group-hover:scale-105 transition"
        />

        {/* Wishlist */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(product.rating)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
          <span className="text-xs text-gray-500 ml-1">{(product.rating)}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{product.oldPrice || 6000}
          </span>
        </div>

        {/* CTA */}
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
