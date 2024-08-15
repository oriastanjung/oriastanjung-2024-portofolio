"use client";
import Bounded from "@/components/atomic/Bounded";
import Heading from "@/components/atomic/Heading";
import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import FrameAbout from "@/assets/FrameAbout";
import ExperienceCard from "@/components/atomic/ExperienceCard";
import { ExperienceList, ExperienceType } from "@/constants/experienceLists";

gsap.registerPlugin(ScrollTrigger);
interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const headingRef = useRef(null);
  const frameContainerRef = useRef(null);
  const experienceRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(experienceRef.current, { opacity: 0 }, { opacity: 1 , duration : 2, ease :"elastic", delay :5});
    }, experienceRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const headingTitle = headingRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingTitle,
          start: "bottom bottom",
          end: "top 20%",
          scrub: 3,
          //   pin : true,
          markers: false,
        },
      });

      tl.fromTo(headingTitle, { scale: 3.5 }, { scale: 1, duration: 3 });
    });
    return () => ctx.revert();
  }, []);
  function getContainerWidth(): number {
    const container = frameContainerRef.current as any; // Type assertion to HTMLElement
    return container.offsetWidth;
  }
  function getFrameWidth(): number {
    const frame = frameRef.current as any; // Type assertion to HTMLElement
    return frame.offsetWidth;
  }

  function centerPosition() {
    return (getContainerWidth() - getFrameWidth()) / 2;
  }
  useEffect(() => {
    let ctx = gsap.context(() => {
      const frame = frameRef.current as any; // Type assertion to HTMLElement
      const container = frameContainerRef.current as any; // Type assertion to HTMLElement

      // Check if both frame and container are not null
      if (frame && container) {
        const frameWidth = frame.offsetWidth;

        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: frame,
            start: "bottom bottom",
            end: "top 50%",
            scrub: 5,
            markers: false,
            invalidateOnRefresh: true,
          },
        });

        tlScroll.fromTo(
          frame,
          { x: -2 * frameWidth, scale: 3, rotation: 0 },
          { rotation: 360, scale: 1, x: centerPosition, duration: 1 } // Change rotation to 360 to rotate clockwise
        );

        // Create a new timeline for infinite rotation after reaching the center position
        const tlRotation = gsap.timeline({ repeat: -1 }); // Infinite repeat
        tlRotation.fromTo(
          frame,
          { rotation: 0 },
          { rotation: 360, duration: 1.5, delay: 0.5 }
        );
      }
    }, [frameContainerRef, frameRef]);

    return () => ctx.revert();
  }, []);

  const racesRef = useRef(null);
  const racesWrapperRef = useRef(null);

  useEffect(() => {
    // Function to calculate scroll amount
    function getScrollAmount() {
      const races = racesRef.current as any;
      return -(races.scrollWidth - window.innerWidth);
    }

    // GSAP context for horizontal scroll animation
    let ctx = gsap.context(() => {
      const races = racesRef.current as any;
      const racesWrapper = racesWrapperRef.current as any;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: racesWrapper,
          start: "top 20%",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub:1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      tl.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });
    }, racesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={experienceRef}
      className="mt-5 md:mt-20 max-w-full pt-8 overflow-x-hidden experience-container"
    >
      <div className="container mx-auto relative z-[10]">
        <h2
          className="font-medium leading-tight tracking-tight  text-slate-300 text-7xl text-center"
          ref={headingRef}
        >
          Experience
        </h2>
        {/* <div className="prose prose-xl prose-slate prose-invert col-start-1 text-center mt-4">
          <p className="text-lg">
            Keep Scrolling {":)"}
          </p>
        </div> */}
      </div>

      <div className="w-full" ref={frameContainerRef}>
        <div className="w-20 relative -z-10 -right-5 -top-28" ref={frameRef}>
          <FrameAbout className="w-20 h-20" />
        </div>
        <div ref={racesWrapperRef} className="mt-10 w-screen racesWrapper">
          <div ref={racesRef} className="races w-fit flex flex-nowrap gap-4">
            {ExperienceList.map((item: ExperienceType, idx: number) => (
              <ExperienceCard
                key={idx}
                job_title={item.job_title}
                company={item.company}
                start_date={item.start_date}
                list={item.list}
                end_date={item.end_date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
