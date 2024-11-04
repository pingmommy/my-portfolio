포트폴리오 사이트 version 1 

## stack
---

- Next.JS 14
- React 18
- gsap
- Emotion(CSS-in-JS)



## comments
---

React18과 Next.JS 14를 기반으로 처음 작업해보았다.

기존의 CSS-in-JS라이브러리가 가독성과 유지보수성이 매우 좋다고 생각하여</br>
적용하려고 하였는데, CSS-in-JS의 특성상 서버컴포넌트를 사용하는 데에 한계가 있었다.

게다가 웹페이지에 interactivity를 적극 적용하려고 gsap을 사용하다 보니</br>
컴포넌트의 많은 부분이 클라이언트 측에서 렌더링될 수 밖에 없었다.

version2는 최대한 서버컴포넌트를 활용하는 것을 목표로,</br> 
우선 스타일은 Next 공식문서의 제안대로 module.css 방식을 적용해야 겠다. 

</br> 
</br> 
</br> 

## 개선할 사항 
----

1. 스타일 적용 -> module.css
2. gsap -> pin animation : 뷰포트리사이징이 될 때 pin 영역을 다시 계산하거나, 작은 화면에서는 애니메이션이 없는 게 나을 수도 있으므로 kill 처리하기.
3. 현재는 뷰포트에 따라 전체 페이지가 축소되게끔 처리했으나, 모바일일 때는  grid를 변경하는 게 좋겠다. 이는 아주 간단하게 적용할 수 있다.

</br> 
</br> 
