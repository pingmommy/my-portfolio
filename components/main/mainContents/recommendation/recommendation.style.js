import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 17rem;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--foreground);
  }
  .swiper-button-disabled {
    opacity: 0;
  }
`;

export const CommentItem = styled.div`
  background-color: white;
  height: 32rem;
  border-radius: 1rem;
  padding: 3rem 2.5rem 12.5rem;
`;

export const CardTop = styled.p`
  font-size: 1.6rem;
  white-space: pre-line;
  letter-spacing: 0.2rem;
  line-height: 2.3rem;

  font-weight: 300;
`;

export const CardBottom = styled.div`
  position: absolute;
  left: 2.5rem;
  right: 1.5rem;
  bottom: 2.75rem;
  font-size: 1.1rem;
`;

export const NameTag = styled.p`
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
`;
