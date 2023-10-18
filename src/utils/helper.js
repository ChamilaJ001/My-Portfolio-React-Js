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
    gitURL: "https://github.com/ChamilaJ001",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Blog Post",
    imgSrc: Blog,
    gitURL: "https://github.com/ChamilaJ001",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Places Tracking App",
    imgSrc: World,
    gitURL: "https://github.com/ChamilaJ001",
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
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pizza Delivery App",
    imgSrc: Pizza,
    gitURL: "https://github.com/ChamilaJ001",
  },
];
