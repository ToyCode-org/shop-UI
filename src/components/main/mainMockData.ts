import { PublicImage } from "../../util/publicImage";

export const slideImages = [
  PublicImage("event4"),
  PublicImage("event1"),
  PublicImage("event2"),
  PublicImage("event3"),
  PublicImage("event4"),
  PublicImage("event1"),
];

// todayBest nav categorys
export const navItems = ["전체", "뷰티", "여성의류", "남성의류"];

// todayBest nav items
const bestOfAll = new Array(12).fill(PublicImage("bag"));
const bestOfBeauty = new Array(12).fill(PublicImage("lipstick"));
const bestOfWomen = new Array(12).fill(PublicImage("onepiece"));
const bestOfMan = new Array(12).fill(PublicImage("jacekt"));

export const bestItemsArray = [bestOfAll, bestOfBeauty, bestOfWomen, bestOfMan];
