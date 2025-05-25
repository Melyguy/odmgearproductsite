"use client";
import { useRef } from "react";
import {motion, useTransform, useScroll } from "framer-motion";


export default function Sidescroller(){
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef as React.RefObject<HTMLElement>,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["75%", "-150%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="h-screen top-0 overflow-hidden flex items-center justify-center">
                <h1 className="text-9xl text-black font-bold">As seen on</h1>
            </div>

            <div className="h-screen top-0 sticky overflow-hidden flex items-center">
                <motion.div style={{ x }} className={"flex gap-10"}>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>
                    <div className="w-96 h-96 bg-red-500 flex-shrink-0"></div>

                </motion.div>
            </div>
        </section>
    );
}