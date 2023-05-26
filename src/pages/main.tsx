import styled from "styled-components";
import { EventSlider } from "../components/main/eventSlider";
import { TodayBest } from "../components/main/todayBest";
import { HotDeal } from "../components/main/hotDeal";

export const Main = () => {
  return (
    <Container>
      <EventSlider />
      <TodayBest />
      <HotDeal />
    </Container>
  );
};

const Container = styled.div``;
