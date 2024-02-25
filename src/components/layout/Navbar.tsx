"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { gsap } from "gsap";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const navbarRef = useRef<any>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleTriggerMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    // console.log(navbarRef.current)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".head-animation",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 5, ease: "elastic.out(1,0.3)" }
      );
    }, navbarRef);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navbarRef}
      className="container mx-auto px-4  md:px-0  text-slate-900 sticky top-0 z-[100]"
    >
      <nav className="head-animation opacity-0 flex items-center justify-between py-5 px-6 h-full w-full bg-slate-100 rounded-2xl ">
        <h1 className="font-extrabold text-2xl  tracking-tighter">
          <Link href={"/"}>O. Riastanjung</Link>
        </h1>
        <ul className="md:flex items-center hidden">
          <li className="flex flex-row items-center">
            <Link
              className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              href={"/about"}
            >
              <span className="absolute inset-0 z-0 h-full rounded bg-purple-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 translate-y-8"></span>
              <span className="relative">About</span>
            </Link>
            <span
              className="hidden text-4xl mr-4 ml-2 font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          </li>
          <li className="flex flex-row items-center">
            <Link
              className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              href={"/achievements"}
            >
              <span className="absolute inset-0 z-0 h-full rounded bg-purple-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 translate-y-8"></span>
              <span className="relative">Achievements</span>
            </Link>
            <span
              className="hidden text-4xl mr-4 ml-2 font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          </li>
          <li className="flex flex-row items-center">
            <Link
              className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              href={"/projects"}
            >
              <span className="absolute inset-0 z-0 h-full rounded bg-purple-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 translate-y-8"></span>
              <span className="relative">Projects</span>
            </Link>
            <span
              className="hidden text-4xl mr-4 ml-2 font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          </li>
          <li>
            <Link href={"mailto:oriastan999@gmail.com"} target="_blank">
              <Button>Contact Me</Button>
            </Link>
          </li>
        </ul>
        {/* {console.log(first)} */}

        <button onClick={handleTriggerMenu} className="flex md:hidden text-2xl">
          <HiMenu />
        </button>
      </nav>

      <div
        className={`flex flex-col bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter w-full h-screen fixed top-0 z-50 right-0 items-start md:hidden duration-300 transition-transform ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-end">
          <button
            onClick={handleTriggerMenu}
            className="flex md:hidden text-5xl close-button-animation bg-purple-500 text-white mr-3 mt-3 rounded-xl"
          >
            <IoIosClose />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center mt-20 gap-20 w-full">
          <li>
            <Link
              className="font-bold text-4xl text-slate-100 border-b-2 border-purple-300"
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-4xl text-slate-100 border-b-2 border-purple-300"
              href={"/achievements"}
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-4xl text-slate-100 border-b-2 border-purple-300"
              href={"/projects"}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link href={"mailto:oriastan999@gmail.com"} target="_blank">
              <Button className="text-3xl ">Contact Me</Button>
            </Link>
          </li>

          <li className="font-extrabold text-2xl text-slate-100 tracking-tighter mt-20">
            <Link href={"/"}>Made by O. Riastanjung</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
