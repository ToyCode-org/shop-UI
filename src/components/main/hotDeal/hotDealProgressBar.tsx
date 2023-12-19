import styled from "styled-components";
import { useState, useEffect } from "react";
import { restDate } from "../../../util/timeToToday";
import { TbClockHour4 } from "react-icons/tb";

export const TimeProgressBar = () => {
  const startDate = +new Date("2022-01-01");
  const endDate = +new Date("2024-12-31");
  const [currentDate, setCurrentDate] = useState(+new Date());
  const progress = ((currentDate - startDate) / (endDate - startDate)) * 100;

  const currentDateHandler = () => {
    setCurrentDate(+new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(currentDateHandler, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <ProgressBar>
        <InnerProgress
          style={{
            width: `${progress}%`,
          }}
        ></InnerProgress>
      </ProgressBar>
      <MsgWrap style={{ width: `${progress}%` }}>
        <MsgEdge style={{ width: `${progress / 2}%` }}>{"◀"}</MsgEdge>
        <StatusMsg>
          <TbClockHour4 />
          <Msg>{restDate(currentDate, endDate)}</Msg>
        </StatusMsg>
      </MsgWrap>
    </>
  );
};

const ProgressBar = styled.div`
  border: 1px solid black;
  border-radius: 3px;
`;
const InnerProgress = styled.div`
  height: 5px;
  background-color: black;
`;

const MsgWrap = styled.div``;
const MsgEdge = styled.span`
  display: flex;
  justify-content: center;
  height: 50px;
  position: absolute;
  font-size: 50px;
  line-height: 0px;
  color: #141a23;
  text-align: right;
  /* color: red; */
`;
const StatusMsg = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: white;
  background-color: #141a23;

  & svg {
    font-size: 25px;
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    & svg {
      margin-left: 5px;
    }
  }
`;
const Msg = styled.div``;
