import styled from "styled-components";
import { useState, useEffect } from "react";
import { Container } from "../common/style";
import { PublicImage } from "../../util/publicImage";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";

export const RecommendItem = () => {
  const { inView } = useComponentViewCheck("recommentItem");

  const [degPercent, setDegPercent] = useState(0);
  const degHandler = () => {
    setDegPercent((prev) => prev + 0.45);
  };
  useEffect(() => {
    const intervalId = setInterval(degHandler, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container
      style={
        inView
          ? { opacity: "1", paddingTop: "0px" }
          : { opacity: "0", paddingTop: "100px" }
      }
    >
      <CardOutline
        style={{
          background: `linear-gradient(
          ${degPercent}deg,
          rgba(119, 114, 114, 1) 3%,
          rgba(27, 21, 21, 1) 41%,
          rgba(27, 21, 21, 1) 100%
        )`,
        }}
      >
        <CardBox>
          <ItemInfo>
            <h2 id="recommentItem">Recommend Item</h2>
            <p>Brand Name</p>
            <span>productName</span>
          </ItemInfo>
          <ItemImg>
            <img src={PublicImage("nest")} alt="recomment Product" />
          </ItemImg>
        </CardBox>
      </CardOutline>
    </Container>
  );
};

const CardOutline = styled.div`
  padding: 20px;
  border: 5px solid #1b1515;
`;

const CardBox = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 5px solid #1b1515;
  background-color: white;
`;
const ItemInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    margin-bottom: 20px;
    font-size: 35px;
  }
  & p {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const ItemImg = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  & img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
`;
