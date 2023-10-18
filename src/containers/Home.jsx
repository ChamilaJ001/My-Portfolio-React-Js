import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CV, Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me{" "}
            <span className="block tracking-wider text-3xl lg:text-5xl mt-4 text-white">
              {" "}
              Chamila Jayasinghe
            </span>
          </h2>

          {/* typewriter */}
          <h2 className="text-xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              words={["a Full-Stack Developer..", "a Freelanzer.."]}
              speed={100}
            />
          </h2>

          <p className="text-base text-texlight mt-6  text-justify">
            Hello and welcome! I am Chamila Jayasinghe, a dedicated software
            engineer passionate about crafting elegant solutions to complex
            problems. With a strong foundation in software engineering from
            London Metropolitan University, I bring a blend of technical
            expertise, creativity, and a drive for innovation to every project I
            undertake. Explore my portfolio to discover my diverse skill set.
          </p>

          {/* social media links */}
          <div className="flex items-center justify-center gap-10 lg:gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href={CV}
            download={"Chamila Jayasinghe - CV.pdf"}
            style={{ boxShadow: "inset 0px 0px 10px rgb(255,255,255,0.3)" }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Hire Me
            </p>
          </a>
        </div>

        {/* hero image */}
        <div className="w-full h-full flex items-start justify-center lg:items-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            src={Hero}
            className="w-auto h-auto object-contain  lg:mb-30"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default Home;
