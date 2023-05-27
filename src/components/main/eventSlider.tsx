import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { slideImages } from "./mainMockData";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import { useBooleanHandler } from "../../hooks/useBooleanHandler";
import { PrevArrow, NextArrow } from "../common/prevNextArrow";
import { EventTimer } from "./eventTimer";

export const EventSlider = () => {
  const { windowWidth } = useResizeWidth();
  const arrowHandler = useBooleanHandler();

  const imageArrLength = slideImages.length;
  const sliderWidth = imageArrLength * windowWidth;

  const slideRef = useRef({
    nowMoving: false,
  });
  const [slideState, setSlideState] = useState({
    imageNum: 1,
    indexPx: -windowWidth,
    transition: 0.6,
  });

  const prevBtn = () => {
    if (slideRef.current.nowMoving) return;
    slideRef.current.nowMoving = true;
    if (slideState.imageNum === 1) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: imageArrLength - 2,
        indexPx: prev.indexPx + windowWidth,
      }));
      setTimeout(() => {
        setSlideState((prev) => ({
          ...prev,
          imageNum: imageArrLength - 2,
          indexPx: -windowWidth * (imageArrLength - 2),
          transition: 0,
        }));
        setTimeout(() => {
          setSlideState((prev) => ({
            ...prev,
            transition: 0.6,
          }));
        }, 100);
      }, 600);
    } else {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum - 1,
        indexPx: prev.indexPx + windowWidth,
      }));
    }
    setTimeout(() => {
      slideRef.current.nowMoving = false;
    }, 700);
  };

  const nextBtn = () => {
    if (slideRef.current.nowMoving) return;
    slideRef.current.nowMoving = true;
    if (slideState.imageNum === imageArrLength - 2) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: 1,
        indexPx: prev.indexPx - windowWidth,
      }));
      setTimeout(() => {
        setSlideState((prev) => ({
          ...prev,
          imageNum: 1,
          indexPx: -windowWidth,
          transition: 0,
        }));
        setTimeout(() => {
          setSlideState((prev) => ({
            ...prev,
            transition: 0.6,
          }));
        }, 100);
      }, 600);
    } else {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum + 1,
        indexPx: prev.indexPx - windowWidth,
      }));
    }
    setTimeout(() => {
      slideRef.current.nowMoving = false;
    }, 700);
  };

  const [slideTimer, setSlideTimer] = useState(0);
  const slideTimerInterval = () => {
    setSlideTimer((prev) => prev + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(slideTimerInterval, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (slideTimer !== 0) {
      nextBtn();
    }
  }, [slideTimer]);

  return (
    <SlideWrap
      onMouseEnter={() => arrowHandler.handler(true)}
      onMouseLeave={() => arrowHandler.handler(false)}
    >
      <Slider
        style={{
          width: `${sliderWidth}`,
          transform: `translateX(${slideState.indexPx}px)`,
          transition: `${slideState.transition}s`,
        }}
      >
        {slideImages.map((item, index) => {
          return (
            <ItemWrap key={index} style={{ width: `${windowWidth}` }}>
              <EventItem
                src={item}
                alt={`event${index + 1}`}
                style={{ width: `${windowWidth / 2}` }}
              />
            </ItemWrap>
          );
        })}
      </Slider>
      {arrowHandler.isTrue ? (
        <>
          <PrevArrow
            style={{ transform: "translateY(-375px)" }}
            onClick={prevBtn}
          />
          <NextArrow
            style={{ transform: "translateY(-375px)", right: "0" }}
            onClick={nextBtn}
          />
        </>
      ) : null}
      <EventTimer imageNum={slideState.imageNum} />
    </SlideWrap>
  );
};

const SlideWrap = styled.div`
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
`;

const ItemWrap = styled.div`
  display: flex;
`;
const EventItem = styled.img`
  width: 100vw;
  height: 700px;
  object-fit: cover;
  cursor: pointer;
`;
