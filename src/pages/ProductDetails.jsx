import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../reduxstore/cartSlice";

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const {id} = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state)=>state.product.productList);
  const product = products.find((items)=>items._id === id );
  // console.log(`this is from product details page ${id}`);
  // console.log(product);

  const handleAddToCart =(p)=>{
    dispatch(addProductToCart(p))
  }


  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
        Loading product details...
      </div>
    );
  }
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Image */}
      <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="rounded-lg max-h-[400px] object-contain"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
          <span className="text-gray-700 font-medium">
            {product.rating || 4}
          </span>
          <span className="text-gray-400 text-sm">
            ({product.reviews || 50} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price }
          </span>
          <span className="text-lg line-through text-gray-400">
            ₹{product.oldPrice || 6000}
          </span>
          <span className="text-green-600 font-medium">
            Save ₹{product.oldPrice - product.price || 2000}
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
        <button 
        className="mt-8 w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
        onClick={()=>handleAddToCart(product)}
        >
        
          <ShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
