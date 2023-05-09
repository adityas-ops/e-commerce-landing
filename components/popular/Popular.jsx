import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Popular() {
  const cards = [
    {
      name: " Vanilla Latte",
      price: "21K",
      image: "/image/popular/coffee1.png",
      rating: "4.2",
    },
    {
      name: "Hazelnut Latte",
      price: "21K",
      image: "/image/popular/c3.png",
      rating: "4.7",
    },
    {
      name: "Espresso",
      price: "20K",
      image: "/image/popular/c2.png",
      rating: "4.8",
    },
  ];
  const [ref, inView] = useInView({
    threshold: 0.5,
  });


  const variants = {
    hidden: 
    { opacity: 1,
      x:-120,

    },
    visible:
     { 
      opacity: 1,
      x:0 
    }
  };
  return (
    <>
      <div className="w-full h-[700px] relative  flex items-start justify-center">
        <div className="w-full  h-[300px] items-center bg-cuaternary justify-center">
          <h1 className="text-3xl text-start ml-[5%] font-medium text-secondary leading-relaxed">
            Popular <span className=" border-b-4 border-primary ">Now</span>
          </h1>
        </div>

        <div
          ref={ref}
          className="w-5/6 flex h-[350px] z-20 absolute bottom-[150px] items-center bg-tercary rounded-[80px] justify-center"
        >
          {
            inView && (
                <motion.div
             initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2 }}
            className="flex-1 w-full h-full   flex relative items-center justify-center"
          >
            <div className="w-[92%] flex h-[350px] z-10 absolute bottom-[90px] items-center justify-evenly">
              {cards.map((item, index) => (
                <Cards key={index} item={item} />
              ))}
            </div>
          </motion.div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Popular;
