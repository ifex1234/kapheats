import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import images from "../constant/images";
import "../styles/Footer.scss";
import FooterOverlay from "@/components/footeroverlay";
import Newsletter from "@/components/newsletter";
import Image from "next/image";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          9 Warde St, Victoria Island, Lagos, Nigeria
        </p>
        <p className="p__opensans">+234 212-344-1230</p>
        <p className="p__opensans">+234 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext">Kapheats</h1>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <Image src={images.spoon} className="spoon__img mt-3" alt="" />
        <div className="app__footer-links_icons">
          <MdFacebook />
          <FaXTwitter />
          <FaInstagramSquare />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 8:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 6:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Kapheats. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
