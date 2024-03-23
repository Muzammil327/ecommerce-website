"use client";
import Container from "@/src/components/element/container/page";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-flip';

// import required modules
import { Autoplay } from "swiper/modules";
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

function ProductDetails() {
  return (
    <>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 my-8 gap-5">
          <div className="">
            <div className="img">
              <Swiper
                   effect={'flip'}
                   grabCursor={true}
                   autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                   loop={true}
                   modules={[EffectFlip, Pagination, Navigation,Autoplay]}
                   className="mySwipe"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="py-12">
            <span className="text-gray-500">MANGO</span>
            <h1 className="text-3xl font-bold my-4">
              One Shoulder Glitter Midi Dress
            </h1>
            <div className="price flex gap-4">
              <span className="line-through font-semibold text-xl text-gray-700">
                {" "}
                $65.00
              </span>
              <span className="font-semibold text-red-500 text-2xl">
                {" "}
                $49.00
              </span>
            </div>
            <p className="mt-4 mb-12 text-base text-gray-500">
              Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
              ante. Aenean finibus velit id urna vehicula, nec maximus est
              sollicitudin.
            </p>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Color</h4>

              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <span className="flex items-center space-x-3">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input
                      type="radio"
                      name="color-choice"
                      value="White"
                      className="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <span id="color-choice-0-label" className="sr-only">
                      White
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>

                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Gray"
                      className="sr-only"
                      aria-labelledby="color-choice-1-label"
                    />
                    <span id="color-choice-1-label" className="sr-only">
                      Gray
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>

                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Black"
                      className="sr-only"
                      aria-labelledby="color-choice-2-label"
                    />
                    <span id="color-choice-2-label" className="sr-only">
                      Black
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                </span>
              </fieldset>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">Size</h4>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>

              <fieldset className="mt-4">
                <legend className="sr-only">Choose a size</legend>
                <div className="grid grid-cols-4 gap-4">
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XXS"
                      className="sr-only"
                      aria-labelledby="size-choice-0-label"
                    />
                    <span id="size-choice-0-label">XXS</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XS"
                      className="sr-only"
                      aria-labelledby="size-choice-1-label"
                    />
                    <span id="size-choice-1-label">XS</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="S"
                      className="sr-only"
                      aria-labelledby="size-choice-2-label"
                    />
                    <span id="size-choice-2-label">S</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="M"
                      className="sr-only"
                      aria-labelledby="size-choice-3-label"
                    />
                    <span id="size-choice-3-label">M</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="L"
                      className="sr-only"
                      aria-labelledby="size-choice-4-label"
                    />
                    <span id="size-choice-4-label">L</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XL"
                      className="sr-only"
                      aria-labelledby="size-choice-5-label"
                    />
                    <span id="size-choice-5-label">XL</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XXL"
                      className="sr-only"
                      aria-labelledby="size-choice-6-label"
                    />
                    <span id="size-choice-6-label">XXL</span>

                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XXXL"
                      disabled
                      className="sr-only"
                      aria-labelledby="size-choice-7-label"
                    />
                    <span id="size-choice-7-label">XXXL</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line
                          x1="0"
                          y1="100"
                          x2="100"
                          y2="0"
                          vector-effect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </fieldset>
              <div className="btn my-5 flex items-center justify-between gap-4">
                <button className="bg-red-400 hover:bg-white transition-all hover:text-black py-3 px-6 rounded-md text-white w-full block border-2 border-solid border-red-400">
                  Add to Cart
                </button>
                <button className="py-3 px-6 rounded-md text-white border-2 border-solid border-red-400">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20px"
                    height="20px"
                    viewBox="0 0 128 128"
                    enable-background="new 0 0 128 128"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#F44336"
                      d="M92,8c15.324,0,27.813,12.375,27.996,27.656c-0.055,0.422-0.098,0.844-0.109,1.281l-0.051,3.172
	c-2.652,24.742-37.203,60.523-55.84,77.273c-18.5-16.617-52.695-52-55.773-76.742l-0.109-3.703C8.102,36.523,8.063,36.109,8,35.656
	C8.188,20.375,20.676,8,36,8c8.422,0,16.352,3.875,21.754,10.625L64,26.43l6.246-7.805C75.648,11.875,83.578,8,92,8 M92,0
	C80.621,0,70.598,5.383,64,13.625C57.402,5.383,47.379,0,36,0C16.117,0,0,16.117,0,36c0,0.398,0.105,0.773,0.117,1.172H0
	C0,74.078,64,128,64,128s64-53.922,64-90.828h-0.117C127.895,36.773,128,36.398,128,36C128,16.117,111.883,0,92,0L92,0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default ProductDetails;
