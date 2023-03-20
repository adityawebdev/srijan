import React from "react";
import { teams } from "../constants";
import Image from "next/image";

const team = () => {
  return (
    <div class="container px-6 mx-auto pt-12 pb-4 bg-lightpink">
      <section class="mb-8 text-gray-800 text-center">
        <h2 class=" text-xl md:text-3xl font-bold mb-16 text-blue capitalize">
          Meet the team
        </h2>

        <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
          {teams.map((member) => (
            <div class="mb-12">
              <Image
                src={member.image}
                className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]"
                alt={member.name}
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
              />

              <p class="font-bold mb-2">{member.name}</p>
              <p class="text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default team;
