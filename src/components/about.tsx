
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
        I started my professional experience in 2015 when I started working as a{" "}
        <span className="font-medium">customer service rep</span>, I decided to
        pursue my passion for English and customer service and I got to develop
        key skills in{" "}
        <span className="font-medium">customer service and tech support</span>.{" "}
        <span className="italic">
          My favorite part of the call center world
        </span>{" "}
        was the engagement and recognition aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core skills are{" "}
        <span className="font-medium">
          time management, problem solving, and communication
        </span>
        . I am also familiar with Sales and ticket routing. I am always looking
        to learn new technologies. I am currently studying{" "}
        <span className="font-medium">Multimedia Engineering</span> and I am
        looking for a job in the web development field. I would like to become a
        fullstack developer someday I can develop projects using different
        technologies such as{" "}
        <span className="font-medium">
          React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Ruby
          on Rails
        </span>
        .
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching Youtube videos about technology, watching movies, and spending
        time with my family (my wife Ana Maria and my little son Isaac). I also
        enjoy <span className="font-medium">learning new things</span>. I am a
        big fan of social media projects{" "}
        <span className="font-medium">
          and I would like to start my own Youtube channel
        </span>
        . I&apos;m also learning how to develop e-commerce projects.
      </p>
    </motion.section>
  );
}
