import { StaticImageData } from "next/image";
import jRice from "../assets/carousel/download (1).jpeg";
import oRice from "../assets/carousel/download (2).jpeg";
import ogbono from "../assets/carousel/download (3).jpeg";

export type MealsProp = {
  id: number;
  mealName: string;
  image: StaticImageData;
  price: number;
}[];
export const Menu: MealsProp = [
  {
    id: 0,
    mealName: "fried rice plus",
    image: jRice,
    price: 5000,
  },
  {
    id: 1,
    mealName: "ofada rice plus",
    image: oRice,
    price: 4000,
  },
  {
    id: 2,
    mealName: "Ogbono",
    image: ogbono,
    price: 2500,
  },
];
