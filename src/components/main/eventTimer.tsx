import styled from "styled-components";

interface Props {
  imageNum: number;
}

export const EventTimer = ({ imageNum }: Props) => {
  return (
    <ProgressBar>
      <InnerProgress></InnerProgress>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  border: 1px solid gray;
`;
const InnerProgress = styled.div`
  width: 0px;
  height: 5px;
  background-color: gray;
  transition: 4s;
  animation: eventTimer 4s infinite;
  @keyframes eventTimer {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
