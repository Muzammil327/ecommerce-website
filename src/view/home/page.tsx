import { ProducTypes } from "@/components/product/card/type";
import Container from "@/components/element/container/page";
import ProductCard from "@/components/product/card/page";
import Hero from "@/components/Hero/page";
import HeroSlider from "@/components/HeroSlider/page";
import TopProductSlider from "@/components/product/topProductSlider/page";

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

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Container>
        <Hero />
        <div className="flex items-center justify-between my-5">
        <h1 className="text-2xl font-semibold">Trending Product</h1>
        <ul className="flex items-center gap-4">
          <li><a href="/">Men Fashion</a></li>
          <li><a href="/">Women Fashion</a></li>
          <li><a href="/">Children Fashion</a></li>
        </ul>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-12 mb-10">
          {products.map((data: ProducTypes) => (
            <>
              <ProductCard product={data} key={data.id} />
            </>
          ))}
        </div>
        <div className=" flex items-center justify-center">
          <button className="bg-red-400 rounded-lg py-2 px-6 text-white">
            Load More
          </button>
        </div>
        <h1 className="text-2xl font-semibold my-5">Top Rated Products</h1>
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-12 mb-40"> */}
          {/* {products.splice(0, 4).map((data: ProducTypes) => (
            <>
              <ProductCard product={data} key={data.id} />
            </>
          ))} */}
          <TopProductSlider />
        {/* </div> */}
      </Container>
    </>
  );
}
