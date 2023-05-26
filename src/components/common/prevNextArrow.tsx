import React from "react";
import styled from "styled-components";

interface ArrowProps {
  style?: object;
}
type Props = React.HTMLAttributes<HTMLDivElement> & ArrowProps;

export const PrevArrow = ({ style, ...props }: Props) => {
  return (
    <Arrow {...props} style={style}>
      {"〈"}
    </Arrow>
  );
};

export const NextArrow = ({ style, ...props }: Props) => {
  return (
    <Arrow {...props} style={style}>
      {"〉"}
    </Arrow>
  );
};

const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  font-size: 45px;
  background-color: #80808084;
  cursor: pointer;
  user-select: none;
  color: white;
  transition: 0.2s;
  &:hover {
    background-color: gray;
  }
`;
