"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const items = ["✧ Ultra Fast", "✧ Low Cost", "✧ Meme Powerhouse", "✧ Viral Ecosystem","✧ Ultra Fast", "✧ Low Cost", "✧ Meme Powerhouse", "✧ Viral Ecosystem"];

const Distribution_extend = () => {
  return (
    <section className="relative w-full overflow-hidden">
        {/* Floating UFO Left */}
      <motion.div
        className="max-sm:w-30 absolute top-10 md:top-20 -left-6 md:-left-24 z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/ufo.png" alt="ufo" width={338} height={186} />
      </motion.div>

      {/* Floating UFO Right */}
      <motion.div
        className="w-24 md:w-60 absolute top-40 right-0 z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/ufo-2.png" alt="ufo" width={338} height={186} />
      </motion.div>
      {/* Background Image */}
      <div className="2xl:container mx-auto">
        <Image
          src="/images/distribution-img.png"
          alt="distribution"
          width={2737}
          height={1920}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-[linear-gradient(90deg,#E81ABF_0%,#7615FF_50%,#EE5F17_100%)] backdrop-blur-md py-4">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="mx-6 text-white text-xl md:text-4xl s-black font-semibold whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Distribution_extend;
