import styled from "styled-components";
import { useState } from "react";
import { bestItemsArray } from "./mainMockData";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import { useResponsive } from "../../hooks/useResponsive";
import { useBooleanHandler } from "../../hooks/useBooleanHandler";
import { PrevArrow, NextArrow } from "../common/prevNextArrow";
import { Container, SessionHead, ItemInfo } from "../common/style";

export const TodayBest = () => {
  const arrowHandler = useBooleanHandler();
  const { windowWidth } = useResizeWidth();
  const { thisMedia } = useResponsive();
  const BestItemsWidth =
    ((windowWidth - 10 * (thisMedia - 1)) * 0.9) / thisMedia;

  const [navSelect, setNavSelect] = useState(0);
  const navItems = ["전체", "뷰티", "여성의류", "남성의류"];

  const contentHandler = (index: number) => {
    setNavSelect(index);
  };

  return (
    <Container>
      <SessionHead>Today Best</SessionHead>
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
      <BestItemSlider
        onMouseEnter={() => arrowHandler.handler(true)}
        onMouseLeave={() => arrowHandler.handler(false)}
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
        {arrowHandler.isTrue ? (
          <>
            <PrevArrow style={{ transform: "translateY(400%)" }} />
            <NextArrow
              style={{
                transform: "translateY(400%)",
                right: `5%`,
              }}
            />
          </>
        ) : null}
      </BestItemSlider>
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

const BestItemSlider = styled.div`
  display: flex;
  height: 660px;
  overflow: hidden;
`;
const BestItem = styled.div`
  width: 330px;
  height: 670px;
  margin-right: 10px;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  background-color: #f1f1f1;
`;
const BestItemImg = styled.img`
  width: 330px;
  height: 330px;
  object-fit: cover;
`;
