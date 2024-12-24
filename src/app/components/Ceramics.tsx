import Image from "next/image";
import React from "react";

const Ceramics = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-2xl font-semibold">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={"/images/chair.png"}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $250
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={"/images/vase.png"}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $155
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={"/images/silky.png"}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $125
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={"/images/lamp.png"}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $399
                </p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <button className=" w-[140px] h-[57px] bg-transparent text-gray border border-gray-600 font-bold mt-12 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300">
              View collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceramics;
