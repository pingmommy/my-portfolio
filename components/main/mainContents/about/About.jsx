"use client";
import * as S from "./About.style";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function About() {
  const profile = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const items = gsap.utils.toArray(".profile-item");
      const cover = gsap.utils.toArray(".item-cover");

      items.forEach((item, idx) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: cover[idx],
            start: "top center",
            end: "bottom center",
            // markers: true,
          },
          y: 70,
          opacity: 0,
          duration: 1.5,
          stagger: 1.2,
        });
      });
    },
    { scope: profile }
  );

  return (
    <>
      <S.SectionTitle>Here I am</S.SectionTitle>
      <section ref={profile}>
        <div className="item-cover">
          <S.ProfileSection className="profile-item">
            <S.ContentsWrapper>
              <S.VisualContents>
                <video
                  loop
                  autoPlay
                  muted
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src="https://storage.cloud.google.com/hohopingmom/teacher.mp4"
                />
              </S.VisualContents>
            </S.ContentsWrapper>
            <S.TextWrapper>
              <S.ProfileTitle>Passion</S.ProfileTitle>
              <S.TextContents>
                건강한 사회구성원이 건강한 사회를 만든다는 생각을 실천하기 위해
                보육교사로 근무했습니다. <br />
                아이들의 전인발달을 위해 열정적으로 일했고,<span>&nbsp;</span>
                퇴소율 0%<span>&nbsp;</span>라는 성과를 이뤄냈습니다.
              </S.TextContents>
            </S.TextWrapper>
          </S.ProfileSection>
        </div>
        <div className="item-cover">
          <S.ProfileSection className="profile-item">
            <S.TextWrapper className="exception">
              <S.ProfileTitle>Responsibility</S.ProfileTitle>
              <S.TextContents>
                임시보호하던 유기견을 책임지게 되었습니다.
                <br />
                강아지의 건강과 행복을 위해 7년 동안 산책을 하루도 빠짐없이
                실천하며,
                <span>&nbsp;</span>
                견주로서의 책임과 의무를 다하려고 노력합니다.
              </S.TextContents>
            </S.TextWrapper>
            <S.ContentsWrapper>
              <S.VisualContents>
                <video
                  loop
                  autoPlay
                  muted
                  preload="auto"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src="https://storage.cloud.google.com/hohopingmom/dog.mp4"
                />
              </S.VisualContents>
            </S.ContentsWrapper>
          </S.ProfileSection>
        </div>
        <div className="item-cover">
          <S.ProfileSection className="profile-item">
            <S.ContentsWrapper>
              <S.VisualContents>
                <video
                  loop
                  autoPlay
                  muted
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src="https://storage.cloud.google.com/hohopingmom/programing.mp4"
                />
              </S.VisualContents>
            </S.ContentsWrapper>
            <S.TextWrapper>
              <S.ProfileTitle>Challenge</S.ProfileTitle>
              <S.TextContents>
                취미로 시작한 프로그래밍에 매료되어 전직에<span>&nbsp;</span>{" "}
                도전하게 되었습니다.
                <br />큰 용기와 결단으로 새로운 길에 나섰고,
                <span>&nbsp;</span>도전의 결실을 맺기 위해 지금도 성실히
                정진하고 있습니다.
              </S.TextContents>
            </S.TextWrapper>
          </S.ProfileSection>
        </div>
      </section>
    </>
  );
}
