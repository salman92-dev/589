"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title : "Home",
      link : "/"
    },
    {
      title : "About",
      link : "#about"
    },
    {
      title : "Tokenomics",
      link : "#tokenomics"
    },
    {
      title : "Roadmap",
      link : "#roadmap"
    },
    {
      title : "Disclaimer",
      link : "#disclaimer"
    }
  ];

  // animations
  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="w-full absolute top-0 left-0 z-50 px-4 md:px-8 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Logo */}
        <div className="hidden md:block flex items-center gap-2 text-white font-bold text-2xl">
          <Image src="/images/logo.png" alt="Logo" width={333} height={120}  className="w-34"/>
        </div>
        <div className="md:hidden flex items-center gap-2 text-white font-bold text-2xl">
          <Image src="/images/mobile-logo.png" alt="Logo" width={333} height={120}  className="w-14"/>
        </div>
        {/* Desktop Center Menu */}
        <motion.div
          variants={menuContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex bg-white/10 backdrop-blur-md rounded-xl px-3 py-2"
        >
          {links.map((item, i) => (
            <motion.a
            href={item.link}
              key={item}
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-lg text-lg font-medium transition coconutz ${
                i === 0
                  ? "bg-white text-black"
                  : "text-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="coconutz hidden md:block bg-white text-black font-medium px-6 py-3 rounded-xl"
        >
          Buy Now
        </motion.button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-black/70 backdrop-blur-lg rounded-xl border border-white/10 p-4 space-y-2 overflow-hidden flex flex-col"
          >
            {links.map((item, i) => (
              <motion.a
              href={item.link}
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`coconutz w-full text-left px-4 py-2 rounded-lg text-xl ${
                  i === 0
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.title}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="w-full mt-2 text-xl bg-white text-black coconutz font-semibold px-4 py-3 rounded-lg"
            >
              Buy Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
