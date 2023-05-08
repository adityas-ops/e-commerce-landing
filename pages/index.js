import Header from "@/components/Header"
import Intro from "@/components/intro/Intro"
import Popular from "@/components/popular/Popular"
import Service from "@/components/services/Service"
import About from "@/components/about/About"
import Special from "@/components/special/Special"
import Testimonial from "@/components/testimonial/Testimonial"
import Contact from "@/components/contact/Contact"

export default function Home() {
  return (
  <>
   <div
    className="absolute right-0 top-0">
      <img
      src="/image/beans.png"
      alt="hero"
      className="w-[400px]"
      />
    </div>
    <Header />
    <Intro />
    <div
    className="absolute left-0 top-[500px] z-10 ">
      <img
      src="/image/beans2.png"
      alt="hero"
      className="w-[600px]"
      />
    </div>
    <Popular />
    <Service />
    <About />
    <Special/>
    <Testimonial/>
    <Contact/>
   
  </>
  )
}
