// types.ts

// MomentumDetails 타입 정의
export interface ProjectFuncDetails {
  title: string;
  description: string;
}

// Projects 타입에 projectDetails와 projectFunVideo 추가
export interface Projects {
  projectName: string;
  projectTech: string;
  projectLink: string;
  projectBlog: string;
  projectGit: string;
  projectIntro: string;
  introVideo: string;
  projectFunVideo?: string[]; // 이미 존재하는 필드 사용
  projectDetails?: ProjectFuncDetails[];
}

// data.ts

// Momentum 기능 비디오 데이터
export const momentumFuncVideos = [
  '/img/momentum/home.mp4',
  '/img/momentum/pomodoroFunc.mp4',
  '/img/momentum/TodoFunc.mp4',
  '/img/momentum/gptFunc.mp4',
];

export const pazizicFuncVideos = [
  '/img/pazizic/videoDetail.mp4',
  '/img/pazizic/playList.mp4',
  '/img/pazizic/savedVideo.mp4',
  '/img/pazizic/login.mp4',
];

export const frockFuncVideos = ['/img/frock/frockmobile.mp4'];

export const data: Projects[] = [
  {
    projectName: 'Momentum Web App',
    projectTech: 'React | React Query | useReducer | Context API',
    projectLink: 'https://momentum-wine.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/101',
    projectGit: 'https://github.com/Parkseolmin/React_momentum',
    projectIntro:
      'Momentum은 Chrome App Store에 있는 Momentum을 본따 만든 사이트로, React 학습 초기 단계에서 제작되었습니다. 기본적인 상태 관리와 컴포넌트 구조를 익히기 위해 시작했으며, 이후 TanStack/React Query를 이용한 데이터 패칭 최적화, useReducer와 Context API를 통한 상태 관리를 도입하며 기능을 점진적으로 확장해 나갔습니다.',
    introVideo: '/img/momentum/momentum.mp4',
    projectFunVideo: momentumFuncVideos,
    projectDetails: [
      {
        title: '1. 배경 이미지: API 호출 및 로컬 스토리지 최적화',
        description:
          '사이트의 배경 이미지는 Unsplash API에서 동적으로 가져옵니다. 반복적인 API 호출을 피하기 위해 localStorage를 사용하여 캐싱을 구현하고 API 재호출을 5시간에 한 번으로 제한했습니다.',
      },
      {
        title: '2. 인용문: Refetch와 실시간 API 통합',
        description:
          'API에서 인용문을 가져와 홈페이지에 표시합니다. 사용자는 클릭하여 새 인용문을 생성할 수 있습니다.',
      },
      {
        title: '3. 날씨: 사용자 위치에 대한 권한 API',
        description:
          '사용자의 지리적 위치를 기반으로 업데이트되는 OpenWeatherMap API를 사용하여 지역 날씨를 표시합니다.',
      },
      {
        title: '4. 할 일 목록: useReducer 및 Context API를 사용한 상태 관리',
        description:
          '추가, 업데이트 및 삭제 기능을 갖춘 완전한 기능의 할 일 목록입니다.',
      },
      {
        title:
          '5. 어두운/밝기 모드: 컨텍스트 및 사용자 지정 CSS를 사용한 테마 토글',
        description:
          '사용자는 어두운 테마와 밝은 테마를 전환할 수 있으며, 기본 설정은 로컬 스토리지에 저장됩니다.',
      },
      {
        title: '6. 포모도로 타이머: 간격 처리를 위한 맞춤형 커스텀훅',
        description:
          '시각적 및 소리 알림으로 업무 및 휴식 시간을 관리하는 포모도로 타이머를 구현합니다.',
      },
    ],
  },
  {
    projectName: 'PAZIZIC TV Web App',
    projectTech: 'React | Firebase | Singleton | API Integration | Tailwind',
    projectLink: 'https://pazizic.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/84',
    projectGit: 'https://github.com/Parkseolmin/React_Youtube',
    projectIntro:
      'React와 JavaScript를 학습하면서 비동기 처리에 중점을 둔 파지직TV를 제작했습니다. 단순히 YouTube Open API로 비디오 데이터를 보여주는 것이 아닌, 다양한 기능을 추가하여 사용자 경험을 향상시켰습니다. TanStack/React Query를 사용해 "더보기" 기능을 구현해 비디오 데이터를 지속적으로 로드할 수 있게 하고, mock 데이터를 이용한 데이터 캐싱으로 API 호출 제한 문제를 해결했습니다. 또한, 다양한 비동기 요청을 효율적으로 관리하기 위해 싱글톤 패턴을 적용해 객체 관리를 최적화했습니다. Firebase OAuth 2.0을 활용해 실제 YouTube 계정 정보로 로그인하는 기능도 구현했습니다. 프로젝트 과정에서 반복적인 리팩토링과 새로운 기능 추가를 통해 React의 유연성을 깊이 이해하게 되었으며, 이 프로젝트는 제 개발 역량을 크게 향상시켰습니다.',
    introVideo: '/img/pazizic/pazizic.mp4',
    projectFunVideo: pazizicFuncVideos,
    projectDetails: [
      {
        title: '1. 동적 카테고리 분류 및 탐색',
        description:
          'YouTube Open API를 사용해 인기 영상, 스트리밍, 영화 등의 카테고리를 동적으로 분류하고 탐색할 수 있도록 구현.',
      },
      {
        title: '2. 구독 채널 연동',
        description:
          '실제 유튜브 계정과 연동하여 사용자의 구독 채널을 불러오고 개인화된 콘텐츠를 제공.',
      },
      {
        title: '3. 좋아요 기능 및 컬렉션 관리',
        description:
          '사용자가 좋아한 영상을 별도로 저장하여 개인화된 컬렉션을 생성하고 관리할 수 있는 기능 제공.',
      },
      {
        title: '4. 무한 스크롤 데이터 로드',
        description:
          "Tanstack/React Query의 무한 스크롤 기능을 적용해, '더보기'버튼을 누르면 데이터가 자동으로 로드되도록 최적화.",
      },
      {
        title: '5. 조건부 쿼리 실행 및 Access Token 연동',
        description:
          'Access Token에 따라 API 호출을 제어하여, 사용자별 데이터를 최적화하여 불러옴.',
      },
      {
        title: '6. Firebase를 통한 구글 OAuth 2.0 로그인',
        description:
          'Firebase를 이용한 Google OAuth 2.0 로그인 기능을 통해 안전한 인증 및 사용자 데이터 연동.',
      },
    ],
  },
  {
    projectName: 'F.ROCK Web App',
    projectTech: 'React | Cloudinary | React Query | Firebase | Tailwind',
    projectLink: 'https://www.naver.com/',
    projectBlog: 'https://snowman-seolmini.tistory.com/85',
    projectGit: 'https://github.com/Parkseolmin/React_R.FROCK',
    projectIntro:
      '이것은 쇼핑몰Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae optio quae cumque vel temporibus possimus deleniti magni ratione illo expedita tenetur, ullam nesciunt odit ut saepe ipsa odio ipsum!',
    introVideo: '/img/frock/frock.mp4',
    projectDetails: [
      {
        title: '1. 사용자 인증 및 페이지 경로 보호',
        description:
          'Firebase의 onAuthStateChanged를 사용하여 사용자 로그인 상태를 관리하고, 권한에 따라 관리자 및 일반 사용자 페이지 접근을 보호함.',
      },
      {
        title: '2. 실시간 사용자 상태 관리',
        description:
          'Context API를 활용하여 전역에서 사용자 데이터를 관리하고, 페이지 새로고침 후에도 로그인 상태를 유지.',
      },
      {
        title: '3. 여러 이미지 업로드',
        description:
          'Cloudinary API와 Promise.all을 사용하여 다중 이미지를 병렬 처리하고, 모든 이미지 업로드 완료 후 하나의 배열로 반환하여 효율적인 이미지 관리를 구현.',
      },
      {
        title: '4. 장바구니 기능 및 실시간 업데이트',
        description:
          'Firebase Realtime Database를 사용하여 장바구니 데이터 관리, 상품 수량 변경 시 TanStack/React Query의 invalidate 기능을 활용하여 실시간으로 업데이트.',
      },
    ],
  },
];
