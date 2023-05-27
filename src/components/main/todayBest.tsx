import styled from "styled-components";
import { useState } from "react";
import { navItems, bestItemsArray } from "./mainMockData";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import { useResponsive } from "../../hooks/useResponsive";
import { useBooleanHandler } from "../../hooks/useBooleanHandler";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";
import { PrevArrow, NextArrow } from "../common/prevNextArrow";
import { Container, SessionHead, ItemInfo } from "../common/style";

export const TodayBest = () => {
  const { inView } = useComponentViewCheck("todayBest");
  const { windowWidth } = useResizeWidth();
  const { thisMedia } = useResponsive();
  const arrowHandler = useBooleanHandler();
  const BestItemsWidth =
    ((windowWidth - 10 * (thisMedia - 1)) * 0.9) / thisMedia;

  const [navSelect, setNavSelect] = useState(0);

  const contentHandler = (index: number) => {
    setNavSelect(index);
  };

  const itemsLengthInCategory = bestItemsArray[navSelect].length;
  const sliderWidth = itemsLengthInCategory * windowWidth;
  const [slideState, setSlideState] = useState({
    imageNum: 1,
    indexPx: -0,
  });

  const moveIndexPx = (BestItemsWidth + 10) * thisMedia;
  const prevBtn = () => {
    if (slideState.imageNum !== 1) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum - 1,
        indexPx: prev.indexPx + moveIndexPx,
      }));
    }
  };
  const nextBtn = () => {
    if (slideState.imageNum !== Math.ceil(itemsLengthInCategory / thisMedia)) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum + 1,
        indexPx: prev.indexPx - moveIndexPx,
      }));
    }
  };
  const forceTrue = true;
  return (
    <Container
      style={
        inView
          ? { opacity: "1", paddingTop: "0px" }
          : { opacity: "0", paddingTop: "100px" }
      }
    >
      <SessionHead id="todayBest">Today Best</SessionHead>
      <BestItemNav>
        {navItems.map((item, index) => {
          return (
            <BestItemCategory
              key={index}
              onClick={() => contentHandler(index)}
              style={navSelect === index ? { color: "black" } : {}}
            >
              {item}
            </BestItemCategory>
          );
        })}
      </BestItemNav>
      <SlideWrap
        onMouseEnter={() => arrowHandler.handler(true)}
        onMouseLeave={() => arrowHandler.handler(false)}
      >
        <BestItemSlider
          style={{
            width: `${sliderWidth}`,
            transform: `translateX(${slideState.indexPx}px)`,
          }}
        >
          {bestItemsArray[navSelect].map((item, index) => {
            return (
              <BestItem key={index} style={{ width: `${BestItemsWidth}px` }}>
                <ImageWrap>
                  <BestItemImg
                    src={item}
                    alt="item"
                    style={{ width: `${BestItemsWidth}px` }}
                  />
                </ImageWrap>
                <ItemInfo brand="Brand" itemName="Item Name" price="300,000" />
              </BestItem>
            );
          })}
        </BestItemSlider>
        {forceTrue ? (
          <>
            <PrevArrow
              style={{ transform: "translateY(-440px)" }}
              onClick={prevBtn}
            />
            <NextArrow
              style={{
                transform: "translateY(-440px)",
                right: `5%`,
              }}
              onClick={nextBtn}
            />
          </>
        ) : null}
      </SlideWrap>
    </Container>
  );
};

const BestItemNav = styled.nav`
  display: flex;
  height: 50px;
`;
const BestItemCategory = styled.button`
  margin-right: 20px;
  border: none;
  background: none;
  width: max-content;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  user-select: none;
`;

const SlideWrap = styled.div`
  overflow: hidden;
`;
const BestItemSlider = styled.div`
  display: flex;
  height: 660px;
  transition: 0.6s;
`;
const BestItem = styled.div`
  margin-right: 10px;
  height: 670px;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  background-color: #f1f1f1;
`;
const BestItemImg = styled.img`
  height: 330px;
  object-fit: cover;
`;
