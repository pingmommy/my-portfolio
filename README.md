포트폴리오 사이트 version 1 

## stack

- Next.JS 14
- React 18
- gsap
- Emotion(CSS-in-JS)

## comment
React18과 Next.JS 14를 기반으로 처음 작업해보았다.

기존의 CSS-in-JS라이브러리가 가독성과 유지보수성이 매우 좋다고 생각하여
적용하려고 하였는데, CSS-in-JS의 특성상 서버컴포넌트를 사용하는 데에 한계가 있었다.

게다가 웹페이지에 interactivity를 적극 적용하려고 gsap을 사용하다 보니
컴포넌트의 많은 부분이 클라이언트 측에서 렌더링될 수 밖에 없었다.

version2는 최대한 서버컴포넌트를 활용하는 것을 목표로, 우선 스타일은
Next의 제안대로 module.css 방식을 적용해야 겠다. 
