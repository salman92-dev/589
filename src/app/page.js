import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/layout/Footer";
import BelievedSection from "./components/Believed";
import TokenDistribution from "./components/TokenDistribution";
import KeySection from "./components/Chapters";
import SolanaSection from "./components/WhyChoose";
import PresaleSection from "./components/Presale";
import RoadmapSection from "./components/Roadmap";
import HeroSection2 from "./components/Hero2";
import Distribution_extend from "./components/Distribution-extend";
import WhySolanaMobile from "./components/WhySolanaMobile";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BelievedSection />
      <TokenDistribution />
      <Distribution_extend/>
      <KeySection />
      <SolanaSection/>
      <WhySolanaMobile/>
      <PresaleSection/>
      <RoadmapSection/>
      <HeroSection2/>
      <div className="grid grid-cols md:grid-cols-2 items-center gap-6 2xl:container mx-auto max-w-5xl pb-12 -mt-20 relative z-10 px-6 md:px-12">
        <Image src="/images/img-1.png" alt="" width={976} height={474} />
        <Image src="/images/img-2.png" alt="" width={1008} height={474} />
      </div>
      <Footer />
    </div>
  );
}
