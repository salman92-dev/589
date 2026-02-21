"use client";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-[#161619] text-white">
      <Image src="/images/gradient-2.png" alt="background" width={780} height={1020} className="absolute top-0 right-0 md:w-130 object-cover z-[1]" />
      <Image src="/images/gradient-3.png" alt="background" width={1523} height={1214} className="absolute bottom-0 right-0 w-full md:w-[100%] object-cover z-[1]" />      
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="md:ml-64 flex-1 flex flex-col">
        
        {/* Top Bar (Toggle lives here) */}
        <div className="relative z-10 md:hidden flex items-center justify-between py-4 px-6">
        <Image src="/images/d-logo.png" width={356} height={181} alt="589 Logo" className="md:w-30 w-36" />
          <button onClick={() => setOpen(true)}>
            <Image src="/images/toggle.png" alt="" width={74} height={74} className="w-8" />
          </button>
        </div>

        {/* Page Content */}
        <main className="flex-1 px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
