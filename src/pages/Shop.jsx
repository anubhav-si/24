import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = useSelector((store) => store.product.productList);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Modern Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Discover Products
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Explore our curated collection of premium items
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Filters Panel */}
          <aside className="lg:sticky lg:top-24 h-fit bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm">

            <h3 className="font-semibold text-lg mb-6">Filters</h3>

            <div className="space-y-6">

              {/* Category */}
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Category
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none transition">
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Sort By
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none transition">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Section */}
          <section className="lg:col-span-3">

            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                {products?.length || 0} Products
              </p>
            </div>

            {/* Product Grid */}
            {products?.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <p className="text-lg">No products available</p>
              </div>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}
