export function getCard(index: number): string {
  return `#card${index}`;
}

export function getCardContent(index: number): string {
  return `#card-content-${index}`;
}

export function getSliderItem(index: number): string {
  return `#slide-item-${index}`;
}

export function setText(selector: string, text: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

export function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", reject);
    img.src = source;
  });
}

import { data } from "../../data/sliderData";

export async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}
