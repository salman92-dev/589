"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const chapters = [
  {
    id: 1,
    title: "589 is a key",
    subtitle: "More than a number. 589 is a signal. A key that unlocks the hidden truth.",
    bg: "bg-[linear-gradient(180deg,#9853FF_0%,#6627F0_50%,#362C89_100%)]",
  },
  {
    id: 2,
    title: "Signals were never jokes",
    subtitle: "Whispers of a Simpsons prophecy. Coded signals from Elon. The message was hidden.",
    bg: "!shadow-[0px_13px_30px_0px_#6721A7_inset]",
    border: "border-purple-500",
  },
  {
    id: 3,
    title: "They call it conspiracy",
    subtitle: "Secret societies fear the awakening. Then try to bury it. They can't really stop it.",
    bg: "!shadow-[0px_13px_30px_0px_#6721A7_inset]",
    border: "border-purple-500",
  },
];

export default function KeySection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20  max-sm:pb-12 md:py-20 gap-10 md:gap-10 overflow-hidden" id="about">
      {/* Big Number Section */}
      <div className="relative flex flex-col items-center w-full md:w-[48%]">
          <Image src="/images/keys.png" width={1822} height={1529} alt="Keys" />
      </div>

      {/* Chapters Section */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        {chapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: chapter.id * 0.2 }}
            className={`p-6 md:p-8 rounded-xl shadow-lg ${
              chapter.border
                ? `border ${chapter.border} border-opacity-50`
                : ""
            } ${chapter.bg} relative`}
          >
            <p className="text-sm md:text-base text-white s-medium mb-2">
              CHAPTER {chapter.id < 10 ? `0${chapter.id}` : chapter.id}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              {chapter.title}
            </h2>
            <p className="text-sm md:text-base text-white/60">{chapter.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
