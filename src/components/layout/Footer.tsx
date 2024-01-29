import Link from "next/link";
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer className="px-4  md:px-6   text-slate-600">
      <div className="mx-auto w-full">
        <div className="container mx-auto  flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
          <div className="socials inline-flex justify-center sm:justify-start">
            <Link
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-purple-400"
              aria-label="O. Riastanjung on Linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/oriastanjung"
            >
              <SiGithub />
            </Link>
          </div>
          <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
            <Link
              className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-purple-400"
              href="/"
            >
              O. Riastanjung
            </Link>
            <span
              className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
              aria-hidden="true"
            >
              /
            </span>
            <p className=" text-sm text-slate-300 ">© 2023 O. Riastanjung</p>
          </div>

          <div className="socials inline-flex justify-center sm:justify-end">
            <Link
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-purple-400"
              aria-label="O. Riastanjung on Linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/in/oriastanjung"
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-purple-400"
              aria-label="O. Riastanjung on Instagram"
              rel="noreferrer"
              target="_blank"
              href="https://instagram.com/orii.dev"
            >
              <FaSquareInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
