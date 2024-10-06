import { StaticImageData } from "next/image";
import images from "./images";
type WineProps = {
  title: string;
  price: string;
  tags: string;
  id: number;
}[];
export const wines: WineProps = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
    id: 0,
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
    id: 1,
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
    id: 2,
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
    id: 3,
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
    id: 4,
  },
];
type CocktailsProps = {
  title: string;
  price: string;
  tags: string;
  id: number;
}[];
export const cocktails: CocktailsProps = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
    id: 0,
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
    id: 1,
  },
  {
    title: "Daiquiri",
    id: 2,
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
    id: 3,
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
    id: 4,
  },
];
type AwardProps = {
  subtitle: string;
  title: string;
  imgUrl: StaticImageData;
  id: number;
}[];
export const awards: AwardProps = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    id: 0,
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    id: 1,
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    id: 2,
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    id: 3,
  },
];
