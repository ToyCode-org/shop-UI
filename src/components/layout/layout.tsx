import React from "react";
import styled from "styled-components";
import { Headers } from "./headers";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Headers />
      {children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div``;
