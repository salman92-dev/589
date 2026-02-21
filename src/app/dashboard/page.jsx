"use client";

import { Bell } from "lucide-react";
import CardStats from "../components/dashboard/StatsCards";
import Image from "next/image";
import BottomSection from "../components/dashboard/BottomSection";

export default function DashboardHeader() {
  return (
    <div className="relative min-h-[350px] w-full">
      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between max-md:hidden">
        {/* Search */}
        <div className="relative w-64 md:w-96">
          <input
            type="text"
            placeholder="Find Something..."
            className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-md outline-none border border-white/10 focus:border-purple-500 transition"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Notification */}
          <div className="relative cursor-pointer">
            <Bell className="text-gray-300" size={20} />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-purple-500" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/images/user.png"
              alt="profile"
              width={764}
              height={955}
              className="w-12 h-12 object-cover rounded-full border border-purple-500"
            />
            <span className="text-sm text-white hidden sm:block">
              Mariana James
            </span>
          </div>
        </div>
      </div>
      <CardStats/>
        <BottomSection/>
    </div>
  );
}
