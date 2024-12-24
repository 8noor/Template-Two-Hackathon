
import Image from "next/image";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";



const ProductListing = () => {
  const features = [
    {
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard.",
      icon: TbTruckDelivery,
    },
    {
      title: "Made by true artisans",
      description:
        "Hand-crafted goods made with real passion and craftsmanship.",
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: "Unbeatable prices",
      description:
        "For our material and quality, you won’t find better prices anywhere.",
      icon: MdOutlinePriceChange,
    },
    {
      title: "Recycled packaging",
      description:
        "We use 100% recycled packaging to ensure our footprint is manageable.",
      icon: LuSprout,
    },
  ];

  return (
    <>
       <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12"> 
          {/* Main Product Section */}
           <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-6/5 h-auto">
              <Image
                src={"/image/Hero Blocks.png"}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            </div> 
            <div className="text-center mt-8 font-semibold">What makes our brand different</div>



{/* Features Section */}
<div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col md:w-1/4 p-4 rounded-lg"
                >
                  <Icon size={30} className="text-[#2A254B]" />
                  <p className="py-4 font-semibold">{feature.title}</p>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>







          {/* Suggestions Section */}
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {["chair", "vase", "silky", "lamp"].map((item, idx) => (
              <div key={idx} className="w-full">
                <Image
                  src={`/images/${item}.png`}
                  height={700}
                  width={700}
                  alt={item}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-2">
                    {item === "chair" ? "The Dendy Chair" : `The ${item}`}
                  </p>
                  <p className="text-white border px-2 py-2 bg-indigo-400 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300 rounded-md cursor-pointer">
                    ${item === "chair" ? 250 : item === "vase" ? 155 : 125}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <button className="w-[140px] h-[57px] bg-transparent text-gray border border-gray-600 font-bold hover:bg-blue-600 hover:text-white active:bg-blue-800 transition duration-300">
              View collection
            </button>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default ProductListing;
