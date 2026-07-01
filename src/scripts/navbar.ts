import { gsap } from "gsap";

function setupNavIndicator() {
  const nav = document.querySelector('nav[aria-label="Primary Navigation"]');
  const indicator = document.querySelector(".nav-indicator");
  if (!nav || !indicator) return;

  const items = nav.querySelectorAll(".nav-item");
  const activeLink = nav.querySelector('[aria-current="page"]');

  const moveTo = (element: HTMLElement, isInstant = false) => {
    gsap.to(indicator, {
      x: element.offsetLeft,
      width: element.offsetWidth,
      duration: isInstant ? 0 : 0.4,
      ease: "power3.out",
      opacity: 1,
    });
  };

  if (activeLink instanceof HTMLElement) {
    moveTo(activeLink, true);
  }

  window.addEventListener("resize", () => {
    if (activeLink instanceof HTMLElement) {
      moveTo(activeLink, true);
    }
  });

  for (const item of items) {
    if (!(item instanceof HTMLElement)) continue;
    item.addEventListener("mouseenter", () => {
      for (const itemElement of items) {
        itemElement.classList.remove("text-black");
        itemElement.classList.add("text-text-muted");
      }
      item.classList.remove("text-text-muted");
      item.classList.add("text-black");
      moveTo(item);
    });
  }

  nav.addEventListener("mouseleave", () => {
    for (const item of items) {
      item.classList.remove("text-black");
      item.classList.add("text-text-muted");
    }
    if (activeLink instanceof HTMLElement) {
      activeLink.classList.remove("text-text-muted");
      activeLink.classList.add("text-black");
      moveTo(activeLink);
    } else {
      gsap.to(indicator, { opacity: 0, duration: 0.4 });
    }
  });
}

document.addEventListener("astro:page-load", setupNavIndicator);
