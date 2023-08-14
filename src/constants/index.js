import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  python,
  cplusplus,
  sql,
  ryussi,
  csi,
  xceed,
  threejs,
  dsad,
  datad,
  webd,
  reactd,
  male,
  female,
  puneMetro,
  travelAssist,
  imdb,
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
    icon: webd,
  },
  {
    title: "React Js Developer",
    icon: reactd,
  },
  {
    title: "Data Science Enthusiast",
    icon: datad,
  },
  {
    title: "Data Structures and Algorithms",
    icon: dsad,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "CPP",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Ryussi Technology",
    icon: ryussi,
    iconBg: "#383E56",
    date: "March 2022 - May 2022",
    points: [
      "Worked on commanding the different nodes using ClusterShell",
      "Parallel and highly scalable command execution.",
      "Worked on SMB Protocol.",
      "Review the documentation ClusterShell and SMB and providing constructive feedback.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Xceed Imagination",
    icon: xceed,
    iconBg: "#383E56",
    date: "November 2021 - March 2022",
    points: [
      "Worked on Spiderdocs – A secure application to share sensitive documents across users.",
      "Created mobile-first web application and windows application for Spiderdocs using ReactJS, React-Bootstrap and ElectronJS respectively.",
      "To enhance functionality I utilized Props, States, React-Hooks, & various npm packages (such as react-router-dom, etc.).",
      "Also analyzed and optimized performance and efficiency of code using virtual DOM concept resulting in notable improvements in application speed and responsiveness.",
    ],
  },
  {
    title: "Web Development Head, PCSB",
    company_name: "PICT CSI Student Branch, PICT",
    icon: csi,
    iconBg: "#E6DEDD",
    date: "June 2020 - April 2021",
    points: [
      "Headed web development team of 20+ members, designing and delivering various websites for groups.",
      "Conducted Special Interest Groups (SIG) teaching ReactJS, JavaScript ES6, HTML, CSS, and Bootstrap4 to improve team skills.",
      "Guided students through seminars on the blockchain, artificial intelligence, and competitive coding for skill enhancement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " His performance exceeded our expectations and he was able to complete the project on time. I wish him all the best for his upcoming career.",
    name: "Sameer Vitkar",
    designation: "CEO & Founder",
    company: "Xceed Imagination",
    image: male,
  },
  {
    testimonial:
      "Sahil showcased his leadership skills while working as the head of the Web Development team. He managed all his team members and effectively solved technical issues.",
    name: "Dr. Kavita Sultanpure",
    designation: "Branch Coordinator",
    company: "PCSB, PICT",
    image: female,
  },
];

const projects = [
  {
    name: "IMDB Data Analysis",
    description:
      "Analyzed and extracting valuable insights from the IMDb (Internet Movie Database) dataset, utilizing various big data technologies and techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: imdb,
    source_code_link:
      "https://github.com/SahilGunjal/IMDb-Big-Data-Analysis-Project.git",
  },
  {
    name: "TravelAssist",
    description:
      "Web-based platform that allows users login and add their favorite places, destinations and based on that gives personalized recommendation to users for their next travel destinations.",
    tags: [
      {
        name: "Flask(Python)",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: travelAssist,
    source_code_link:
      "https://github.com/SahilGunjal/Tourist-Recommendation-System.git",
  },
  {
    name: "PuneMetro",
    description:
      "Mobile First Web application that enables users to search pune Metro, their timings, ticket prizes and allows them to book tickets online using our application.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "react-Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: puneMetro,
    source_code_link:
      "https://github.com/SahilGunjal/Pune_Metro_Booking_System.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
