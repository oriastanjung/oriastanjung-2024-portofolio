"use client";
import Heading from "@/components/atomic/Heading";
import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
interface EducationProps {}

const Education: FC<EducationProps> = ({}) => {
  const educationRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".heading-animate",
        { x: -300, y: 500, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 2, delay: 6, ease: "power4.out" }
      );
      tl.fromTo(
        ".description-animate",
        { x: -300, y: 600, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 2, delay: 1, ease: "elastic.inOut" }
      );
    }, educationRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={educationRef}
      className="mt-5 md:mt-20 px-4 md:px-6 container mx-auto mb-40"
    >
      <div className="">
        <Heading
          as="h1"
          size="lg"
          className="col-start-1 heading-animate opacity-0"
        >
          Education
        </Heading>
        <div className="description-animate opacity-0 ">
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-10 pl-24 flex gap-10 text-xl">
            <p>Bachelor Degree of Informatics Engineering</p>
            <span>-</span>
            <p>University Maritim Raja Ali Haji</p>
          </div>
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-5 pl-32 flex gap-10 text-xl">
            <p>Grade Point Average (GPA)</p>
            <span>:</span>
            <p className="text-[#9771FB] font-bold">3.77</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
