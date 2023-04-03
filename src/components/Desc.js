import Image from "next/image";
import React from "react";
import banner2 from "../../assets/banner2.jpg";
const Desc = () => {
  return (
    <div className="py-16 bg-darkMaroon">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-2/12">
            <Image
              src={banner2}
              alt="logo"
              loading="lazy"
              width="400"
              height="250"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gold font-bold md:text-4xl">
              The Most Awaited Annual Cultural Fest
            </h2>
            <p className="mt-6 text-white font-extralight font-xl">
              Srijan is the annual cultural fest of BCAS which aims to bring
              together people of different colleges under a single roof through
              a plethora of cultural and extra curricular activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
