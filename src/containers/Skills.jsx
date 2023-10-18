import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 relative my-12 "
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            My Skills & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            With a keen interest in full-stack development, I have successfully
            designed and implemented interactive web applications from the
            ground up. I am skilled in both frontend and backend technologies,
            allowing me to create seamless user experiences while ensuring
            robust server-side functionalities.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify hidden lg:block">
            My approach to problem-solving is rooted in analytical thinking and
            attention to detail. I enjoy dissecting complex issues, identifying
            core challenges, and devising innovative solutions. This mindset has
            been instrumental in my academic projects and professional
            endeavors, where I have successfully resolved intricate technical
            issues.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            In addition to my academic achievements, I have practical experience
            gained through freelance projects. These experiences have afforded
            me the opportunity to work on real-world applications, enhancing my
            skills in software design, development, and troubleshooting. I am
            confident in my ability to deliver high-quality software solutions
            that align with clients' needs and expectations.
          </p>
        </div>

        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8 lg:mt-0 mt-6">
          <SkillCard
            skill={"HTML 5 & CSS 3"}
            percentage={"95%"}
            color={"#FF3F3F"}
            move={true}
          />
          <SkillCard
            skill={"Javascript"}
            percentage={"75%"}
            color={"#008FFF"}
          />
          <SkillCard
            skill={"MERN Stack"}
            percentage={"70%"}
            color={"#14db80"}
            move={true}
          />
          <SkillCard
            skill={"Tailwind CSS"}
            percentage={"75%"}
            color={"#FFB900"}
          />
          <SkillCard
            skill={"MySql & MSSQL"}
            percentage={"90%"}
            color={"#00FFF3"}
            move={true}
          />
          <SkillCard skill={"Wordpress"} percentage={"90%"} color={"#FF3F3F"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
