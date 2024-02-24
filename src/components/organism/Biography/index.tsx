"use client";
import Heading from "@/components/atomic/Heading";
import Button from "@/components/ui/Button";
import React, { useEffect, useRef } from "react";
import Avatar from "./Avatar";
import { gsap } from "gsap";

import { MdArrowOutward } from "react-icons/md";

export default function Biography() {
  const aboutRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".heading-animate",
        { x: -100, y: -500, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, ease: "elastic.inOut" }
      );

      tl.fromTo(
        ".description-animate",
        { x: -1000, y: -1000, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 2,
          delay: 0,
          ease: "elastic.inOut(1,0.3)",
        },
      );

      tl.fromTo(
        ".btn-animate",
        { x: -1000, rotate: 360, opacity : 0 },
        { x: 0, rotate: 0, duration: 2, opacity:1,ease: "elastic.in" },
        "-=1.5" // Delay to synchronize with previous animations
      );
    }, aboutRef);
  }, []);
  return (
    <section
      ref={aboutRef}
      className="mt-5 md:mt-20 px-4 md:px-6 container mx-auto"
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading
          as="h1"
          size="lg"
          className="col-start-1 heading-animate opacity-0"
        >
          About Orias
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1 description-animate opacity-0">
          <p className="text-lg">
            Hello, I am an ambitious undergraduate college student with a
            passion for web development, specializing in frontend and backend
            technologies.
            <br />
            <br />
            Over the past two years, I have honed my skills and become
            proficient in modern web development tools and frameworks, including
            NextJS, ReactJS, ExpressJS, MongoDB, MySQL, TailwindCSS, JEST, and
            React Testing Library. My hands-on experience has equipped me with
            the ability to create dynamic and responsive user interfaces,
            ensuring a seamless and engaging user experience. I am dedicated to
            staying at the forefront of technology trends and continuously
            expanding my skill set to contribute effectively in the
            ever-evolving field of web development.
            <br />
            <br />I look forward to the opportunity to further enhance my
            abilities while making a positive contribution to a company that
            values innovation and growth.
          </p>
        </div>
        <Button className="btn-animate opacity-0" showIcon icon={<MdArrowOutward />}>
          Resume
        </Button>
        <Avatar
          image={"/avatar.jpeg"}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </section>
  );
}
