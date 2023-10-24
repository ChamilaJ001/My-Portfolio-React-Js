import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  World,
  Clothing,
  FreshJuiceUI,
  Haruki,
  Blog,
  Pizza,
  PortfolioFirebase,
  MovieClone,
  SocialMedia,
  Pos,
  Wheater,
  Workout,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/profile.php?id=100009843556855",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/chamila-jayasinghe/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/ChamilaJ001",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/_chami_jaya/",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Watched Movie List",
    imgSrc: MovieClone,
    gitURL: "https://github.com/ChamilaJ001/ReactJs-Movie-Search-App",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Blog Post",
    imgSrc: Blog,
    gitURL:
      "https://github.com/ChamilaJ001/react-practice-11-Performance-Optimaization",
    websiteURL: "https://classy-frangipane-bf97f4.netlify.app/",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Places Tracking App",
    imgSrc: World,
    gitURL: "https://github.com/ChamilaJ001/WorldWise-Project-React",
    websiteURL: "https://statuesque-selkie-b2653c.netlify.app/",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Clothing Store",
    imgSrc: Clothing,
    gitURL: "https://github.com/ChamilaJ001",
  },

  {
    id: `imageSharing-${Date.now()}`,
    name: "Vehicle Yard",
    imgSrc: Haruki,
    gitURL: "https://github.com/ChamilaJ001",
    websiteURL: "https://harukiinternational.lk/",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pizza Delivery App",
    imgSrc: Pizza,
    gitURL: "https://github.com/ChamilaJ001/react-pizza-ordering-app",
    websiteURL: "https://thunderous-lollipop-92c393.netlify.app",
  },
  {
    id: `pos-${Date.now()}`,
    name: "POS System",
    imgSrc: Pos,
    gitURL: "https://github.com/ChamilaJ001",
  },
  {
    id: `wheather-${Date.now()}`,
    name: "Wheather App",
    imgSrc: Wheater,
    gitURL: "https://github.com/ChamilaJ001/React-Weather-App",
    websiteURL: "https://startling-donut-9ec92d.netlify.app",
  },
  {
    id: `workout-${Date.now()}`,
    name: "Workout App",
    imgSrc: Workout,
    gitURL: "https://github.com/ChamilaJ001/React-WorkoutTimer",
    websiteURL: "https://neon-palmier-54262e.netlify.app",
  },
];
