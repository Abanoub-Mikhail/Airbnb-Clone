import Image from "next/image"
// React

// React Server Components
import * as motion from "framer-motion/client"

const Banner = () => {
  return (
    <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
        <Image 
        src='https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt="home-img"
        fill
        className=" object-cover object-left"
        />
        
        <motion.div   initial={{ translateY: 100 , opacity:0 }} whileInView={{ translateY: 0 , opacity:1} } transition={{duration:0.8}}  className=" absolute top-1/2 w-full text-center">
            <p className=" text-sm sm:text-lg text-white shadow-sm font-bold">Not Sure Where to Go? ...</p>
            <button className="text-purple-500 bg-white px-10 py-4 rounded-full font-bold my-5 hover:shadow-xl hover:bg-red-400 hover:text-white active:scale-90 transition duration-200">See our Recommendation</button>
        </motion.div>
        
    </div>
  )
}

export default Banner