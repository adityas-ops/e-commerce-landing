import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Cards from './Cards'
const testimonials = [
    {
        id: 1,
        name: 'Naura',
        'say':"I really love the cappucino, the coffee was very smooth",
        image: '/image/testimonial/m1.png'
    },
    {
        id: 2,
        name: 'John',
        'say':"this coffee shop is very convenient",
        image: '/image/testimonial/m2.png'
    },
    {
        id: 3,
        name: 'Azura',
        'say':"the coffee menu here is very much",
        image: '/image/testimonial/m3.png'
    
    }
]

function Testimonial() {
    const [ref, inView] = useInView({
    threshold: 0.5
  });


  const variants = {
    hidden: 
    { opacity: 0,
      x:320,
      
    },
    visible:
     { 
      opacity: 1,
      x:0 
    }
  };
  return (
    <>
        <div 
        className='h-[70vh] w-full flex justify-start items-center mt-10'>
            <div className='w-2/3 h-5/6 flex flex-col justify-center items-center bg-cuaternary rounded-tr-3xl rounded-br-3xl relative'>
                <div className='w-2/3 h-3/6 flex justify-start flex-col items-start '>
                <p
                    className="text-3xl mt-12 text-start font-bold text-secondary leading-relaxed">
                        What they say about us
                    </p>
                    <p
                    className="text-lg w-[50%] mt-6 text-start font-regular text-black-400 leading-relaxed">
                       We always provide the best service and always maintain the quality of coffee
                    </p>
                </div>
            </div>
            <div ref={ref} className='w-[60%] h-[40%] flex justify-center items-center absolute right-0'>
                {
                    inView && (
                        <motion.div 
                initial="hidden"
                 animate="visible"
                variants={variants}
                transition={{ duration: 2 }}
                 className="grid grid-cols-3 h-full w-full">
                    {
                        testimonials.map((item) => (
                            <Cards key={item.id} item={item}/>
                        ))
                    }
                </motion.div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Testimonial