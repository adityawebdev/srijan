import React, { useState } from "react";
import { d1events, d2events } from "../constants.js";
import reel_up from "../assets/reel_up.jpeg";
import reel_down from "../assets/reel_down.jpeg";
import Image from "next/image";

const Events = () => {
  const [selected, setSelected] = useState("one");

  const handleSelect = (changed) => setSelected(changed);

  const styles = {
    transform: "scale(1.2)",
    fontWeight: "700",
  };

  return (
    <section className="bg-white p-8 my-4" id="events">
      <h1 className="text-xl md:text-3xl text-green font-bold text-center">
        Events
      </h1>
      <div className="p-2 md:p-4">
        <div className="text-sm md:text-xl flex items-center justify-center gap-12 p-4">
          <h2
            onClick={() => handleSelect("one")}
            className="cursor-pointer"
            style={selected === "one" ? styles : null}
          >
            Act One
          </h2>
          <h2
            onClick={() => handleSelect("two")}
            className="cursor-pointer"
            style={selected === "two" ? styles : null}
          >
            Act Two
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {selected === "one"
            ? d1events.map((event) => (
                <div className="bg-orange rounded-lg">
                  <a href={`/event/${event.id}`} style={{ color: "inherit" }}>
                    <Image
                      src={event.image}
                      className="max-w-[100px]"
                      alt={event.name}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="p-2">
                      <p className="text-md md:text-lg font-semibold">
                        {event.name}
                      </p>
                      <p className="">
                        <a href={event.register} target="_blank">
                          Register
                        </a>
                      </p>
                    </div>
                  </a>
                </div>
              ))
            : d2events.map((event) => (
                <div className="bg-orange rounded-lg">
                  <a href={`/event/${event.id}`} style={{ color: "inherit" }}>
                    <Image
                      src={event.image}
                      className="max-w-[100px]"
                      alt={event.name}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="p-2">
                      <p className="text-md md:text-lg font-semibold">
                        {event.name}
                      </p>
                      <p className="">
                        <a href={event.register} target="_blank">
                          Register
                        </a>
                      </p>
                    </div>
                  </a>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

// container mx-auto flex items-center flex-wrap pt-4 pb-12

{
  /* <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
  <a href="#">
    <img
      className="hover:grow hover:shadow-lg"
      src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg"
    />
    <div className="pt-3 flex items-center justify-between">
      <p className="">Event Name</p>
    </div>
    <p className="pt-1 text-gray-900">Date/Timings</p>
    <p className="pt-1 text-gray-900">Register</p>
  </a>
</div> */
}
