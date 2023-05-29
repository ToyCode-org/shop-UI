import styled from "styled-components";
import { Container, SessionHead, ItemInfo } from "../common/style";
import { PublicImage } from "../../util/publicImage";
import { TimeProgressBar } from "./hotDealProgressBar";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";

export const HotDeal = () => {
  const { inView } = useComponentViewCheck("hotDeal");
  return (
    <Container
      style={
        inView
          ? { opacity: "1", paddingTop: "0px" }
          : { opacity: "0", paddingTop: "100px" }
      }
    >
      <SessionHead>
        <span>HOT DEAL</span>
      </SessionHead>
      <Content id="hotDeal">
        <img src={PublicImage("recommend-item")} alt="hot-deal-item" />
        <HotDealInfo>
          <ItemInfo brand="Brand" itemName="Item Name" price="288,900" />
          <ProgressWrap>
            <TimeProgressBar />
          </ProgressWrap>
        </HotDealInfo>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & img {
    width: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;
const HotDealInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
`;

const ProgressWrap = styled.div``;
