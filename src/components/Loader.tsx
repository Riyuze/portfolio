import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span>
                <p className="text-lg text-white font-semibold mt-10">
                    {progress.toFixed(2)}%
                </p>
            </span>
        </Html>
    );
};

export default Loader;
