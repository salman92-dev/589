"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const distributionData = [
  { label: "Liquidity", percentage: 2, color: "bg-[#FFC554]" },
  { label: "Community", percentage: 3, color: "bg-[#FF8DC4]" },
  { label: "Marketing", percentage: 19, color: "bg-[#86D279]" },
  { label: "Team", percentage: 76, color: "bg-[#8978F0]" },
];

export default function TokenDistribution() {
  return (
    <section className="px-4 md:px-16 py-12 bg-black text-white rounded-t-4xl relative z-12 -mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-between md:items-start gap-6">
          <div className="w-full flex-col md:flex-row items-end justify-between mb-10">
            <h2 className="text-shadow-[1px_6px_0px_#FFFFFF66] md:text-shadow-[1px_10px_0px_#FFFFFF66] text-6xl md:text-8xl s-black leading-tight">
              Token <br /> Distribution
            </h2>
            <p className="mt-4 text-white text-xl w-40">
              Because 589 is the code.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 md:items-end mb-6">
            <div className="w-full flex flex-wrap gap-2 items-center justify-between">
              <div className="max-sm:mb-2">
                <span className="border border-gray-500 px-5 py-2 rounded-full text-lg font-medium max-sm:mr-2">
                TOTAL SUPPLY
              </span>
              <span className="border border-gray-500 px-5 py-2 rounded-full text-lg font-medium">
                5.89 TRILLION
              </span>
              </div>
              <div className="flex flex-wrap max-sm:gap-2">
                {distributionData.map((item) => (
                <span
                  key={item.label}
                  className={`flex items-center gap-2 border border-gray-500 px-5 s-bold py-2 rounded-full text-lg font-medium`}
                >
                  <span className={`w-2 h-2 ${item.color}`}></span>
                  {item.percentage}% - {item.label.toUpperCase()}
                </span>
              ))}
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/bar.png" width={1200} height={100} alt="Token Distribution Bar" />
        {/* Animated Bar */}
        <div className="mt-8 w-full h-8 bg-gray-800 overflow-hidden flex gap-[5px]">
          {distributionData.map((item) => (
            <motion.div
              key={item.label}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.percentage}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={`${item.color} h-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
