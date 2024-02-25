"use client";
import Bounded from "@/components/atomic/Bounded";
import Heading from "@/components/atomic/Heading";
import React, { FC, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  AchievementType,
  FrontendAchievements,
} from "@/constants/achievementLists";
import AchievementCard from "@/components/atomic/AchievementCard";
import FrameAchievements1 from "@/assets/FrameAchievements1";
import { gsap } from "gsap";
import FrameAchievements2 from "@/assets/FrameAchievements2";
// import DragableCarousel from "@/components/atomic/DragableCarousel";
const DragableCarousel = dynamic(
  () => import("@/components/atomic/DragableCarousel"),
  {
    ssr: false, // This ensures that the component is not server-side rendered
  }
);
interface SectionAchievementsProps {
  sectionTitle: string;
  data: AchievementType[];
  direction?: "left" | "right";
}

const SectionAchievements: FC<SectionAchievementsProps> = ({
  data,
  sectionTitle,
  direction,
}) => {
  const sectRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sectRef.current,
        { x: direction === "left" ? -1000 : 2000 },
        { x: 0, duration: 2, ease: "elastic.inOut(1.75,0.5)" }
      );
      gsap.fromTo(
        ".icon-animation",
        { x: direction === "left" ? -1000 : 2000 },
        {
          x: direction === "left" ? (window.screen.width <= 620 ? 200 : 620)  : 180,
          duration: 5,
          delay: 1,
          ease: "elastic.inOut(1,0.2)",
        }
      );

      if (direction === "left") {
        const tl = gsap.timeline({ repeat: -1 });
        tl.fromTo(
          ".icon-animation",
          { rotation: 0 },
          { rotation: 360, duration: 1.5, delay: 0.5 }
        );
      } else {
        const tl = gsap.timeline({ repeat: -1 });
        tl.fromTo(".icon-animation", {
            rotation:"-30",
        },{
          rotation: "30" ,
          duration: 5,
        }).yoyo(true);
        
      }
    }, sectRef);

    return () => ctx.revert();
  }, []);
  return (
    <section id="achievements" ref={sectRef} className="w-full overflow-hidden">
      <Bounded className="relative top-0 ">
        <Heading size="md" className="relative z-2">
          {sectionTitle}
        </Heading>
        {direction === "left" ? (
          <FrameAchievements1 className="icon-animation w-20 h-20 absolute top-10 -z-[10]" />
        ) : (
          <FrameAchievements2 className="icon-animation w-36 h-36 absolute top-10 -z-[10]" />
        )}
      </Bounded>{" "}
      <div className="px-4 md:px-6 ">
        <DragableCarousel>
          {data.map((item: AchievementType, idx: number) => (
            <AchievementCard
              className="carousel-cell mr-6"
              image={item.image}
              name={item.name}
              url={item.url}
              key={idx}
            />
          ))}
        </DragableCarousel>
      </div>
    </section>
  );
};

export default SectionAchievements;
