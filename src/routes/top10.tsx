import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Shareholders from "../components/top10/Shareholders";
import Top3OftenWords from "../components/top10/Top3OftenWords";
import Insiders from "../components/top10/Insiders";
import Outsiders from "../components/top10/Outsiders";
import OftenWords from "../components/top10/OftenWords";

import SwiperCore, { A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

SwiperCore.use([A11y, Mousewheel]);

const Container = styled.main`
  height: calc(100vh - 10rem);
  margin: 0 auto;
  overflow: hidden;
  .swiper-wrapper {
    max-height: calc(100vh - 10rem);
    .swiper-slide {
      padding: 8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Top10(): React.ReactElement {
  return (
    <>
      <Header />
      <Container>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel
          noSwiping
          allowTouchMove={false}
          keyboard={{ enabled: true }}
        >
          <SwiperSlide>
            <Shareholders />
          </SwiperSlide>
          <SwiperSlide>
            <Top3OftenWords />
          </SwiperSlide>
          <SwiperSlide>
            <Insiders />
          </SwiperSlide>
          <SwiperSlide>
            <Outsiders />
          </SwiperSlide>
          <SwiperSlide>
            <OftenWords />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default Top10;
