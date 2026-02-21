"use client";

import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Trophy,
  Airplay,
  HelpCircle,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 h-screen w-64 bg-[#161619] border-r-2 border-[#0B0B0D] py-6 flex flex-col gap-8 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <Image
          src="/images/d-gradient.png"
          width={505}
          height={690}
          alt=""
          className="absolute top-0 left-0 w-full -z-10"
        />
        <Image
          src="/images/d-gradient2.png"
          width={823}
          height={1884}
          alt=""
          className="absolute bottom-0 left-0 w-full -z-10"
        />
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-between px-4">
           <Image src="/images/d-logo.png" width={356} height={181} alt="589 Logo" className="w-30" />
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 px-6">
          <Image src="/images/d-logo.png" width={356} height={181} alt="589 Logo" className="w-36 max-md:hidden" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" link="/dashboard" />
          <NavItem icon={<ShoppingCart size={20} />} label="Buy $589" link="/dashboard/buy" />
          <NavItem icon={<Users size={20} />} label="Referrals" link="/dashboard/referrals" />
          <NavItem icon={<Trophy size={20} />} label="Leaderboard" link="/dashboard/leaderboard" />
          <NavItem icon={<Airplay size={20} />} label="Airdrop" badge="7" link="/dashboard/airdrop" />
          <NavItem icon={<HelpCircle size={20} />} label="How to buy" link="/dashboard/how-to-buy" />
        </nav>
      </aside>
    </>
  );
};

const NavItem = ({ icon, label, badge, link }) => {
  const pathname = usePathname();

  const isActive =
    pathname === link || pathname.startsWith(link + "/dashboard");

  return (
    <Link href={link}>
      <div
        className={`flex items-center justify-between px-8 py-5 cursor-pointer transition-all duration-300
        ${
          isActive
            ? "bg-[linear-gradient(92.35deg,rgba(90,65,255,0.3)_0.89%,rgba(70,58,150,0)_97.92%)] text-white"
            : "hover:bg-white/5 text-white/40"
        }`}
      >
        <span className={`absolute bg-[linear-gradient(180deg,#BFB4FF_0%,#5C4BCE_100%)] w-1 h-8 left-0 rounded-r-xl ${isActive ? "block" : "hidden"}`}></span>
        <div className="flex items-center gap-4">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>

        {badge && (
          <span className="bg-[#4e36b8] text-white text-[10px] px-2 py-0.5 rounded-full border border-white/20">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Sidebar;
