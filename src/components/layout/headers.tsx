import styled from "styled-components";
import { useResponsive } from "../../hooks/useResponsive";
import { MobileHeaders } from "./mobile/mobileHeaders";
import { DesktopHeaders } from "./desktop/headers";

export const Headers = () => {
  const { thisMedia } = useResponsive();

  return (
    <HeaderContainer>
      {thisMedia === 4 ? <DesktopHeaders /> : <MobileHeaders />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;
