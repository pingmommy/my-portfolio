"use client";
import Link from "next/link";
import * as S from "./page.style";
import LogoImg from "@/assets/logo.png";
import portfolioImg from "@/assets/portfolio.png";
import secondhandshopImg from "@/assets/secondhandshop.png";
import pingImg from "@/assets/ping.png";
import Image from "next/image";
import SplitType from "split-type";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const container = useRef();
  const box = useRef();
  const contents = useRef();
  const video = useRef();

  useGSAP(
    () => {
      const text = SplitType.create(".mainSlogan", { types: "chars" });

      gsap.from(".logo", { y: -50, opacity: 0, duration: 1 }, 0);

      const tl = gsap.timeline();

      tl.from(
        text.chars,
        {
          yPercent: 30,
          duration: 1,
          stagger: 0.02,
          // delay: 0.3,
          ease: "power3.inOut",
        },
        0
      );
      tl.from(
        text.chars,
        {
          opacity: 0,
          duration: 1,
          delay: 0.3,
          stagger: 0.02,
          ease: "none",
        },
        0
      );
      gsap.from(".subSlogan", { y: 50, opacity: 0, duration: 1 }, 0);
      gsap.to(".arrow", { y: 20, repeat: -1, yoyo: true }, 0);
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".video", {
        scrollTrigger: {
          trigger: box.current,
          start: "-100 center",
          end: "+300 center",
          markers: true,

          scrub: 1,
        },
        scale: 0.9,
        duration: 1,
      });
    },
    { scope: box }
  );

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".profile section", {
        scrollTrigger: {
          trigger: ".profile",
          start: "top center",
          end: "bottom center",
          markers: true,
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 1,
      });

      gsap.from(".recent>section", {
        scrollTrigger: {
          trigger: ".recent",
          start: "top center",
          end: "bottom center",
          markers: true,
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 1,
      });

      gsap.from(".hello div", {
        scrollTrigger: {
          trigger: ".hello",
          start: "+100 center",
          end: "+300 center",
          markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 0.7,
        ease: "circ",
      });
    },
    { scope: contents }
  );

  return (
    <>
      <S.Header ref={container}>
        <S.LogoWrapper className="logo">
          <Link href="/">
            <Image src={LogoImg} alt="logo" />
          </Link>
          <S.MenuWrapper>
            <S.Menu>
              <S.MenuSpan></S.MenuSpan>
              <S.MenuSpan></S.MenuSpan>
              <S.MenuSpan></S.MenuSpan>
            </S.Menu>
          </S.MenuWrapper>
        </S.LogoWrapper>
        <S.MainSloganWrapper>
          <S.MainSlogan className="mainSlogan">Dreaming of the</S.MainSlogan>
          <S.MainSlogan className="mainSlogan">future today</S.MainSlogan>
        </S.MainSloganWrapper>
        <S.SubSloganWrapper>
          <S.SubSlogan className="subSlogan">
            도전하는 열정, 용기있는 선택. <br />
            꿈을 그려가는 여정에 함께 하겠습니다.
          </S.SubSlogan>
        </S.SubSloganWrapper>
        <svg width="48" height="48" viewBox="0 0 48 48" className="arrow">
          <path
            d="M36.728 27.022L24 39.75"
            stroke="#151614"
            strokeWidth="2.65"
            strokeLinecap="round"
          ></path>
          <path
            d="M24 9L24 39.75"
            stroke="#151614"
            strokeWidth="2.65"
            strokeLinecap="round"
          ></path>
          <path
            d="M23.978 39.7278L11.2722 27.0219"
            stroke="#151614"
            strokeWidth="2.65"
            strokeLinecap="round"
          ></path>
        </svg>
      </S.Header>
      <main>
        <S.VideoWrapper ref={box}>
          <S.VideoBox ref={video} className="video">
            <video
              loop
              autoPlay
              muted
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              src="https://storage.cloud.google.com/hohopingmom/main-video%20.mp4"
            />
          </S.VideoBox>
        </S.VideoWrapper>
        <S.MainContentsWrapper ref={contents}>
          <S.SectionTitle>Who I am</S.SectionTitle>
          <section className="profile">
            <S.ProfileSection>
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
                  건강한 사회구성원이 건강한 사회를 만든다는 믿음으로,
                  <span>&nbsp;</span>
                  전인교육에 대한 열정을 가지게 되었습니다.
                  <br /> 이를 실천하기 위해 보육교사로 근무했습니다. <br />
                  아이들의 전인발달을 위해 열정적으로 일했고,<span>&nbsp;</span>
                  퇴소율 0%<span>&nbsp;</span>라는 성과를 이뤄냈습니다.
                </S.TextContents>
              </S.TextWrapper>
            </S.ProfileSection>
            <S.ProfileSection>
              <S.TextWrapper>
                <S.ProfileTitle>Responsibility</S.ProfileTitle>
                <S.TextContents>
                  유기된 강아지를 임시보호하다가 책임지게 되었습니다. 강아지의
                  건강과 행복을 위해 7년 동안 매일 산책을 빠짐없이 실천하며,
                  <span>&nbsp;</span>
                  견주로서의 책임을 다하고 있습니다.
                </S.TextContents>
              </S.TextWrapper>
              <S.ContentsWrapper>
                <S.VisualContents>
                  <video
                    autoPlay
                    muted
                    preload="auto"
                    onTimeUpdate={(e) => {
                      const videoElement = e.target;
                      if (videoElement.currentTime > 5) {
                        videoElement.currentTime = 1;
                        videoElement.play();
                      }
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                    src="https://storage.cloud.google.com/hohopingmom/adog.mp4"
                  />
                </S.VisualContents>
              </S.ContentsWrapper>
            </S.ProfileSection>
            <S.ProfileSection>
              <S.ContentsWrapper>
                <S.VisualContents></S.VisualContents>
              </S.ContentsWrapper>
              <S.TextWrapper>
                <S.ProfileTitle>Challenge</S.ProfileTitle>
                <S.TextContents>
                  취미로 시작한 프로그래밍에 매료되어 전직에<span>&nbsp;</span>{" "}
                  도전하게 되었습니다.
                  <br />큰 용기와 결단으로 새로운 길에 나섰고,
                  <span>&nbsp;</span>도전의 결실을 맺기 위해 지금도 노력하고
                  있습니다.
                </S.TextContents>
              </S.TextWrapper>
            </S.ProfileSection>
          </section>
          <S.SectionTitle>Recent work</S.SectionTitle>
          <section className="recent" style={{ paddingTop: "7rem" }}>
            <S.MyWorkSection>
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
                    src="https://storage.cloud.google.com/hohopingmom/secondhandshop.mp4"
                  />
                </S.VisualContents>
                <S.MyWorkTitle>Second Hand Shop</S.MyWorkTitle>
                <S.MyWorkSummary>#NextJS #GraphQL #TypeScript</S.MyWorkSummary>
              </S.ContentsWrapper>
              <S.ContentsWrapper>
                <S.VisualContents>
                  {/* <video
                    loop
                    autoPlay
                    muted
                    style={{ width: "100%", height: "100%" }}
                    src="https://storage.cloud.google.com/hohopingmom/11concept.mp4"
                  /> */}
                  <Image
                    src={secondhandshopImg}
                    alt="secondhandshopimage"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </S.VisualContents>
                <S.MyWorkTitle>11CONCEPT</S.MyWorkTitle>
                <S.MyWorkSummary>#CSS #HTML #TeamProject</S.MyWorkSummary>
              </S.ContentsWrapper>
            </S.MyWorkSection>
            <S.MyWorkSection>
              <S.ContentsWrapper>
                <S.VisualContents>
                  <Image
                    src={pingImg}
                    alt="a dog image"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </S.VisualContents>
                <S.MyWorkTitle>asdfasdfasd</S.MyWorkTitle>
                <S.MyWorkSummary>asdfasdfasfasdf</S.MyWorkSummary>
              </S.ContentsWrapper>
              <S.ContentsWrapper>
                <S.VisualContents>
                  <Image
                    src={portfolioImg}
                    alt="portfolio"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </S.VisualContents>
                <S.MyWorkTitle>asdfasdfasd</S.MyWorkTitle>
                <S.MyWorkSummary>asdfasdfasfasdf</S.MyWorkSummary>
              </S.ContentsWrapper>
            </S.MyWorkSection>
          </section>
          <S.ContactSection className="hello">
            <S.ContactWrapper>
              <S.ContactTitle>Let's work together</S.ContactTitle>
              <S.ContactBtn>
                <span className="in">→&nbsp;</span>
                Say Hello<span className="out">&nbsp;→</span>
              </S.ContactBtn>
            </S.ContactWrapper>
          </S.ContactSection>
        </S.MainContentsWrapper>
      </main>
    </>
  );
}
