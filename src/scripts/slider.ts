import { gsap } from "gsap";
import { state } from "./slider/state";
import { getCard, getCardContent, getSliderItem, loadImages } from "./slider/dom";
import { updateLayoutSizes } from "./slider/layout";
import { initSlider, stepSlider } from "./slider/animations";

(() => {
  async function loop() {
    if (!state.isPageActive) return;
    await new Promise((resolve) => setTimeout(resolve, 2800));
    if (!state.isPageActive) return;
    await stepSlider();
    if (!state.isPageActive) return;
    void loop();
  }

  const resizeObserver = new ResizeObserver(() => {
    if (!document.querySelector("#demo")) {
      resizeObserver.disconnect();
      return;
    }
    updateLayoutSizes();
    const active = state.order[0] ?? 0;
    const rest = state.order.slice(1);

    gsap.set(getCard(active), { width: window.innerWidth, height: window.innerHeight });

    gsap.set("#pagination", {
      top: state.offsetTop + state.cardHeight + (window.innerWidth < 768 ? 15 : 30),
      left: state.offsetLeft,
    });

    for (const [index, item] of rest.entries()) {
      gsap.set(getCard(item), {
        x: state.offsetLeft + index * (state.cardWidth + state.gap),
        y: state.offsetTop,
        width: state.cardWidth,
        height: state.cardHeight,
      });
      gsap.set(getCardContent(item), {
        x: state.offsetLeft + index * (state.cardWidth + state.gap),
        width: state.cardWidth,
        y: state.offsetTop + state.cardHeight - 100,
      });
      gsap.set(getSliderItem(item), { x: (index + 1) * state.numberSize });
    }
  });

  async function start() {
    try {
      state.isPageActive = false;
      await new Promise((resolve) => setTimeout(resolve, 50));
      state.isPageActive = true;
      state.order = [0, 1, 2, 3, 4, 5];
      state.clicks = 0;
      state.isDetailsEven = true;

      await loadImages();
      resizeObserver.observe(document.body);
      initSlider(() => {
        void loop();
      });
    } catch (error) {
      console.error("One or more images failed to load", error);
    }
  }

  document.addEventListener("astro:page-load", () => {
    if (document.querySelector("#demo")) {
      void start();
    }
  });

  document.addEventListener("astro:before-preparation", () => {
    state.isPageActive = false;
    resizeObserver.disconnect();
  });
})();
