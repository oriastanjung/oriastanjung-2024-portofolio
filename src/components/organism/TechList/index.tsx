"use client";
import { techItems } from "@/constants/techList";
import React, { FC, useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/atomic/Bounded";
import Heading from "@/components/atomic/Heading";

gsap.registerPlugin(ScrollTrigger);

interface TechListProps {}

const TechList: FC<TechListProps> = ({}) => {
  const componentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : componentRef.current,
          markers: false,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });
      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease : "power1.inOut"
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-5 md:mt-20 overflow-hidden" ref={componentRef}>
      <Bounded >
        <Heading className="mb-5" as="h2" size="lg">
          What I Use
        </Heading>
      </Bounded>

      {techItems.map((item, indx) => (
        <div
          key={indx}
          className="tech-row mb-8 flex items-center justify-center gap-1 md:gap-4 text-slate-700"
          aria-label={item.name}
        >
          {Array.from({ length: 15 }, (_, idx) => (
            <React.Fragment key={idx}>
              <span
                className={`tech-item text-4xl md:text-6xl 2xl:text-8xl font-extrabold uppercase tracking-tighter`}
                style={{
                  color: idx === 7 && item.color ? item.color : "inherit",
                }}
              >
                {item.name}
              </span>
              <span className="text-xs md:text-xl 2xl:text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
