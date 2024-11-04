"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import LogoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import * as S from "./header.style";
import Arrow from "./arrow";

export default function Header() {
  const container = useRef();

  useGSAP(
    () => {
      const text = SplitType.create(".mainSlogan", {
        types: "chars,lines",
      });

      gsap.set(text.lines, { yPercent: 60, opacity: 0 });
      gsap.to(".arrow", { y: 20, repeat: -1, yoyo: true }, 0);

      const tl = gsap.timeline();
      tl.from(".logo", { y: -50, opacity: 0, duration: 1 }, 0)
        .to(
          text.lines,
          {
            yPercent: 0,
            opacity: 1,
            ease: "none",
            duration: 0.7,
            stagger: 0.7,
          },
          0
        )
        .from(text.chars, { y: 50, stagger: 0.05, ease: "none" }, 0)

        .from(".subSlogan", { y: 50, opacity: 0, duration: 1 }, 0);
    },

    { scope: container }
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
        <Arrow />
      </S.Header>
    </>
  );
}
