import { gsap } from "gsap";
import { data } from "../../data/sliderData";
import { state, config } from "./state";
import { getCard, getCardContent, getSliderItem, setText } from "./dom";
import { updateLayoutSizes } from "./layout";

export function initSlider(loopCb: () => void) {
  const active = state.order[0] ?? 0;
  const rest = state.order.slice(1);
  const detailsActive = state.isDetailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = state.isDetailsEven ? "#details-odd" : "#details-even";
  const width = window.innerWidth;

  updateLayoutSizes();

  gsap.set("#pagination", {
    top: state.offsetTop + state.cardHeight + (window.innerWidth < 768 ? 15 : 30),
    left: state.offsetLeft,
    y: 200,
    opacity: 0,
    zIndex: 60,
  });
  gsap.set("header", { y: -200, opacity: 0 });

  gsap.set(getCard(active), { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { yPercent: 100 });
  gsap.set(`${detailsInactive} .title-1`, { yPercent: 100 });
  gsap.set(`${detailsInactive} .title-2`, { yPercent: 100 });
  gsap.set(`${detailsInactive} .desc`, { yPercent: 50 });
  gsap.set(`${detailsInactive} .cta`, { yPercent: 60 });

  for (const [index, item] of rest.entries()) {
    gsap.set(getCard(item), {
      x: state.offsetLeft + 400 + index * (state.cardWidth + state.gap),
      y: state.offsetTop,
      width: state.cardWidth,
      height: state.cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(item), {
      x: state.offsetLeft + 400 + index * (state.cardWidth + state.gap),
      width: state.cardWidth,
      zIndex: 40,
      y: state.offsetTop + state.cardHeight - 100,
    });
    gsap.set(getSliderItem(item), { x: (index + 1) * state.numberSize });
  }

  const startDelay = 0.6;

  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease: config.ease,
    onComplete: () => {
      setTimeout(() => {
        loopCb();
      }, 500);
    },
  });

  for (const [index, item] of rest.entries()) {
    gsap.to(getCard(item), {
      x: state.offsetLeft + index * (state.cardWidth + state.gap),
      zIndex: 30,
      delay: startDelay + 0.05 * index,
      ease: config.ease,
    });
    gsap.to(getCardContent(item), {
      x: state.offsetLeft + index * (state.cardWidth + state.gap),
      width: state.cardWidth,
      zIndex: 40,
      delay: startDelay + 0.05 * index,
      ease: config.ease,
    });
  }

  gsap.to("#pagination", { y: 0, opacity: 1, ease: config.ease, delay: startDelay });
  gsap.to("header", { y: 0, opacity: 1, ease: config.ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease: config.ease, delay: startDelay });
}

export function stepSlider(): Promise<void> {
  return new Promise((resolve) => {
    if (!state.isPageActive) {
      resolve();
      return;
    }
    const shifted = state.order.shift();
    if (typeof shifted === "number") {
      state.order.push(shifted);
    }
    state.isDetailsEven = !state.isDetailsEven;

    const detailsActive = state.isDetailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = state.isDetailsEven ? "#details-odd" : "#details-even";

    const activeIndex = state.order[0] ?? 0;
    const activeData = data[activeIndex]
      ?? data[0] ?? { place: "", title: "", title2: "", description: "", image: "" };

    setText(`${detailsActive} .place-box .text`, activeData.place);
    setText(`${detailsActive} .title-1`, activeData.title);
    setText(`${detailsActive} .title-2`, activeData.title2);
    setText(`${detailsActive} .desc`, activeData.description);

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease: config.ease });
    gsap.to(`${detailsActive} .text`, {
      yPercent: 0,
      delay: 0.1,
      duration: 0.7,
      ease: config.ease,
    });
    gsap.to(`${detailsActive} .title-1`, {
      yPercent: 0,
      delay: 0.15,
      duration: 0.7,
      ease: config.ease,
    });
    gsap.to(`${detailsActive} .title-2`, {
      yPercent: 0,
      delay: 0.15,
      duration: 0.7,
      ease: config.ease,
    });
    gsap.to(`${detailsActive} .desc`, {
      yPercent: 0,
      delay: 0.3,
      duration: 0.4,
      ease: config.ease,
    });
    gsap.to(`${detailsActive} .cta`, {
      yPercent: 0,
      delay: 0.35,
      duration: 0.4,
      onComplete: resolve,
      ease: config.ease,
    });
    gsap.set(detailsInactive, { zIndex: 12 });

    const active = state.order[0] ?? 0;
    const rest = state.order.slice(1);
    const prv = rest.at(-1) ?? 0;

    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease: config.ease });

    gsap.to(getCardContent(active), {
      y: state.offsetTop + state.cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease: config.ease,
    });
    gsap.to(getSliderItem(active), { x: 0, ease: config.ease });
    gsap.to(getSliderItem(prv), { x: -state.numberSize, ease: config.ease });

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease: config.ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = state.offsetLeft + (rest.length - 1) * (state.cardWidth + state.gap);
        gsap.set(getCard(prv), {
          x: xNew,
          y: state.offsetTop,
          width: state.cardWidth,
          height: state.cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(getCardContent(prv), {
          x: xNew,
          width: state.cardWidth,
          y: state.offsetTop + state.cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(getSliderItem(prv), { x: rest.length * state.numberSize });

        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { yPercent: 100 });
        gsap.set(`${detailsInactive} .title-1`, { yPercent: 100 });
        gsap.set(`${detailsInactive} .title-2`, { yPercent: 100 });
        gsap.set(`${detailsInactive} .desc`, { yPercent: 50 });
        gsap.set(`${detailsInactive} .cta`, { yPercent: 60 });
        state.clicks -= 1;
        if (state.clicks > 0) {
          void stepSlider();
        }
      },
    });

    for (const [index, item] of rest.entries()) {
      if (item === prv) {
        continue;
      }
      const xNew = state.offsetLeft + index * (state.cardWidth + state.gap);
      gsap.set(getCard(item), { zIndex: 30 });
      gsap.to(getCard(item), {
        x: xNew,
        y: state.offsetTop,
        width: state.cardWidth,
        height: state.cardHeight,
        ease: config.ease,
        delay: 0.1 * (index + 1),
      });

      gsap.to(getCardContent(item), {
        x: xNew,
        width: state.cardWidth,
        y: state.offsetTop + state.cardHeight - 100,
        opacity: 1,
        zIndex: 40,
        ease: config.ease,
        delay: 0.1 * (index + 1),
      });
      gsap.to(getSliderItem(item), { x: (index + 1) * state.numberSize, ease: config.ease });
    }
  });
}
