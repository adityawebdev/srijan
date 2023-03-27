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
    <section className="p-8 animate__animated animate__fadeInLeft">
      <h1 className="text-xl md:text-3xl font-bold ">{Event.name}</h1>
      <div className="py-4 flex flex-col gap-4 animate__delay-1s">
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
            <h3 className="text-md md:text-xl font-semibold">
              About the Event
            </h3>
            <p className="mt-2">{Event.desc}</p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold">Timing</h3>
            <p className="mt-2">{Event.timing}</p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold">
              Event Coordinators
            </h3>
            <p className="mt-2 font-bold">{Event.cord}</p>
            <p className="">{Event.contact}</p>
          </div>
        </div>
        <div className="mt-4">
          <a
            href={Event.register}
            rel="noreferrer"
            className="rounded bg-gray-300 hover:bg-gray-400 transition p-2 font-bold cursor-pointer"
            style={{ color: "inherit" }}
            target="_blank"
          >
            Register
          </a>
        </div>
        <div className="mt-8 font-bold">
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
