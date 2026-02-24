import { easeIn, easeOut, motion, useAnimation } from "motion/react";
import Marquee from "./Marquee";
import { useEffect } from "react";
import HeroPage from "./HeroPage";

export default function HeroFrame() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("stretched");
      await controls.start("split");
    }
    sequence();
  }, [controls])

  const topVariants = {
    hidden: {
      y: "0%",
      clipPath: "inset(0% 50% 0% 50%)",
      opacity: 0,
    },
    stretched: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 0.5, ease: easeIn }
    },
    split: {
      y: "-70%",
      transition: { duration: 1, ease: easeOut }
    }
  }

  const bottomVariants = {
    hidden: {
      y: "0%",
      clipPath: "inset(0% 50% 0% 50%)",
      opacity: 0,
    },
    stretched: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 0.5, ease: easeIn }
    },
    split: {
      y: "70%",
      transition: { duration: 1, ease: easeOut }
    }
  }

  const textVariants = {
    split: {
      y: "0%",
      transition: { duration: .01, ease: easeOut }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-250">
      <div className="absolute w-full h-full flex flex-col justify-center min-h-260 md:min-h-140">
        <motion.div className="overflow-hidden flex h-[50%] items-end justify-center z-10"
          variants={topVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            initial={{
              y: "50%"
            }}
            variants={textVariants}
            transition={{ duration: 1, ease: easeOut }}
          >
            <Marquee text="REACT TYPESCRIPT NEXTJS TAILWIND CSS HTML MOTION"/>
          </motion.div>
        </motion.div>
        <motion.div className="overflow-hidden flex h-[50%] items-start justify-center z-10"
          variants={bottomVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            initial={{
              y: "-50%"
            }}
            variants={textVariants}
            transition={{ duration: 1, ease: easeOut }}
          >
            <Marquee text="REACT TYPESCRIPT NEXTJS TAILWIND CSS HTML MOTION"/>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="absolute overflow-hidden h-[81%] md:h-[70%] md:min-h-140 w-full flex items-center justify-center"
        variants={{
          hidden: { clipPath: "inset(50% 0% 50% 0%)" },
          stretched: { clipPath: "inset(50% 0% 50% 0%)" },
          split: { 
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 1, ease: easeOut }
          }
        }} 
        initial="hidden"
        animate={controls}
      >
        <HeroPage/>
      </motion.div>
    </div>
    
  )
}