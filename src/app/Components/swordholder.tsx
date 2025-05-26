"use client";

import { Canvas } from "@react-three/fiber";
import React, {useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const lerp = (start: number, end: number, t: number) => {
    return start * (1 - t) + end * t;
};

// Define critical viewing angles for explanations
const CRITICAL_POINTS = [
    { rotation: Math.PI, threshold: 0.4 },           // Front view
    { rotation: Math.PI / 2, threshold: 0.4 }, // Side view
    { rotation: Math.PI, threshold: 0.4 },     // Back view
];

export function Cube3({ scrollY = 0 }) {
    const gltf = useGLTF("/odmswordholderglb3.glb");
    const currentRotation = useRef(0);
    
    // Calculate which critical point we're closest to
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const scrollProgress = scrollY / viewportHeight;
    const sectionIndex = Math.floor(scrollProgress);
    const progressInSection = scrollProgress - sectionIndex;
    
    // Get the target rotation from critical points
    const currentPoint = CRITICAL_POINTS[sectionIndex % CRITICAL_POINTS.length];
    const nextPoint = CRITICAL_POINTS[(sectionIndex + 1) % CRITICAL_POINTS.length];
    
    // Determine if we should lock at a critical point
    const shouldLock = progressInSection < currentPoint.threshold || 
                      progressInSection > (1 - nextPoint.threshold);
    
    let targetRotation;
    if (shouldLock) {
        // Lock to the nearest critical point
        targetRotation = progressInSection < 0.5 ? 
            currentPoint.rotation : 
            nextPoint.rotation;
    } else {
        // Smoothly interpolate between critical points
        const t = (progressInSection - currentPoint.threshold) / 
                  (1 - currentPoint.threshold - nextPoint.threshold);
        targetRotation = lerp(currentPoint.rotation, nextPoint.rotation, t);
    }
    
    useFrame(() => {
        // Slower transition when near critical points
        const smoothness = shouldLock ? 0.05 : 0.1;
        currentRotation.current = lerp(
            currentRotation.current,
            targetRotation,
            smoothness
        );
    });
    
    return (
        <primitive 
            object={gltf.scene} 
            position={[0, 0, 0]} 
            scale={[5, 5, 5]} 
            rotation={[Math.PI / 1.2, currentRotation.current, Math.PI/-1.3]}
        />
    );
}

export default function CanvasComponentSwordHolder() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div className="w-full h-[300vh] bg-neutral-800">
            <div className="w-full h-screen top-0 left-0 pointer-events-none sticky">
                <Canvas 
                    style={{ 
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        overflow: "hidden"
                    }}
                    camera={{ 
                        position: [10, 10, 10], 
                        fov: 50,
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[1, 1, 1]} intensity={10} />
                    <Cube3 scrollY={scrollY} />
                </Canvas>
            </div>
        </div>
    );
}
