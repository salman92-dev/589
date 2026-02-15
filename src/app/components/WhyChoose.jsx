"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const badges = [
  { text: "🚀 Ultra fast", position: "left-80 top-80" },
  { text: "✂️ Low cost 🔥", position: "left-100 -bottom-60" },
  { text: "🧸 Meme powerhouse", position: "right-70 top-100" },
  { text: "Viral ecosystem", position: "right-96 -bottom-80" },
];

export default function SolanaSection() {
  return (
    <section className="relative overflow-hidden text-white">
      <Image src="/images/solana-bg.png" alt="solana" width={2830} height={3332} className=""/>
      {/* Background Glow */}
      <div className="absolute inset-20 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />

   <div className="absolute inset-0">
       {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-4xl md:text-6xl font-bold mb-20"
      >
        Why Choose Solana?
      </motion.h1>

      <div className="relative z-10 flex items-center justify-center min-h-[400px]">

        {/* Floating Badges */}
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className={`hidden md:block absolute ${badge.position}
              px-5 py-3 rounded-xl text-sm 
              bg-[linear-gradient(180deg,#301751_0%,#020206_100%)]
              backdrop-blur-md
              border border-purple-500/30
              cursor-pointer s-medium text-xl`}
          >
            {badge.text}
          </motion.div>
        ))}
      </div>
   </div>

      {/* Mobile Badges */}
      <div className="absolute inset-4 flex flex-wrap items-center gap-2 md:hidden mt-10 text-center">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-fit px-6 py-3 rounded-xl text-sm
            bg-gradient-to-br from-purple-900/80 to-indigo-700/80
            backdrop-blur-md
            shadow-[0_0_20px_rgba(168,85,247,0.4)]
            border border-purple-500/30"
          >
            {badge.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
