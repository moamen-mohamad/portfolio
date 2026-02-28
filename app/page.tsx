import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { ReactNode } from 'react';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
        ]} />
        <Hero />
        
      </div>
    </main>
  );
}
