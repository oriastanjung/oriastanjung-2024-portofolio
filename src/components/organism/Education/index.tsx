"use client";
import Heading from "@/components/atomic/Heading";
import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { MdArrowOutward } from "react-icons/md";
interface EducationProps {}

const Education: FC<EducationProps> = ({}) => {
  const educationRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".heading-animate",
        { x: -300, y: 500, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, delay: 1, ease: "power4.out" }
      );
      tl.fromTo(
        ".description-animate",
        { x: -300, y: 600, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, delay: 1, ease: "elastic.inOut" }
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
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-10 pl-5 xl:pl-24 flex flex-col lg:flex-row lg:gap-10 text-normal lg:text-xl">
            <p>Bachelor Degree of Informatics Engineering</p>
            <span className="lg:block hidden">-</span>
            <p>University Maritim Raja Ali Haji</p>
          </div>
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-3 lg:mt-5 pl-10 xl:pl-32 flex gap-10 text-normal lg:text-xl">
            <p>Thesis</p>
            <span>:</span>
            <p className="text-primary font-medium">
              Preventing Man-In-The-Middle Attacks on Web Service Data
              Transmission Using End-to-End Encryption (E2EE)
            </p>
          </div>
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-3 lg:mt-5 pl-10 xl:pl-32 flex gap-10 text-normal lg:text-xl">
            <p>Grade Point Average (GPA)</p>
            <span>:</span>
            <p className="text-primary font-medium">3.79</p>
          </div>
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-3 lg:mt-5 pl-10 xl:pl-32 flex gap-10 text-normal lg:text-xl">
            <p>Achievement</p>
            <span>:</span>
            <p className="text-primary font-medium">
              Received the highest grade award in the entire department for the
              2020 cohort.
            </p>
          </div>
          <div className="prose prose-xl prose-slate prose-invert col-start-1  mt-3 lg:mt-5 pl-10 xl:pl-32 flex gap-10 text-normal lg:text-xl">
            <Link download={true} target="_blank" href="/skripsi.pdf">
              <Button
                className=""
                showIcon
                icon={<MdArrowOutward />}
              >
                Thesis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
