"use client"
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const roadmap = [
  {
    quarter: "Q1 2026",
    title: "Phase 01: Signal Begins",
    points: [
      "Official X, Telegram & Discord launch",
      "Lore Chapter 01 released",
    ],
  },
  {
    quarter: "Q2 2026",
    title: "Phase 02: Propagation",
    points: [
      "Weekly meme missions",
      "Creator & community reward campaigns",
    ],
  },
  {
    quarter: "Q3 2026",
    title: "Phase 03: Acceleration",
    points: [
      "Major global marketing push",
      "Strategic collaborations & partnerships",
    ],
  },
  {
    quarter: "Q4 2026",
    title: "Phase 04: Activation",
    points: [
      "Solana launch + LP locked",
      "Exchange listings & expansion",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section className="relative bg-[#050510] text-white py-16 md:py-24 px-6 overflow-hidden" id="roadmap">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-2 md:mb-24"
        >
          Our Plan for ahead
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">

          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/30 via-purple-400 to-purple-500/30" />

          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-between absolute -left-6 -right-6 top-1/2 -translate-y-1/2 z-20">
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Timeline Items */}
          <div className="grid md:grid-cols-4 gap-6 md:gap-16 md:gap-10 relative py-12 md:py-20">

            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center 
                ${index % 2 === 0 ? "md:-translate-y-30" : "md:translate-y-30"}`}
              >

                {/* Dot */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

                {/* Card */}
                <div className="w-full max-w-xs p-6 rounded-2xl 
                bg-gradient-to-b from-purple-800/70 to-black
                border border-purple-500/20
                backdrop-blur-xl
                shadow-[0px_52px_76px_0px_#583BDC80_inset,0px_24px_36px_0px_#9A89E6AD_inset,0px_-5px_9px_0px_#FFFFFF4D_inset]
                transition duration-300">

                  <p className="text-sm text-gray-400 mb-2">
                    {item.quarter}
                  </p>

                  <h3 className="font-semibold mb-3">
                    {item.title}
                  </h3>

                  <ul className="text-sm u-regular text-gray-400 space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
