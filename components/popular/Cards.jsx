import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Chips from "../intro/Chips";

export default function Cards({ item }) {
  return (
    <>
      <div className="w-[350px] h-[380px] bg-[#ffffff7a] rounded-[20px] flex items-center justify-center mx-4 shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="w-[95%] h-[95%] bg-[#ffffff] rounded-[20px] flex  flex-col items-center  justify-center">
          <div className="w-[90%] flex items-center justify-center relative">
            <Image
              className="h-[220px] w-full object-cover rounded-xl"
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
            />
            <div className="w-[70px] h-[30px] bg-[#ffffff7a] rounded-full flex items-center justify-center absolute top-2 left-2">
            <div
                className='flex w-[90%] h-[80%]  items-center justify-center rounded-3xl  z-10   bg-white   '>
                    <p
                    className='text-sm font-extrabold  text-secondary'>
                        {item.rating}
                    </p>
                    <AiFillStar className='text-[#FFD057] text-md ml-1'/>
                </div>
            </div>
          </div>
          <div className="w-[90%] flex items-center justify-between mt-4">
            <h1 className="text-xl font-extrabold text-secondary">
              {item.name}
            </h1>
            <h1 className="text-xl">
              {item.price}
            </h1>
          </div>
            <div className="w-[90%] flex items-center justify-between m-4">
                <div 
                    className='flex justify-center items-center'
                >
                    <h1 className="text-lg text-slate border-2 px-4 rounded-lg border-tercary text-tercary  font-bold">
                        Hot
                    </h1>
                    <h1 className="text-lg text-slate border-2 px-4 rounded-lg border-tercary text-tercary mx-4 font-bold">
                        Cold
                    </h1>


                </div>
                <div 
                className='w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center'
                >
                    <FiShoppingCart className='text-xl text-white'/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
