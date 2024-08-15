"use client";
import Heading from "@/components/atomic/Heading";
import Button from "@/components/ui/Button";
import React, { useEffect, useRef } from "react";
import Avatar from "./Avatar";
import { gsap } from "gsap";
import Link from "next/link";
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
        }
      );

      tl.fromTo(
        ".btn-animate",
        { x: -1000, rotate: 360, opacity: 0 },
        { x: 0, rotate: 0, duration: 2, opacity: 1, ease: "elastic.in" },
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
            Hello,I am a passionate and highly motivated Front-end Developer
            with 3 years of hands-on experience in modern technologies. My
            journey in the IT industry has equipped me with extensive experience
            in various projects and a demonstrated history of success in
            individual and team situations. I excel in problem-solving and
            effective teamwork, bringing strong analytical skills to the table.
            As a fresh graduate actively seeking employment, I am eager to apply
            my knowledge and skills to real-world challenges.
            <br />
            <br />
            My expertise spans across a wide range of domains, including:
            <br />• Front-end Development: NextJS, ReactJS, and VueJS
            <br />• Back-end Development: ExpressJS, Go Fiber, Gin Golang, and
            Flask Python
            <br />• Database: MYSQL, SQLite, PostgreSQL and MongoDB
            <br />• Version Control: Git and GitHub
            <br />• Web Design: HTML, CSS, and JavaScript
            <br />• Responsive Design: TailwindCSS and BootstrapCSS
            <br />• API Integration: RESTful APIs
            <br />• State Management: Redux and Context API
            <br />• Testing: Jest, and React Testing Library
            <br />• DevOps: VPS with NGINX and Docker
            <br />• Programming Language : Javascript, Typescript, Go, and
            Python,
            <br />
            <br />
            As a Front-end Developer committed to continual learning, I strive
            to stay at the forefront of technological advancements. I am
            dedicated to delivering innovative and efficient solutions, ensuring
            seamless user experiences and high-quality software development.
          </p>
        </div>
        <Link download={true} target="_blank" href="/cv.pdf">
          <Button
            className="btn-animate opacity-0"
            showIcon
            icon={<MdArrowOutward />}
          >
            Resume
          </Button>
        </Link>
        <Avatar
          image={"/avatar.jpeg"}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </section>
  );
}
