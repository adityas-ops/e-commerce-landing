import React from "react";
import Cards from "./Cards";

const Specials = [
    {
        image:'/image/special/c5.png',
        'title':'Sandwitch',
        'price':'21 K',
        'description':'Bread with meat and vegetable',
        'rating':"4.2",
        'id':1
    },
    {
        image:'/image/special/c6.png',
        'title':'Hot Milk',
        'price':'20 K',
        'description':'Hot milk with less sugar',
        'rating':"4.5",
        'id':2
    },
    {
        image:'/image/special/c7.png',
        'title':'Coffee Icecream',
        'price':'20 K',
        'description':'Coffee icecream with vanilla',
        'rating':"4.3",
        'id':3
    },{
        image:'/image/special/c8.png',
        'title':'Cappucino',
        'price':'25 K',
        'description':'Hot Cappucino',
        'rating':"4.5",
        'id':4
    }
    ,{
        image:'/image/special/c9.png',
        'title':'Moccacinno',
        'price':'28 K',
        'description':'Hot Moccacinno',
        'rating':"4.1",
        'id':5
    }
    ,
    {
        image:'/image/special/c10.png',
        'title':'Waffle Ice Crem',
        'price':'12 K',
        'description':'Waffle Ice Crem',
        'rating':"4.5",
        'id':6
    }
]

function Special() { 
  return (
    <>
      <div className="w-full h-[120vh] flex justify-center items-center">
        <div className="w-[80%] h-full flex justify-center items-center flex-col">
          <div className="w-full h-[70px] flex items-center justify-start">
            <h1 className="text-3xl text-start  font-medium text-secondary leading-relaxed">
              Spacial menu{" "}
              <span className="border-b-4 border-primary">for you</span>
            </h1>
          </div>
          <div class="mt-8 ml=6 w-full h-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3  laptop:grid-cols-3">
           {
                Specials.map((item,index)=>{
                    return(
                        <Cards item={item} key={index}/>
                    )
                }
                )
           }
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
