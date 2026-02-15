"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { User, Cloud, Eye, Globe } from "lucide-react";

const logos = [
  "/images/logo-1.png",
  "/images/logo-2.png",
  "/images/logo-3.png",
  "/images/logo-4.png",
  "/images/logo-5.png",
  "/images/logo-6.png",
  "/images/logo-4.png",
  "/images/logo-5.png",
];

const cards = [
  {
    title: "Prophecy",
    icon: "/images/prophecy.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    width: "w-4"
  },
  {
    title: "Codes",
    icon: "/images/codes.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    width: "w-5"
  },
  {
    title: "Hidden Narrative",
    icon: "/images/hidden.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    width: "w-6"
  },
  {
    title: "Global Shift",
    icon: "/images/globe.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    width: "w-5"
  },
];

export default function BelievedSection() {
  return (
    <section className="relative overflow-hidden text-white py-20 md:py-28 border-t border-white/45 believe">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="px-4 py-1 rounded-lg border border-[#BFA2F61A] text-sm tracking-wider bg-[linear-gradient(270deg,#BFA2F6_0%,#50F8E4_100%)] bg-clip-text text-transparent">
            1K+ PROTOCOL TRUSTED US
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mt-5 text-3xl md:text-5xl s-medium"
        >
          They believed us
        </motion.h2>

        {/* 🔥 MARQUEE LOGOS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#000000"
            pauseOnHover={true}
          >
            {logos.map((logo, i) => (
              <Image src={logo} width={200} height={200} alt="logo" key={i}/>
            ))}
          </Marquee>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="u-bold-italic text-3xl sm:text-4xl md:text-6xl leading-tight">
            “Most people laugh first.
            <br />
            History rewrites later.”
          </h3>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="s-border p-[1px]">
                <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-[11px] bg-[#2E1A2A] h-full backdrop-blur-md py-8 px-6 text-center"
              >
                <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-[linear-gradient(180deg,#6153B0_0%,#312784_100%)] flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                  <Image src={card.icon} alt={card.title} width={34} height={42} className={`${card.width}`}/>
                </div>

                <h4 className="text-2xl u-semibold">{card.title}</h4>
                <p className="mt-2 text-[15px] text-white/50 leading-relaxed u-regular">
                  {card.text}
                </p>
              </motion.div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
