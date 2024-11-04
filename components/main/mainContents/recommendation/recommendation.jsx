"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import * as S from "./recommendation.style";
import { Arr } from "./recommendationObj";
import { NanumSquareRound } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Recommendation() {
  const recommend = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("#recommend-item", {
        scrollTrigger: {
          trigger: recommend.current,
          start: "+=100, 80%",
          end: "bottom center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: recommend }
  );

  return (
    <>
      <div ref={recommend}>
        <S.Wrapper className={NanumSquareRound.className} id="recommend-item">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
          >
            {Arr.map((item, idx) => (
              <SwiperSlide key={idx}>
                <S.CommentItem>
                  <div>
                    <S.CardTop>{item.contents}</S.CardTop>
                    <S.CardBottom>
                      <S.NameTag>{item.name}</S.NameTag>
                      <p>{item.connection}</p>
                    </S.CardBottom>
                  </div>
                </S.CommentItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.Wrapper>
      </div>
    </>
  );
}
