import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { HeaderBottomMain, HeaderBottomSide } from "../layoutMockData";
import { Link } from "react-router-dom";

interface Props {
  menuHandler: {
    isTrue: boolean;
    handler: (bool: boolean) => void;
  };
}

export const SideMenu = ({ menuHandler }: Props) => {
  return (
    <MenuContainer
      style={menuHandler.isTrue ? { transform: "translateX(0%)" } : {}}
    >
      <CloseBtn onClick={() => menuHandler.handler(false)} />
      <ContentWrap>
        <Content className="mainMenu">
          <h2>Main</h2>
          {HeaderBottomMain.map((item, index) => {
            return (
              <Categories to={"/"} key={index}>
                {item}
              </Categories>
            );
          })}
        </Content>
        <Content className="subMenu">
          <h2>others</h2>
          {HeaderBottomSide.map((item, index) => {
            return (
              <Categories to={"/"} key={index}>
                {item}
              </Categories>
            );
          })}
        </Content>
      </ContentWrap>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
  transform: translateX(100%);
  transition: 0.6s;
`;

const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
`;

const ContentWrap = styled.div`
  margin-top: 80px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  & .subMenu {
    text-align: right;
  }
`;
const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;
const Categories = styled(Link)`
  margin-bottom: 5px;
  font-size: 20px;
`;
