"use client";

import Button from "@/components/ui/Button";
import HeroShapes from "../HeroShapes";
import useHeroHooks from "./useHeroHooks";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Hero = (): JSX.Element => {
  const { renderLetters, component } = useHeroHooks();
  return (
    <section ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center ">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-4 md:mb-8 text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-medium leading-none tracking-tighter"
            aria-label={"O. Riastanjung"}
          >
            <span className="text-slate-300 block">
              {renderLetters("O. Riastanjung", "first")}
            </span>
          </h1>
          <span className="job-animation block bg-gradient-to-tr from-primary via-green-500 to-green-400 bg-clip-text text-2xl font-medium uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {"Frontend Developer"}
          </span>
          <div className="bton-animation mt-4 md:mt-8 opacity-0">
            <Link href={"/about"}>
              <Button className="" showIcon icon={<MdArrowOutward />}>
                About Me
              </Button>
            </Link>
          </div>
        </div>
        <HeroShapes />
      </div>
    </section>
  );
};

export default Hero;
