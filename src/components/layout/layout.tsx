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
      {children}
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div``;
