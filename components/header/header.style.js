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

export const MainSloganWrapper = styled.section`
  padding-top: 4rem;
  font-size: 5.5rem;
  color: #151614;
`;

export const MainSlogan = styled.h1`
  background-color: var(--background);
  overflow: hidden;
  width: 80rem;
  font-family: var(--font-PPMori);
  font-weight: 300;
`;

export const SubSloganWrapper = styled.section`
  padding-top: 3rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const SubSlogan = styled.h2`
  line-height: 4rem;
  width: 60%;
  font-family: var(--font-NanumSquareRound);
  font-weight: 300;
`;
