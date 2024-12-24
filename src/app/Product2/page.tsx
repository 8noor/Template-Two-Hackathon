import Image from "next/image";
import * as React from "react";
import Product from "@/app/Product/page";
import Product3 from "@/app/Product3/page";


// Interfaces
export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export interface NavigationItemProps {
  label: string;
}

export interface FilterButtonProps {
  label: string;
}

// Components

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
}) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-5">
        <div className="flex flex-col max-w-full w-[305px]">
          <Image
            loading="lazy"
            src={image || "/images/lamp.png"}
            alt={title || "Default title"}
            className="object-contain w-full aspect-[0.81]"
            width={305}
            height={250}
          />
        </div>
        <div className="flex flex-col self-start mt-6 text-indigo-950">
          <div className="text-xl leading-snug">{title || "Untitled"}</div>
          <div className="mt-2 text-lg">£{price ?? "N/A"} </div>
        </div>
      </div>
    </div>
  );
};

export const NavigationItem: React.FC<NavigationItemProps> = ({ label }) => {
  return <div className="text-base text-gray-500">{label}</div>;
};

export const FilterButton: React.FC<FilterButtonProps> = ({ label }) => {
  return (
    <div className="flex overflow-hidden gap-2 items-center px-6 py-3 whitespace-nowrap bg-white max-md:px-5">
      <div className="self-stretch my-auto">{label}</div>
      <Image
        loading="lazy"
        src="/image/Caret--down.png"
        alt="Filter Icon"
        className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
        width={16}
        height={16}
      />
    </div>
  );
};

// Navigation Items and Filters
const navigationItems = [
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
];

const filterButtons = ["Category", "Product type", "Price", "Brand"];

// Products Data
const products = [
  {
    image: "/images/chair.png",
    title: "The Dandy Chair",
    price: 250,
  },
  {
    image: "/images/vase.png",
    title: "Rustic Vase Set",
    price: 155,
  },
  {
    image: "/images/silky.png",
    title: "The Silky Vase",
    price: 125,
  },
  {
    image: "/images/lamp.png",
    title: "The Lucy Lamp",
    price: 399,
  },
];

// Main Component
const ProductListing: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Navigation Header */}
      <div className="flex overflow-hidden flex-col px-7 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:mr-0.5 max-md:max-w-full">
          <Image
            loading="lazy"
            src="/images/search.png"
            alt="Logo"
            className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
            width={16}
            height={16}
          />
          <div className="self-stretch text-2xl text-zinc-800">Avion</div>
          <div className="flex gap-4 self-stretch my-auto">
            <Image
              loading="lazy"
              src="/images/cart.png"
              alt="Cart Icon"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
              width={16}
              height={16}
            />
            <Image
              loading="lazy"
              src="/images/account.png"
              alt="Account Icon"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 items-start self-center mt-5 max-md:max-w-full">
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} label={item} />
          ))}
        </div>
      </div>


      <div className="relative w-full h-28 overflow-hidden">
  <Image
    src="/image/Frame.png"
    alt="Background"
    width={800}
    height={800}
    className="w-full h-full object-cover"
  />
  
