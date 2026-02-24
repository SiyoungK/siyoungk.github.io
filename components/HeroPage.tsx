// import Image from "next/image";
import BasicButton from "./BasicButton";
import { motion } from "motion/react";
import InteractivePortfolio from "./InteractivePortfolio";

export default function HeroPage() {
  return (
    // Took out md:h-180 for the rolodex
    <div className="relative max-w-350 md:grid md:grid-cols-2 mx-auto md:min-h-160 pb-6 md:pb-0">
      {/* Text */}
      <div className="md:basis-1/2 md:my-auto">
        <div className="mx-auto w-fit text-center md:text-left my-10 md:m-10 wrap-break-word">
          <div className="mb-6">
            <h1 className="bg-white/80 leading-tight inline w-fit text-7xl">
              Siyoung Kim
            </h1>
          </div>
          <div className="mb-6">
            <h3 className="bg-white/80 inline w-fit">
              Frontend Web Developer & Software Engineer
            </h3>
          </div>
          <div className="flex flex-col md:w-fit items-center md:flex-row md:justify-start gap-4">
            <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/"
              className="hover:bg-zinc-700 text-white bg-black border-black hover:border-zinc-700"/>
            <BasicButton text="Resume" external={true} href="KimSiyoungResume.pdf"
              className="hover:bg-zinc-300 bg-white border-black"/>
          </div>
        </div>
      </div>
      {/* Rolodex */}
      <div className="md:basis-1/2 flex items-center justify-center px-10">
        <motion.div className="relative aspect-square w-[80%] md:w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          >
          {/* Label */}
          <div className="absolute z-10 w-fit top-[0%] -translate-x-1/2 md:top-[15%]">
            <h4 className="mx-2 whitespace-nowrap font-doto font-bold">
              ROTATE ME
            </h4>
            <div className="absolute inset-0 z-16">
              {/* Underline */}
              <div className="absolute w-full h-[1px] rounded-4xl bg-black top-[1.4rem]"/>
              {/* Left Peg */}
              <div className="absolute w-[1px] h-[calc(.5rem+1px)] rounded-4xl bg-black top-[calc(1.4rem-.5rem)]"/>
              {/* Right Peg */}
              <div className="absolute w-[1px] h-[calc(.5rem+1px)] rounded-4xl bg-black left-[calc(100%-1px)] top-[calc(1.4rem-.5rem)]"/>
              {/* Down */}
              <div className="absolute w-[1px] h-[calc(50px+1px)] rounded-4xl bg-black left-[calc(50%-1px)] top-[1.4rem]"/>
              {/* Right */}
              <div className="absolute w-[40px] h-[1px] rounded-4xl bg-black left-[calc(50%-1px)] top-[calc(1.4rem+50px)]"/>
              {/* Circle */}
              <div className="absolute w-[6px] h-[6px] rounded-4xl border-black border bg-white left-[calc(50%+37px)] top-[calc(1.4rem+48px)]"/>
            </div>
          </div>
          <InteractivePortfolio/>
        </motion.div>
      </div>
    </div>
  )
}