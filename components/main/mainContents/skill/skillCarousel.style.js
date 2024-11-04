"use client";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 17rem;
  border-radius: 20px;
  background-color: white;
  padding: 0 9.5rem;
`;
export const TextBox = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 2.4rem;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-family: var(--font-PPMori);
`;

export const Text = styled.p`
  width: 31rem;
  display: flex;
  font-family: var(--font-NanumSquareRound);
  font-weight: 300;
`;

export const ColumnBox = styled.div`
  overflow: hidden;
  max-height: 37.5rem;
  height: 37.5rem;
  width: 35%;
`;

export const SkillColumn = styled.div`
  animation: scroll-vertical-col-1 18s linear infinite;

  @keyframes scroll-vertical-col-1 {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50.5%);
    }
  }
`;

export const SkillItem = styled.div`
  font-size: 2rem;
  border: 1px solid lightgrey;
  width: fit-content;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.3rem;
  border-radius: 30px;
`;

export const Dot = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) => props.color};
  display: inline-block;
`;
