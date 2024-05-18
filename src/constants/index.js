import { l } from "maath/dist/misc-7d870b3c.esm";
import {
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  jobit,
  tripguide,
} from "../assets";
import frontend from "../assets/frontend.png";
import cplusplus from "../assets/tech/cplusplus.png";
import c from "../assets/tech/c.png";
import sql from "../assets/tech/sql.png";
import java from "../assets/tech/java.png";
import gfg from "../assets/company/gfg.png";
import chegg from "../assets/company/chegg.jpg";
import tnp from "../assets/company/tnp.png";
import medicvisor from "../assets/company/medicvisor.png";
import recruitnxt from "../assets/company/recruitnxt.png";
import codingclub from "../assets/company/codingclub.jpg";
import Shopvista from "../assets/Shopvista.png";
import portfolio from "../assets/portfolio.png";
import web from "../assets/web.png";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/#Projects",
    title: "Projects",
  },
  {
    id: "/#Experience",
    title: "Experience",
  },
  {
    id: "/#Achievement",
    title: "Achievement",
  },
  {
    id: "/#Gallery",
    title: "Gallery",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Technical Writing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Medicvisor",
    icon: medicvisor,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Working on MySQL for Medicvisor’s 1MG project, optimizing ambulance and other healthcare services",
      "Implementing User Interface using React.js and seamless API integration for realtime monitiring services",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "RecruitNXT",
    icon: recruitnxt,
    iconBg: "#383E56",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Developed a dynamic CRM Software Admin Panel using React.js for a seamless and intuitive user interface",
      "Engineered a robust, real-time meeting scheduler using react-calendar, ensuring seamless communication",
      "Collaborated on integrating RESTful APIs, ensuring seamless data flow between Admin Panel and server",
    ],
  },
  {
    title: "TCW Intern",
    company_name: "GeeksForGeeks",
    icon: gfg,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Authored and published 16+ high-impact articles focusing on DSA and Git, reaching a total 115,000+ view",
      "Published articles are available at https://shorturl.at/gjX28",
    ],
  },
  {
    title: "T&P Co-Ordinator",
    company_name: "Placement Cell CITK",
    icon: tnp,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Serving as a T&P Co-ordinator for the Placement cell of my College.",
      "Co-ordinating and managing the placement opportunities for the 200+ CSE students & 500+ non-cse student's",
      "Acting as a bridge between organizations and college.",
    ],
  },
  {
    title: "Subject Matter Expert",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Solved the doubt of students related to Computer science and engineering domains especially related to DSA and Coding.",
    ],
  },
  {
    title: "Secretary & Coding Tutor",
    company_name: "Coding Club CITK",
    icon: codingclub,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2023",
    points: [
      "I have served as a Secretary of the Coding Club CITK which is the coding society of CIT Kokrajhar.",
      "Taught C/C++ Programming and organized 10+ Events/Workshops related to Coding.",
      "Responsible for managing the entire team of the club cosisting of 250+ members.",
    ],
  },
];

const projects = [
  {
    name: "ShopVista",
    description:
      "Developed E-com web app using MERN stack featuring user registration and login, search and filter, product rating and review, seamless checkout and payment, navigation, and an admin dashboard for CRUD operations, managing products, users, reviews , and orders. used jsonwebtoken for authentication and stripe for payment.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Shopvista,
    source_code_link: "https://github.com/Amarjeet2909/E-Cart-MERN-Project",
  },
  {
    name: "T&P Portal",
    description:
      "Created a responsive React application for Placement Cells, optimizing efficiency in placement activities. • Implemented dynamic navigation with React Router, ensuring seamless UX through different 15+ routes. • Designed components for an efficient DOM, optimized route display with Switch, and enhanced modularity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Amarjeet2909/Placement-Cell-Portal",
  },
  {
    name: "Diabetes Predictor",
    description:
      "An application of Machine learning based diabetes prediction, In this project patient dataset has been taken and the various ML models is prepared for predicting diabetes and based on that prediction the appropriate Health Insurance Policy will be suggested. 4 diff ML algorithms are used (support vector machine, Decision Tree, Random Forest, and Na¨ıve Bayes) with the highest accuracy of RF of 94 percent.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Amarjeet2909/Application-of-ML-based-Diabetes-Prediction-model",
  },
  {
    name: "Singh Portfolio",
    description:
      "Build a visually stunning portfolio for showcasing relevant information to reflect a good portfolio of a developer. • Improved UX with Framer Motion, Ensured Responsive Design (5+ Devices), and Implemented Gallery. • Optimized Performance with Suspense, Implemented Email Communication via Contact Form using EmailJs.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Amarjeet2909",
  },
  {
    name: "Coding Club CITK",
    description:
      "Developed an impressive fully responsive website for Coding Club’s for smooth conduction of activities. • Implemented carousel slider, smooth scrolling using Jquery and efficient event management system section.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: codingclub,
    source_code_link: "https://github.com/Amarjeet2909/Coding-Club-CITK-Website",
  },
];

export { services, technologies, experiences, projects };
