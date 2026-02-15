"use client"
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg-2.png')", // <-- replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full text-center px-6 py-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          If you’ve seen it… you <br className="hidden md:block" />
          can’t unsee it.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Early or Late. The choice is yours.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-lg font-semibold
          bg-gradient-to-r from-purple-600 to-indigo-600
          shadow-[0_0_25px_rgba(139,92,246,0.8)]
          hover:shadow-[0_0_50px_rgba(139,92,246,1)]
          transition-all duration-300"
        >
          Enter Presale
        </motion.button>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
