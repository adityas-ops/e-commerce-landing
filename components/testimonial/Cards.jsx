import Image from 'next/image'
import React from 'react'

function Cards({item}) {
  return (
    <>
        <div
        className='w-[280px] h-[250px] flex flex-col justify-start items-start  relative object-cover'>
            <div
                 className='w-[70%] h-full bg-[#FFCB7C] flex justify-center items-center'>
            <Image
            className='w-[97%] h-[98%]'
            src={item.image}
            alt="profile"
            width={300}
            height={200}
            loading="lazy"
            />
            </div>
            <div className="w-[80%] h-[40%] bg-[#c5a56a95] absolute right-1 bottom-4 rounded-lg flex justify-center items-center">
                <div
                className='w-[97%] h-[93%] flex flex-col justify-start items-start bg-[#FFCB7C] rounded-lg'>
                    <p
                    className="text-lg p-1 pl-2 text-start font-bold text-secondary leading-relaxed">
                        {item.name}
                    </p>
                    <p
                    className="text-[14px] w-full p-1 pl-2 text-start font-regular text-black-400 leading-relaxed">
                        {item.say}
                    </p>

                </div>
            </div>
        </div>
           
    </>
  )
}

export default Cards