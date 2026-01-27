import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, Links } from "react-router-dom";

export default function Navbar() {
  const cartItemsCount = useSelector((state)=>state.cart.cartitem);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Row */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-2 cursor-pointer select-none">
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              ShopEase
            </span>
          </div>
          </Link>
          

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, brands and more..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 pl-12 pr-4 py-2.5 text-sm text-gray-700
                focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900
                transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <Link to={"/cart"}>
               <div className="relative group cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 rounded-full
                hover:bg-gray-100 transition">
                <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition" />
              </div>

              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px]
                rounded-full bg-gray-900 text-white text-[15px]
                flex items-center justify-center font-medium">
                {cartItemsCount.length}
              </span>
            </div>
            
            </Link>
           

            {/* User */}
            <Link to={"/login"}>
                <div className="hidden md:flex items-center gap-2 cursor-pointer group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full
                    hover:bg-gray-100 transition">
                    <User className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition">
                    Login
                  </span>
                </div>
            </Link>
            

            {/* Mobile Menu */}
            <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 bg-gray-50
              pl-12 pr-4 py-2.5 text-sm
              focus:border-gray-900 focus:bg-white focus:outline-none
              transition-all"
            />
          </div>
        </div>

      </div>
    </header>
  );
}
