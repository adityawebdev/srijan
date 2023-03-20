import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


// IMP --- banner3 keeps breaking, i.e. undefined
import { banner1, banner2 } from "../assets";
import Image from "next/image";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            src={banner1}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={banner2}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
