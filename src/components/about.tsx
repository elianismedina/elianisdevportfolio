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
        <span className="font-medium">Finance</span>, I decided to pursue my
        passion for English and customer service. I worked for a big BPO company
        and acquired{" "}
        <span className="font-medium">
          customer service and tech support skills
        </span>
        .{" "}
        <span className="italic">
          My favorite part of the call center world
        </span>{" "}
        is the engagement and recognition aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core skill are{" "}
        <span className="font-medium">
          time management, problem solving, and communication
        </span>
        . I am also familiar with Sales and ticket routing. I am always looking
        to learn new technologies. I am currently studying{" "}
        <span className="font-medium">Multimedia Engineering</span> and I would
        like to become a full stack developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching Youtube videos about technology, watching movies, and spending
        time with my family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how to start my own Youtube channel</span>
        . I&apos;m also learning how to develop e-commerce projects.
      </p>
    </motion.section>
  );
}
