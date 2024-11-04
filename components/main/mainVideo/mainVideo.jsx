"use client";

import * as S from "./mainVideo.style";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function MainVideo() {
  const box = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".video", {
        scrollTrigger: {
          trigger: box.current,
          start: "top",
          end: "+=5000 center",
          // markers: true,
          pin: true,

          scrub: true,
        },
        scale: 0.9,
        duration: 1,
      });
    },
    { scope: box }
  );
  return (
    <>
      <S.VideoWrapper ref={box}>
        <S.VideoBox className="video">
          <video
            preload="auto"
            loop
            autoPlay
            muted
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            src="https://storage.cloud.google.com/hohopingmom/main-video%20.mp4"
          />
        </S.VideoBox>
      </S.VideoWrapper>
    </>
  );
}
