import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16 pb-8 relative overflow-hidden">

      {/* 3D Glow Effects */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10">

        {/* Brand Section */}
        {/* <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <div className="mb-4 flex items-center gap-2">
            <img
              src="/spglogo.png"
              alt="Smart Print Guide Logo"
              className="h-16 w-auto sm:h-20 md:h-24 object-contain drop-shadow-md"
              style={{ maxWidth: '180px' }}
            />
            
          </div>
          <p className="text-blue-100 text-sm mb-4">
            Smart Print Guide is your trusted destination for printers,
            ink, toner, and expert printing guides. We focus on quality
            recommendations, secure shopping, and reliable support.
          </p>

          <div className="flex space-x-4 mt-4">
            <a href={process.env.NEXT_PUBLIC_API_URL} target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-blue-700 transition duration-300 shadow-md"><FaFacebookF /></a>
            <a href={process.env.NEXT_PUBLIC_API_URL} target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-blue-700 transition duration-300 shadow-md"><FaTwitter /></a>
            <a href={process.env.NEXT_PUBLIC_API_URL} target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-blue-700 transition duration-300 shadow-md"><FaInstagram /></a>
            <a href={process.env.NEXT_PUBLIC_API_URL} target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-blue-700 transition duration-300 shadow-md"><FaLinkedinIn /></a>
          </div>
        </div> */}

        {/* Quick Links */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="font-semibold text-lg mb-4 border-b border-blue-400 pb-2">
            Account
          </h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li><Link href="/profile" className="hover:text-white hover:translate-x-1 transition inline-block">My Account</Link></li>
            <li><Link href="/profile" className="hover:text-white hover:translate-x-1 transition inline-block">Order History</Link></li>
            <li><Link href="/track-order" className="hover:text-white hover:translate-x-1 transition inline-block">Track Order</Link></li>
            <li><Link href="/cart" className="hover:text-white hover:translate-x-1 transition inline-block">Shopping Cart</Link></li>
          </ul>
        </div>


        {/* Quick Links */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="font-semibold text-lg mb-4 border-b border-blue-400 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/shipping-policy" className="hover:text-white transition">Shipping Policy</Link></li>

            <li><Link href="/return-exchange-policy" className="hover:text-white hover:translate-x-1 transition inline-block">Returns & Exchanges</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white hover:translate-x-1 transition inline-block">Cookies Policy</Link></li>

            <li><Link href="/accessibility-statement" className="hover:text-white hover:translate-x-1 transition inline-block">Accessibility</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white hover:translate-x-1 transition inline-block">Disclaimer</Link></li>
            <li><Link href="/consumer-rights" className="hover:text-white hover:translate-x-1 transition inline-block">Consumer Rights</Link></li>
            <li><Link href="/do-not-sell-or-share-my-personal-information" className="hover:text-white hover:translate-x-1 transition inline-block">Do Not Sell or Share My Info</Link></li>


          </ul>
        </div>

        {/* Company */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="font-semibold text-lg mb-4 border-b border-blue-400 pb-2">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/customer-service" className="hover:text-white transition">Contact us</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link href="/help-center" className="hover:text-white hover:translate-x-1 transition inline-block">FAQ & Help Center</Link></li>
            <li><Link href="/printer-buying-guide" className="hover:text-white hover:translate-x-1 transition inline-block">Printer Buying Guide</Link></li>
            <li><Link href="/guides-resources" className="hover:text-white hover:translate-x-1 transition inline-block">Guides & Resources</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="font-semibold text-lg mb-4 border-b border-blue-400 pb-2">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li>
              Email:
              <br />
              <a
                href="mailto:support@smartprintguide.com"
                className="hover:text-white transition"
              >
                support@smartprintguide.com
              </a>
            </li>
            <li>
              20503 Kohle Springs Ln <br />
              Cypress, TX 77433 <br />
              United States
            </li>
            <li>Support: Monday–Friday, 9am–6pm ET</li>

          </ul>
        </div>

      </div>

      {/* Bottom with Logo and Company Info */}
      <div className="mt-16 border-t border-blue-500 pt-8 text-center text-blue-200 text-sm relative z-10 flex flex-col items-center gap-2">

        <div className="font-bold text-blue-100">Smart Print Guide</div>
        <div className="text-blue-100 mb-4">
          &copy; {new Date().getFullYear()} Smart Print Guide. All rights reserved.
        </div>
        {/* Legal/Disclaimer Content */}
        <div className="w-full max-w-5xl mx-auto px-4 text-xs text-blue-100 text-center leading-relaxed">
          <p>
            <span className="font-semibold text-blue-200">Disclaimer:</span> Smart Print Guide is an independent retailer and is not affiliated with or endorsed by any manufacturer or brand. All trademarks, logos, product names, and images belong to their respective owners and are used for identification and informational purposes only. Product details, pricing, and availability are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;