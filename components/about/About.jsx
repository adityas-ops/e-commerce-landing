import { motion} from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

function About() {
    const [ref, inView] = useInView({
    threshold: 0.5
  });


  const variants = {
    hidden: 
    { opacity: 0,
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
  <div
        className='h-[80vh] w-full flex justify-center items-center'>
            <div
            className="grid grid-cols-2 w-full h-[500px] bg-cuaternary ">
                <div ref={ref} className=" w-full h-full flex items-center justify-end relative">
                {inView && (
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 1 }}
                    className=" object-cover absolute top-[-100px] mr-10"
                    >
                    <Image
                    src='/image/about/aboutcoffee.png'
                    alt='about'
                    width={400}
                    height={300}
                    loading="lazy"
                    />
                    </motion.div>
                )}
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[70%] h-3/4 flex justify-start flex-col">
                    <p
                    className="text-3xl mt-6 text-start font-bold text-secondary leading-relaxed">
                        About <span className="border-b-4 border-primary">Us</span>
                    </p>
                    <p
                    className="text-2xl mt-6 text-start font-bold text-secondary leading-relaxed w-3/4">
                        We provide quality coffee, and ready to deliver.
                    </p>
                    <p
                    className="text-lg mt-6 text-start font-regular text-black-400 leading-relaxed">
                        We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.
                    </p>
                    <button
                    className="bg-secondary text-[#f2ab47] font-bold text-[14px] w-[170px] mt-6 py-2 px-6 rounded-full">
                        Get your Coffee
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About