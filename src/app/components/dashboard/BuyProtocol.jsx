import { useState } from "react";

const TOKENS = [
  { symbol: "BTC", name: "Bitcoin", color: "#F0B55E", bg: "#493626", icon: "₿" },
  { symbol: "ETH", name: "Ethereum", color: "#627EEA", bg: "#1A1F3D", icon: "Ξ" },
  { symbol: "SOL", name: "Solana", color: "#9945FF", bg: "#2D1A3D", icon: "◎" },
];

const CURRENCIES = [
  { symbol: "USD", icon: "$", color: "#1DC1A9", bg: "#1DC1A94D" },
  { symbol: "EUR", icon: "€", color: "#3B82F6", bg: "#1E3A5F" },
  { symbol: "GBP", icon: "£", color: "#8B5CF6", bg: "#2E1065" },
];

const BTC_RATE = 22426;

function TokenDropdown({ selected, options, onSelect, label }) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.symbol === selected);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none group"
      >
        <span className="text-white font-semibold text-lg tracking-wide">
          {current.symbol}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-40 rounded-xl overflow-hidden shadow-2xl z-50"
          style={{ background: "#1a1d2e", border: "1px solid rgba(255,255,255,0.08)" }}>
          {options.map((opt) => (
            <button
              key={opt.symbol}
              onClick={() => { onSelect(opt.symbol); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                opt.symbol === selected ? "bg-white/8" : ""
              }`}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: opt.bg, color: opt.color }}
              >
                {opt.icon}
              </span>
              <div className="text-left">
                <div className="text-white text-sm font-medium">{opt.symbol}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BuyProtocol() {
  const [fromToken, setFromToken] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromAmount, setFromAmount] = useState("0.48366");
  const [flipped, setFlipped] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const fromTokenData = TOKENS.find((t) => t.symbol === fromToken);
  const toCurrencyData = CURRENCIES.find((c) => c.symbol === toCurrency);

  const toAmount = fromAmount
    ? (parseFloat(fromAmount) * BTC_RATE).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleConnect = () => {
    if (connected) return;
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center">

      

      <div className="relative w-full">
        {/* Card */}
        <div className="rounded-2xl p-6 relative overflow-hidden bg-[#1C1C26]">

          {/* Subtle top shimmer */}
          
          {/* Title */}
          <h1 className="text-white font-bold text-2xl mb-6 tracking-tight s-bold">
            Buy 589 Protocol
          </h1>

          {/* From field */}
          <div className="mb-2">
            <label className="text-gray-400 text-sm font-medium mb-3 block tracking-wide">From</label>
            <div className="rounded-2xl p-4 flex items-center justify-between bg-white/2 shadow-[0px_4px_10px_0px_#00000040]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: fromTokenData.bg, color: fromTokenData.color }}>
                  {fromTokenData.icon}
                </div>
                <TokenDropdown
                  selected={fromToken}
                  options={TOKENS}
                  onSelect={setFromToken}
                />
              </div>
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="bg-transparent text-white font-bold text-xl text-right focus:outline-none w-32"
                style={{ fontVariantNumeric: "tabular-nums" }}
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Swap arrow */}
          <div className="flex items-center justify-between pt-2 px-1">
            <label className="text-gray-400 text-sm font-medium tracking-wide">To Estimate</label>
            <button
              onClick={handleFlip}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg className={`w-6 h-6 transition-transform duration-500 ${flipped ? "rotate-180" : ""}`}
                style={{ color: "#ffffff" }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* To field */}
          <div className="mb-5">
            <div className="rounded-2xl p-4 flex items-center justify-between bg-white/2 shadow-[0px_4px_10px_0px_#00000040]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: toCurrencyData.bg, color: toCurrencyData.color }}>
                  {toCurrencyData.icon}
                </div>
                <TokenDropdown
                  selected={toCurrency}
                  options={CURRENCIES}
                  onSelect={setToCurrency}
                />
              </div>
              <span className="text-white font-bold text-xl"
                style={{ fontVariantNumeric: "tabular-nums" }}>
                {toAmount}
              </span>
            </div>
          </div>

          {/* Rate */}
          <div className="flex items-center gap-2 mb-6 px-1">
            <span className="text-gray-400 text-sm">
              1 {fromToken} = <span className="text-gray-200 font-semibold">{BTC_RATE.toLocaleString()}.00 {toCurrency}</span>
            </span>
          </div>

          {/* Connect button */}
          <button
            onClick={handleConnect}
            disabled={connecting}
            className="w-full py-4 rounded-2xl font-bold text-white text-lg s-bold tracking-wide transition-all duration-300 relative overflow-hidden active:scale-98"
            style={{
              background: connected
                ? "linear-gradient(135deg, #059669, #047857)"
                : "linear-gradient(180deg, #6153B0 0%, #312784 100%)",
              boxShadow: connected
                ? "0 8px 32px rgba(5, 150, 105, 0.4)"
                : "0 0px 5px rgba(99, 102, 241, 0.4)",
              transform: connecting ? "scale(0.98)" : "scale(1)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {connecting ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Connecting...
                </>
              ) : connected ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Wallet Connected
                </>
              ) : (
                "Connect Wallet"
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}