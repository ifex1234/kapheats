import React from "react";
import { images } from "../constant";
import "../styles/Laurels.scss";
import SubHeading from "@/components/subheading";
import Image, { StaticImageData } from "next/image";
import { awards } from "@/constant/data";

type props = {
  imgUrl: StaticImageData;
  title: string;
  subtitle: string;
};
type AwardProp = {
  award: props;
};
const AwardCard = ({ award: { imgUrl, title, subtitle } }: AwardProp) => (
  <div className="app__laurels_awards-card">
    <Image src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant text-[#DCCA87]">{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
