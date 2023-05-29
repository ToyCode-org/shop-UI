import styled from "styled-components";
import {
  TbDoorEnter,
  TbHeadset,
  TbUserCircle,
  TbClockHour4,
  TbShoppingBag,
} from "react-icons/tb";
import { Link } from "react-router-dom";

export const HeaderTopMenu = () => {
  const headerTopMenuItems = [
    { name: "로그인", icon: <TbDoorEnter /> },
    { name: "고객센터", icon: <TbHeadset /> },
    { name: "마이페이지", icon: <TbUserCircle /> },
    { name: "최근본상품", icon: <TbClockHour4 /> },
    { name: "쇼핑백", icon: <TbShoppingBag /> },
  ];

  return (
    <HeaderTop>
      {headerTopMenuItems.map((item, index) => {
        const { name, icon } = item;
        return (
          <MenuItem key={index} to={"/"}>
            <MenuIcon>{icon}</MenuIcon>
            <span>{name}</span>
          </MenuItem>
        );
      })}
    </HeaderTop>
  );
};

const HeaderTop = styled.div`
  width: 264px;
  height: 86px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: gray;
  transition: 0.2s;
  &:hover {
    color: black;
  }
`;

const MenuIcon = styled.span`
  font-size: 24px;
`;
