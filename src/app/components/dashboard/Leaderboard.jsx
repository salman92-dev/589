import { useState } from "react";

const ALL_INVESTORS = [
  { rank: 1, address: "0xd4e...44357", total: 411631 },
  { rank: 2, address: "0xf63...8689b", total: 401071 },
  { rank: 3, address: "0x05d...282c5", total: 398021 },
  { rank: 4, address: "0xa1b...9f3c2", total: 375440 },
  { rank: 5, address: "0x7e2...c410d", total: 362890 },
  { rank: 6, address: "0xb3f...51a7e", total: 348200 },
  { rank: 7, address: "0x29c...d8b1f", total: 319750 },
  { rank: 8, address: "0x4fd...2e09a", total: 298130 },
];

const RANK_COLORS = {
  1: { bg: "linear-gradient(203.69deg, #C697FF 7.34%, #9B4CFD 49.65%)", shadow: "#00000040" },
  2: { bg: "linear-gradient(203.69deg, #C697FF 7.34%, #9B4CFD 49.65%)", shadow: "#00000040" },
  3: { bg: "linear-gradient(203.69deg, #C697FF 7.34%, #9B4CFD 49.65%)", shadow: "#00000040" },
};
const DEFAULT_COLOR = { bg: "linear-gradient(203.69deg, #C697FF 7.34%, #9B4CFD 49.65%)", shadow: "#00000040" };

function getRankColor(rank) {
  return RANK_COLORS[rank] || DEFAULT_COLOR;
}

function InvestorCard({ investor, visible, index }) {
  return (
    <div
      className="rounded-2xl px-5 py-4 transition-all duration-500 bg-black/10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left: rank badge + address */}
        <div className="relative flex items-center gap-3">
          <div
            className="absolute bottom-8 left-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
            style={{
              background: getRankColor(investor.rank).bg,
              boxShadow: `0 4px 16px ${getRankColor(investor.rank).shadow}`,
            }}
          >
            #{investor.rank}
          </div>
          <span className="text-white s-regular text-lg tracking-wide">
            {investor.address}
          </span>
        </div>

        {/* Right: total */}
        <div className="text-right flex-shrink-0 ml-4">
          <div className="text-white/60 s-regular text-xs mb-0.5">Total transactions</div>
          <div className="text-white s-bold text-lg">
            ${investor.total.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  const [showAll, setShowAll] = useState(false);
  const [animating, setAnimating] = useState(false);

  const visibleInvestors = showAll ? ALL_INVESTORS : ALL_INVESTORS.slice(0, 3);

  const handleToggle = () => {
    if (animating) return;
    setAnimating(true);
    setShowAll((prev) => !prev);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <div
      className="relative z-10 flex items-center justify-center">
      <div className="w-full">
        <div
          className="rounded-3xl p-5 relative overflow-hidden"
          style={{
            background: "#7A71C333",
          }}
        >
        <h3 className="mb-14 s-bold text-2xl">Leaderboard</h3>

          {/* shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />

          {/* Cards */}
          <div className="flex flex-col gap-12">
            {visibleInvestors.map((investor, i) => (
              <InvestorCard
                key={investor.rank}
                investor={investor}
                visible={true}
                index={showAll ? i : i}
              />
            ))}
          </div>

          {/* See all / collapse */}
          <button
            onClick={handleToggle}
            className="w-full mt-5 flex items-center justify-center gap-2 text-white font-medium text-sm py-2 transition-opacity hover:opacity-80 active:opacity-60"
          >
            <span>{showAll ? "Show less" : "See all investors"}</span>
            <svg
              className="w-6 h-6 transition-transform duration-300"
              style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 8l-7 7-7-7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}