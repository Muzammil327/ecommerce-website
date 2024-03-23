"use client";
import React from "react";

export default function page() {
  const HandleSubmit = async () => {};
  return (
    <>
      <div className="grid md:grid-cols-8 my-10">
        <div className="md:col-span-4">
          <img
            src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
            alt=""
            className="h-screen w-full"
          />
        </div>
        <div className="md:col-span-4 px-8 mt-20">
          <h2 className="text-gray-900 lg:text-3xl md:text-2xl text-xl">
            Create Account
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad.
          </p>
          <form onClick={HandleSubmit} className="mt-10">
            <div className="username mb-4">
              <label
                htmlFor="username"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                UserName :
              </label>
              <input
                type="username"
                id="username"
                className="shadow-sm rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Username"
              />
            </div>

            <div className="email mb-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Email Address :
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Email"
              />
            </div>

            <div className="password mb-4">
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Password :
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Password"
              />
            </div>

            <div className="cpassword mb-4">
              <label
                htmlFor="cpassword"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Confirm Password :
              </label>
              <input
                type="cpassword"
                id="cpassword"
                className="shadow-sm rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Confirm Password"
              />
            </div>

            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create Account
            </button>

            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Already have an account?
              <a
                className="font-semibold text-pink-500 ml-2 transition-colors hover:text-blue-700"
                href="/sign-in"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
