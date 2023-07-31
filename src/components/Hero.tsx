import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from ".";

const Hero = () => {
    return (
        <>
            <div className="relative w-full h-screen mx-auto">
                <div
                    className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
                >
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-blue-600" />
                        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600 via-blue-800" />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText}`}>
                            Hi, I'm{" "}
                            <span className="text-blue-600">Kevin Tandavo</span>
                        </h1>
                        <p
                            className={`${styles.heroSubText} mt-2 text-white-100`}
                        >
                            A full-stack developer with a{" "}
                            <br className="sm:hidden block" />
                            passion for artificial intelligence.
                        </p>
                    </div>
                </div>

                <ComputersCanvas />
            </div>
        </>
    );
};

export default Hero;
