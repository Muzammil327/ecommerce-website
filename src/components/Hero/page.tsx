import React from "react";

export default function Hero() {
  return (
    <>
     <div className="grid md:grid-cols-3 my-12 gap-5">
     <div className="block1 wrap-pic-w relative overflow-hidden">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"
          alt="IMG-BANNER"
          className="block1-img block w-full"
        />
        <div className="block1-overlay absolute top-0 left-0 flex justify-between flex-col w-full h-full opacity-0 p-5">
          <div className="head mt-6">
            <span className="block1-text-top text-white text-3xl">Women</span>{" "}
            <br />
            <span className="block1-text-bottom text-white block">
              Spring 2018
            </span>
          </div>
          <a href="#" className="block1-link min-w-28">
            Shop Now
          </a>
        </div>
      </div>
      <div className="block1 wrap-pic-w relative overflow-hidden">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"
          alt="IMG-BANNER"
          className="block1-img block w-full"
        />
        <div className="block1-overlay absolute top-0 left-0 flex justify-between flex-col w-full h-full opacity-0 p-5">
          <div className="head mt-6">
            <span className="block1-text-top text-white text-3xl">Women</span>{" "}
            <br />
            <span className="block1-text-bottom text-white block">
              Spring 2018
            </span>
          </div>
          <a href="#" className="block1-link min-w-28">
            Shop Now
          </a>
        </div>
      </div>
      <div className="block1 wrap-pic-w relative overflow-hidden">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"
          alt="IMG-BANNER"
          className="block1-img block w-full"
        />
        <div className="block1-overlay absolute top-0 left-0 flex justify-between flex-col w-full h-full opacity-0 p-5">
          <div className="head mt-6">
            <span className="block1-text-top text-white text-3xl">Women</span>{" "}
            <br />
            <span className="block1-text-bottom text-white block">
              Spring 2018
            </span>
          </div>
          <a href="#" className="block1-link min-w-28">
            Shop Now
          </a>
        </div>
      </div>
     </div>
    </>
  );
}
