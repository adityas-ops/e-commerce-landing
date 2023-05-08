import React from "react";

const Services = [
    {
        image:'/image/services/se1.png',
        title:'Choose your Coffee',
        description:'There are 20+ coffee for you.'
    },
    {
        image:'/image/services/se2.png',
        title:'we delivery it to you.',
        description:'Choose your delivery services.'
    },
    {
        image:'/image/services/se3.png',
        title:"Enjoy your coffee",
        description:'Choose your Deliveryservices.'
    }
]

function Service() {
  return (
    <>
      <div className="w-full  h-[500px] flex flex-col items-start justify-center">
        <div className="w-3/4 h-[70px] flex items-center justify-start">
          <h1 className="text-3xl text-start ml-[5%] font-medium text-secondary leading-relaxed">
            How to use delivery{" "}
            <span className="border-b-4 border-primary">Service</span>
          </h1>
        </div>
        <div className="w-full h-full">
          <div class="grid grid-cols-3">
            {
                Services.map((service,index)=>{
                    return(
                        <div key={index} className="w-full h-[400px] flex items-center justify-center">
                            <div className="w-[80%] h-[300px] flex items-center justify-center flex-col">
                                <div className="w-[150px] h-[150px] flex items-center justify-center">
                                    <img src={service.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full h-[50px] flex-col flex items-center justify-center mt-3">
                                    <h1 className="text-xl text-center font-medium text-secondary leading-relaxed">
                                        {service.title}
                                    </h1>
                                    <p className="text-center text-black-400 mt-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
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

export default Service;
