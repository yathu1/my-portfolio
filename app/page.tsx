"use client";

import { navItems } from "@/data";
import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 pt-10 overflow-x-hidden">
      <div className="relative top-20 right-0 mx-auto w-64 h-64 rounded-full shadow-lg overflow-hidden z-10">
        <Image
          src="/profile.jpg" // Replace with the path to your profile photo
          alt="Profile"
          width={512} // Width in pixels (matches w-16)
          height={512} // Height in pixels (matches h-16)
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />

        <Footer />
      </div>
    </main>
  );
};

export default Home;
