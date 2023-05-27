import styled from "styled-components";
import { EventSlider } from "../components/main/eventSlider";
import { TodayBest } from "../components/main/todayBest";
import { HotDeal } from "../components/main/hotDeal";
import { RecommendItem } from "../components/main/recommendItem";

export const Main = () => {
  return (
    <Container>
      <EventSlider />
      <TodayBest />
      <HotDeal />
      <RecommendItem />
    </Container>
  );
};

const Container = styled.div``;
