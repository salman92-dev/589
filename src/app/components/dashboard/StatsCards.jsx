"use client";

import { Bell, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";

export default function CardStats() {
  return (
    <div className="relative w-full scrollbar-hide max-sm:w-[88vw]">
      {/* Stats Cards Container */}
      <div className="relative z-10 mt-12 w-full">
        <div 
          className="
            flex gap-6 
            overflow-x-auto 
            pb-4 
            snap-x snap-mandatory 
            scrollbar-hide 
            -mx-4 px-4 sm:mx-0 sm:px-0
            lg:grid lg:grid-cols-4
          "
        >
          <StatCard title="Invested" value="$21,500.00" percentage="12%" positive />
          <StatCard title="589 Owned" value="$5,392.00" percentage="8%" positive={false} />
          <StatCard title="Current 589 Worth" value="$21,500.00" percentage="12%" positive />
          <StatCard title="Referral Earnings" value="$5,392.00" percentage="8%" positive={false} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, percentage, positive }) {
  return (
    <div className="
      flex-shrink-0 w-[280px] 
      shadow-[0px_12px_50px_0px_rgba(0,0,0,0.06)]
      bg-[linear-gradient(180deg,rgba(255,255,255,0.0175)_0%,rgba(255,255,255,0.0735)_51.56%,rgba(255,255,255,0)_100%)]
      sm:w-auto 
      group relative rounded-2xl bg-white/5 p-6 
      hover:border-purple-500/40 transition-all duration-300
    ">
      <div className="flex items-center justify-between">
        <p className="text-white/60 text-sm font-medium">{title}</p>
        <MoreHorizontal size={20} className="text-white/60 cursor-pointer" />
      </div>

      <h2 className="mt-4 text-2xl font-bold text-white tracking-tight">{value}</h2>

      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className={`flex items-center gap-1 font-medium p-2 rounded-full ${positive ? "text-emerald-400 bg-[#64FFB5]/10" : "text-rose-400 bg-[#F82E2E]/10"}`}>
          {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        </span>
        {percentage}
      </div>
    </div>
  );
}