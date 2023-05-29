import styled from "styled-components";
import { PublicImage } from "../../../util/publicImage";
import { HeaderBottom } from "./headerBottom";
import { HeaderSearchInput } from "./searchInput";
import { HeaderTopMenu } from "./headerTop";

export const DesktopHeaders = () => {
  return (
    <>
      <BannerImg src={PublicImage("eventbanner")} alt="header-banner" />
      <HeaderTop>
        <Logo src={PublicImage("shoplogo")} alt="logo" />
        <HeaderSearchInput />
        <HeaderTopMenu />
      </HeaderTop>
      <HeaderBottom />
    </>
  );
};

const BannerImg = styled.img`
  width: 100%;
  height: 90px;
  object-fit: cover;
  cursor: pointer;
`;

const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
`;

const Logo = styled.img`
  width: 253px;
  height: 88px;
  object-fit: contain;
  cursor: pointer;
`;
