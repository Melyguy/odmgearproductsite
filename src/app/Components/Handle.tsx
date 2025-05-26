"use client";

import { Canvas } from "@react-three/fiber";
import React, {useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Cube({ scrollY = 0 }) {
    const gltf = useGLTF("/odmBlade.glb");
    // Animate rotation based on scroll
    return <primitive object={gltf.scene} position={[5 + scrollY / -50 ,0,-5 + scrollY / 100]} scale={[3,3,3]} rotation={[Math.PI / 1.2 + scrollY * 0.002, 0, 90]} />;
}
export function Cube2({ scrollY = 0 }) {
    const gltf = useGLTF("/odmBlade2.glb");
    // Animate position based on scroll
    return <primitive object={gltf.scene} position={[8 + scrollY / -50,0, -10 + scrollY / 100]} scale={[3,3,3]} rotation={[Math.PI / 1.5  + scrollY * 0.002, 0, 90]} />;
}
export function Cube3({ scrollY = 0 }) {
    const gltf = useGLTF("/odmswordholderglb.glb");
    // Animate position based on scroll
    return <primitive object={gltf.scene} position={[5 + scrollY / -50,-10, -10 + scrollY / -10]} scale={[5,5,5]} rotation={[Math.PI / 1.1, Math.PI /1, Math.PI/1]} />;
}
export function Cube4({ scrollY = 0 }) {
    const gltf = useGLTF("/odmswordholderglb2.glb");
    // Animate position based on scroll
    return <primitive object={gltf.scene} position={[8 + scrollY / -50,-12, -12 + scrollY / -10]} scale={[5,5,5]} rotation={[Math.PI / 1.1, Math.PI /1, Math.PI/1]} />;
}
export default function CanvasComponent() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="w-screen h-screen fixed top-0 left-0 pointer-events-none">
            <Canvas 
                style={{ width: "100vw", height: "100vh" }}
                camera={{ 
                    position: [10, 10, 10], 
                    fov: 50,
                    near: 0.1,
                    far: 1000
                }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[1, 1, 1]} intensity={10} />
                <Cube scrollY={scrollY} />
                <Cube2 scrollY={scrollY} />
                <Cube3 scrollY={scrollY} />
                <Cube4 scrollY={scrollY} />
            </Canvas>
        </div>
    );
}
