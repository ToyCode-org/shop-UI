import { useState, useEffect } from "react";

export const useResizeWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageWidthFetch = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", imageWidthFetch);
    return () => {
      window.removeEventListener("resize", imageWidthFetch);
    };
  }, []);

  return { windowWidth };
};
