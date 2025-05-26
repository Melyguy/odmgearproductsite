"use client";
import { useRef } from "react";
import {motion, useTransform, useScroll } from "framer-motion";


export default function Sidescroller(){
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef as React.RefObject<HTMLElement>,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["90%", "-150%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="h-screen top-0 overflow-hidden flex items-center justify-center">
                <h1 className="text-5xl text-black font-bold md:text-9xl">As seen on</h1>
            </div>

            <div className="h-screen top-0 sticky overflow-hidden flex items-center">
                <motion.div style={{ x, display: 'flex', gap: '2.5rem' }}>
                <div className="w-96 h-96 flex-shrink-0">
                        <video src="/vid1.mp4" autoPlay loop muted className="rounded-2xl w-full h-full object-cover" />
                    </div>
                    <div className="w-96 h-96 flex-shrink-0">
                        <video src="/vid1.mp4" autoPlay loop muted className="rounded-2xl w-full h-full object-cover" />
                    </div>
                    <div className="w-96 h-96  flex-shrink-0">
                    <video src="/vid6.mp4" autoPlay loop muted className="rounded-2xl w-full h-full object-cover" />
                    </div>
                    <div className="w-96 h-96 flex-shrink-0">
                    <video src="/vid4.mp4" autoPlay loop muted className=" rounded-2xl w-full h-full object-cover" /></div>
                    <div className="w-96 h-96 flex-shrink-0">
                    <video src="/vid5.mp4" autoPlay loop muted className=" rounded-2xl w-full h-full object-cover" /></div>
                    <div className="w-96 h-96 flex-shrink-0">
                    <video src="/vid8.mp4" autoPlay loop muted className=" rounded-2xl w-full h-full object-cover" />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}