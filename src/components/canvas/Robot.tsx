import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robot = ( {isMobile}: {isMobile: boolean} ) => {
    const robot = useGLTF("./robot/scene.gltf");

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
                    object={robot.scene}
                    scale={isMobile ? 4 : 4.5}
                    position={isMobile ? [0, -2.75, 0] : [0, -2.75, 0]}
                />
            </mesh>
        </>
    );
};

const RobotCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(event.matches)
        }

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 9], fov: 25 }}
            gl={{ preserveDrawingBuffer: true, alpha: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Robot isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default RobotCanvas;
