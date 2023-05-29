import styled from "styled-components";
import { EventSlider } from "../components/main/eventSlider/eventSlider";
import { TodayBest } from "../components/main/todayBest/todayBest";
import { HotDeal } from "../components/main/hotDeal/hotDeal";
import { RecommendItem } from "../components/main/recommentItem/recommendItem";

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
