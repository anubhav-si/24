import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

// const products = Array.from({ length: 8 }, (_, i) => ({
//   id: i + 1,
//   title: `Product ${i + 1}`,
//   price: 1999 + i * 500,
//   oldPrice: 2999 + i * 500,
//   image: "https://images.unsplash.com/photo-1585386959984-a4155228f9f4",
// }));

export default function Shop() {
  const products = useSelector((store)=>store.product.productList);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="text-gray-500">Browse all available products</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Filters */}
        <aside className="border rounded-xl p-4 h-fit">
          <h3 className="font-semibold mb-4">Filters</h3>

          <div className="space-y-3">
            <select className="w-full border rounded-lg p-2">
              <option>Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>

            <select className="w-full border rounded-lg p-2">
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
