import { PublicImage } from "../../util/publicImage";

export const slideImages = [
  PublicImage("redux"),
  PublicImage("next"),
  PublicImage("nest"),
  PublicImage("react"),
  PublicImage("redux"),
  PublicImage("next"),
];

// todayBest nav categorys
export const navItems = ["전체", "뷰티", "여성의류", "남성의류"];

// todayBest nav items
const bestOfAll = new Array(12).fill(PublicImage("next"));
const bestOfBeauty = new Array(12).fill(PublicImage("nest"));
const bestOfWomen = new Array(12).fill(PublicImage("react"));
const bestOfMan = new Array(12).fill(PublicImage("redux"));

export const bestItemsArray = [bestOfAll, bestOfBeauty, bestOfWomen, bestOfMan];
