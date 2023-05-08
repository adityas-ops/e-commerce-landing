import React from "react";

function Contact() {
  return (
    <>
      <div className="h-[500px] w-full flex justify-center items-center  ">
        <div className="h-[65%] w-[80%] relative">
          <img
            className="w-full h-full object-cover brightness-50 rounded-3xl"
            src="/im.png"
            alt="contact"
          />
          <div className="h-full w-full flex justify-center flex-col items-center absolute bottom-4 right-0">
            <p className="text-3xl text-center font-bold text-white leading-relaxed">
              Subscribe to get 50% discount price
            </p>
            <div class="relative">
              <input
                type="text"
                placeholder=" cappucino"
                class="mt-4 rounded-full py-2 pl-8 pr-4 w-[450px] h-[55px] border-none shadow-lg"
              />
              <span class="absolute bottom-1 right-1 flex items-center pl-2">
                <button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-primary">
                  Order Now
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
