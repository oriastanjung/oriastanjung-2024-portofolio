"use client";
import React, { FC, useEffect, useRef } from "react";
import Bounded from "@/components/atomic/Bounded";
import Heading from "@/components/atomic/Heading";
import { WavyBackground } from "@/components/ui/WavyBackground";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { gsap } from "gsap";
import { MdArrowOutward } from "react-icons/md";
interface AchievementsHeadProps {}

const AchievementsHead: FC<AchievementsHeadProps> = ({}) => {
  const headingRef = useRef(null);

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".head-animation",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "none" }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={headingRef}>
      <div className="head-animation opacity-0">
        <WavyBackground className="max-w-4xl mx-auto pb-40 ">
          <Heading size="lg" className="mb-8 text-center">
            Achievements
          </Heading>
          <div className="flex items-center justify-center">
            <Button
              handleClick={() => scrollToSection("achievements")}
              className="border-white text-white bg-opacity-35 backdrop-blur-lg"
            >
              See More <MdArrowOutward />
            </Button>
          </div>
        </WavyBackground>
      </div>
    </section>
  );
};

export default AchievementsHead;
