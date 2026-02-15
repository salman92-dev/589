"use client";

import Image from "next/image";
import { Facebook, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          
          {/* LEFT */}
          <div className="space-y-6">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={333}
              height={120}
              className="object-contain w-40"
            />

            <p className="text-white text-lg s-regular font-regular">
              © 589 - All Rights Reserved.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-lg font-medium text-white/90">Community</p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                <Facebook size={24} />
              </a>

              {/* X (Twitter) icon */}
              <a
                href="#"
                className="text-white/80 hover:text-white transition text-lg font-bold"
              >
                X
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                <Send size={24} />
              </a>
            </div>

            <div className="flex gap-6 text-lg text-white s-regular">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
