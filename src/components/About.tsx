import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hocs";

const ServiceCard = ({
    index,
    title,
    icon,
}: {
    index: number;
    title: string;
    icon: string;
}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full bg-gradient-to-r from-blue-400 to-emerald-400 p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant(0.3)}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a full-stack developer with experience in <b>Python</b>,{" "}
                <b>TypeScript</b>, <b>JavaScript</b>, and <b>Golang</b>, with
                proficiency in frameworks and libraries like <b>React</b>,{" "}
                <b>Express</b>, <b>Node.js</b>, <b>Django</b>, <b>Flask</b>, and {" "}
                <b>Go-chi</b>. I'm also interested in artificial intelligence
                and have worked with <b>Tensorflow</b> to create machine
                learning models. I'm an avid learner and love to tinker in my
                free time.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => {
                    return (
                        <ServiceCard
                            key={service.title}
                            index={index}
                            {...service}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
