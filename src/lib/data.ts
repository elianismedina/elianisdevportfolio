import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

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
    title: "Supervisor",
    location: "Barranquilla, Atlantico, Colombia",
    description:
      "I joined Teleperformance as a customer service supervisor and led a 15-member team, handling calls for a US-base retailer. I also acquired my first experience as supervisor and learned critical skills such as time management, conflict resolution, and coaching.",
    icon: React.createElement(LuGraduationCap),
    date: "from October 2020 to May 2021",
  },
  {
    title: "Sales coach",
    location: "Bogota, DC, Colombia",
    description:
      "I worked as a team lead for 1 year and 6 months. I managed a team of 15 customer service, tech support and sales agents handling interactions for us-based customer. I also achieved recognition as the best coach of the second quarter of 2022",
    icon: React.createElement(CgWorkAlt),
    date: "from June 2021 to January 2023",
  },
  {
    title: "Team Lead",
    location: "Medellin, Antioquia, Colombia",
    description:
      "I worked as a team lead for 6 month. I managed a team of 15 customer-relations specialist handling complaints for US-based customers. I also help with the development of the campaign's during its firs months after successful launch.",
    icon: React.createElement(FaReact),
    date: "April 2023 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
