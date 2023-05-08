import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Chips from './Chips';

function Intro() {
  return (
    <div 
     className='w-full  flex items-center justify-center'>
        <div
        className='flex w-full h-3/4 bg-cuaternary'>
            <div
            className=' flex-1 w-1/2  flex items-center justify-center h-[500px]'>
                <div
                className='flex flex-col items-center justify-center w-3/4'>
                    <h1
                    className='text-5xl font-extrabold text-secondary leading-relaxed'>
                      Enjoy your <span className="text-primary">coffee</span> before your activity
                    </h1>
                    <p
                    className='text-xl text-slate  font-light leading-relaxed mt-4'>
                        Boost your productivity and build your mood with a glass of coffee in the morning
                    </p>
                    <div
                    className=' w-full flex items-center justify-start mt-8'>
                        <button
                        className='bg-secondary flex items-center justify-evenly  text-white px-8 py-3 rounded-full w-52 mr-4 hover:bg-primary'>
                            Order Now 
                            <div 
                            className='bg-primary p-1 rounded-full '
                            >
                            <FiShoppingCart/>
                            </div>
                        </button>
                        <p 
                        className=' text-primary font-light leading-relaxed ml-8'
                        >
                            more menu
                        </p>
                    </div>
                </div>
            </div>
            <div
            className='flex-1 w-1/2 flex relative items-center justify-center'>
            <div
            className=' h-[450px] w-[450px]  bg-secondary flex items-center justify-center rounded-full'>
                <img
                className='h-[350px] w-[350px] object-cover'
                src='/image/coffee.png'
                alt='coffee'
                />
            </div>
            {/*  chips  */}
            <div
            className='flex flex-col items-center justify-center w-[100px] h-[50px] absolute right-[150px] inset-y-20'>
                <Chips
            name='4.8'
            isStar={true}
            />
            </div>
            <div
            className='flex flex-col items-center justify-center w-[200px] h-[50px] absolute left-[150px] top-4'>
                <Chips
            name='Cappucino'
            isStar={false}
            />
            </div>
            <div
            className='flex flex-col items-center justify-center w-[100px] h-[50px] absolute left-[140px] bottom-20'>
                <Chips
            name='18K'
            isStar={false}
            />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Intro