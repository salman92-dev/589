"use client";

import Image from "next/image";
import BuyProtocol from "./BuyProtocol";
import CalculateProfit from "./CalculateProfit";
import Leaderboard from "./Leaderboard";
export default function BottomSection() {
  return (
    <div className="relative w-full flex flex-col md:flex-row gap-6 z-10">
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-full md:w-[60%]">
        {/* Stage Info */}
        <div className="bg-[#A048F333] shadow-[0px_1px_40px_0px_#0D89CF33_inset,0px_4px_18px_0px_#083B584D_inset,0px_98px_100px_-48px_#8750FF4D_inset,0px_-82px_68px_-64px_#9D21FF4D_inset,0px_7px_11px_-4px_#7455FF_inset,0px_39px_56px_-36px_#FFFFFF80_inset] text-white rounded-3xl p-8 flex flex-col gap-4 justify-between">
          <div className="flex justify-between">
            <span>Stage 31</span>
            <span>1 $589 = $0.124</span>
          </div>
          <Image src="/images/loader.png" alt="loader" width={1178} height={304}/>
          <div className="flex justify-between">
            <p className="text-gray-400 text-sm">USDT RAISED</p>
            <p className="text-white max-sm:text-sm">$14,213,988 / $15,125,000</p>
          </div>
        </div>
        <Image src="/images/graph-ql.png" alt="loader" width={1324} height={844}/>

        {/* Purchase History */}
        <div className="bg-[#1C1C26] rounded-2xl py-6 px-8 text-gray-400">
            <h4 className="s-bold text-2xl text-white mb-4">Purchase History</h4>
            <div className="border-b border-white/7"></div>
           <p className="py-24 text-center text-white text-lg">Wallet is not connected</p>
        </div>

        {/* Earn USDT Card */}
        <div className="relative z-10 bg-1 rounded-2xl p-6 flex flex-col-reverse sm:flex-row items-center gap-1 justify-between shadow-[0px_11px_17px_0px_#00000040]">
          <div className="text-white">
            <h4 className="font-semibold text-2xl mb-2">Earn USDT Instantly</h4>
            <p className="text-lg s-regular max-w-sm">Share your unique link and earn <span className="font-bold">10% Rewards</span> on every purchase made through it. Invite Friends - earn together!</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-[linear-gradient(180deg,#6153B0_0%,#312784_100%)] px-6 py-3 rounded-full text-sm s-bold">How it works</button>
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm s-bold">Connect Wallet</button>
            </div>
          </div>
          <Image src="/images/piggy.png" alt="piggy" width={604} height={604} className="w-full md:w-58" />
        </div>

        {/* Referral Withdrawals */}
        <div className="bg-[#1C1C26]/20 rounded-2xl py-6 px-8 text-gray-400">
            <h4 className="s-bold text-2xl text-white mb-4">Purchase History</h4>
            <div className="border-b border-white/7"></div>
           <p className="py-24 text-center text-white text-lg">Wallet is not connected</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 w-full md:w-[40%]">
        {/* Buy Protocol */}
        <BuyProtocol/>

        {/* Presale Bonus */}
        <div className="bg-[linear-gradient(203.69deg,#C697FF_7.34%,#9B4CFD_49.65%)] rounded-xl p-4 text-white flex items-center justify-between shadow-[0px_24px_48px_0px_#00000040]">
          <p className="s-bold text-base md:text-xl">Connect wallet, Add email and receive 10% presale bonus!</p>
          <Image src="/images/coins.png" alt="coins" width={1024} height={1024} className="w-24 h-24 md:w-34 md:h-34"/>
        </div>

        {/* Calculate Profit */}
        <CalculateProfit/>

        {/* Leaderboard */}
        <Leaderboard/>
      </div>
    </div>
  );
}
