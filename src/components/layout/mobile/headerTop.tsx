import styled from "styled-components";
import { PublicImage } from "../../../util/publicImage";
import { TbSearch, TbShoppingBag, TbMenu2 } from "react-icons/tb";

interface Props {
  openMenu: () => void;
}

export const HeaderTop = ({ openMenu }: Props) => {
  return (
    <HeaderWrap>
      <Logo src={PublicImage("shoplogo")} alt="logo" />
      <TopMenu>
        <TbSearch />
        <TbShoppingBag />
        <TbMenu2 onClick={openMenu} />
      </TopMenu>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Logo = styled.img`
  width: 180px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
`;

const TopMenu = styled.div`
  & svg {
    margin: 0 5px;
    font-size: 40px;
  }
`;
