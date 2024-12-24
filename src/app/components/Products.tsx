"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Product = () => {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push("/productlisting");
  };

  return (
    <>
      <section>
        <div className="px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-2xl">Our Popular Products</h1>

          {/* Flex layout: stacked on small screens, side-by-side on larger screens */}
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* Product 1 */}
            <div className="w-full md:w-[700px] h-auto group">
              <Image
                src={"/images/Large.png"}
                height={800}
                width={800}
                alt="sofa"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Popular Suede Sofa</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $980
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full md:w-[350px] h-auto group">
              <Image
                src={"/images/chair.png"}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dandy Chair</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $250
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full md:w-[350px] h-auto group">
              <Image
                src={"/images/chair1.png"}
                height={900}
                width={900}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dandy Chair</p>
                <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                  $250
                </p>
              </div>
            </div>
          </div>

          {/* View Products Button */}
          <div className="my-10 flex justify-center items-center">
            <Link href={"http://localhost:3000/Product2"}>
              <button
                className="w-[140px] h-[57px] bg-transparent text-gray border border-gray-600 font-bold hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300"
                onClick={navigateToProducts}
              >
                View Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
