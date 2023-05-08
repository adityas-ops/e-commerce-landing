import React from 'react'
import {AiFillStar} from "react-icons/ai"
export default function Chips({name,isStar}) {
  return (
    <div className="w-full h-full flex items-center justify-center rounded-3xl z-0  bg-[#ffffff6c]">
    <div
    className='flex w-[90%] h-[80%]  items-center justify-center rounded-3xl  z-10   bg-white   '>
            <h1
            className='text-xl font-extrabold  text-secondary'>
                {name}
            </h1>
            {isStar? <AiFillStar className='text-[#FFD057] text-2xl ml-1'/>:null}

        </div>

</div>
  )
}
