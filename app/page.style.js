"use client";

import styled from "@emotion/styled";

export const Header = styled.header`
  width: 90%;
  margin: 2rem auto;
`;

export const LogoWrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const MainSloganWrapper = styled.section`
  padding-top: 4rem;
  font-family: var(--font-PPMori-Light);
  font-size: 5.5rem;
  color: #151614;
`;

export const MainSlogan = styled.h1``;

export const SubSloganWrapper = styled.section`
  padding-top: 3rem;
  font-family: var(--font-NanumSquareRoundL);
  font-size: 1.6rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const SubSlogan = styled.h2`
  line-height: 4rem;
  width: 60%;
`;

export const MenuWrapper = styled.div`
  background-color: #ebebeb;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Menu = styled.a`
  width: 1.3rem;
  height: 1.5rem;
  display: block;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MenuSpan = styled.span`
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-color: #151614;
  display: block;
`;

export const VideoWrapper = styled.section`
  width: 100%;
  margin-top: 10rem;
`;

export const VideoBox = styled.div`
  /* background-color: lightpink;  */
  width: 100%;
  /* height: 40rem; */
`;

export const MainContentsWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-PPMori-Light);
  font-size: 5.5rem;
  margin-top: 12rem;
`;

export const ProfileSection = styled.section`
  padding-top: 7rem;
  display: flex;
`;

export const VisualContents = styled.div`
  width: 100%;
  height: 24rem;
  /* background-color: lightgrey; */
  /* border-radius: 10px; */
`;

export const TextWrapper = styled.div`
  width: 50%;
  height: 24rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ProfileTitle = styled.h3`
  font-family: var(--font-PPMori-Regular);
  font-size: 2.5rem;
  padding-bottom: 1.5rem;
`;

export const TextContents = styled.p`
  width: 35rem;
  font-family: var(--font-NanumSquareRoundL);
  font-size: 1.5rem;

  line-height: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.03rem;
`;

export const ContactSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyWorkSection = styled.section`
  display: flex;
  margin-bottom: 5rem;
  gap: 1rem;
`;

export const MyWorkTitle = styled.h3`
  padding-top: 1.5rem;
  font-family: var(--font-PPMori-Bold);
  font-size: 1.6rem;
  padding-left: 0.7rem;
`;

export const MyWorkSummary = styled.p`
  padding-top: 1rem;
  font-family: var(--font-PPMori-Light);
  font-size: 1.6rem;
  padding-left: 0.7rem;
`;

export const ContactWrapper = styled.div`
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-family: var(--font-PPMori-Light);
  font-size: 5.5rem;
`;

export const ContactBtn = styled.button`
  width: 15rem;
  height: 5rem;
  background-color: #151614;
  color: white;
  font-family: var(--font-PPMori-Light);
  font-size: 2rem;
  border-radius: 3rem;
  margin-top: 2rem;
  border: none;
  .out {
    display: none;
  }
  :hover {
    background-color: #04b4c8;
    .in {
      display: none;
    }
    .out {
      display: inline;
    }
  }
`;

export const ContentsWrapper = styled.div`
  width: 50%;
`;
