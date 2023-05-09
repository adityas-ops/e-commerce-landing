import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'


export default function Cards({item}) {
  
  return (
   <>
        <div  className="w-[350px] h-[380px] bg-[#ffffff] rounded-[20px] flex m-5  flex-col items-center  justify-center shadow-2xl transition-all duration-300 hover:scale-105">
          <div  
          className="w-[90%] flex items-center justify-center relative">
            <Image
              className="h-[220px] w-full object-cover rounded-xl"
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              loading="lazy"
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
          <div className="w-[80%] flex items-center justify-between mt-4">
            <h1 className="text-xl font-bold text-secondary">
              {item.title}
            </h1>
            <h1 className="text-xl">
              {item.price}
            </h1>
          </div>
            <div className="w-[80%] flex items-center justify-between m-4">
                <div 
                    className=' flex justify-center items-center'
                >
                    <h1 className="text-md text-slate  text-secondary  font-regular">
                        {
                            item.description
                        }
                    </h1>
                </div>
                <div 
                className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center'
                >
                    <FiShoppingCart className='text-xl text-white'/>
                </div>
            </div>
        </div>
   </>
  )
}
