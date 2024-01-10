import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import imageImg from "@/public/image_app.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Apple Support Advisor",
    location: "Cupertino, CA",
    description:
      "Provided technical support to customers for Apple products.",
    icon: React.createElement(CgWorkAlt),
    date: "04/2021 - 08/2021",
  },
  {
    title: "Research Assistant",
    location: "East Lansing, MI",
    description:
      "Utilized qualitative coding to measure behaviors in study participants.",
    icon: React.createElement(CgWorkAlt),
    date: "04/2021 - 12/2022",
  },
  {
    title: "Clinical Intern",
    location: "East Lansing, MI",
    description:
      "Administered behavioral health assessments to families",
    icon: React.createElement(CgWorkAlt),
    date: "08/2021 - 05/2022",
  },
  // {
  //   title: "Graduated from MSU",
  //   location: "East Lansing, MI",
  //   description:
  //     "Received a Bachelor of Science in Computational Neuroscience.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2022",
  // },
  // {
  //   title: "Graduated from JHU",
  //   location: "East Lansing, MI",
  //   description:
  //     "Received a Master's of Science in Biotechnology.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2023",
  // },
  {
    title: "Research Assistant",
    location: "East Lansing, MI",
    description:
    "Utilized qualitative coding to measure behaviors in study participants.",
    icon: React.createElement(CgWorkAlt),
    date: "05/2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "IMAGE",
    description:
      "On-going project to develop a desktop application that simplifies analysis of metagenomic data.",
    tags: ["JavaScript", "Python", "HTML", "CSS", "Electron.js"],
    imageUrl: imageImg,
  },
  {
    title: "Cancer Drug Database",
    description:
      "Website that allows users to search for cancer drugs and view their characteristics.",
    tags: ["Python", "HTML", "CSS", "SQL/MySQL"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Git/GitHub",
  "Docker",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
] as const;
