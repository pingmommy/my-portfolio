"use client";

import styled from "@emotion/styled";

export const ContactSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-family: var(--font-PPMori);
  font-size: 5.5rem;
  font-weight: 300;
`;

export const ContactBtn = styled.a`
  width: fit-content;
  height: 4rem;
  background-color: #151614;
  color: white;
  font-family: var(--font-PPMori);
  font-weight: 300;
  font-size: 1.8rem;
  border-radius: 3rem;
  margin: 2rem auto;
  display: block;
  border: none;
  overflow: hidden;
  padding: 1.2rem 3.5rem 1.2rem 2.5rem;
  text-align: left;
  position: relative;
  transition: all 0.8s;
  span {
    position: absolute;
    width: 2rem;
  }

  .enter {
    left: -2rem;
  }

  :hover {
    background-color: #04b4c8;
    padding-right: 2.5rem;
    padding-left: 3.5rem;
    .enter {
      left: 1rem;
    }
    .leave {
      right: -2rem;
    }
  }
`;
