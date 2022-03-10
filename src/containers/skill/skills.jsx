import React, { useState, useEffect } from "react";
import "./skills.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import ReactTolltip from "react-tooltip";
const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'experiences']";

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    const skillsQuery = "*[_type == 'skills']";
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  console.log(skills);
  return (
    <div>
      <h2 className="head-text">Skills & Experience </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{
                  backgroundColor: skill.bgColor,
                }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default AppWrap(Skills, "skills");
