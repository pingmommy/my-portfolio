"use client";

import styled from "@emotion/styled";

export const IconWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;

  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin-top: 17rem;
  padding: 5rem 0;
`;

export const IconBox = styled.div`
  width: 19rem;
`;

export const IconDesc = styled.p`
  font-size: 1.4rem;
  font-family: var(--font-NanumSquareRound);
  font-weight: 400;
  padding-top: 1.5rem;
  line-height: 2.5rem;
  white-space: pre-line;
`;
