"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computational Neuroscience from Michigan State University</span>, 
        I decided to pursue my passion for programming. I enrolled in a Master's program at Johns 
        Hopkins University, where I learned{" "}
        <span className="font-medium">scripting, web development, and more</span>.{" "}
        My favorite part of programming is the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">HTML, CSS, JS and Python, but</span>{" "}
        I am always learning new technologies. At the moment I am learning React, Electron, and Next.js. 
        I am currently looking for a full-time position as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, running, and weight lifting.
      </p>
    </motion.section>
  );
}
