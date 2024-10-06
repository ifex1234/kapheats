import images from "../constant/images";
import Image from "next/image";
const SubHeading = ({ title }: { title: string }) => (
  <div className=" mb-4">
    <p className="p__cormorant">{title}</p>
    <Image src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
