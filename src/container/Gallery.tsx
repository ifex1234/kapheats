"use client";
import React from "react";
//import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Instagram, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import images from "../constant/images";
import "../styles/Gallery.scss";
import SubHeading from "@/components/subheading";
import Image from "next/image";

const Gallery = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current!.scrollLeft -= 300;
    } else {
      current!.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans text-[#AAAAAA] mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <Image src={image} alt="gallery_image" />
              <Instagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <ArrowBackIos
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <ArrowForwardIos
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
