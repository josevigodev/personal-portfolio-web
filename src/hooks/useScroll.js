import { useRef } from "react";

export function useScroll() {
  const itemsRef = useRef(null);

  function scrollToArticle(article) {
    const map = getMap();
    const node = map.get(article);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  return { scrollToArticle, getMap };
}