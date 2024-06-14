import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">
            1234 Street Name, City, State, 12345
          </p>
          <p className="text-gray-300 mb-2">Email: info@restaurantfinder.com</p>
          <p className="text-gray-300">Phone: (123) 456-7890</p>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; 2024 Restaurant Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
