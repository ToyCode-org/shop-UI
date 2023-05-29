import styled from "styled-components";
import { HeaderBottomMain, HeaderBottomSide } from "../layoutMockData";
import { Link } from "react-router-dom";
import { TbStarFilled } from "react-icons/tb";

export const HeaderBottom = () => {
  return (
    <HeaderBottomWrap>
      <BottomMain>
        {HeaderBottomMain.map((item, index) => {
          return (
            <HeaderBottomItems to={"/"} key={index}>
              {item}
            </HeaderBottomItems>
          );
        })}
      </BottomMain>
      <BottomSide>
        {HeaderBottomSide.map((item, index) => {
          return (
            <HeaderBottomItems to={"/"} key={index}>
              {item}
              {index === 0 ? <TbStarFilled /> : null}
            </HeaderBottomItems>
          );
        })}
      </BottomSide>
    </HeaderBottomWrap>
  );
};

const HeaderBottomWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 48px;
`;

const BottomMain = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 900px;
`;
const BottomSide = styled.div`
  display: flex;
  justify-content: space-around;
  width: 265px;
`;
const HeaderBottomItems = styled(Link)`
  display: flex;
  align-items: center;
  color: gray;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;
