"use client"; //client-side rendering

import Image from "next/image";
import * as React from "react";

// Define the ProductItem type
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

// ProductCard
interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-5">
        <div className="flex flex-col max-w-full w-[305px] ">
          <Image
            loading="lazy"
            src={product.image}
            alt={product.name}
            width={105}
            height={105}
            className="object-contain w-full aspect-[0.81]"
          />
        </div>
        <div className="flex flex-col self-start mt-6 text-indigo-950">
          <div className="text-xl leading-snug">{product.name}</div>
          <div className="mt-2 text-lg">£{product.price}</div>
        </div>
      </div>
    </div>
  );
};

// ProductGrid component
const ProductGrid: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: 1,
      name: "The chair",
      price: 250,
      image: "/images/chair.png",
    },
    {
      id: 2,
      name: "Rustic Vase Set",
      price: 155,
      image: "/images/Vase.png",
    },
    {
      id: 3,
      name: "The Silky Vase",
      price: 125,
      image: "/images/silky.png",
    },
    {
      id: 4,
      name: "The lamp",
      price: 399,
      image: "/images/lamp.png",
    },
  ];

  return (
    <div className="justify-center px-20 py-6 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
