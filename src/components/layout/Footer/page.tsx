import Container from "@/components/element/container/page";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-200">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-12">
          <div className="first">
            <img
              src="https://preview.colorlib.com/theme/ogani/img/logo.png"
              alt="logo"
              className="my-5"
            />
            <ul>
              <li className="text-slate-900 my-2 text-base">
                <span className="font-semibold">Address:</span> 60-49 Road 11378
                New York
              </li>

              <li className="text-slate-900 my-2 text-base">
                <span className="font-semibold">Phone:</span> +65 11.188.888
              </li>

              <li className="text-slate-900 my-2 text-base">
                <span className="font-semibold">Email:</span> hello@colorlib.com
              </li>
            </ul>
          </div>
          <div className="second">
            <h3 className="text-lg font-bold mb-3 text-black">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-2 items-center">
              <li className="mb-1 text-lg text-slate-800">Home</li>
              <li className="mb-1 text-lg text-slate-800">About Us</li>
              <li className="mb-1 text-lg text-slate-800">Contact Us</li>
              <li className="mb-1 text-lg text-slate-800">About Our Shop</li>
              <li className="mb-1 text-lg text-slate-800">Secure Shopping</li>
              <li className="mb-1 text-lg text-slate-800">
                Delivery infomation
              </li>
              <li className="mb-1 text-lg text-slate-800">Our Services</li>
              <li className="mb-1 text-lg text-slate-800">Projects</li>
              <li className="mb-1 text-lg text-slate-800">Contact</li>
              <li className="mb-1 text-lg text-slate-800">Innovation</li>
            </ul>
          </div>
          <div className="third">
            <h3 className="text-lg font-bold mb-3 text-black">
              Join Our Newsletter Now
            </h3>
            <p className="mb-7 text-gray-600 text-sm">
              Get E-mail updates about our latest shop and special offers.
            </p>

            <div className="input min-w-full flex items-center my-4">
              <input
                type="text"
                className="h-12 outline-none border-none px-4 w-full"
                placeholder="Enter your Email"
              />
              <button className="bg-indigo-400 py-3 px-6 text-white font-bold">
                Subscribe
              </button>
            </div>

            <div className="social">
              <ul className="flex gap-3">
                <li className="h-11 rounded-full w-11 bg-indigo-500 p-2 flex items-center justify-center">
                  <svg
                    fill="#fff"
                    width="20px"
                    height="20px"
                    viewBox="-7 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    className="jam jam-facebook text-white"
                  >
                    <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
                  </svg>
                </li>
                <li className="h-11 rounded-full w-11 bg-indigo-500 p-2 flex items-center justify-center">
                  <svg
                   fill="#fff"
                   width="20px"
                   height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16 12v-.001c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4c1.104 0 2.104-.448 2.828-1.171.723-.701 1.172-1.682 1.172-2.768 0-.021 0-.042-.001-.063v.003zm2.16 0c-.012 3.379-2.754 6.114-6.135 6.114-3.388 0-6.135-2.747-6.135-6.135s2.747-6.135 6.135-6.135c1.694 0 3.228.687 4.338 1.797 1.109 1.08 1.798 2.587 1.798 4.256 0 .036 0 .073-.001.109v-.005zm1.687-6.406v.002c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44c.398 0 .758.161 1.018.422.256.251.415.601.415.988v.029-.001zm-7.84-3.44-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014c-1.044.425-1.857 1.237-2.272 2.254l-.01.027c-.119.318-.219.695-.284 1.083l-.005.037c-.082.469-.14 1.024-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649.008 1.195-.008 1.195 0 1.649.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043c.425 1.044 1.237 1.857 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024 1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014c1.044-.425 1.857-1.237 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649-.008-1.195.008-1.195 0-1.649-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073c-.07-.425-.17-.802-.303-1.163l.014.043c-.425-1.044-1.237-1.857-2.254-2.272l-.027-.01c-.318-.119-.695-.219-1.083-.284l-.037-.005c-.469-.082-1.024-.14-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zm11.993 9.846q0 3.578-.08 4.953c.005.101.009.219.009.337 0 3.667-2.973 6.64-6.64 6.64-.119 0-.237-.003-.354-.009l.016.001q-1.375.08-4.953.08t-4.953-.08c-.101.005-.219.009-.337.009-3.667 0-6.64-2.973-6.64-6.64 0-.119.003-.237.009-.354l-.001.016q-.08-1.375-.08-4.953t.08-4.953c-.005-.101-.009-.219-.009-.337 0-3.667 2.973-6.64 6.64-6.64.119 0 .237.003.354.009l-.016-.001q1.375-.08 4.953-.08t4.953.08c.101-.005.219-.009.337-.009 3.667 0 6.64 2.973 6.64 6.64 0 .119-.003.237-.009.354l.001-.016q.08 1.374.08 4.953z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-4 border-t-[1px] border-solid border-gray-300 ">
        <Container>
          <div className="">
            <p className="text-gray-500 md:text-left text-center">
              Copyright ©2024 All rights reserved.
            </p>
          </div>
          <div className=""></div>
        </Container>
      </div>
    </footer>
  );
}
