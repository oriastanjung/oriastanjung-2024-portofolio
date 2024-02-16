import Heading from "@/components/atomic/Heading";
import Button from "@/components/ui/Button";
import React from "react";
import Avatar from "./Avatar";
import { MdArrowOutward } from "react-icons/md";

export default function Biography() {
  return (
    <section className="mt-5 md:mt-20 px-4 md:px-6 container mx-auto">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="lg" className="col-start-1">
          About Orias
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
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
            <br /> 
            I look forward to the opportunity to further enhance my
            abilities while making a positive contribution to a company that
            values innovation and growth.
          </p>
        </div>
        <Button showIcon icon={<MdArrowOutward />}>Resume</Button>
        <Avatar
          image={"/avatar.jpeg"}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </section>
  );
}
