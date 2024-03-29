import React, { useState, useEffect } from "react";
import "./work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWorks, setfilterWorks] = useState([]);
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => {
      setWorks(data);
    });
    const filtration = "*[_type == 'works']";
    client.fetch(filtration).then((data) => {
      setfilterWorks(data);
    });
  }, []);
  const handleWorkFilter = (item) => {
    // console.log(item);
    setactiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setfilterWorks(works);
      } else {
        setfilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div>
      <h2 className="head-text">
        My Creative <span>Work </span>
        Section
      </h2>
      <div className="app__work-filter">
        {["All", `Web 1`, "Web 2", "React JS"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p
                className="p-text"
                style={{
                  marginTop: 10,
                }}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
