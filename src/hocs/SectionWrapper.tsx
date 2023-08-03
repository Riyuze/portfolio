import { ComponentType } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: ComponentType, idName: string) => {
    return function HOC() {
        return (
            <motion.section
                variants={staggerContainer(0.5, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="-mt-24 pb-16 block" id={idName}>&nbsp;</span>
                <Component />
            </motion.section>
        );
    };
};

export default SectionWrapper;
