import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ShopEase
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted online store for quality products,
              fast delivery, and secure shopping experience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Linkedin />} />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="footer-title">Shop</h3>
            <ul className="footer-list">
              <li>All Products</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Offers</li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="footer-title">Support</h3>
            <ul className="footer-list">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="footer-title">Company</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Careers</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with ❤️ for modern e-commerce
          </p>
        </div>

      </div>
    </footer>
  );
}

/* Reusable Social Icon */
function SocialIcon({ icon }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full
      bg-gray-800 hover:bg-gray-700 transition cursor-pointer">
      {icon}
    </div>
  );
}
