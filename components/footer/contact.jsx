"use client";

import * as S from "./contact.style";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Contact() {
  const contact = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".hello", {
        scrollTrigger: {
          trigger: contact.current,
          start: "top center",
          end: "center center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: contact }
  );

  return (
    <>
      <S.ContactSection ref={contact}>
        <S.ContactWrapper className="hello">
          <S.ContactTitle>Let's work together</S.ContactTitle>

          <S.ContactBtn className="Btn">
            <span className="enter">→&nbsp;</span>
            Say Hello
            <span className="leave">&nbsp;→</span>
          </S.ContactBtn>
        </S.ContactWrapper>
      </S.ContactSection>
    </>
  );
}
