import Image from "next/image";
import React from "react";
import img1 from "../assets/carousel/OIP (1).jpeg";
import img2 from "../assets/carousel/OIP (2).jpeg";
import img3 from "../assets/carousel/OIP (3).jpeg";

export default function Carousel() {
  return (
    <div className="m-0 ">
      <ul>
        <li>
          <Image src={img1} alt="" />
        </li>
        <li>
          {" "}
          <Image src={img2} alt="" />
        </li>
        <li>
          {" "}
          <Image src={img3} alt="" />
        </li>
      </ul>
    </div>
  );
}
