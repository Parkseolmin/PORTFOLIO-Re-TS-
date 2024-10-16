export interface Projects {
  projectName: string;
  itemCategory: string;
  itemLink: string;
  itemCopy: string;
  itemImg: string[];
}

export const data: Projects[] = [
  {
    projectName: 'Momentum Web App ',
    itemCategory: 'React | React Query | useReducer | Context API',
    itemLink: 'https://momentum-wine.vercel.app/',
    itemCopy:
      'Momentum은 Chrome App Store에 있는 Momentum을 본따 만든 사이트로, React 학습 초기 단계에서 제작되었습니다. 기본적인 상태 관리와 컴포넌트 구조를 익히기 위해 시작했으며, 이후 TanStack/React Query를 이용한 데이터 패칭 최적화, useReducer와 Context API를 통한 상태 관리를 도입하며 기능을 점진적으로 확장해 나갔습니다. ',
    itemImg: ['img/momentum.gif'],
  },
  {
    projectName: 'PAZIZIC TV Web App',
    itemCategory: 'React | Firebase | Singleton | API Integration | Tailwind',
    itemLink: 'https://www.naver.com/',
    itemCopy:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae optio quae cumque vel temporibus possimus deleniti magni ratione illo expedita tenetur, ullam nesciunt odit ut saepe ipsa odio ipsum!',
    itemImg: ['img/img.jpg'],
  },
  {
    projectName: 'F.ROCK Web App',
    itemCategory: 'React | Cloudinary | React Query | Firebase | Tailwind',
    itemLink: 'https://www.naver.com/',
    itemCopy:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae optio quae cumque vel temporibus possimus deleniti magni ratione illo expedita tenetur, ullam nesciunt odit ut saepe ipsa odio ipsum!',
    itemImg: ['img/img.jpg'],
  },
];
