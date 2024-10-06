import NavBar from "./components/navBar";
import AboutUs from "./container/aboutUs";
import Header from "./container/header";
import SpecialMenu from "./container/SpecialMenu";
import Chef from "./container/Chef";
import Intro from "./container/Intro";
import Laurels from "./container/Laurels";
import Gallery from "./container/Gallery";
import FindUs from "./container/FindUs";
import Footer from "./container/Footer";

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
