import Image from "next/image";
import React from "react";
// import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <>
      <div className="bg-cuaternary w-full h-28 z-10">
        <header className="w-full h-full flex  items-center">
          <div className=" w-1/2 h-full flex justify-center items-center">
            <Image src="/adi.png" width="180" height="50" />
          </div>
          <ul className="w-1/2 h-full  justify-center items-center laptop:flex desktop:flex hidden">
            <li className="mx-4">
              <a className="text-lg" href="#">
                About us
              </a>
            </li>
            <li className="mx-4">
              <a className="text-lg" href="#">
                Our Product
              </a>
            </li>
            <li className="mx-4">
              <a className="text-lg" href="#">
                Delivery
              </a>
            </li>
          </ul>
          <div className="w-1/2 h-full flex justify-center items-center">
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  class="h-6 w-6 fill-current text-gray-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 12a5.5 5.5 0 1 1 3.914-1.622l3.956 3.956-.88.88-3.956-3.956A5.47 5.47 0 0 1 6.5 12zm0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 6.5 2z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder=" cappucino"
                class=" rounded-full py-2 pl-8 pr-4 w-full border-none shadow-lg"
              />
            </div>
           <div 
              className="flex justify-center items-center mx-4 z-40" 
              >
                <FiShoppingCart className="text-2xl" />
              </div>

          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
