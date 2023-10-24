import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";
import { FaGithub, FaSquareUpRight } from "react-icons/fa6";

const Projects = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  function handleToggle() {
    setIsSeeMore((isSeeMore) => !isSeeMore);
  }
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-12 relative my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {!isSeeMore &&
            ProjectsData &&
            ProjectsData.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          {isSeeMore &&
            ProjectsData &&
            ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </div>
      <p
        className="text-texlight cursor-pointer hover:text-primary"
        onClick={handleToggle}
      >
        {isSeeMore && "Show less"}
        {!isSeeMore && "Show more"}
      </p>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHoverred, setIsHoverred] = useState(false);
  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-contain rounded-lg"
        src={project.imgSrc}
      />

      {isHoverred && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2">
          <p className="text-xl text-primary">{project.name}</p>
          <div className="flex gap-4">
            <a href={project?.gitURL} target="_blank">
              <FaGithub className="text-3xl text-white hover:text-primary" />
            </a>
            {project.websiteURL && (
              <a href={project?.websiteURL} target="_blank">
                <FaSquareUpRight className="text-3xl text-white hover:text-primary" />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
