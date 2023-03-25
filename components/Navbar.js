import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap  p-3 bg-white">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <span className="text-xl text-black  font-bold uppercase tracking-wide">
            Srijan
          </span>
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
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
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-green-600 text-black hover:text-white ">
              Events
            </a>
          </Link>
          <Link href="/team">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white">
              Team
            </a>
          </Link>
          <Link href="/#sponsors">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white">
              Sponsors
            </a>
          </Link>
          <Link href="#contact">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
