import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hocs";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
    return (
        <>
            <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)}>
                <p className={styles.sectionSubText}>Technologies I've used</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
                {technologies.map((technology) => {
                    return (
                        <div className="w-28 h-28" key={technology.name}>
                            <BallCanvas icon={technology.icon} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
