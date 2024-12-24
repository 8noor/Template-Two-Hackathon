import Benefit from "./components/Benefits";
import Brand from "./components/Brand";

import Ceramics from "./components/Ceramics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


import Product from "./components/Products";

import Touch from "./components/Touch";

export default function home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Brand />
      <Ceramics />
      <Product />

      <Benefit />

      <Touch />
    </>
  );
}
