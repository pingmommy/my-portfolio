"use client";
import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  font-family: var(--font-PPMori);
  font-weight: 300;
  font-size: 5.5rem;
  margin-top: 12rem;
`;

export const ProfileSection = styled.section`
  padding-top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;

  .exception {
    padding-left: 0;
  }
`;

export const ContentsWrapper = styled.div``;

export const VisualContents = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  width: 50%;
  height: 24rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProfileTitle = styled.h3`
  font-family: var(--font-PPMori);
  font-weight: 400;
  font-size: 2.7rem;
  padding: 1.5rem 0;
`;

export const TextContents = styled.p`
  width: 35rem;
  font-family: var(--font-NanumSquareRound);
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: 0.03rem;
`;
