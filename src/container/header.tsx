import SubHeading from "@/components/subheading";
import images from "../constant/images";
import "../styles/header.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans m-8">
        Delicious finger linking meals that you can always count on.
        Customers&apos;s satisfaction is our utmost priority
      </p>
      <Link className="custom__button" href="/menu">
        Explore Menu
      </Link>
    </div>

    <div className="app__wrapper_img">
      <Image src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
