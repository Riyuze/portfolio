import {
    mobile,
    backend,
    creator,
    web,
    django,
    express,
    golang,
    postgresql,
    python,
    tensorflow,
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
    chatto,
    facemask,
    karate_trainer,
    kinoko,
    manetorakka,
    mushroom,
    reacto,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "exp",
        title: "Experiences",
    },
    {
        id: "tech",
        title: "Tech",
    },
    {
        id: "works",
        title: "Projects",
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
        name: "Mushrooom Classification",
        description:
            "An image classification project which detects different kinds of mushroom species using Keras and Tensorflow. Image Classification is a Machine Learning module that trains itself from an existing dataset of multiclass images and develops a model for future prediction of similar images not encountered during training. Developed using Convolutional Neural Network (CNN).",
        tags: [
            {
                name: "machine-learning",
            },
            {
                name: "image-classification",
            },
            {
                name: "tensorflow",
            },
        ],
        image: mushroom,
        source_code_link: "https://github.com/Riyuze/mushroom-classification",
    },
    {
        name: "Kinoko",
        description:
            "A simple website used to detect different kinds of mushroom species. Model was built using Tensorflow and was compiled using TensorflowJS. ",
        tags: [
            {
                name: "machine-learning",
            },
            {
                name: "tensorflow",
            },
            {
                name: "react",
            },
        ],
        image: kinoko,
        source_code_link: "https://github.com/Riyuze/kinoko",
    },
    {
        name: "MoneyTracker (ManeTorakka)",
        description:
            "A simple web app to track your money, built using Django framework and was deployed on Heroku. Aesthetics of the web app was made using Bootstrap.",
        tags: [
            {
                name: "python",
            },
            {
                name: "django",
            },
            {
                name: "bootstrap",
            },
        ],
        image: manetorakka,
        source_code_link: "https://github.com/Riyuze/mane-torakka",
    },
    {
        name: "Chatto",
        description:
            "A simple chat app with rooms. Built using expressJS, nodeJS, socket.IO, and reactJS. Features multiple rooms where users can pick to chat on, and messages are sent in real-time.",
        tags: [
            {
                name: "javascript",
            },
            {
                name: "express",
            },
            {
                name: "socket.io",
            },
        ],
        image: chatto,
        source_code_link: "https://github.com/Riyuze/chatto",
    },
    {
        name: "Facemask Object Detection",
        description:
            "An object detection project which detects face masks in a picture using Keras and Tensorflow. Object detection is a computer technology related to computer vision and image processing that deals with detecting instances of semantic objects of a certain class in digital images and videos.",
        tags: [
            {
                name: "python",
            },
            {
                name: "machine-learning",
            },
            {
                name: "tensorflow",
            },
        ],
        image: facemask,
        source_code_link: "https://github.com/Riyuze/facemask-object-detection",
    },
    {
        name: "Karate Trainer",
        description:
            "A karate trainer made using mediapipe to detect how accurate a move is. Incorporates multiple technologies to create a more accurate prediction, normalisation of pictures was done with an object detection model built in Tensorflow and keypoints are acquired using MediaPipe. Desktop application was made using TKinter.",
        tags: [
            {
                name: "python",
            },
            {
                name: "machine-learning",
            },
            {
                name: "tensorflow",
            },
        ],
        image: karate_trainer,
        source_code_link: "https://github.com/Riyuze/karate-trainer",
    },
    {
        name: "Reacto E-Commerce",
        description:
            "A very simple e-commerce website made using ReactJS, this project was made purely using frontend. Features a login and register system, where the data is stored in localstorage. Items sold in the store are called using an API, and a cart system is implemented where users are able to add items and checkout.",
        tags: [
            {
                name: "javascript",
            },
            {
                name: "react",
            },
            {
                name: "frontend",
            },
        ],
        image: reacto,
        source_code_link:
            "https://github.com/Riyuze/reacto-ecommerce/tree/main",
    },
];

export { services, technologies, experiences, projects };
