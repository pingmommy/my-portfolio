"use client";
import { useGSAP } from "@gsap/react";
import * as S from "./skillCarousel.style";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "CSS",
  "HTML",
  "Next.js",
  "Apollo Client",
  "GraphQL",
  "GSAP",
  "Emotion",
  "Git",
];

const dotColors = [
  "#FF5733", // JavaScript
  "#1E90FF", // TypeScript
  "#61DAFB", // React
  "#FF69B4", // CSS
  "#FFD700", // HTML
  "#000000", // Next.js
  "#9b59b6", // Apollo Client
  "#e535ab", // GraphQL
  "#88e36c", // GSAP
  "#D6A2E8", // Emotion
  "#F0F0F0", // Git
];

export default function SkillCarousel() {
  const skill = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: skill.current,
          start: "+=100 80%",
          end: "bottom center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
    },
    { scope: skill }
  );

  return (
    <>
      <div ref={skill}>
        <S.Wrapper className="skill-item">
          <S.TextBox>
            <S.Title>Technologies</S.Title>
            <S.Text>
              다양한 프로젝트를 통해 익힌 프로그래밍 언어와 라이브러리들을
              소개합니다. 효율적인 개발과 성장을 위해 노력하고 있습니다.
            </S.Text>
          </S.TextBox>
          <S.ColumnBox>
            <S.SkillColumn>
              {Array(2)
                .fill(skills)
                .flat()
                .map((skill, idx) => (
                  <S.SkillItem key={idx}>
                    <S.Dot color={dotColors[idx % dotColors.length]} />
                    {skill}
                  </S.SkillItem>
                ))}
            </S.SkillColumn>
          </S.ColumnBox>
        </S.Wrapper>
      </div>
    </>
  );
}
