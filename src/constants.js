// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';

import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Data Science Intern",
      company: "Celebal Technologies ",
      date: "June 2025 - Present",
      desc: "Interned at Celebal Technologies as a Data Science Intern, where I implemented unsupervised learning models like Isolation Forests and Autoencoders to detect anomalies in network traffic data, aiding in the early identification of potential security threats and system issues.This project enhanced my skills in machine learning, data preprocessing, and real-time anomaly detection..",
      skills: [
        [
  "Python",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "SQL",
  "Power BI",
  "Tableau",
  "Jupyter Notebook",
  "Machine Learning",
  "Deep Learning",
  "Data Cleaning",
  "Exploratory Data Analysis (EDA)"
]

      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Research Intern",
      company: "Delhi Technological university",
      date: "July 2023 - March 2024",
      desc: "Worked as a Research Intern at Delhi Technological University (DTU), focusing on applying machine learning techniques to solve real-world problems.Assisted in data collection, preprocessing, and model development using tools like Python and Scikit-learn.Collaborated with researchers on algorithm optimization and performance evaluation.The experience enhanced my analytical thinking and deepened my understanding of applied AI research.",
      skills: [
       
        "Python",
        "Machine Learning",
        "Data Preprocessing", 
        "Scikit-learn", 
        "Research Analysis", 
        "Algorithm Development", 
        "Data Analysis",
         "Jupyter Notebook", 
         "Collaboration", 
         "Problem Solving"

      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "IILM University, Greater Noida UP",
      date: "Sept 2022 - July 2026",
      grade: "8.50 CGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from IILM University, Greater Noida. During my time at IILM, I gained a strong foundation in programming, software development, and core computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at IILM University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor Of Technology (B.tech)",
    },
    
    {
      id: 1,
      img: vpsLogo,
      school: "Govt Boys Senior Secondary School, Delhi",
      date: "Apr 2020 - March 2022",
      grade: "81%",
      desc: "I completed my class 12 education from Govt Boys Senior Secondary School, Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Children Delight Public School, Bihar ",
      date: "Apr 2018 - March 2020",
      grade: "83%",
      desc: "I completed my class 10 education from Children Delight Public School, Bihar, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "National Conference Website ",
      description:
        "Developed a dynamic National Conference website for college to manage event registrations, paper submissions, and schedule announcements. Integrated user-friendly interfaces for participants, organizers, and reviewers. Enabled real-time updates, speaker profiles, and conference details using modern web technologies, enhancing the overall event coordination and user experience",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Shiva6200744685/NCW",
      webapp: "https://national-conference-website.vercel.app/",
    },
    {
      id: 1,
      title: "Datasaki-A Website for data solution",
      description:
        "DataSaki is a comprehensive data solutions platform designed to help businesses harness the power of data. The website offers services including data analysis, visualization, machine learning solutions, and dashboard development. Built with a clean, responsive interface, it allows clients to easily explore offerings and request customized data-driven services. The platform aims to bridge the gap between raw data and actionable insights..",
      image: csprepLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shiva6200744685/Static-website-Datasaki",
      webapp: "https://static-website-datasaki.vercel.app/",
    },
    {
      id: 2,
      title: "Techspark Club Website",
      description:
        "Designed and developed the official website for the TechSpark Club, providing a centralized platform for event updates, member registration, and showcasing club activities. The site enhanced student engagement and streamlined communication between the club and the student community.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shiva6200744685/Event-management-website",
      webapp: "https://static-website-for-college-events.vercel.app/",
    },
    {
      id: 3,
      title: "Smart TO-DO Application",
      description:
        "Developed a Smart ToDo Application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with full CRUD functionality and user authentication (login/signup). The app allows users to securely manage their tasks—create, view, update, and delete—to stay organized and productive. Integrated JWT-based authentication to ensure data privacy and personalized task management for each user.",
      image: npmLogo,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Bootstrap"],
      github: "https://github.com/Shiva6200744685/To-do-MERN-Stack-Project",
      webapp: "https://to-do-mern-stack-project.vercel.app/",
    },
    {
      id: 4,
      title: "Face Recognition Based Attendance System",
      description:
        "Developed a Face Recognition-Based Attendance System using real-time video processing to automate attendance tracking. Integrated facial recognition models for accurate identification and eliminated proxy attendance. Utilized OpenCV and machine learning techniques, with data securely stored in a database. Enhanced efficiency and reliability in institutional and organizational attendance management.",
      image: taskremLogo,
      tags: ["Python", "OpenCV", "MySql", "tkinter"],
      github: "https://github.com/Shiva6200744685/Face-Recognition-Based-Attendance-System-Project",
      webapp: "Loading",
    },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  