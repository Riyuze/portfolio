import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html className="flex w-full justify-center">
            <span>
                <p className="text-lg text-white font-semibold">
                    {progress.toFixed(2)}%
                </p>
            </span>
        </Html>
    );
};

export default Loader;
