import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import abbottImage from "@/public/logo-abbott.jpeg";
import suzuNetworkImage from "@/public/suzu-network.png";
import { link } from "fs";

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
    title: "Fresher Magento 2 Developer",
    location: "FPT Software Ho Chi Minh City, Vietnam",
    description:
      "Received Magento 2 training at FPT Software to participate in the US Canon project.",
    icon: React.createElement(LuGraduationCap),
    link: "",
    date: "12/2021 - 4/2022",
  },
  {
    title: "Front-End React Developer",
    location: "FPT Software Ho Chi Minh City, Vietnam",
    description:
      "Mainly responsible for the Front-end position, developing features and providing high user experience. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    link: "",
    date: "5/2022 - 4/2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Suzu Group, Ho Chi Minh City, Vietnam",
    description:
      "I'm now a full-stack developer, build social networks at Suzu Group. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSLQ. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    link: "dev.suzu.net",
    date: "5/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WareHouse Management system",
    description:
      "Warehouse management system helps improve manual operations and shorten operating time.",
    tags: [
      "ReactJs",
      "NestJs",
      "JavaScript",
      "Antd Design",
      "PostgreSQL",
      "Redux",
      "Redis",
    ],
    imageUrl: abbottImage,
  },
  {
    title: "Suzu Network",
    description:
      "Social networks similar to Instagram, Facebook,... allow users to freely post statuses, upload videos, and images to the internet.",
    tags: ["TurboRepo, React", "Next.js", "PostgreSQL", "Tailwind Css"],
    imageUrl: suzuNetworkImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Nest.js",
  "Express",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Framer Motion",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
] as const;
