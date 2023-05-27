import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobileHeaderNav } from "../layoutMockData";

export const HeaderNav = () => {
  return (
    <HeaderBottom>
      {mobileHeaderNav.map((item, index) => {
        return (
          <HeaderBottomItem to={"/"} key={index}>
            {item}
          </HeaderBottomItem>
        );
      })}
    </HeaderBottom>
  );
};

const HeaderBottom = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 48px;
`;
const HeaderBottomItem = styled(Link)`
  display: flex;
  align-items: center;
  color: gray;
  font-weight: bold;
`;
