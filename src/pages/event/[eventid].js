import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { d1events, d2events } from "../../constants.js";
import Image from "next/image";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Event = () => {
  const router = useRouter();
  const { eventid } = router.query;

  const Event =
    d1events.find((elem) => elem.id == eventid) ||
    d2events.find((elem) => elem.id == eventid);

  return Event ? (
    <section className="p-8 animate__animated animate__lightSpeedInLeft animate__delay-1s">
      <h1 className="text-xl md:text-3xl font-bold text-whitish">
        {Event.name}
      </h1>
      <div className="py-4 flex flex-col gap-4 ">
        <div>
          <Image
            src={Event.image}
            className="max-w-[250px] self-center"
            alt={Event.name}
            height={250}
            width={250}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-md md:text-xl font-semibold text-whitish">
              About the Event
            </h3>
            <p className="mt-2 text-white">{Event.desc}</p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold text-whitish">
              Timing
            </h3>
            <p className="mt-2 text-white">{Event.timing}</p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold text-whitish">
              Venue
            </h3>
            <p className="mt-2 text-white">{Event.venue}</p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold text-whitish">
              Event Coordinators
            </h3>
            <p className="mt-2 font-bold text-white">{Event.cord}</p>
            <p className="text-whitish">{Event.contact}</p>
          </div>
        </div>
        <div className="mt-4">
          <a
            href={Event.register}
            rel="noreferrer"
            className="rounded bg-gold text-maroon transition p-2 font-bold cursor-pointer"
            style={{ color: "inherit" }}
            target="_blank"
          >
            Register
          </a>
        </div>
        <div className="mt-8 font-bold text-whitish">
          <p>
            NOTE - Register for{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              Decathlon Events
            </a>
          </p>
        </div>
      </div>
    </section>
  ) : (
    <h1>Fetching</h1>
  );
};

export default Event;
