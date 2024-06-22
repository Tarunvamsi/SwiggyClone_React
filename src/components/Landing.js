import Location from "./Location";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import React from "react";

// courousel start

const imageUrls = [
  "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20240125/pngtree-iftar-food-table-evening-meal-for-ramadan-image_15572060.png",
  "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182536.jpg",
  "https://t4.ftcdn.net/jpg/07/46/74/67/360_F_746746718_4GX7FuzUYxIVLupapbpMZH76nj28uoQU.jpg",
];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //  courousel ends

  return (
    <div className="items-center justify-center">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center mb-8 items-center"
        style={{
          backgroundImage: `url(${imageUrls[currentImageIndex]})`,
        }}
      >
        <div className="bg-black bg-opacity-50 text-center text-white py-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 ">
            Discover Delicious Meals
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Delivered Right to Your Doorstep
          </p>
          <a
            href="#search"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full text-lg font-semibold"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300">
              <h3 className="text-2xl font-semibold mb-4">Variety</h3>
              <p className="text-gray-600">
                Explore a vast selection of restaurants and cuisines.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300">
              <h3 className="text-2xl font-semibold mb-4">Speed</h3>
              <p className="text-gray-600">
                Fast and reliable delivery, ensuring your food arrives hot and
                fresh.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300">
              <h3 className="text-2xl font-semibold mb-4">Convenience</h3>
              <p className="text-gray-600">
                Easy-to-use platform with secure payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300 ">
              <h3 className="text-2xl font-semibold mb-4">Search</h3>
              <p className="text-gray-600">
                Enter your location to find restaurants near you.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300">
              <h3 className="text-2xl font-semibold mb-4">Select</h3>
              <p className="text-gray-600">
                Choose from a wide range of dishes and restaurants.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4 ">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300">
              <h3 className="text-2xl font-semibold mb-4">Order</h3>
              <p className="text-gray-600">
                Place your order with just a few clicks.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-orange-100 p-6 rounded-xl shadow-lg hover:bg-green-300">
              <h3 className="text-2xl font-semibold mb-4">Enjoy</h3>
              <p className="text-gray-600">
                Sit back and relax while we deliver your meal to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Landing;
