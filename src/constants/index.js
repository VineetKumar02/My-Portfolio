import {
  code,
  mobile,
  web,
  cpp,
  c,
  python,
  java,
  flutter,
  dart,
  html,
  css,
  javascript,
  reactjs,
  angularjs,
  nodejs,
  express,
  mongodb,
  mysql,
  php,
  tailwind,
  bootstrap,
  threejs,
  figma,
  git,
  vscode,
  jupyter,
  tensorflow,
  school,
  ssn,
  fidelity,
  student_dashboard,
  cgpa_calculator,
  parallax_website,
  qr_code_website,
  mini_portfolio,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skill",
    title: "Skills",
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
    title: "Coding (DSA)",
    text: "I have a good grasp of Data Structures and Algorithms. I have solved over 50+ problems on LeetCode, HackerRank, etc..",
    icon: code,
    bgColor: "linear-gradient(to bottom, #24ff72, #9a4eff)",
  },
  {
    title: "Web Development",
    text: "I have experience building websites using HTML, CSS, JavaScript, React JS, Angular JS, Tailwind CSS, etc..",
    icon: web,
    bgColor: "linear-gradient(to bottom, #ffec61, #f321d7)",
  },
  {
    title: "App Development",
    text: "I have experience building mobile apps using flutter. I have built 3 apps using flutter.",
    icon: mobile,
    bgColor: "linear-gradient(to bottom, #ff2ae8, #645bf6)",
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angularjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyter,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: "All India Secondary School Certificate Examination (CBSE Class 10)",
    company_name: "Velammal Vidhyashram, Surapet",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Till May 2018",
    points: [
      "Percentage: 89.6%",
      "Subjects: Maths, Science, Social Science, English, Hindi",
    ],
  },
  {
    title: "All India Senior School Certificate Examination (CBSE Class 12) ",
    company_name: "Velammal Vidhyashram, Surapet",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Till May 2020",
    points: [
      "Percentage: 96.4%",
      "Subjects: PCM with Computer Science and English",
    ],
  },
  {
    title: "B.Tech Information Technology (IT)",
    company_name: "Sri Sivasubramaniya Nadar College of Engineering (SSNCE)",
    icon: ssn,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Present",
    points: [
      "CGPA: 9.07 (Till 5th Semester)",
      "No backlogs",
      "4 Year Course",
    ],
  },
  {
    title: "Software Engineer Intern (SDE)",
    company_name: "Fidelity Investments, Chennai",
    icon: fidelity,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "2 Month Internship",
      "Paid Internship",
    ],
  },
];

const projects = [
  {
    name: "Student Dashboard",
    description:
      "Web-based platform that allows students of SSN to view their academic performance, attendance, and other details.",
    tags: [
      {
        name: "AngularJs",
        color: "#DD0031",
      },
      {
        name: "mongodb",
        color: "#13AA52",
      },
      {
        name: "Express",
        color: "#F7DF1E",
      },
      {
        name: "Node",
        color: "#3C873A",
      },
    ],
    image: student_dashboard,
    source_code_link: "https://github.com/VineetKumar02/Student-Dashboard",
  },
  {
    name: "GPA / CGPA Calculator",
    description:
      "Web-based platform that allows college students to calculate their GPA/CGPA based on their grades.",
    tags: [
      {
        name: "HTML",
        color: "#DD0031",
      },
      {
        name: "CSS",
        color: "#2965f1",
      },
      {
        name: "Javascript",
        color: "#F7DF1E",
      },
    ],
    image: cgpa_calculator,
    source_code_link: "https://github.com/VineetKumar02/CGPA-Calculator",
  },
  {
    name: "Parallax Website",
    description:
      "A website that uses parallax scrolling to create the illusion of depth in a 2D scene. Based on a hill station theme.",
    tags: [
      {
        name: "HTML",
        color: "#DD0031",
      },
      {
        name: "CSS",
        color: "#2965f1",
      },
      {
        name: "Javascript",
        color: "#F7DF1E",
      },
    ],
    image: parallax_website,
    source_code_link: "https://github.com/VineetKumar02/Parallax-Website",
  },
  {
    name: "QR Code Generator / Scanner",
    description:
      "A website to generate and scan QR codes. The QR code can be used to store a text.",
    tags: [
      {
        name: "HTML",
        color: "#DD0031",
      },
      {
        name: "CSS",
        color: "#2965f1",
      },
      {
        name: "Javascript",
        color: "#F7DF1E",
      },
    ],
    image: qr_code_website,
    source_code_link: "https://github.com/VineetKumar02/QR-Code-Generator-Scanner",
  },
  {
    name: "Mini-Portfolio Website",
    description:
      "It is a mini portfolio website to showcase my skills and projects. It has a dark theme along with a light theme.",
    tags: [
      {
        name: "HTML",
        color: "#DD0031",
      },
      {
        name: "CSS",
        color: "#2965f1",
      },
      {
        name: "Javascript",
        color: "#F7DF1E",
      },
    ],
    image: mini_portfolio,
    source_code_link: "https://github.com/VineetKumar02/Mini-Portfolio",
  },
];

export { services, technologies, experiences, projects };
