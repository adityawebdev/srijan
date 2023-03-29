import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// IMP --- banner3 keeps breaking, i.e. undefined
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import Image from "next/image";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible ? "animate__animated animate__zoomIn -mb-4" : "-mb-4"
          }
        >
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item interval={500}>
              <Image
                src={banner1}
                className="d-block w-100"
                style={{ objectFit: "cover" }}
                alt="banner"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Image
                alt="banner"
                src={banner2}
                className="d-block w-100"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </TrackVisibility>
  );
};

export default Banner;
