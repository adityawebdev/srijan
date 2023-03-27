import React from "react";
import Link from "next/link";
import { useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible ? "animate__animated animate__fadeInDownBig" : ""
          }
        >
          <nav className="flex items-center flex-wrap  p-3 bg-extraDarkMaroon shadow-lg">
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4 ">
                <span className="text-xl text-gold  font-bold uppercase tracking-wide">
                  Srijan
                </span>
              </a>
            </Link>
            <button
              className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-gold ml-auto  outline-none "
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={`${
                active ? "" : "hidden"
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                <Link href="/#events">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-green-600 text-gold hover:text-white ">
                    Events
                  </a>
                </Link>
                <Link href="/team">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gold font-bold items-center justify-center  hover:text-white">
                    Team
                  </a>
                </Link>
                <Link href="/sponsor">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gold font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Sponsors
                  </a>
                </Link>
                <Link href="#contact">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gold font-bold items-center justify-center hover:bg-green-600 hover:text-white  ease-in-out">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </TrackVisibility>
  );
};

export default Navbar;
