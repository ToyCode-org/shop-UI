import React from "react";
import styled from "styled-components";
import { Headers } from "./headers";
import { Footer } from "./footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Headers />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div``;
const Content = styled.div`
  @media screen and (max-width: 1023px) {
    margin-top: 168px;
  }
`;
