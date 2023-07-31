import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
    const computer = useGLTF("./scifi_computer/scene.gltf");

    return (
        <>
            <mesh>
                <hemisphereLight intensity={5} groundColor={"black"} />
                <pointLight intensity={5} />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={10}
                    castShadow
                    shadow-mapSize={1024}
                />
                <primitive
                    object={computer.scene}
                    scale={1.25}
                    position={[0, -3.25, -1.25]}
                />
            </mesh>
        </>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 4], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
