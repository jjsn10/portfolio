import ProjectsList from "@/components/Projects/ProjectsList";
export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

const project = {
  title: "Things I’ve made trying to put my dent in the universe.",
  summary:
    "Passionate web developer with expertise in front-end and back-end technologies. Skilled in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks. Proficient in optimizing performance and ensuring cross-browser compatibility. Strong problem-solving abilities and a commitment to delivering high-quality, scalable solutions.",
  items: [
    {
      logo: "coca-cola.png",
      company: "Coca-Cola ",
      description:
        "Develop an interactive, mobile-friendly web application for Coca-Cola, featuring personalized drink recommendations and engaging user experiences through AR and gamification",
      link: "https://www.coca-colacompany.com/",
    },
    {
      logo: "LinkedIn.png",
      company: "LinkIn ",
      description:
        "Developed a responsive e-commerce website using React and Node.js, enhancing user experience and increasing conversion rates by 30%.",
      link: "https://www.linkedin.com/feed/",
    },

    {
      logo: "/Netflix.png",
      company: "Netflix",
      description:
        "Develop a personalized recommendation system for Netflix using machine learning to enhance user experience and increase engagement.",
      link: "https://about.netflix.com/en",
    },

    {
      logo: "/Duolingo.png",
      company: "DuoLingo",
      description:
        "Develop an interactive web app for Duolingo users to track progress, set goals, and compete on leaderboards using Duolingo's API..",
      link: "https://www.duolingo.com/",
    },
    {
      logo: "Pinterest.png",
      company: "Pinterest",
      description:
        " Create a responsive Pinterest clone with user authentication, infinite scrolling, and pinning functionality using React, Node.js, and MongoDB.",
      link: "https://www.pinterest.com/",
    },
    {
      logo: "Tesla.png",
      company: "Tesla",
      description:
        "Develop an interactive web-based Tesla configurator for custom car options, integrating real-time 3D visualizations and price calculations.",
      link: "https://www.tesla.com/",
    },
  ],
};

export default function Projects() {
  return <ProjectsList title={project.title} summary={project.summary} items={project.items} />;
}
