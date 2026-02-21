import { useState } from "react";

const TOKEN_PRICE = 0.124; // current price: 1 $589 = $0.124

export default function CalculateProfit() {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [listingPrice, setListingPrice] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  // Derived calculations
  const amountNum = parseFloat(amount) || 0;
  const priceNum = parseFloat(price) || 0;
  const listingNum = parseFloat(listingPrice) || 0;

  // Cost = amount * price per token
  const totalCost = amountNum * priceNum;

  // Value at listing = amount * listingPrice
  const listingValue = amountNum * listingNum;

  // ROI = ((listingValue - totalCost) / totalCost) * 100
  const roi =
    totalCost > 0
      ? (((listingValue - totalCost) / totalCost) * 100).toFixed(0)
      : 242;

  const profit = listingValue - totalCost;

  const handleConnect = () => {
    if (connected) return;
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 1500);
  };

  const formatDisplay = (val) =>
    val === "" ? "" : isNaN(parseFloat(val)) ? "" : val;

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        {/* Card */}
        <div
          className="rounded-3xl p-6 relative overflow-hidden bg-[#1C1C26]"
        >
          {/* Top shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />

          {/* Title */}
          <h1 className="text-white font-bold text-2xl mb-1 tracking-tight leading-tight">
            Calculate profit on launch
          </h1>

          {/* Amount of 589 */}
          <p className="text-gray-400 text-sm mb-3 mt-0.5">Amount of 589</p>

          {/* Amount Input */}
          <div
            className="rounded-2xl px-4 py-4 flex items-center justify-between mb-5 bg-white/2 shadow-[0px_4px_10px_0px_#00000040]"
          >
            <input
              type="number"
              value={formatDisplay(amount)}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-white placeholder:text-white text-lg font-semibold focus:outline-none w-full placeholder-gray-500"
              style={{ fontVariantNumeric: "tabular-nums" }}
            />
            {/* 589 Token badge */}
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl ml-3 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #3730a3 0%, #4f46e5 100%)",
                boxShadow: "0 4px 16px rgba(79,70,229,0.4)",
              }}
            >
              {/* 589 icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                <path
                  d="M12 4 L19 8.5 L19 15.5 L12 20 L5 15.5 L5 8.5 Z"
                  stroke="white"
                  strokeWidth="1.2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.2" fill="none" />
                <line x1="12" y1="4" x2="12" y2="9" stroke="white" strokeWidth="1" />
                <line x1="19" y1="8.5" x2="15" y2="10.5" stroke="white" strokeWidth="1" />
                <line x1="19" y1="15.5" x2="15" y2="13.5" stroke="white" strokeWidth="1" />
                <line x1="12" y1="20" x2="12" y2="15" stroke="white" strokeWidth="1" />
                <line x1="5" y1="15.5" x2="9" y2="13.5" stroke="white" strokeWidth="1" />
                <line x1="5" y1="8.5" x2="9" y2="10.5" stroke="white" strokeWidth="1" />
              </svg>
              <span className="text-white font-bold text-base">589</span>
            </div>
          </div>

          {/* Price row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm">Price</span>
            <span className="text-white text-sm">
              1 $589 ={" "}
              <span className="text-white font-semibold">${TOKEN_PRICE}</span>
            </span>
          </div>

          {/* Price Input */}
          <div
            className="rounded-2xl px-4 py-4 mb-5 bg-white/2 shadow-[0px_4px_10px_0px_#00000040]"
          >
            <input
              type="number"
              value={formatDisplay(price)}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="bg-transparent placeholder:text-white text-white text-lg font-semibold focus:outline-none w-full placeholder-gray-500"
              style={{ fontVariantNumeric: "tabular-nums" }}
            />
          </div>

          {/* Listing Price + ROI labels */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <span className="text-white text-sm">Listing Price</span>
            <span className="text-white text-sm">ROI</span>
          </div>

          {/* Listing Price + ROI inputs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div
              className="rounded-2xl px-4 py-4 bg-white/2 shadow-[0px_4px_10px_0px_#00000040]"
            >
              <input
                type="number"
                value={formatDisplay(listingPrice)}
                onChange={(e) => setListingPrice(e.target.value)}
                placeholder="0.00"
                className="bg-transparent text-white placeholder:text-white text-lg font-semibold focus:outline-none w-full placeholder-gray-500"
                style={{ fontVariantNumeric: "tabular-nums" }}
              />
            </div>

            <div
              className="rounded-2xl px-4 py-4 flex items-center bg-white/2 shadow-[0px_4px_10px_0px_#00000040]"
            >
              <span
                className="text-lg"
                style={{
                  color:
                    parseFloat(roi) > 0
                      ? "#FFF"
                      : parseFloat(roi) < 0
                      ? "#f87171"
                      : "#a78bfa",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {roi}%
              </span>
            </div>
          </div>

          {/* Profit summary (shown when values are filled) */}
          {totalCost > 0 && listingNum > 0 && (
            <div
              className="rounded-xl px-4 py-3 mb-5 flex items-center justify-between"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.2)",
              }}
            >
              <span className="text-gray-400 text-sm">Estimated Profit</span>
              <span
                className="font-bold text-sm"
                style={{ color: profit >= 0 ? "#34d399" : "#f87171" }}
              >
                {profit >= 0 ? "+" : ""}${profit.toFixed(2)}
              </span>
            </div>
          )}

          {/* Connect Wallet Button */}
          <button
            onClick={handleConnect}
            disabled={connecting}
            className="w-full py-4 rounded-2xl font-bold text-white text-base tracking-wide transition-all duration-300 active:scale-95"
            style={{
              background: connected
                ? "linear-gradient(135deg, #059669, #047857)"
                : "linear-gradient(180deg, #6153B0 0%, #312784 100%)",
              boxShadow: connected
                ? "0 8px 32px rgba(5,150,105,0.4)"
                : "0 0px 5px rgba(109,40,217,0.5)",
              transform: connecting ? "scale(0.98)" : "scale(1)",
            }}
          >
            <span className="flex items-center justify-center gap-2">
              {connecting ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Connecting...
                </>
              ) : connected ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
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