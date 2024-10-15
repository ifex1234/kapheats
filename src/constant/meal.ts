import { StaticImageData } from "next/image";
import jRice from "../assets/carousel/download (1).jpeg";
import oRice from "../assets/carousel/download (2).jpeg";
import ogbono from "../assets/carousel/download (3).jpeg";
import banga from "../assets/carousel/download (4).jpeg";
import onugbu from "../assets/carousel/download (5).jpeg";
import africSalad from "../assets/carousel/download (6).jpeg";
import egusi from "../assets/carousel/download (7).jpeg";
import frice from "../assets/carousel/OIP (1).jpeg";
import ewedu from "../assets/carousel/OIP (2).jpeg";
import yam from "../assets/carousel/OIP (3).jpeg";
import nkwobi from "../assets/carousel/OIP (4).jpeg";
import Afang from "../assets/carousel/OIP (5).jpeg";

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
  {
    id: 3,
    mealName: "Banga",
    image: banga,
    price: 2500,
  },
  {
    id: 4,
    mealName: "Onugbu",
    image: onugbu,
    price: 2000,
  },
  {
    id: 5,
    mealName: "African Salad Assorted",
    image: africSalad,
    price: 4000,
  },
  {
    id: 6,
    mealName: "Egusi",
    image: egusi,
    price: 3000,
  },
  {
    id: 7,
    mealName: "Fried rice plus",
    image: frice,
    price: 5000,
  },
  {
    id: 8,
    mealName: "Ewedu",
    image: ewedu,
    price: 1500,
  },
  {
    id: 9,
    mealName: "Spiced yam porridge",
    image: yam,
    price: 2500,
  },
  {
    id: 10,
    mealName: "Goat sourced Nkwobi",
    image: nkwobi,
    price: 2500,
  },
  {
    id: 11,
    mealName: "Beef flavoured Afang",
    image: Afang,
    price: 3500,
  },
];
