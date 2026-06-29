import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ctx: ReturnType<typeof gsap.context> | null = null;

function initAnimations() {
  // 1. Adaptive Header Scroll Animation (Subpages only)
  const header: HTMLElement | null = document.querySelector("header");
  if (header && globalThis.location.pathname !== "/") {
    gsap.fromTo(
      header,
      { backgroundColor: "rgba(26, 26, 26, 0.8)", borderBottomColor: "rgba(255, 255, 255, 0.05)" },
      {
        scrollTrigger: { trigger: "body", start: "top top", end: "+=50", scrub: true },
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "rgba(26, 26, 26, 0.95)",
        borderBottomColor: "rgba(255, 255, 255, 0.08)",
        ease: "none",
      },
    );
  }

  // 2. Declarative Reveal Animations (DRY & KISS)
  const revealConfigs = [
    { selector: '[data-animate="fade-up"]', from: { opacity: 0, y: 40 }, to: { y: 0 } },
    { selector: '[data-animate="slide-left"]', from: { opacity: 0, x: -60 }, to: { x: 0 } },
    { selector: '[data-animate="slide-right"]', from: { opacity: 0, x: 60 }, to: { x: 0 } },
  ];

  for (const config of revealConfigs) {
    const elements: Element[] = gsap.utils.toArray(config.selector);
    for (const el of elements) {
      gsap.fromTo(el, config.from, {
        opacity: 1,
        ...config.to,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }

  // 3. Staggered Cards Reveal (SRP)
  const staggerContainers: Element[] = gsap.utils.toArray('[data-animate="stagger-cards"]');
  for (const container of staggerContainers) {
    const cards = container.querySelectorAll(".group, .card, article");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }

  // 4. Parallax Scroll Effect for Images (disabled on mobile for performance)
  if (globalThis.innerWidth >= 768) {
    const parallaxImages: Element[] = gsap.utils.toArray('[data-animate="parallax"]');
    for (const img of parallaxImages) {
      gsap.fromTo(
        img,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }
  }
}

document.addEventListener("astro:page-load", () => {
  ctx = gsap.context(() => {
    initAnimations();
  });
});

document.addEventListener("astro:before-swap", () => {
  if (ctx) {
    ctx.revert();
  }
});
