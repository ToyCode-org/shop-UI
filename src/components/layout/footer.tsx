import styled from "styled-components";
import { footerCustomerMenu, footerBootomMockData } from "./layoutMockData";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <FooterTopLeft>
          <Number>(유료상담)1600-0000</Number>
          <TimeTable>평일 09:00~18:00</TimeTable>
          {footerCustomerMenu.map((item, index) => {
            return <CustomersItem key={index}>{item}</CustomersItem>;
          })}
        </FooterTopLeft>
        <FooterTopRight>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillYoutube />
        </FooterTopRight>
      </FooterTop>
      <FooterBottom>
        <FbFirst>
          {footerBootomMockData.map((item, index) => {
            return (
              <ShopInfo
                key={index}
                style={index === 4 ? { fontWeight: "bold" } : {}}
              >
                {item}
              </ShopInfo>
            );
          })}
        </FbFirst>
        <FbLast>
          <span>기타</span>
          <span>회사정보</span>
          <span>기타등등</span>
          <span>{">_0 b"}</span>
        </FbLast>
      </FooterBottom>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 100%;

  border-top: 1px solid lightgray;
`;

const FooterTop = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    margin: 0 5px;
  }
  @media screen and (max-width: 767px) {
    height: max-content;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
const Number = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
const TimeTable = styled.span`
  font-size: 14px;
  color: gray;
`;
const CustomersItem = styled.span`
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
`;
const FooterTopLeft = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    & span {
      margin-bottom: 5px;
    }
  }
`;
const FooterTopRight = styled.div`
  & svg {
    margin: 0 5px;
    font-size: 32px;
    cursor: pointer;
  }
`;

const FooterBottom = styled.div`
  height: 300px;
  background-color: #e4e4e4;
  @media screen and (max-width: 767px) {
    height: max-content;
  }
`;
const FbFirst = styled.div`
  margin-left: 70px;
  height: 60px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin: 0;
    font-size: 0.5rem;
  }
`;
const ShopInfo = styled.span`
  margin: 0 15px;
  cursor: pointer;
`;
const FbLast = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;

  & span {
    margin: 10px 0;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
    height: 60px;
    font-size: 0.5rem;
    display: flex;
    flex-direction: row;

    & span {
      margin: 0 15px;
    }
  }
`;
