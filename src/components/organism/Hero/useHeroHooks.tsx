import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function useHeroHooks() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-animation",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1,0.3)",
        }
      );
      tl.fromTo(
        ".bton-animation",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "elastic.out(1,0.5)",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, idx) => (
      <span
        key={idx}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  return {
    component,
    renderLetters,
  };
}
