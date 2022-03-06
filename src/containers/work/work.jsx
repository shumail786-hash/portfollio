import React, { useState, useEffect } from "react";
import "./work.scss";
import { AiFillEye, AiFillGitHub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
const Work = () => {
  return (
    <div>
      <h2 className="head-text">
        My Creative <span>Work </span>
        Section
      </h2>
    </div>
  );
};

export default AppWrap(Work, "work");
