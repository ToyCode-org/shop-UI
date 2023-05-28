import styled from "styled-components";
import { PublicImage } from "../../../util/publicImage";
import { GrClose } from "react-icons/gr";
import { useBooleanHandler } from "../../../hooks/useBooleanHandler";
import { SideMenu } from "./sideMenu";
import { HeaderTop } from "./headerTop";
import { HeaderNav } from "./headerNav";

export const MobileHeaders = () => {
  const closeBanner = () => {
    const element = document.getElementById("banner");
    if (element) {
      element.style.display = "none";
    }
  };

  const menuModal = useBooleanHandler();
  const openMenu = () => {
    menuModal.handler(true);
  };

  return (
    <HeaderContainer>
      <Banner id="banner">
        <BannerImg src={PublicImage("next")} alt="header-banner" />
        <CloseBtn onClick={closeBanner} />
      </Banner>
      <HeaderTop openMenu={openMenu} />
      <HeaderNav />
      <SideMenu menuHandler={menuModal} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  z-index: 10;
`;
const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff92;
  font-size: 60px;
`;

const Banner = styled.div`
  height: 60px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
`;
