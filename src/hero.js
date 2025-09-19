import { createStyledElement } from "./utils.js";

export const renderHero = () => {
  const body = document.body;
  const hero = createStyledElement("section", ["flex flex-col w-screen"]);
  const heroImg = createStyledElement("img", ["w-full"]);
  heroImg.src = "assets/section/hero_bg.webp";
  heroImg.alt = "Hero Image";
  hero.appendChild(heroImg);

  body.appendChild(hero);
};
