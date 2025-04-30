import { useEffect, useState } from "react";

export function useClassName({ showSide }) {
  const [className, setClassName] = useState('aside');

  useEffect(() => {
    const id = setTimeout(() => {
      setClassName(`aside ${showSide && 'show'}`);
    }, 100);

    return () => {
      clearTimeout(id);
    };
  }, [showSide]);

  return className;
}