import styled from "styled-components";

export const Container = styled.div`
  margin: 150px auto;
  width: 90%;
  transition: 1s;
`;

export const SessionHead = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
`;

interface ItemInfoProps {
  brand: string;
  itemName: string;
  price: string;
}
export const ItemInfo = ({ brand, itemName, price }: ItemInfoProps) => {
  return (
    <Info>
      <h3>{brand}</h3>
      <p>{itemName}</p>
      <span>{price}</span>
    </Info>
  );
};

const Info = styled.div`
  margin-top: 20px;
  padding: 7px;
  cursor: pointer;
  & h3 {
    margin-bottom: 10px;
  }
  & p {
    color: gray;
  }
  & span {
    color: gray;
  }
  &:hover {
    & p {
      text-decoration-line: underline;
    }
  }
`;
