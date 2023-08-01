import {
    mobile,
    backend,
    creator,
    web,
    django,
    flask,
    express,
    golang,
    postgresql,
    python,
    tensorflow,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    bangkit,
    commsult,
    ocbc,
    uphcollege,
    carrent,
    jobit,
    tripguide,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Development",
        icon: mobile,
    },
    {
        title: "Backend Development",
        icon: backend,
    },
    {
        title: "Machine Learning",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Golang",
        icon: golang,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "Flask",
        icon: flask,
    },
    {
        name: "Express",
        icon: express,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Tensforflow",
        icon: tensorflow,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Electives Teacher (Internet of Things)",
        company_name: "UPH College",
        icon: uphcollege,
        iconBg: "#E6DEDD",
        date: "Jul 2021 - Jul 2022",
        points: [
            "Taught 5 classes consisting of 70+ students about the basics of Internet of Things.",
            "Guided the students through the C++ language and helping them get familiar with Arduino.",
            "Tutored IoT basics such as the use of NodeMCU and connecting micro-controllers into a website.",
        ],
    },
    {
        title: "Machine Learning Cohort",
        company_name:
            "Bangkit Academy led by Google, Tokopedia, Gojek, and Traveloka",
        icon: bangkit,
        iconBg: "#383E56",
        date: "Feb 2022 - Jul 2022",
        points: [
            "Bangkit Graduate 2022 | Graduated with Distinction",
            "Bangkit is a Google-led academy designed to produce high-calibre, technical talent for world-class, Indonesian technology companies and startups.",
            "Selected as the top 3100 among 63000+ candidates to participate in this program.",
            "Learned Artificial Intelligence concepts and applications to solve a wide range of Machine Learning problems.",
            "Worked on a image classification model and deployed it on the web.",
        ],
    },
    {
        title: "Full Stack Software Developer Intern",
        company_name: "Commsult AG",
        icon: commsult,
        iconBg: "#383E56",
        date: "Nov 2022 - May 2023",
        points: [
            "Updated and maintained dependencies on a UI library, made Storybook controls for 100+ UI components utilizing React and Typescript, as well as deploying a web app into a Linux server with Nginx.",
            "Implemented Smartlook into a Flutter application to increase user's behavior data.",
            "Developed new user-facing features and translated web designs into high quality code.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Bank OCBC NISP",
        icon: ocbc,
        iconBg: "#E6DEDD",
        date: "May 2023 - Present",
        points: [
            "Responsible for developing an e-wallet web based mobile application utilizing Go, React, and PostgreSQL.",
            "Created RESTful APIs and modular user facing components, implementing clean architecture and SOLID principles, leading to an enhanced developer experience and a more sustainable project architecture.",
            "Worked together in an Agile Scrum environment to effectively strategize, implement, and produce high-quality software.",
        ],
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };
