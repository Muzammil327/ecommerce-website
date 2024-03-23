import { CSSProperties } from "react";
import Container from "@/src/components/element/container/page";
import React from "react";

export default function Cart() {
  return (
    <Container>
      <div className="grid md:grid-cols-6 gap-2 my-20">
        <div className="md:col-span-4">
          <div className="mb-5 overflow-x-auto">
            <div className="table-container overflow-x-auto">
              <table className="w-full border-collapse table-auto overflow-x-auto">
                <thead className="overflow-x-auto">
                  <tr className="border-b-[1px] border-solid border-[#ebebeb] text-left">
                    <th className="lg:px-6 md:px-5 sm:px-4 px-2 py-3 md:text-xl text-lg text-gray-800">
                      Products
                    </th>
                    <th className="lg:px-6 md:px-5 sm:px-4 px-2 py-3 md:text-xl text-lg text-gray-800">
                      Quantity
                    </th>
                    <th className="lg:px-6 md:px-5 sm:px-4 px-2 py-3 md:text-xl text-lg text-gray-800">
                      Total
                    </th>
                    <th className="lg:px-6 md:px-5 sm:px-4 px-2 py-3 md:text-xl text-lg text-gray-800">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="overflow-x-auto">
                  <tr className="my-4 py-4">
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb]">
                      <div className="flex lg:items-center lg:gap-4 lg:flex-row flex-col">
                        <span className="image">
                          <img
                            src="https://preview.colorlib.com/theme/aroma/img/cart/cart1.png.webp"
                            alt=""
                            className="w-32 h-auto"
                          />
                        </span>
                        <div className="detail flex flex-col items-left justify-center">
                          <span className="name md:text-lg text-base font-semibold py-1">
                            {" "}
                            Vegetable’s Package
                          </span>
                          <span className="price"> $55.00</span>
                        </div>
                      </div>
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb]">
                      <div className="h-[45px] overflow-hidden md:w-[140px] w-[120px] relative flex flex-wrap bg-slate-500">
                        <span className="md:w-[45px] w-[40px] h-full bg-red-100 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                          -
                        </span>
                        <input
                          type="text"
                          value="1"
                          className="md:w-[50px] w-[40px] h-full bg-slate-100 text-center outline-none border-none"
                        />
                        <span className="md:w-[45px] w-[40px] h-full bg-red-100 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                          +
                        </span>
                      </div>
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb] font-semibold">
                      $110.00
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb] ">
                      <span className="icon_close bg-slate-800">
                        <svg
                          className="bg-slate-200 rounded-full p-2 text-white fill-white"
                          width="40px"
                          height="40px"
                          viewBox="0 0 24 24"
                          id="cross"
                          data-name="Flat Line"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="primary"
                            d="M19,19,5,5M19,5,5,19"
                            style={svgStyle}
                          ></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="my-4 py-4">
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb]">
                      <div className="flex lg:items-center lg:gap-4 lg:flex-row flex-col">
                        <span className="image">
                          <img
                            src="https://preview.colorlib.com/theme/aroma/img/cart/cart1.png.webp"
                            alt=""
                            className="w-32 h-auto"
                          />
                        </span>
                        <div className="detail flex flex-col items-left justify-center">
                          <span className="name md:text-lg text-base font-semibold py-1">
                            {" "}
                            Vegetable’s Package
                          </span>
                          <span className="price"> $55.00</span>
                        </div>
                      </div>
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb]">
                      <div className="h-[45px] overflow-hidden md:w-[140px] w-[120px] relative flex flex-wrap bg-slate-500">
                        <span className="md:w-[45px] w-[40px] h-full bg-red-100 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                          -
                        </span>
                        <input
                          type="text"
                          // value=""
                          className="md:w-[50px] w-[40px] h-full bg-slate-100 text-center outline-none border-none"
                        />
                        <span className="md:w-[45px] w-[40px] h-full bg-red-100 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                          +
                        </span>
                      </div>
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb] font-semibold">
                      $110.00
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb] ">
                      <span className="icon_close bg-slate-800">
                        <svg
                          className="bg-slate-200 rounded-full p-2 text-white fill-white"
                          width="40px"
                          height="40px"
                          viewBox="0 0 24 24"
                          id="cross"
                          data-name="Flat Line"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="primary"
                            d="M19,19,5,5M19,5,5,19"
                            style={svgStyle}
                          ></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="my-4 py-4">
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb]">
                      <div className="flex lg:items-center lg:gap-4 lg:flex-row flex-col">
                        <span className="image">
                          <img
                            src="https://preview.colorlib.com/theme/aroma/img/cart/cart1.png.webp"
                            alt=""
                            className="w-32 h-auto"
                          />
                        </span>
                        <div className="detail flex flex-col items-left justify-center">
                          <span className="name md:text-lg text-base font-semibold py-1">
                            {" "}
                            Vegetable’s Package
                          </span>
                          <span className="price"> $55.00</span>
                        </div>
                      </div>
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb]">
                      <div className="h-[45px] overflow-hidden md:w-[140px] w-[120px] relative flex flex-wrap bg-slate-500">
                        <span className="md:w-[45px] w-[40px] h-full bg-red-100 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                          -
                        </span>
                        <input
                          type="text"
                          value="1"
                          className="md:w-[50px] w-[40px] h-full bg-slate-100 text-center outline-none border-none"
                        />
                        <span className="md:w-[45px] w-[40px] h-full bg-red-100 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                          +
                        </span>
                      </div>
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb] font-semibold">
                      $110.00
                    </td>
                    <td className="lg:px-6 md:px-5 sm:px-4 px-2 py-7 border-b-[1px] border-solid border-[#ebebeb] ">
                      <span className="icon_close bg-slate-800">
                        <svg
                          className="bg-slate-200 rounded-full p-2 text-white fill-white"
                          width="40px"
                          height="40px"
                          viewBox="0 0 24 24"
                          id="cross"
                          data-name="Flat Line"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="primary"
                            d="M19,19,5,5M19,5,5,19"
                            style={svgStyle}
                          ></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="coupon flex items-center gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="rounded-full py-2 px-5 outline-none w-full border"
            />
            <button className="py-3 px-16 bg-red-500 text-white rounded-full text-lg font-semibold">
              Apply
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <div className="cart-total bg-slate-100 rounded-md p-4">
            <span className="flex items-center justify-center pb-3 text-xl font-bold">
              Cart Total
            </span>
            <div className="total flex items-center justify-between mt-8">
              <span>Sub Total</span>
              <span>400$</span>
            </div>
            <div className="tax my-4 flex items-center justify-between">
              <span>Delivery Charges</span>
              <span>400$</span>
            </div>
            <div className="total border-t py-2 flex items-center justify-between">
              <span>Total</span>
              <span>400$</span>
            </div>
            <button className="py-3 mt-6 px-16 bg-red-500 text-white rounded-md  block w-full text-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const svgStyle: CSSProperties = {
  stroke: "rgb(0, 0, 0)",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
};
