"use client";
import RespIcon from "@/assets/diagram-project.svg";
import ChallengeIcon from "@/assets/hand-holding-seeding.svg";
import PassionIcon from "@/assets/sort-amount-up.svg";
import * as S from "./icon.style";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function Icon() {
  const icon = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const iconTl = gsap.timeline({
        scrollTrigger: {
          trigger: icon.current,
          start: "top 80%",
          end: "bottom center",
          // markers: true,
        },
      });

      iconTl
        .from(
          ".icon-box",
          {
            y: 150,
            opacity: 0,
            ease: "power2.out",
            duration: 1,
          },
          0
        )
        .to(".highlight", {
          backgroundColor: "#04b4c8",
          delay: 0.1,
        });
    },
    { scope: icon }
  );

  return (
    <>
      <S.IconWrapper ref={icon}>
        <section className="icon-box">
          <S.IconBox>
            <Image src={RespIcon} width={250} height={250} alt="icon" />
            <S.IconDesc>
              주인의식이 있는, <span className="highlight"> 책임감있는 </span>
              &nbsp; 사람이 필요해요.
            </S.IconDesc>
          </S.IconBox>
        </section>
        <section className="icon-box">
          <S.IconBox>
            <Image src={ChallengeIcon} width={250} height={250} alt="icon" />

            <S.IconDesc>
              실패를 두려워하지 않고 <br />
              <span className="highlight">도전하는</span>
              &nbsp;사람, 어디 없나요?
            </S.IconDesc>
          </S.IconBox>
        </section>
        <section className="icon-box">
          <S.IconBox>
            <Image src={PassionIcon} width={250} height={250} alt="icon" />
            <S.IconDesc>
              스스로 학습하고 성장하려는,&nbsp;&nbsp;
              <span className="highlight">열정적인</span> 사람이면 좋겠어요.
            </S.IconDesc>
          </S.IconBox>
        </section>
      </S.IconWrapper>
    </>
  );
}
