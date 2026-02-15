"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PresaleSection() {
  const total = 20000;
  const raised = 13600;
  const percentage = Math.round((raised / total) * 100);

  const [timeLeft, setTimeLeft] = useState(8076); // seconds demo

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const s = String(timeLeft % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-10 rounded-3xl 
          bg-gradient-to-b from-purple-900/70 to-black
          border border-purple-500/20
          backdrop-filter: blur(48px)
          shadow-[0px_52px_76px_0px_#583BDC80_inset,0px_24px_36px_0px_#9A89E6AD_inset,0px_-5px_9px_0px_#FFFFFF4D_inset]
          backdrop-blur-xl text-center"
        >
          <p className="text-gray-400 tracking-widest text-sm mb-4">
            CURRENT ROUND
          </p>
          <Image src="/images/line-2.png" alt="68" width={544} height={1} className="mb-4"/>
          <h2 className="text-3xl font-semibold mb-4">ROUND 01</h2>

          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            $0.000000300
          </h3>

          {/* Progress */}
          <Image src="/images/68.png" alt="68" width={1172} height={111} />

          <div className="flex justify-center mt-2 text-lg mb-6">
            <span>
              ${raised.toLocaleString()} / ${total.toLocaleString()}
            </span>
          </div>
            <Image src="/images/line.png" alt="btn" width={536} height={91} className="mb-6"/>

          <div className="flex justify-between text-sm text-gray-400 mb-8">
            <span>Next Price: $0.000000318</span>
            <span>Time Left: <span className="text-white">{formatTime()}</span></span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Image src="/images/presale-btn.png" alt="btn" width={536} height={91}/>
          </motion.button>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-10 rounded-3xl 
          shadow-[0px_52px_76px_0px_#583BDC80_inset,0px_24px_36px_0px_#9A89E6AD_inset,0px_-5px_9px_0px_#FFFFFF4D_inset]
          backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold mb-6">
            Price increases every round,
          </h3>

          <ul className="space-y-3 ml-8 text-gray-300 mb-8">
            <li>✅ Early entry advantage</li>
            <li>✅ Automatic round progression</li>
            <li>
              ✅ Final listing:{" "}
              <span className="text-cyan-400">$0.000003000</span>
            </li>
          </ul>

          {/* Round Grid */}
          <div className="grid grid-cols-7 gap-3 text-center">
            {Array.from({ length: 35 }, (_, i) => i + 1).map((round) => (
              <motion.div
                key={round}
                whileHover={{ scale: 1.1 }}
                className={`py-2 rounded-lg text-sm border
                  ${
                    round === 8
                      ? "bg-purple-600 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                      : "bg-black/50 border-purple-500/20 text-gray-400"
                  }`}
              >
                {String(round).padStart(2, "0")}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
