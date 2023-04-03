import React from "react";
import { sponsors } from "../constants";
import Image from "next/image";
import "animate.css";
import TrackVisibility from "react-on-screen";
const sponsor = () => {
  return (
    <div className="container px-6 mx-auto pt-12 pb-4 bg-darkMaroon">
      <section className="mb-8 text-whitish text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-16 text-whitish capitalize animate__animated animate__jackInTheBox">
          Our Sponsors
        </h2>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeInUp" : ""}
            >
              <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
                {sponsors.map((member) => (
                  <div
                    className={`mb-12 shadow-xl shadow-gold bg-transparent animate__animated animate__zoomIn rounded-xl ${member.class}`}
                    key={member.name}
                  >
                    <Image
                      src={member.image}
                      className="rounded-full mx-auto shadow-lg max-w-[100px] "
                      alt={member.name}
                      width={150}
                      height={150}
                      style={{ objectFit: "cover" }}
                    />

                    <p className="font-bold mb-2 text-xl">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TrackVisibility>
      </section>
    </div>
  );
};

export default sponsor;
