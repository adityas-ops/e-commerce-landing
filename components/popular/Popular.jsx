import React from 'react'
import Cards from './Cards'
function Popular() {
    const cards = [
        {
            name: ' Vanilla Latte',
            price: '21K',
            image: '/image/popular/coffee1.png',
            rating:'4.2'
        },
        {
            name: 'Hazelnut Latte',
            price: '21K',
            image: '/image/popular/c3.png',
            rating:'4.7'
        },
        {
            name: 'Espresso',
            price: '20K',
            image: '/image/popular/c2.png',
            rating:'4.8'
        }
    ]

  return (
   <>
   <div className='w-full h-[700px] relative  flex items-start justify-center'>
    <div 
    className='w-full  h-[300px] items-center bg-cuaternary justify-center'>
    <h1
    className='text-3xl text-start ml-[5%] font-medium text-secondary leading-relaxed'>
        Popular <span className=" border-b-4 border-primary ">Now</span>
    </h1>
    </div>
    <div 
    className='w-5/6 flex h-[350px] z-20 absolute bottom-[150px] items-center bg-tercary rounded-[80px] justify-center'>
    <div 
        className='w-[92%] flex h-[350px] z-10 absolute bottom-[90px] items-center justify-evenly'>
        {
            cards.map((item,index)=>(
                <Cards
                key={index}
                item={item}
                />
            ))
        }
    </div>
    </div>
    </div>
   </>
  )
}

export default Popular