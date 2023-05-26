import styled from "styled-components";
import { Container, SessionHead, ItemInfo } from "../common/style";
import { PublicImage } from "../../util/publicImage";
import { TimeProgressBar } from "./hotDealProgressBar";

export const HotDeal = () => {
  return (
    <Container>
      <SessionHead>
        <span>HOT DEAL</span>
      </SessionHead>
      <Content>
        <img src={PublicImage("nest")} alt="hot-deal-item" />
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
