import "./globals.css";
import NavBar from "@/components/navbar";
import AboutUs from "@/container/aboutUs";
import Chef from "@/container/Chef";
import FindUs from "@/container/FindUs";
import Footer from "@/container/Footer";
import Gallery from "@/container/Gallery";
import Header from "@/container/header";
import Intro from "@/container/Intro";
import Laurels from "@/container/Laurels";
import SpecialMenu from "@/container/SpecialMenu";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}
