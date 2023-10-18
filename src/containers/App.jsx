import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./index";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
import { CV } from "../assets";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-10 lg:px-12 pr-4 lg:pr-32">
      {/* particals container */}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* services count cards */}
      <ServiceCount />

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-center mt-32 mb-2 gap-10">
        <p className="text-2xl lg:text-3xl tracking-wide text-texlight">
          Chamila Jayasinghe
        </p>
        <div className="flex items-center justify-center gap-10 lg:gap-16 mt-4">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-1 mt-3">
          <p className="text-texlight text-center">
            official.chamilaj@gmail.com
          </p>
          <p className="text-texlight text-center mt-1">(+94) 768937746</p>
          <a
            href={CV}
            download={"Chamila Jayasinghe - CV.pdf"}
            className="text-primary text-center mt-1"
          >
            Hire Me
          </a>
          {/* <div className="w-full flex flex-col items-center justify-center gap-3 mt-5 lg:mt-0">
            <p className="text-texlight text-center">
              official.chamilaj@gmail.com
            </p>
            <p className="text-texlight text-center">(+94)768937746</p>
            <a href="ee.com" className="text-primary text-center">
              Hire Me
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
