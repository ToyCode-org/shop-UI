import styled from "styled-components";
import { PublicImage } from "../../util/publicImage";
import { HeaderTopMenu } from "./headerTop";
import { HeaderSearchInput } from "./searchInput";
import { HeaderBottom } from "./headerBottom";
import { useResponsive } from "../../hooks/useResponsive";
import { MobileHeaders } from "./mobile/mobileHeaders";

export const Headers = () => {
  const { thisMedia } = useResponsive();

  return (
    <HeaderContainer>
      {thisMedia === 4 ? (
        <>
          <BannerImg src={PublicImage("next")} alt="header-banner" />
          <HeaderTop>
            <Logo src={PublicImage("nest")} alt="logo" />
            <HeaderSearchInput />
            <HeaderTopMenu />
          </HeaderTop>
          <HeaderBottom />
        </>
      ) : (
        <MobileHeaders />
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

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
  object-fit: cover;
  cursor: pointer;
`;
