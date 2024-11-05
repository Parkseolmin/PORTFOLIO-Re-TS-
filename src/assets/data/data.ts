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
    projectTech:
      'React | Tanstack/React-Query | API | useReducer | Context API',
    projectLink: 'https://momentum-wine.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/101',
    projectGit: 'https://github.com/Parkseolmin/React_momentum',
    projectIntro:
      'Momentum은 개인 맞춤형 웹 애플리케이션으로, 다양한 API와 상태 관리 기술을 활용해 날씨, 할 일 관리, 배경 이미지와 기록 생성 기능 등을 제공합니다. React와 여러 API 통합을 통해 사용자 환경을 직관적이고 효율적으로 구성하였으며, 단순한 할 일 관리를 넘어, 일기 작성을 자동화하여 기록 관리 기능을 확장했습니다. 초기에는 기본적인 기능을 중심으로 구현한 후 점진적으로 기능을 추가하고 최적화하며 프로젝트의 완성도를 높였습니다.',
    introVideo: '/img/momentum/momentum.mp4',
    projectFunVideo: momentumFuncVideos,
    projectDetails: [
      {
        title: '1. 배경 이미지 최적화: Unsplash API 및 로컬 스토리지 활용',
        description:
          '사이트의 배경 이미지를 Unsplash API로부터 동적으로 받아옵니다. localStorage를 통해 이미지를 캐싱하여, 불필요한 API 호출을 줄였으며, 실제 Momentum 앱과 같이 이미지 업데이트에 시간 설정을 제한하여 데이터 트래픽을 최소화했습니다.',
      },
      {
        title: '2. 날씨 정보 제공: 위치 기반 날씨 API 통합',
        description:
          'OpenWeatherMap API와 위치 권한 API를 사용해 사용자의 위치를 기반으로 실시간 날씨 정보를 제공합니다. 사용자의 위치 권한이 허용되면 현재 위치에 맞는 날씨 정보를 받아와 페이지에 표시합니다.',
      },
      {
        title: '3. 할 일 목록 관리: useReducer 및 Context API 기반의 상태 관리',
        description:
          'useReducer와 Context API를 활용해 할 일 목록의 상태를 전역적으로 관리하고, 컴포넌트 간 일관성 있는 데이터 흐름을 보장합니다. 사용자 추가, 삭제, 업데이트 작업이 효율적으로 반영되며, 전역 상태로 관리하여 다른 컴포넌트에서도 할 일 목록에 접근할 수 있습니다.',
      },
      {
        title: '4. GPT 기반 일기 작성: 할 일 및 메모 연동 자동화',
        description:
          'Todo 리스트와 별도의 텍스트 입력창에 기록된 메모 내용을 기반으로, GPT API를 활용해 자동으로 일기 형식의 글을 생성할 수 있습니다. 이 기능은 Context API를 통해 전역적으로 관리되는 할 일 목록을 기반으로 GPT가 사용자 기록을 정리해주기 때문에, 사용자는 할 일을 기록하면서 별도의 입력 없이 개인화된 일기 내용을 자동으로 받아볼 수 있습니다.',
      },
      {
        title:
          '5. 어두운/밝은 모드 테마 토글: Context API와 TailwindCSS 기반 테마 구현',
        description:
          '사용자에게 어두운 모드와 밝은 모드 전환 기능을 제공하며, 기본 설정은 localStorage에 저장되어 이후 방문 시에도 일관성 있는 테마 환경을 유지할 수 있습니다. TailwindCSS와 Context API를 사용하여 빠르고 부드러운 전환이 가능합니다.',
      },
      {
        title: '6. 포모도로 타이머: 커스텀 훅을 통한 시간 관리 기능',
        description:
          '포모도로 타이머는 커스텀 훅을 사용해 일정한 시간 간격으로 업무 및 휴식 시간을 관리합니다. 알림 소리와 시각적 타이머를 제공하여 사용자가 업무와 휴식을 번갈아가며 일정 시간 동안 집중할 수 있도록 돕습니다.',
      },
    ],
  },
  {
    projectName: 'PAZIZIC TV Web App',
    projectTech:
      'React | Firebase | Singleton | YouTube Data API | gasp (Google API) | Zustand',
    projectLink: 'https://pazizic.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/84',
    projectGit: 'https://github.com/Parkseolmin/React_Youtube',
    projectIntro:
      '파지직TV는 React와 JavaScript를 활용하여 비동기 처리를 중심으로 개발된 웹 애플리케이션입니다. 단순히 YouTube Open API를 통해 비디오 데이터를 표시하는 것을 넘어서, 다양한 기능을 추가하여 사용자의 경험을 향상시켰습니다. TanStack/React Query를 통해 "더보기" 기능을 구현하여 비디오 데이터를 지속적으로 로드할 수 있도록 하였으며, Mock 데이터를 이용한 데이터 캐싱을 통해 API 호출 제한 문제를 해결했습니다. 또한, 싱글톤 패턴을 적용하여 다양한 비동기 요청을 효율적으로 관리하고 객체 관리를 최적화했습니다. Firebase의 OAuth 2.0을 활용하여 실제 YouTube 계정으로 로그인하는 기능을 구현했으며, 이 프로젝트는 React의 유연성과 비동기 처리의 중요성을 깊이 이해하게 해주었습니다.',
    introVideo: '/img/pazizic/pazizic.mp4',
    projectFunVideo: pazizicFuncVideos,
    projectDetails: [
      {
        title: '1. 동적 카테고리 분류',
        description:
          'YouTube Open API를 활용하여 인기 영상, 실시간 스트리밍, 영화, 음악 등을 동적으로 분류하고 탐색할 수 있도록 구현했습니다.',
      },
      {
        title: '2. 구독 채널 통합',
        description:
          '사용자의 YouTube 계정과 연동하여 구독 채널 목록을 불러오고 개인화된 콘텐츠를 제공합니다.',
      },
      {
        title: '3. 좋아요 및 컬렉션 관리',
        description:
          '사용자가 좋아한 영상을 별도로 저장하고 개인화된 컬렉션을 생성하여 관리할 수 있는 기능을 제공합니다.',
      },
      {
        title: '4. 무한 스크롤 구현',
        description:
          "TanStack/React Query를 사용하여 '더보기' 버튼 클릭 시 자동으로 비디오 데이터를 로드하는 무한 스크롤 기능을 최적화했습니다.",
      },
      {
        title: '5. 조건부 쿼리 실행',
        description:
          'Access Token을 기반으로 API 호출을 제어하여 사용자별 맞춤 데이터를 제공합니다.',
      },
      {
        title: '6. Firebase OAuth 2.0 로그인',
        description:
          'Firebase를 활용하여 Google OAuth 2.0 로그인 기능을 구현, 안전한 인증과 사용자 데이터 연동을 지원합니다.',
      },
    ],
  },
  {
    projectName: 'F.ROCK Web App',
    projectTech:
      'React | Firebase | Cloudinary API | PortOne SDK | React Query',
    projectLink: 'https://react-r-frock.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/85',
    projectGit: 'https://github.com/Parkseolmin/React_R.FROCK',
    projectIntro:
      'F.ROCK 쇼핑몰은 사용자 인증, 이미지 업로드 최적화, 실시간 장바구니 관리 및 결제 시스템을 통합한 프론트엔드 개인 프로젝트입니다. Firebase Authentication을 통해 관리자의 권한을 설정하고, Cloudinary API를 사용하여 업로드된 이미지를 최적화하여 성능을 개선했습니다. React Query를 활용해 장바구니의 실시간 상태를 관리하며, PortOne SDK를 통해 안전한 결제 처리를 구현했습니다.',
    introVideo: '/img/frock/frock.mp4',
    projectDetails: [
      {
        title: '1. 사용자 인증 및 권한 관리',
        description:
          'Firebase Authentication을 통해 관리자의 권한을 설정하고 사용자와의 접근을 제어하여 안전한 사용자 경험을 제공합니다.',
      },
      {
        title: '2. 이미지 업로드 최적화',
        description:
          'Cloudinary API를 사용하여 사용자가 업로드한 이미지를 최적화하여 성능을 개선하고 Firebase 의존도를 감소시킵니다.',
      },
      {
        title: '3. 실시간 장바구니 상태 관리',
        description:
          'React Query를 활용하여 장바구니 상태를 실시간으로 업데이트하고, 사용자에게 최신 정보를 반영합니다.',
      },
      {
        title: '4. PortOne SDK 기반 결제 처리',
        description:
          'PortOne SDK로 결제 프로세스를 구현했으며, 결제 요청 시 장바구니 내 제품 정보를 실시간으로 반영합니다. 결제 성공 시 1.5초 후 홈 화면으로 리다이렉트하여 매끄러운 결제 흐름을 제공합니다.',
      },
    ],
  },
];
