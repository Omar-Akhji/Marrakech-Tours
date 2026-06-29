import { gsap } from "gsap";
import { state } from "./state";

export function updateLayoutSizes() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width < 768) {
    state.cardWidth = 100;
    state.cardHeight = 150;
    state.gap = 12;
    state.numberSize = 30;
    state.offsetLeft = width - 240;
    state.offsetTop = height - 230;

    gsap.set(["#details-even", "#details-odd"], { top: "110px", left: 24, right: 24 });
  } else if (width < 1024) {
    state.cardWidth = 150;
    state.cardHeight = 220;
    state.gap = 20;
    state.numberSize = 40;
    state.offsetLeft = width - 500;
    state.offsetTop = height - 320;

    gsap.set(["#details-even", "#details-odd"], { top: "15%", left: 48, right: "auto" });
  } else {
    state.cardWidth = 200;
    state.cardHeight = 300;
    state.gap = 40;
    state.numberSize = 50;
    state.offsetLeft = width - 600;
    state.offsetTop = height - 430;

    gsap.set(["#details-even", "#details-odd"], { top: "22%", left: 80, right: "auto" });
  }
}
