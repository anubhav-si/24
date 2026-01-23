import { Link, Links } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";




export default function Home() {
  const [products,setproducts] =useState([]);
  const getData = async() =>{
    try {
      const res = await axios.get("http://localhost:3001/web/getAllProduct");
      console.log(res.data.products);

      setproducts(res.data.products);
      
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Premium Products
            </h1>
            <p className="text-gray-600 mb-6">
              Shop the best quality items at unbeatable prices.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900">
              Shop Now
            </button>
          </div>

          <img
            src="https://assets.aboutamazon.com/dims4/default/ef548ce/2147483647/strip/true/crop/1320x743+0+0/resize/2480x1396!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F92%2F06%2Fbb204a6842a49e7bdc66523a070c%2Fblog2.jpg"
            className="rounded-xl shadow-lg"
            alt="hero"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link to={"/product/:id"}>
                   <ProductCard key={products._id} product={product} />
              </Link>
           
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
