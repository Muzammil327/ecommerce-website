"use client";
import Container from "@/components/element/container/page";
import ProductCard from "@/components/product/card/page";
import React, { useEffect, useState } from "react";
import { ProducTypes } from "@/components/product/card/type";
import LeftCatgeory from "./leftCatgeory";

const products: ProducTypes[] = [
  {
    id: 0,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessori",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    cat: "Accessories",
  },
];

export default function ProductPage() {
  return (
    <Container>
      <div className="grid md:grid-cols-10 gap-4 my-12">
        <div className="col-span-2">
            
          <LeftCatgeory />

          {/* <div className="filter-widget mb-10">
            <h4 className="mb-4 font-bold text-xl text-slate-800">Brand</h4>
            <div className="bc-item">
              <label htmlFor="" className="flex items-center gap-3">
                <input type="checkbox" id="bc-calvin" className="h-4 w-4" />
                <span className="text-gray-800">Calvin Klein</span>
              </label>
            </div>
          </div> */}

        </div>
        <div className="col-span-8">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {products.map((data: ProducTypes) => (
              <>
                <ProductCard product={data} key={data.id} />
              </>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
