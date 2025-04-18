import {HERO_CONTENT} from "../constants";
import {motion} from "framer-motion"
import profilePic from "../assets/profilepic.jpg";
const container=(delay)=> ({
  hidden:{x:-100,opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition:{duration:1,delay:delay}
  }
})

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start"></div>
        <motion.h1 
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="  pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-7xl">Ninad Karkhanis</motion.h1>
        <motion.p
         variants={container(0.5)}
         initial="hidden"
         animate="visible"
         className="cursor-default bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
          Aspiring Cyber Security Professional
         </motion.p>
        <motion.p 
         variants={container(1)}
         initial="hidden"
         animate="visible"
        className="my-2 max-w-xl py-6 font-light tracking-tighter" >{HERO_CONTENT}</motion.p>
        
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify center">
        <motion.img
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,delay:1.2}}
        className="rounded-2xl" src={profilePic} alt="Ninad Karkhanis"/>
         
        </div>
        

        
        
        </div>
        {/* <div>
        <motion.img 
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,delay:1.2}}
        src="https://tryhackme-badges.s3.amazonaws.com/NinadK.png" alt="Your Image Badge" />

        </div> */}
    </div>

    <div>
    

    </div>
    
     </div>
}

export default Hero
