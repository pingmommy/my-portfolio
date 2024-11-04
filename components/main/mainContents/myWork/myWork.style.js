"use client";
import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  font-family: var(--font-PPMori);
  font-weight: 300;
  font-size: 5.5rem;
  margin-top: 12rem;
`;

export const MyWorkSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 5rem;
  gap: 1rem;
`;

export const VisualContents = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  .img {
    transition: transform 0.5s;
  }
  :hover {
    .img {
      transform: scale(1.1);
    }
  }
`;

export const MyWorkTitle = styled.h3`
  padding-top: 1.5rem;
  font-family: var(--font-PPMori);
  font-weight: 400;
  font-size: 2rem;
  padding-left: 0.7rem;
`;

export const MyWorkSummary = styled.p`
  padding-top: 1rem;
  font-family: var(--font-PPMori);
  font-weight: 300;
  font-size: 1.2rem;
  padding-left: 0.7rem;
`;

export const ContentsWrapper = styled.div`
  /* width: 50%; */
`;
