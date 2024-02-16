"use client";
import { ProjectItemType } from "@/constants/projectLists";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
interface ContentListProps {
  items: ProjectItemType[];
}

gsap.registerPlugin(ScrollTrigger)

const ContentList: FC<ContentListProps> = ({ items }) => {
  const componentRef = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const contentImages = items.map((item, indx) => item.image);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  };
  const onMouseLeave = () => {
    setCurrentItem(null);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
        itemsRef.current.forEach((item) => {
            gsap.fromTo(item,{
                opacity : 0,
                y : 20,
            },{
                opacity : 1,
                y:0,
                duration : 5,
                ease : "elastic.out(1,0.3)",
                stagger : 0.2,
                scrollTrigger : {
                    trigger : item,
                    start : "top bottom-=100px",
                    end : "bottom center",
                    toggleActions : "play none none none"
                },
            })
        })
    }, componentRef);
    return () => ctx.revert()
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePosition = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };
      // calculate speed and direction
      const speed = Math.sqrt(
        Math.pow(mousePosition.x - lastMousePosition.current.x, 2)
      );

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePosition.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePosition.y - 160),
            rotation:
              speed * (mousePosition.x > lastMousePosition.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
            opacity: 0.75,
          });
        }
        lastMousePosition.current = mousePosition;
        return () => ctx.revert();
      }, componentRef);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentItem]);


  useEffect(() => {
    contentImages.forEach((item) => {
        if(!item) return;
        else {
            const img = new Image()
            img.src = item
        }
    })
  },[])
  return (
    <div className="w-full" ref={componentRef}>
      <ul
        className="grid border-b border-b-slate-100"
        onMouseLeave={() => onMouseLeave()}
      >
        {items.map((item, idx) => (
          <>
            <li
              ref={(el) => (itemsRef.current[idx] = el)}
              className="list-item opacity-0f"
              key={idx}
              onMouseEnter={() => onMouseEnter(idx)}
            >
              <Link
                target="_blank"
                href={item.url ? item.url : item.github}
                className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              >
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <div className="flex flex-row gap-3 text-purple-400 text-lg font-bold">
                    {item.tech.map((tech, indx) => (
                      <span key={indx}> {tech} </span>
                    ))}
                  </div>
                </div>
                <span className="mt-10 md:mt-0 flex items-center gap-2 text-xl font-medium md:ml-0">
                  Read More <MdArrowOutward />{" "}
                </span>
              </Link>
            </li>
          </>
        ))}
      </ul>
      {/* Hover Element */}
      <div
        ref={revealRef}
        className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover opacity-0f bg-center transition-[background] duration-300"
        style={{
          backgroundImage:
            currentItem !== null ? `url(${contentImages[currentItem]})` : "",
        }}
      ></div>
    </div>
  );
};

export default ContentList;
