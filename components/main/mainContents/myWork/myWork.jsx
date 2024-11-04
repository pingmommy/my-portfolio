"use client";
import portfolioImg from "@/assets/portfolio.png";
import secondhandshopImg from "@/assets/secondhandshop.png";
import pingImg from "@/assets/ping.png";
import conceptImg from "@/assets/11concept.png";
import * as S from "./myWork.style";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function MyWork() {
  const recent = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".recent-item", {
        scrollTrigger: {
          trigger: recent.current,
          start: "-=100 center",
          end: "bottom center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "power2.out",
      });
    },
    { scope: recent }
  );
  return (
    <>
      <S.SectionTitle>Recent work</S.SectionTitle>
      <section ref={recent} style={{ marginTop: "10rem" }}>
        <S.MyWorkSection className="recent-item">
          <S.ContentsWrapper>
            <S.VisualContents>
              <Image
                className="img"
                src={conceptImg}
                alt="concept image"
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
          <S.ContentsWrapper>
            <S.VisualContents>
              <Image
                className="img"
                src={secondhandshopImg}
                alt="secondhandshopimage"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </S.VisualContents>
            <S.MyWorkTitle>Second Hand Shop</S.MyWorkTitle>
            <S.MyWorkSummary>#NextJS #GraphQL #TypeScript</S.MyWorkSummary>
          </S.ContentsWrapper>
        </S.MyWorkSection>
        <S.MyWorkSection className="recent-item">
          <S.ContentsWrapper>
            <S.VisualContents>
              <div className="img">
                <Image
                  src={pingImg}
                  alt="a dog image"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </S.VisualContents>
            <S.MyWorkTitle>My Dog PING</S.MyWorkTitle>
            <S.MyWorkSummary>#NextJS #GSAP</S.MyWorkSummary>
          </S.ContentsWrapper>
          <S.ContentsWrapper>
            <S.VisualContents>
              <Image
                className="img"
                src={portfolioImg}
                alt="portfolio"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </S.VisualContents>
            <S.MyWorkTitle>Portfolio Site</S.MyWorkTitle>
            <S.MyWorkSummary>#NextJS #GSAP</S.MyWorkSummary>
          </S.ContentsWrapper>
        </S.MyWorkSection>
      </section>
    </>
  );
}
