import styled from "styled-components";
import { useState, useEffect } from "react";
import { slideImages } from "./mainMockData";

export const EventSlider = () => {
  const [imageWidth, setImageWidth] = useState(window.innerWidth);
  console.log(imageWidth);

  const imageWidthFetch = () => {
    setImageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", imageWidthFetch);
    return () => {
      window.removeEventListener("resize", imageWidthFetch);
    };
  }, []);

  return (
    <SlideWrap>
      <Slider>
        {slideImages.map((item, index) => {
          return (
            <EventItem
              key={index}
              src={item}
              alt={`event ${index + 1}`}
              style={{ width: `${imageWidth}px` }}
            />
          );
        })}
      </Slider>
    </SlideWrap>
  );
};

const SlideWrap = styled.div``;
const Slider = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
const EventItem = styled.img`
  height: 550px;
  cursor: pointer;
`;
