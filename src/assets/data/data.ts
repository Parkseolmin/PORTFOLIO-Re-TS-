// types.ts

// MomentumDetails 타입 정의

interface IssueDetail {
  ProblemSituation: string;
  ProblemSolution: string[];
  ProblemResult: string;
}
interface Challenge {
  title: string; // 문제의 제목
  descriptions: IssueDetail[]; // 문제에 대한 상세 정보 배열
}

interface ProjectFuncDetails {
  title: string;
  descriptions: string[];
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
  projectFunVideo?: string[];
  projectDetails?: ProjectFuncDetails[];
  challenges?: Challenge[];
  learnedPoint?: string[];
}

const momentumFuncVideos = [
  '/img/momentum/home.mp4',
  '/img/momentum/pomodoroFunc.mp4',
  '/img/momentum/TodoFunc.mp4',
  '/img/momentum/gptFunc.mp4',
];

const pazizicFuncVideos = [
  '/img/pazizic/videoDetail.mp4',
  '/img/pazizic/playList.mp4',
  '/img/pazizic/savedVideo.mp4',
  '/img/pazizic/login.mp4',
];
const frockFuncVideos = ['/img/frock/management.mp4', '/img/frock/payment.mp4'];

export const data: Projects[] = [
  {
    projectName: 'Momentum Web App',
    projectTech:
      'React | Tanstack/React-Query | Context API | useReducer | OpenWeatherMap API | Unsplash API',
    projectLink: 'https://momentum-wine.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/101',
    projectGit: 'https://github.com/Parkseolmin/React_momentum',
    projectIntro:
      'Momentum은 개인 맞춤형 웹 애플리케이션으로, 다양한 API와 상태 관리 기술을 활용해 날씨, 할 일 관리, 배경 이미지와 기록 생성 기능 등을 제공합니다. React와 여러 API 통합을 통해 사용자 환경을 직관적이고 효율적으로 구성하였으며, 단순한 할 일 관리를 넘어, 일기 작성을 자동화하여 기록 관리 기능을 확장했습니다. 초기에는 기본적인 기능을 중심으로 구현한 후 점진적으로 기능을 추가하고 최적화하며 프로젝트의 완성도를 높였습니다.',
    introVideo: '/img/momentum/momentum.mp4',
    projectFunVideo: momentumFuncVideos,
    projectDetails: [
      {
        title: 'UX/UI 개선',
        descriptions: [
          'Unsplash API와 localStorage를 사용해 배경 이미지 로딩 최적화 및 데이터 트래픽 감소.',
          'OpenWeatherMap API와 위치 권한 API로 위치 기반 실시간 날씨 정보 제공.',
          'Context API와 TailwindCSS를 활용해 다크/라이트 모드 테마 전환 기능 구현.',
        ],
      },
      {
        title: '기능 개발',
        descriptions: [
          'useReducer와 Context API를 기반으로 한 효율적인 할 일 관리 시스템 구축.',
          'GPT API와 할 일 연동으로 개인화된 자동 일기 작성 기능 제공.',
          '포모도로 타이머를 커스텀 훅으로 구현, 사용자 시간 관리 경험 개선.',
        ],
      },
      {
        title: '성능 최적화',
        descriptions: [
          'Lighthouse 진단을 통해 시계 컴포넌트의 렌더링 문제를 해결, LCP를 3.15초에서 551ms로 단축.',
          '코드 스플리팅과 Lazy Loading으로 초기 로딩 속도를 향상.',
        ],
      },
    ],
    challenges: [
      {
        title: '1. 비동기 상태 관리와 렌더링 불일치 문제',
        descriptions: [
          {
            ProblemSituation:
              '비동기 처리 중, 배경 이미지 데이터를 가져오는 함수(fetchImage)를 호출했음에도 React 상태가 업데이트되지 않아 새 이미지를 렌더링하지 못하는 문제가 발생',

            ProblemSolution: [
              'useEffect 내부에 데이터를 가져오는 비동기 함수(fetchImageData)를 별도로 생성.',
              '데이터를 가져온 후 setBackgroundImageUrl로 React 상태를 수동 업데이트하여 React의 상태 관리 흐름을 준수.',
            ],
            ProblemResult:
              'React 상태와 비동기 로직 간의 연결 문제를 해결하여 배경 이미지가 올바르게 업데이트 및 렌더링되도록 수정. 이후, 동일한 문제 발생 빈도 감소 및 유지보수성 향상.',
          },
        ],
      },
      {
        title: '2. Lighthouse 진단 후 웹 페이지의 가장 큰 시각적 콘텐츠 최적화',
        descriptions: [
          {
            ProblemSituation:
              '초기 화면의 배경 이미지와 큰 레이아웃을 가진 요소 렌더링으로 인해 LCP(Largest Contentful Paint)가 3.15초로 측정되며 페이지 로딩 속도가 저하됨. 특히 시계 컴포넌트가 초 단위로 렌더링되며 불필요한 성능 부하가 발생.',
            ProblemSolution: [
              '배경 이미지를 로컬 스토리지에 캐싱하여 API 호출을 줄이고 초기 로딩 속도 개선.',
              'React.memo와 useCallback으로 컴포넌트를 메모화해 동일한 상태에서 재렌더링 방지.',
              '시간 관련 컴포넌트의 렌더링 주기를 1초에서 10초로 조정하여 불필요한 렌더링 최소화.',
              '시계 렌더링 로직을 별도 컴포넌트로 분리하고 의존성을 최적화하여 성능 부하 감소.',
            ],
            ProblemResult:
              'LCP가 최대 551ms로 단축되어 초기 로딩 속도가 크게 개선되었고, 사용자 경험도 향상됨.',
          },
        ],
      },
    ],
    learnedPoint: [
      '렌더링 주기와 메모화가 성능 최적화에서 중요한 역할을 함을 깨달음.',
      'React 컴포넌트와 상태 관리 간의 의존성 흐름을 이해하며, 성능 병목 현상을 해결하는 기술적 접근법을 익힘.',
      'Lighthouse 지표를 개선하기 위해 병목 구간을 진단하고, 구체적인 해결 방안을 적용하는 과정에서 실무적인 문제 해결 능력을 향상.',
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
        title: 'UI/UX 최적화',
        descriptions: [
          '반응형 디자인을 적용하여 다양한 장치에서 사용자 친화적인 탐색 경험 제공.',
          'YouTube Open API와 Zustand를 활용하여 유저 구독 채널 및 좋아요 데이터를 동기화.',
        ],
      },
      {
        title: '성능 최적화',
        descriptions: [
          'React Profiler와 Lighthouse를 기반으로 병목 구간을 진단하여 렌더링 시간 60% 단축, 초기 로딩 속도 40% 개선.',
          '이미지 Lazy Loading과 코드 스플리팅을 활용해 페이지 로딩 성능 향상.',
        ],
      },
      {
        title: 'API 최적화',
        descriptions: [
          '싱글톤 패턴과 React Query를 적용해 API 호출 횟수 65% 감소, 렌더링 시간 15% 단축.',
          '메모리 사용량 27% 절약으로 리소스 효율 극대화.',
        ],
      },
      {
        title: '보안 및 인증',
        descriptions: [
          'Google OAuth 2.0 인증을 통해 안전한 로그인 및 데이터 연동 구현.',
          'gapi 라이브러리를 활용해 액세스 토큰 갱신을 구현하여 사용자 세션의 지속성을 유지',
        ],
      },
      {
        title: '맞춤 콘텐츠 제공',
        descriptions: [
          'Firebase와 Zustand를 이용해 유저별 ‘좋아요’ 데이터를 기반으로 개인화된 콘텐츠 페이지 구현.',
          'TanStack/React Query로 무한 스크롤과 "더보기" 기능을 최적화하여 비디오 탐색 경험 개선.',
        ],
      },
    ],
    challenges: [
      {
        title: '1. 싱글톤 디자인 패턴 도입의 어려움',
        descriptions: [
          {
            ProblemSituation:
              '각 카테고리의 비디오 데이터를 호출하기 위해 컴포넌트마다 개별적으로 호출 메서드를 구현했으며, 이는 코드의 중복과 유지보수 효율성에서 개선 여지가 있었음. 클래스 내부에 공통 axios 정보를 등록한 뒤 메서드를 호출했으나, 매번 새로운 인스턴스가 생성되는 방식은 메모리 관리와 성능 최적화 관점에서 한계가 있었음.',

            ProblemSolution: [
              '싱글톤 패턴을 적용하여 호출 메서드를 포함한 공통 axios 인스턴스를 Context API에 등록.',
              '이를 통해 하나의 인스턴스만 생성하여 모든 컴포넌트에서 공유하도록 설계.',
              'React Query의 staleTime, cacheTime, refetchOnWindowFocus 옵션을 적절히 설정하여 캐싱 전략을 최적화.',
            ],
            ProblemResult:
              '호출 메서드의 관리가 간소화되고, React Query를 활용한 효율적인 캐싱 전략으로 메모리 사용량을 절약할 수 있었음.',
          },
        ],
      },
      {
        title: '2. React DevTools Profiler를 활용한 성능 최적화',
        descriptions: [
          {
            ProblemSituation:
              '싱글톤 도입 이후에도 힙 스냅샷을 통해 메모리 사용량 개선이 미미하거나 오히려 증가하는 경우를 발견. 렌더링 병목 현상이 일부 컴포넌트에서 발생해 성능에 부정적인 영향을 끼침.',
            ProblemSolution: [
              'React DevTools Profiler로 렌더링 병목 현상을 일으키는 컴포넌트를 식별.',
              'React.memo, useMemo, useCallback을 활용해 렌더링 빈도를 줄이고, React Query의 옵션(staleTime, cacheTime)을 적절히 설정하여 불필요한 데이터 호출을 방지.',
            ],
            ProblemResult:
              '메모리 사용량이 최적화되고, 렌더링 효율성이 증가해 사용자 경험이 개선.',
          },
        ],
      },
      {
        title: '3. OAuth2.0 토큰 갱신 문제',
        descriptions: [
          {
            ProblemSituation:
              'Firebase를 통해 Google OAuth2.0 토큰을 얻어 YouTube 사용자 정보를 불러오는 데 성공했으나, 토큰의 제한 시간(expiration time)으로 인해 일정 시간이 지나면 인증이 만료되는 문제가 발생. 리프레시 토큰이나 서버 측 처리가 필요한 방법은 프론트엔드에서 구현하기 어려웠음.',
            ProblemSolution: [
              'Google API 클라이언트를 활용한 gapi 라이브러리를 사용해 유효 토큰을 직접적으로 갱신하는 방안을 도입.',
            ],
            ProblemResult:
              '인증 토큰의 유효성을 유지하여 사용자가 끊김 없이 YouTube 데이터를 탐색할 수 있도록 개선.',
          },
        ],
      },
    ],
    learnedPoint: [
      '싱글톤과 메모리 관리: 싱글톤 패턴은 메모리 관리에 유리하지만, 적절한 가비지 컬렉션과 상태 관리를 병행해야 함.',
      'React 상태 관리의 최적화 필요성: React Query와 Profiler를 활용한 상태 관리와 렌더링 최적화는 애플리케이션 성능 개선의 핵심.',
      'OAuth2.0 이해: 인증과 토큰 갱신의 흐름을 이해하고, 적합한 클라이언트 라이브러리를 활용하는 방법을 학습.',
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
    projectFunVideo: frockFuncVideos,
    projectDetails: [
      {
        title: 'UI/UX 구축',
        descriptions: [
          'TailwindCSS를 사용해 반응형 디자인과 일관성 있는 UI 스타일링 구현.',
          '사용자 친화적인 인터페이스로 모든 장치에서 원활한 탐색 경험 제공.',
        ],
      },
      {
        title: '사용자 인증 및 권한 관리',
        descriptions: [
          'Firebase Authentication으로 관리자/사용자 권한을 분리하여 보안 강화.',
          'UID 접근 제어를 통해 관리자만 특정 기능에 접근할 수 있도록 설정.',
        ],
      },
      {
        title: '이미지 관리 최적화',
        descriptions: [
          'Cloudinary API를 활용하여 이미지 크기와 화질을 자동 조정해 Firebase 의존도를 감소시키고 성능 개선.',
          '업로드 및 관리 과정에서의 부하를 최소화하여 사용자 경험 향상.',
        ],
      },
      {
        title: '실시간 상태 관리',
        descriptions: [
          'React Query의 데이터 무효화 및 갱신 기능을 활용해 장바구니 상태를 실시간으로 업데이트.',
          '불필요한 리렌더링을 최소화하여 사용자 인터페이스의 부드러운 동작 보장.',
        ],
      },
      {
        title: '결제 시스템 구현',
        descriptions: [
          'PortOne SDK를 통해 안전하고 효율적인 결제 처리 및 상태 갱신 구현.',
          '결제 요청 시 장바구니 내 데이터를 실시간 반영하고 결제 성공 후 1.5초 내 리다이렉트를 처리하여 자연스러운 결제 흐름 제공.',
        ],
      },
    ],
    challenges: [
      {
        title: '1. 비동기 상태 관리와 경로 보호 문제',
        descriptions: [
          {
            ProblemSituation:
              'Firebase의 로그인 상태를 기반으로 경로 보호를 구현했으나, 페이지 새로 고침 시 로그인 상태 확인 지연으로 경로 보호가 제대로 작동하지 않음.',
            ProblemSolution: [
              'onAuthStateChanged 메서드를 사용하여 Firebase의 로그인 상태를 비동기적으로 감지.',
              '상태 변화가 감지되면 Context API로 전역 상태를 업데이트하고, isLoading 플래그를 추가하여 비동기 데이터 로딩 중에도 UI 상태를 명확히 제어.',
              'isLoading 상태가 false일 때만 경로 보호를 적용하여 비동기 지연 문제를 해결.',
            ],
            ProblemResult:
              '페이지 새로 고침 후에도 올바르게 경로 보호가 작동하며, 사용자 경험 개선.',
          },
        ],
      },
      {
        title: '2. 장바구니 실시간 업데이트 문제',
        descriptions: [
          {
            ProblemSituation:
              '장바구니 상품 수량 변경 시 UI가 즉시 업데이트되지 않음.',
            ProblemSolution: [
              'React Query의 invalidateQueries를 사용하여 장바구니 데이터를 업데이트하도록 설정.',
              'Firebase의 onValue 메서드를 활용한 실시간 데이터 구독 기능 확인',
            ],
            ProblemResult:
              '장바구니 데이터가 변경될 때 UI가 즉시 업데이트되며 실시간 반응형 인터페이스 구현.',
          },
        ],
      },
    ],
    learnedPoint: [
      '비동기 상태 관리: 비동기 데이터 로딩 상태를 명시적으로 관리하면 UI 안정성과 사용자 경험을 크게 향상시킬 수 있음을 배움.',
      'React Query 캐싱: React Query의 invalidateQueries를 활용해 데이터 변경 시 UI를 실시간으로 업데이트하며 렌더링 효율을 높임.',
      '상태 관리 도구 선택: React Query와 Context API의 적절한 활용으로 복잡한 상태 관리와 비동기 처리를 통합적으로 해결함.',
    ],
  },
];
