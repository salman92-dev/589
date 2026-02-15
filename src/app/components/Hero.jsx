"use client";

import Navbar from "./layout/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[130vh] w-full overflow-hidden text-white">
      <Image src="/images/hero-img.png" alt="hero-img" width={126} height={311} className="absolute z-12 w-20 md:w-30 right-12 bottom-20 md:right-132 md:bottom-24" />
      {/* NAVBAR */}
      <Navbar />

      {/* Background */}
      <Image
        src="/images/hero-bg.png"
        alt="Space Background"
        fill
        priority
        className="object-cover scale-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20">
        
        <div className="flex items-center min-h-[70vh]">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-2xl font-medium text-white/90 s-bold tracking-[-1px]"
            >
              A signal is waking up on Solana
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-3 text-[2.6rem] md:text-7xl lg:text-8xl font-bold tracking-[-3px] s-black md:tracking-[-5px] leading-[1.05]"
            >
              589 is not a number.
              <br />
              It’s a key.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="relative mt-4 max-w-xl leading-[110%] text-lg sm:text-base md:text-[1.4rem] text-white u-regular"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span className="absolute inset-0 blur-md -z-1"></span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="coconutz px-6 py-3 rounded-lg bg-[linear-gradient(180deg,#6153B0_0%,#312784_100%)] hover:bg-indigo-500 transition text-lg md:text-xl border-1 border-white/34 shadow-[0px_0px_100px_1px_#5749A6]"
              >
                Enter Presale
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="coconutz px-6 py-3 rounded-lg bg-black border border-white/20 hover:bg-black transition text-lg md:text-xl"
              >
                Read the lore
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating glow (extra depth) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/20 blur-[100px] rounded-full z-10"
      />
    </section>
  );
}