</div>






      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-10 justify-center px-6 py-2 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-3 items-start text-base min-h-[48px] text-indigo-950 max-md:max-w-full">
          {filterButtons.map((button, index) => (
            <FilterButton key={index} label={button} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <div className="self-stretch my-auto text-sm text-indigo-950">
            Sorting by:
          </div>
          <FilterButton label="Date added" />
        </div>
      </div>
         <Product/>  <Product3/>

      {/* Product Grid */}
      <div className="flex flex-col px-20 py-9 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
        <button className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-12 text-base bg-stone-50 text-indigo-950 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-md:px-5 max-md:mt-10">
          View collection
        </button>
      </div>
    </div>
  );
};

export default ProductListing;


// import Image from "next/image";
// import * as React from "react";
// import Product3 from "@/app/Product3/page";
// import Product from "@/app/Product/page";

// // Interfaces
// export interface ProductCardProps {
//   image: string;
//   title: string;
//   price: number;
// }

// export interface NavigationItemProps {
//   label: string;
// }

// export interface FilterButtonProps {
//   label: string;
// }

// // Components
// export const ProductCard: React.FC<ProductCardProps> = ({
//   image,
//   title,
//   price,
// }) => {
//   return (
//     <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col grow max-md:mt-5">
//         <div className="flex flex-col max-w-full w-[305px]">
//           <Image
//             loading="lazy"
//             src={image || "/images/lamp.png"}
//             alt={title || "Default title"}
//             className="object-contain w-full aspect-[0.81]"
//             width={305}
//             height={250}
//           />
//         </div>

//         <div className="flex flex-col self-start mt-6 text-indigo-950">
//           <div className="text-xl leading-snug">{title || "Untitled"}</div>
//           <div className="mt-2 text-lg">£{price ?? "N/A"} </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const NavigationItem: React.FC<NavigationItemProps> = ({ label }) => {
//   return <div className="text-base text-gray-500"> {label} </div>;
// };

// export const FilterButton: React.FC<FilterButtonProps> = ({ label }) => {
//   return (
//     <div className="flex overflow-hidden gap-2 items-center px-6 py-3 whitespace-nowrap bg-white max-md:px-5">
//       <div className="self-stretch my-auto">{label} </div>
//       <Image
//         loading="lazy"
//         src="/image/Caret--down.png"
//         alt="Filter Icon"
//         className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
//         width={16}
//         height={16}
//       />
//     </div>
//   );
// };

// // Main Page Component
// const navigationItems = [
//   "Plant pots",
//   "Ceramics",
//   "Tables",
//   "Chairs",
//   "Crockery",
//   "Tableware",
//   "Cutlery",
// ];


// const filterButtons = ["Category", "Product type", "Price", "Brand"];

// const products = [
//   {
//     image: "/image/chair.png",
//     title: "The Dandy chair",
//     price: 250,
//   },
//   {
//     image: "/image/vase.png",
//     title: "Rustic Vase Set",
//     price: 155,
//   },
//   {
//     image: "/image/silky.png",
//     title: "The Silky Vase",
//     price: 125,
//   },
//   {
//     image: "/image/lamp.png",
//     title: "The Lucy Lamp",
//     price: 399,
//   },

//   {
//     image: "/image/silky.png",
//     title: "The Lucy Lamp",
//     price: 399,
//   },
// ];

// const ProductListing: React.FC = () => {
//   return (
//     <div className="flex flex-col bg-white">
//       {/* Navigation Header */}
//       <div className="flex overflow-hidden flex-col px-7 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:mr-0.5 max-md:max-w-full">
//           <Image
//             loading="lazy"
//             src="/image/search.png"
//             alt="Logo"
//             className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
//             width={16}
//             height={16}
//           />

//           <div className="self-stretch text-2xl text-zinc-800">Avion</div>
//           <div className="flex gap-4 self-stretch my-auto">
//             <Image
//               loading="lazy"
//               src="/image/cart.png"
//               alt="Cart Icon"
//               className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
//               width={16}
//               height={16}
//             />
//             <Image
//               loading="lazy"
//               src="/image/account.png"
//               alt="Account Icon"
//               className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
//               width={16}
//               height={16}
//             />
//           </div>
//         </div>

//         <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
//         <div className="flex flex-wrap gap-10 items-start self-center mt-5 max-md:max-w-full">
//           {navigationItems.map((item, index) => (
//             <NavigationItem key={index} label={item} />
//           ))}
//         </div>
//       </div>
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-10 justify-center px-6 py-2 w-full bg-white max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-wrap gap-3 items-start text-base min-h-[48px] text-indigo-950 max-md:max-w-full">
//           {filterButtons.map((button, index) => (
//             <FilterButton key={index} label={button} />
//           ))}
//         </div>

//         <div className="flex gap-4 items-center">
//           <div className="self-stretch my-auto text-sm text-indigo-950">
//             Sorting by:
//           </div>

//           <FilterButton label="Date added" />
//         </div>
//       </div>
//       <Product /> <Product3 />
//       {/* Product Grid */}
//       <div className="flex flex-col px-20 py-9 w-full bg-white max-md:px-5 max-md:max-w-full">
//         <div className="max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             {products.map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//           </div>
//         </div>

//         <button className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-12 text-base bg-stone-50 text-indigo-950 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-md:px-5 max-md:mt-10">
//           View collection
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;
