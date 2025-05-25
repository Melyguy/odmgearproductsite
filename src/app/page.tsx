"use client";
import CanvasComponent from "./Components/Handle";
import { useEffect } from "react";
import Lenis from "lenis";
import Sidescroller from "./Components/Sidescroller";


export default function Home() {
  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    // Change this:
    // <div className="w-full h-screen">
    <div className="w-full">
      <div className="w-full h-screen relative">
        <div className="w-full h-full">
          <CanvasComponent />
        </div>
        <div className="absolute inset-0 w-full h-full flex flex-col p-10 justify-center z-10 pointer-events-none">
          <div className="relative flex items-end">
            <span className="relative">
              <span className="text-9xl text-red-500 font-bold">ODM</span>
              <span className="absolute left-full top-0 ml-2 text-xl text-black whitespace-nowrap font-semibold">Kill titans like a scout</span>
            </span>
            <h1 className="text-9xl text-red-500 font-semibold">-gear</h1>
          </div>
          <h1 className="text-xl text-black mt-4 text-center font-semibold max-w-3xl">
            ODM gear, or Omni-Directional Mobility gear, is a device from Attack on Titan. It enables soldiers to move rapidly in three dimensions using grappling hooks and gas-powered propulsion. Designed for urban and forest combat, it allows users to fight Titans by targeting their weak spots with precise mobility and speed.
          </h1>
        </div>
      </div>
      <Sidescroller />
      <div className="bg-white h-full w-full flex items-center justify-center">
      <h1 className="text-9xl text-black font-bold">As seen on</h1></div>
    </div>
  );
}
