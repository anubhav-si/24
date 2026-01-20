import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Premium Headphones",
    price: 2999,
    oldPrice: 3999,
    image: "https://images.unsplash.com/photo-1585386959984-a4155228f9f4",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 4999,
    oldPrice: 6999,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    price: 2499,
    oldPrice: 3499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 3599,
    oldPrice: 4999,
    image: "https://images.unsplash.com/photo-1583225151159-4a4c8d8b9c3c",
  },
  {
    id: 5,
    title: "DSLR Camera",
    price: 45999,
    oldPrice: 52999,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2",
  },
  {
    id: 6,
    title: "Gaming Mouse",
    price: 1499,
    oldPrice: 1999,
    image: "https://images.unsplash.com/photo-1616627985580-1b3bb7c8a9f7",
  },
  {
    id: 7,
    title: "Mechanical Keyboard",
    price: 3999,
    oldPrice: 5499,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 8,
    title: "Laptop Backpack",
    price: 2199,
    oldPrice: 2999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 9,
    title: "Fitness Band",
    price: 1999,
    oldPrice: 2999,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
  },
  {
    id: 10,
    title: "Noise Cancelling Headphones",
    price: 8999,
    oldPrice: 10999,
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
  },
  {
    id: 11,
    title: "Smartphone Tripod",
    price: 1299,
    oldPrice: 1799,
    image: "https://images.unsplash.com/photo-1602526216038-29b98a0a84fa",
  },
  {
    id: 12,
    title: "Portable Power Bank",
    price: 1799,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
  },
];


export default function Home() {
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
