"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

type avatarProps = {
  image: string;
  className?: string;
};

export default function Avatar({ image, className }: avatarProps) {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power3.inOut",
        }
      );

      window.onmousemove = (e) => {
        if (!component.current) return;
        const componentRect = (
          component.current as HTMLElement
        ).getBoundingClientRect();
        const componentCenterX = componentRect.left + componentRect.width / 2;
        let componentPercent = {
          x: (e.clientX - componentCenterX) / componentRect.width / 2,
        };
        let distFromCenter = 1 - Math.abs(componentPercent.x);

        gsap
          .timeline({
            defaults: {
              duration: 0.5,
              overwrite: "auto",
              ease: "power3.out",
            },
          })
          .to(
            ".avatar",
            {
              rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
              duration: 0.5,
            },
            0
          )
          .to(
            ".highlight",
            {
              opacity: distFromCenter - 0.7,
              x: (-10 + 20) & componentPercent.x,
              duration: 0.5,
            },
            0
          );
      };
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-zinc-700 opacity-0">
        <Image
          src={image}
          alt="O. Riastanjung avatar"
          fill
          className="avatar-image h-full w-full object-fill"
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}