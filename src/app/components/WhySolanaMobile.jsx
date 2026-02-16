"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
export default function WhySolanaMobile() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const features = [
    { icon: "🚀", text: "Ultra fast" },
    { icon: "✂️", text: "Low cost" },
    { icon: "🧸", text: "Meme powerhouse" },
    { icon: "♻️", text: "Viral ecosystem" },
  ];

  return (
    <section className="md:hidden relative min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
           <Image src="/images/solana-gradient.png" alt="solana" width={285} height={574} className="w-65 absolute -top-22 left-0" />
      {/* Glow background */}
      {/* <div className="absolute  bg-purple-600/30 blur-[120px] rounded-full top-40"></div> */}

      {/* Heading */}
      <h2
        className={`text-5xl s-black text-center text-white transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Why Choose <br /> Solana?
      </h2>

      {/* Coin Image */}
      <div
        className={`w-full relative mb-10 transition-all duration-700 delay-200 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="animate-float">
          <img
            src="/images/solana-img-mobile.png" // replace with your image path
            alt="Solana Coin"
            className="w-full mx-auto"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full flex flex-col space-y-4 -mt-26 px-12">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-[linear-gradient(180.67deg,_#4D166A_7.55%,_rgba(16,21,34,0.6)_104.6%)]
                border border-purple-500/30 
              rounded-xl py-4 px-6 flex items-center gap-4
              text-white text-lg font-medium
              transition-all duration-700
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${index * 150 + 300}ms` }}
          >
            <span className="text-2xl">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      {/* Floating Animation Style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
