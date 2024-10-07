import Image from "next/image";
import images from "../constant/images";
import SubHeading from "@/components/subheading";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-16">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          9 Warde St, Victoria Island, Lagos, Nigeria
        </p>
        <p className="p__cormorant text-[#DCCA87] m-8">Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 08:00 am - 8:00 pm</p>
        <p className="p__opensans">Sat - Sun: 07:00 am - 6:00 pm</p>
      </div>
      <button type="button" className="custom__button mt-8">
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <Image src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
