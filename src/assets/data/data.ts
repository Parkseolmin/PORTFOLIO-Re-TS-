// types.ts

// MomentumDetails 타입 정의

export interface IssueDetail {
  ProblemSituation: string;
  ProblemSolution: string[];
  ProblemResult: string;
  ProblemResultImg?: string;
}
export interface Challenge {
  title: string; // 문제의 제목
  descriptions: IssueDetail[]; // 문제에 대한 상세 정보 배열
}

export interface TaskAndAchievement {
  title: string; // 작업 제목
  description: string; // 작업 설명
  achievements: string[]; // 성과 리스트
}

export interface LessonLearned {
  title: string; // 배운 점의 제목
  description: string; // 배운 점의 상세 설명
}

// Projects 타입에 tasksAndAchievements와 subVideo 추가
export interface Projects {
  projectName: string;
  projectTech: string;
  Link: string;
  Blog: string;
  Git: string;
  overviews?: string;
  goals?: string[];
  overviewList?: string[];
  overviewResult?: string;
  projectIntro?: string;
  video: string;
  subVideo?: string[];
  tasksAndAchievements?: TaskAndAchievement[];
  challenges?: Challenge[];
  learnedPoint?: string[];
  lessonsLearned?: LessonLearned[];
}

const momentum_videos = [
  '/img/momentum/home.mp4',
  '/img/momentum/pomodoroFunc.mp4',
  '/img/momentum/TodoFunc.mp4',
  '/img/momentum/gptFunc.mp4',
];

const pazizic_videos = [
  '/img/pazizic/videoDetail.mp4',
  '/img/pazizic/playList.mp4',
  '/img/pazizic/savedVideo.mp4',
  '/img/pazizic/login.mp4',
];
const frock_videos = ['/img/frock/management.mp4', '/img/frock/payment.mp4'];

export const data: Projects[] = [
  {
    projectName: 'Momentum',
    projectTech:
      'React | React Query | Context API | Jest | GitHub Actions | Vercel | Lighthouse | CSS Modules',
    Link: 'https://momentum-weld.vercel.app/',
    Blog: 'https://snowman-seolmini.tistory.com/101',
    Git: 'https://github.com/Parkseolmin/React_momentum',
    overviews:
      'Momentum은 작업 집중도와 생산성을 극대화하기 위해 설계된 React 기반 웹 애플리케이션입니다. 포모도로 타이머, 할 일 리스트, 실시간 날씨 정보 제공, GPT 기능 등 다양한 생산성 도구를 통해 사용자 경험을 향상시키는 데 중점을 두었습니다. 이 프로젝트는 React의 상태 관리, 컴포넌트 설계, 비동기 API 처리 등 핵심 기술을 실전에 활용하며 기술적 성장을 이루는 발판이 되었습니다.',
    goals: [
      '- React의 상태 관리, 컴포넌트 설계, 비동기 처리 기술을 학습하고 프로젝트를 통해 이를 실제 문제 해결과 기능 개선에 적용',
      '- React Profiler와 Lighthouse를 활용해 성능 병목을 분석하고, 데이터를 기반으로 한 문제 해결 능력 강화',
      '- GitHub Actions와 Vercel을 활용한 CI/CD 파이프라인 구축을 통해 테스트 자동화와 안정적인 배포 환경 구현',
    ],
    video: '/img/momentum/momentum.mp4',
    subVideo: momentum_videos,
    tasksAndAchievements: [
      {
        title: 'UI/UX 최적화',
        description:
          'CSS Modules와 반응형 디자인을 적용해 다양한 디바이스에서 일관되고 최적화된 사용자 경험을 제공했습니다.',
        achievements: [
          'Largest Contentful Paint(LCP)를 3.15초에서 551ms로 단축하여 초기 로딩 속도를 대폭 향상',
          'CSS Modules와 반응형 디자인으로 모바일, 태블릿, 데스크톱 환경에서 일관된 사용자 경험 제공',
          'Lighthouse 종합 진단 평균 점수를 98점으로 향상하여 웹 표준 준수',
        ],
      },
      {
        title: '생산성 향상 기능 구현',
        description:
          '포모도로 타이머, 할 일 리스트, 날씨 정보 제공, GPT 기능 등 다양한 생산성 도구를 설계하고 구현했습니다.',
        achievements: [
          '포모도로 타이머로 작업 시간과 휴식 시간을 분리하여 사용자 집중도와 생산성 향상',
          'React Query를 활용해 날씨 API 데이터를 실시간으로 제공하고 캐싱으로 최신 정보 유지',
          'GPT를 활용해 사용자 맞춤형 피드백과 감정 분석을 제공하여 사용자 경험 강화',
          'TextArea를 활용한 자유 입력 텍스트 분석 기능으로 다양한 시나리오 지원',
        ],
      },
      {
        title: '테스트 자동화',
        description:
          'Jest와 React Testing Library를 사용해 주요 컴포넌트와 사용자 흐름을 검증하는 자동화 테스트를 작성했습니다.',
        achievements: [
          '현재 컴포넌트 단위 테스트와 사용자 시나리오 테스트 결합을 통해 70% 이상의 테스트 커버리지를 달성',
          'React Router와 Context API를 mocking하여 네비게이션과 전역 상태를 안정적으로 검증',
          '테스트 자동화를 통해 주요 로직의 안정성을 확보하며 코드 품질 유지',
        ],
      },
      {
        title: 'CI/CD 파이프라인 구축',
        description:
          'GitHub Actions와 Vercel을 활용해 main 브랜치 병합 시 자동 테스트와 배포가 이루어지는 CI/CD 파이프라인을 구축했습니다.',
        achievements: [
          'main 브랜치 병합 시 자동으로 테스트를 실행하고 성공 시 배포하여 배포 안정성 확보',
          'Vercel 환경변수를 활용해 API 키와 같은 민감 정보를 안전하게 관리하여 보안성 강화',
        ],
      },
      {
        title: '상태 및 데이터 관리',
        description:
          'React Context API와 React Query를 활용해 글로벌 상태 관리와 데이터 캐싱을 최적화했습니다.',
        achievements: [
          'React Query의 staleTime, cacheTime, keepPreviousData 옵션을 활용해 데이터 로드 시 깜박임을 방지하고 네트워크 부하 감소',
          'Context API로 전역 상태를 효율적으로 관리하며 불필요한 prop drilling 제거',
        ],
      },
    ],
    challenges: [
      {
        title: '1. 비동기 관련 재렌더링 문제',
        descriptions: [
          {
            ProblemSituation:
              'Momentum 프로젝트의 배경 이미지를 동적으로 로드하기 위해 이미지를 불러오는 훅을 구현했으나, 상태 업데이트와 컴포넌트 리렌더링 간의 불일치로 문제가 발생했습니다.',
            ProblemSolution: [
              'API 호출 로직을 useQuery와 useEffect로 이원화했던 기존 구조를 단일화하여 중복 호출과 비동기 처리 간의 충돌을 방지.',
              'useEffect 내부에서 API 호출 로직을 비동기로 관리하고, 결과를 React 상태와 로컬 스토리지에 저장하여 데이터의 일관성을 유지.',
              'useEffect의 의존성 배열에 데이터를 포함해 상태 변화가 즉시 반영되도록 재설계.',
            ],
            ProblemResult:
              '상태와 데이터 간 불일치 문제를 해결하여 배경 이미지가 항상 최신 상태로 반영되었습니다.',
          },
        ],
      },
      {
        title: '2. 성능 병목 구간 해결',
        descriptions: [
          {
            ProblemSituation:
              'Lighthouse 분석과 성능 결과, LCP(Largest Contentful Paint)가 3.15초로 측정되어 사용자 경험이 저하되고, React DevTools를 통해 불필요한 렌더링이 발생하는 구간을 확인했습니다.',
            ProblemSolution: [
              '1. CSS Modules를 활용해 스타일링을 모듈화하고, 중복 렌더링을 유발하는 전역 스타일링 문제를 해결.',
              '2. 스타일링 관련 라이브러리를 최신 버전으로 업그레이드하는 대신, CDN(Content Delivery Network)을 활용해 로드 속도를 개선.',
              '3. React DevTools로 병목 구간을 식별한 후, React.memo를 적용해 상위 상태 변화로 인한 하위 컴포넌트의 불필요한 렌더링을 방지.',
              '4. useCallback과 useMemo를 적절히 활용해 자주 사용되는 함수와 데이터의 재생성을 방지하며 컴포넌트 성능 최적화.',
              '5. ARIA 속성을 추가하고, 콘텐츠 크기를 명확히 설정하여 접근성과 시각적 일관성을 동시에 개선.',
            ],
            ProblemResult:
              'LCP를 3.15초에서 551ms로 단축하여 초기 로딩 속도를 대폭 개선하였으며, React.memo와 useCallback을 통한 렌더링 최적화로 사용자 경험과 성능이 크게 향상되었습니다.',
          },
        ],
      },
      {
        title: '3. CI/CD 파이프라인 구축',
        descriptions: [
          {
            ProblemSituation:
              'GitHub Actions를 이용한 CI/CD 파이프라인 구축 과정에서 테스트 단계가 지나치게 오래 걸리거나 멈추는 문제가 발생했고, 의존성 충돌과 보안 취약점, Vercel 토큰 설정 오류로 인해 배포가 실패하는 일이 있었습니다. ',
            ProblemSolution: [
              '1. 테스트 단계의 지연 문제 해결 : 오래된 패키지와 불필요한 의존성으로 인한 지연을 해결하기 위해 npm audit fix를 실행해 취약점을 자동으로 패치하고 주요 의존성을 최신 버전으로 업데이트.',
              '2. Node.js 버전 안정화 : 최신 베타 버전의 불안정성을 해결하기 위해 CI/CD 파이프라인에서 Node.js LTS 버전(16)을 사용하도록 변경.',
              '3. Vercel 토큰 문제 해결 : npx vercel --prod --yes 옵션에서 발생한 문제를 npx vercel --prod --token=$VERCEL_TOKEN으로 수정하여 명시적으로 토큰을 전달하도록 변경.',
            ],
            ProblemResult:
              'main 브랜치에 병합된 코드가 자동으로 테스트되고, 테스트를 통과하면 Vercel에 안정적으로 배포되도록 설정했습니다. 이로써 작업 효율성과 배포 신뢰성을 높이고, 테스트와 배포 프로세스에서 발생할 수 있는 잠재적 오류를 방지하며 개발 생산성을 크게 향상시켰습니다.',
          },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: '효율적인 상태 관리와 비동기 로직 설계의 중요성',
        description:
          'Momentum 프로젝트에서 비동기 로직으로 인한 상태 불일치 문제를 해결하며, 상태 관리의 효율성과 데이터 일관성의 중요성을 실감했습니다. React 상태와 로컬 스토리지를 병렬적으로 활용하고, 의존성 배열을 명확히 정의함으로써 일관된 데이터 흐름을 확보했습니다. 이를 통해, 상태 관리 로직이 단순히 동작하는 것을 넘어서 사용자 경험에 직접적인 영향을 미친다는 점을 깨달았습니다.',
      },
      {
        title: '데이터 흐름과 캐싱 전략의 실무적 이해',
        description:
          'React Query를 활용해 데이터 캐싱 전략을 최적화하고, staleTime과 cacheTime 등의 옵션을 통해 API 호출 효율성을 높이는 경험을 통해 데이터를 효율적으로 관리하는 방법을 배웠습니다. 특히, 캐싱 전략은 단순히 호출 횟수를 줄이는 것을 넘어, 사용자 경험과 시스템 자원 관리를 동시에 개선할 수 있는 강력한 도구임을 알게 되었습니다.',
      },
      {
        title: '성능 최적화와 정량적 분석의 가치',
        description:
          'Lighthouse와 React Profiler를 활용해 성능 병목을 식별하고, CSS Modules, React.memo, useCallback 등의 도구를 적용하여 LCP를 3.15초에서 551ms로 줄이는 성과를 달성했습니다. 이 과정에서 성능 최적화를 단순히 감각적으로 진행하는 것이 아니라, 정량적 데이터를 바탕으로 문제를 진단하고 해결하는 것이 얼마나 중요한지 깨달았습니다.',
      },
      {
        title: '테스트 자동화의 안정성과 효율성',
        description:
          'Jest와 React Testing Library를 사용해 주요 로직과 사용자 흐름을 검증하며, 테스트 자동화가 단순히 오류를 예방하는 것을 넘어 배포 안정성을 높이는 데 중요한 역할을 한다는 것을 배웠습니다. 특히, 테스트 커버리지를 확대하면서 코드 변경 시 발생할 수 있는 잠재적인 문제를 예방하고, 협업 환경에서 코드 품질을 유지하는 중요성을 느꼈습니다.',
      },
      {
        title: 'CI/CD 파이프라인의 생산성 향상 효과',
        description:
          'GitHub Actions와 Vercel을 사용해 CI/CD 파이프라인을 구축하며, 자동화된 테스트와 배포가 얼마나 개발 프로세스를 단순화하고 안정성을 높이는지 경험했습니다. Node.js LTS 버전과 명시적인 토큰 전달 방식을 사용하여 문제를 해결하며, 단순한 설정 변경이 전체 배포 워크플로의 신뢰성을 얼마나 크게 향상시킬 수 있는지 알게 되었습니다.',
      },
      {
        title: '문제 해결 과정에서의 성찰',
        description:
          '각각의 문제를 해결하며 단순히 문제를 해결하는 데 그치지 않고, 문제의 원인을 명확히 분석하고 이를 통해 더 나은 설계와 도구 활용 방법을 학습했습니다. 특히, 새로운 기술을 빠르게 익히고 이를 프로젝트에 적용하며 기술적 성장과 자신감을 얻었습니다. 이를 통해 "문제를 단순히 해결하는 것"과 "문제를 해결하며 성장하는 것"의 차이를 이해하게 되었습니다.',
      },
    ],
  },
  {
    projectName: 'PAZIZIC TV WEB APP',
    projectTech:
      'React | Firebase | React Query | Zustand | YouTube Data API | Google API (gapi)',
    Link: 'https://pazizic.vercel.app/',
    Blog: 'https://snowman-seolmini.tistory.com/84',
    Git: 'https://github.com/Parkseolmin/React_Youtube',
    overviews:
      'PAZIZIC-TV는 React를 활용해 비동기 처리와 성능 최적화에 중점을 두고 개발한 사용자 맞춤형 미디어 플랫폼입니다. 이 프로젝트는 YouTube Open API를 활용한 데이터 표시에서 출발해, 사용자 경험을 강화하고 성능 문제를 해결하는 다양한 기능 구현으로 발전했습니다.',
    goals: [
      '- React 기술의 깊이를 더하며, 성능 최적화와 안정적인 사용자 경험 제공.',
      '- API 호출 최적화와 병목 해결로 효율성을 개선하고, 개인화된 콘텐츠 제공을 구현.',
    ],
    video: '/img/pazizic/pazizic.mp4',
    subVideo: pazizic_videos,
    tasksAndAchievements: [
      {
        title: 'UI/UX 최적화',
        description:
          'SCSS와 반응형 디자인을 사용해 다양한 디바이스에서 일관된 사용자 경험을 제공. 주요 레이아웃 요소와 컴포넌트를 반응형으로 설계하여 모바일, 태블릿, 데스크톱 환경에서도 최적의 UX를 구현.',
        achievements: [
          '모든 장치에서 UI 깨짐 없는 안정적 화면 제공',
          '사용자 클릭 요소와 네비게이션의 접근성 개선',
        ],
      },
      {
        title: 'API 최적화',
        description:
          'React Query를 활용해 API 호출 빈도를 줄이고 데이터 캐싱 전략을 개선. 싱글톤 패턴을 통해 호출 로직을 통합하고 데이터 관리를 효율화.',
        achievements: [
          'API 호출 횟수를 65% 감소시키며, 중복 호출 제거',
          '렌더링 시간 15% 단축 및 메모리 사용량 27% 절감',
          '사용자 인터페이스의 응답 속도 향상',
        ],
      },
      {
        title: '보안 및 인증',
        description:
          'Google OAuth2.0 인증 및 gapi 라이브러리를 활용해 안전한 사용자 인증과 자동 토큰 갱신을 구현. 인증 절차와 사용자 세션 관리를 효율적으로 설계.',
        achievements: [
          'Firebase refreshToken의 invalid_grant 문제를 해결하고, 인증 안정성 확보',
          '로그인 중단 없이 지속적인 인증 상태 유지',
        ],
      },
      {
        title: '성능 개선',
        description:
          'React Profiler로 렌더링 병목 구간을 분석하고, React.memo와 useCallback을 활용해 불필요한 렌더링을 방지.',
        achievements: [
          '렌더링 시간 60% 단축',
          '초기 로딩 속도 40% 개선',
          'React.memo로 상위 상태 변화에 영향을 받던 하위 컴포넌트 렌더링 제거',
        ],
      },
      {
        title: '사용자 맞춤 콘텐츠 제공',
        description:
          'Firebase Firestore와 Zustand를 사용해 사용자별 좋아요 데이터를 관리 및 조회. 개인화된 콘텐츠 페이지를 제공하여 사용자 경험을 강화.',
        achievements: [
          '유저 행동 데이터를 기반으로 개인화된 비디오 목록 생성',
          '좋아요 비디오 목록 페이지를 구현해 개인화 콘텐츠 추천 기능 강화',
          'Firebase로 데이터를 실시간으로 관리하며 데이터 동기화 문제 해결',
        ],
      },
    ],
    challenges: [
      {
        title: '1. 코드 중복 제거와 메모리 효율성의 균형',
        descriptions: [
          {
            ProblemSituation:
              '초기에는 각 컴포넌트가 독립적으로 API 호출 메서드를 구현하면서 중복된 로직이 다수 발생했습니다. 코드가 길어지고, 관리가 어려워졌으며, 메모리 효율성이 떨어졌습니다. 싱글톤 패턴으로 호출 로직을 통합했으나, 단일 인스턴스 관리로 인해 메모리 절약 효과는 기대만큼 크지 않았습니다.',
            ProblemSolution: [
              'React Query의 staleTime과 cacheTime 옵션을 활용해 호출된 데이터를 효율적으로 캐싱.',
              '단일화된 호출 메서드 설계와 데이터 흐름 최적화를 병행해 효율성을 강화.',
            ],
            ProblemResult:
              '코드 유지보수성이 높아지고, API 호출 중복 제거로 네트워크 비용이 절감되었습니다.',
          },
        ],
      },
      {
        title: '2. React DevTools Profiler를 활용한 렌더링 최적화',
        descriptions: [
          {
            ProblemSituation:
              'React DevTools Profiler를 통해 특정 컴포넌트의 재렌더링 병목 현상을 발견. 상태 변경이 전체 컴포넌트 구조에 영향을 미쳐 렌더링 성능이 저하되었습니다.',
            ProblemSolution: [
              'React.memo를 적용해 상태 변경이 발생해도 영향을 받지 않도록 설정.',
              'useCallback으로 함수를 메모이제이션하여 불필요한 렌더링 방지.',
              'React Query의 staleTime을 조정하여 데이터 호출 빈도를 최적화.',
            ],
            ProblemResultImg: 'img/pazizic/optimizationResults.png',
            ProblemResult:
              '렌더링 시간이 60% 단축되었고, API 호출 빈도가 65% 감소하며 메모리 사용량도 27% 줄었습니다.',
          },
        ],
      },
      {
        title: '3. OAuth2.0 토큰 갱신 문제 해결',
        descriptions: [
          {
            ProblemSituation:
              'Google OAuth2.0에서 발급된 accessToken의 유효시간(1시간) 이후 토큰 갱신이 실패하면서 사용자 데이터 로드가 중단되는 문제가 발생.',
            ProblemSolution: [
              'gapi 라이브러리의 reloadAuthResponse 메서드를 통해 만료된 토큰을 자동으로 갱신.',
              'Google API 클라이언트 초기화 프로세스를 간소화하여 사용자 세션 안정성 강화.',
            ],
            ProblemResult:
              '인증 중단 문제를 해결하고, 사용자 경험을 저해하지 않는 지속적인 인증 환경 구현.',
          },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'React Query를 활용한 데이터 관리 최적화',
        description:
          'React Query의 staleTime과 cacheTime 옵션을 적절히 활용하여 데이터 호출 빈도를 줄이고 네트워크 부하를 감소시켰습니다. 이를 통해 실시간 데이터를 효율적으로 관리하며, 비효율적인 API 호출로 인한 성능 저하 문제를 해결했습니다. 이 과정에서 데이터 캐싱의 중요성과 적절한 옵션 조합이 가져오는 성능 향상 효과를 직접 체감할 수 있었습니다.',
      },
      {
        title: 'React.memo와 useCallback을 활용한 렌더링 최적화',
        description:
          'React.memo와 useCallback을 통해 컴포넌트의 불필요한 재렌더링을 방지하고, 렌더링 병목 현상을 완화했습니다. 특히 React DevTools Profiler를 활용해 재렌더링 패턴을 시각적으로 분석하고, 병목 지점을 정량적으로 진단하며 적합한 최적화 전략을 도출했습니다. 이를 통해 성능 개선의 본질을 이해하며 데이터 기반 문제 해결 능력을 키웠습니다.',
      },
      {
        title: 'OAuth2.0 인증 체계 설계와 문제 해결',
        description:
          'Google OAuth2.0 인증 체계에서 발생한 accessToken 갱신 실패 문제를 해결하며, 인증 체계의 동작 원리를 깊이 이해하게 되었습니다. gapi 라이브러리의 reloadAuthResponse 메서드를 활용해 만료된 토큰을 자동 갱신하고, 사용자 세션 관리의 안정성을 높였습니다. 이를 통해 제한적인 프론트엔드 환경에서도 신뢰성 높은 인증 체계를 설계하는 자신감을 얻었습니다.',
      },
      {
        title: 'Firebase Firestore와 Zustand를 통한 사용자 데이터 관리',
        description:
          'Firebase Firestore와 Zustand를 활용하여 사용자 데이터를 효율적으로 관리하며, 개인화된 사용자 경험을 제공하는 기술적 기초를 확립했습니다. 데이터 동기화 문제를 해결하고, 사용자 행동 데이터를 기반으로 맞춤형 콘텐츠를 제공하며 데이터 중심 개발의 중요성을 깨달았습니다.',
      },
      {
        title: '싱글톤 패턴과 데이터 관리 최적화',
        description:
          '싱글톤 패턴은 객체 인스턴스를 하나로 제한하여 생성 비용을 줄이고 상태를 공유하는 데 유리하지만, 메모리 사용량이나 API 호출 빈도를 직접적으로 줄이지는 않는다는 점을 배웠습니다. 힙 스냅샷을 통해 싱글톤 적용 전후를 비교한 결과, 메모리 사용량이 감소하지 않거나 오히려 증가할 수 있음을 확인했습니다. 이는 싱글톤이 전역적으로 데이터를 보유하거나 오래된 캐시를 유지할 경우, 메모리 누수를 초래할 가능성이 있다는 것을 보여줍니다. 따라서 싱글톤 패턴의 효과를 극대화하려면, 캐시 관리와 데이터 패칭 최적화 같은 추가적인 로직이 반드시 필요하다는 결론을 얻었습니다.',
      },
    ],
  },
  {
    projectName: 'F.ROCK',
    projectTech:
      'React | Firebase | Cloudinary | React Query | PortOne SDK | TailwindCSS',
    Link: 'https://react-r-frock.vercel.app/',
    Blog: 'https://snowman-seolmini.tistory.com/85',
    Git: 'https://github.com/Parkseolmin/React_R.FROCK',
    overviews:
      'F.ROCK은 사용자와 관리자의 역할을 명확히 구분한 쇼핑몰 플랫폼으로, 사용자에게는 제품 탐색 및 구매 기능을, 관리자에게는 제품 관리 및 추가 기능을 제공합니다. Firebase를 활용한 사용자 인증 및 실시간 데이터베이스 관리, Cloudinary를 이용한 이미지 최적화, PortOne SDK를 활용한 결제 처리 등 다양한 기능을 통해 사용자 경험과 개발 생산성을 향상시켰습니다.',
    goals: [
      '- React와 Firebase를 활용하여 데이터 관리와 사용자 인증 및 권한 제어를 구현',
      '- 실시간 데이터 관리와 보안 강화를 통해 사용자와 관리자의 역할을 명확히 구분',
      '- 반응형 디자인을 적용하여 다양한 기기에서 최적화된 사용자 경험을 제공',
      '- 신뢰성 있는 e커머스 플랫폼을 구축하는 데 초점',
    ],
    video: '/img/frock/frock.mp4',
    subVideo: frock_videos,
    tasksAndAchievements: [
      {
        title: '사용자 인증 및 권한 관리',
        description:
          'Firebase Authentication과 UID 접근 제어를 사용하여 사용자와 관리자의 역할을 명확히 분리했습니다.',
        achievements: [
          'ProtectedRoute 컴포넌트를 활용해 관리자 페이지 접근 제어를 구현.',
          '사용자 상태를 Firebase Realtime Database와 동기화하여 실시간 인증 상태를 관리.',
        ],
      },
      {
        title: '이미지 업로드 및 관리 최적화',
        description:
          'Cloudinary API를 통해 업로드된 이미지를 최적화하고, Database에 URL을 저장하는 방식을 채택했습니다.',
        achievements: [
          'Cloudinary를 사용하여 Firebase 의존도를 줄이고, 유연한 이미지 관리 환경을 구축.',
        ],
      },
      {
        title: '장바구니 상태 관리',
        description:
          'React Query의 캐싱 및 상태 무효화를 사용하여 장바구니 상태를 실시간으로 동기화했습니다.',
        achievements: [
          '장바구니에 상품 추가 시 상태가 즉시 반영되도록 구현.',
          '구독 메서드를 통해 실시간 데이터 변경 관리 방식을 검토하고 적용 가능성을 분석.',
        ],
      },
      {
        title: '결제 시스템 구현',
        description:
          'PortOne SDK를 이용해 안전하고 효율적인 결제 시스템을 구축했습니다.',
        achievements: [
          '사용자의 주문 상품 및 배송 정보를 데이터로 가공해 PortOne SDK에 전달.',
          '결제 성공 시 장바구니 초기화 및 주문 완료 알림을 구현.',
        ],
      },
      {
        title: 'UI/UX 최적화',
        description:
          'TailwindCSS를 사용하여 반응형 디자인을 적용하고, 사용자 경험을 개선했습니다.',
        achievements: [
          '모바일, 태블릿, 데스크톱 환경에 맞춘 일관된 사용자 인터페이스 제공.',
          '주소 입력 시 DaumPostcode API를 활용해 사용자 편의성을 증대.',
        ],
      },
    ],
    challenges: [
      {
        title: '1. 페이지 경로 보호와 비동기 처리',
        descriptions: [
          {
            ProblemSituation:
              'Firebase의 onAuthStateChanged 메서드를 사용해 로그인 상태와 사용자 권한(isAdmin)을 확인하고, 이를 통해 보호된 경로를 관리하려 했습니다. 하지만 페이지 새로고침이나 첫 렌더링 시, 비동기적으로 사용자 데이터를 가져오는 동안 보호된 페이지로 접근하면 홈으로 리다이렉트되는 문제가 발생했습니다.',
            ProblemSolution: [
              '1. 비동기 로직에서 상태 불일치를 해결하기 위해 isLoading 변수를 추가하여 사용자 데이터 로드 중에는 컴포넌트를 잠시 대기 상태로 유지.',
              '2. React Context API를 사용해 사용자 정보를 전역적으로 관리하며 앱 전반에서 일관성을 유지.',
              '3. ProtectedRoute 컴포넌트 내에서 isLoading 상태와 사용자 권한을 함께 검사하여 비동기 데이터 로드 완료 후 정확한 경로 보호를 구현.',
            ],
            ProblemResult:
              '사용자 데이터 로드와 경로 보호 간의 불일치 문제를 해결하여 페이지 새로고침이나 첫 렌더링 시에도 안정적으로 보호된 경로를 관리할 수 있게 되었고, 사용자 경험이 개선되었습니다.',
          },
        ],
      },
      {
        title: '2. 여러 개의 이미지 업로드',
        descriptions: [
          {
            ProblemSituation:
              'Cloudinary API를 사용해 여러 이미지를 업로드하려 했으나, 개별 URL을 반환받는 대신 배열로 묶은 URL 데이터를 처리하고자 했습니다. 기존의 순차 처리 방식(for-await)은 모든 이미지를 업로드하는 데 시간이 오래 걸리는 문제가 있었습니다.',
            ProblemSolution: [
              '1. Promise.all을 활용해 이미지 파일들을 병렬적으로 업로드하고, 반환된 URL들을 배열로 처리.',
              '2. 기존의 for-await 방식을 사용해 순차적으로 업로드하는 방식과 병렬 처리 방식을 비교하며, 병렬 처리의 장점을 활용.',
              '3. 업로드 중 오류 발생 시 해당 파일만 재처리하도록 로직을 개선.',
            ],
            ProblemResult:
              'Promise.all을 사용하여 이미지 업로드 속도를 크게 단축하였으며, 반환된 URL들을 배열로 처리해 원하는 데이터를 효율적으로 관리할 수 있었습니다. 병렬 처리와 순차 처리의 차이를 이해하고 상황에 맞는 방식을 선택할 수 있는 능력을 키웠습니다.',
          },
        ],
      },
      {
        title: '3. 장바구니에 상품을 등록하면 즉각 업데이트되게 하기',
        descriptions: [
          {
            ProblemSituation:
              '상품을 장바구니에 추가하거나 수량을 변경했을 때, 변경된 데이터가 즉각적으로 UI에 반영되지 않아 사용자 경험이 저하되었습니다. 기존 구현은 Firebase Realtime Database에서 데이터를 가져오지만, 변경 사항이 발생했을 때 컴포넌트가 자동으로 갱신되지 않았습니다.',
            ProblemSolution: [
              '1. React Query의 invalidateQueries 기능을 활용하여 장바구니 상태가 변경되었을 때 해당 데이터를 다시 불러오도록 설정.',
              '2. Firebase Realtime Database의 onValue 메서드를 사용해 데이터 변경 시 구독(subscribe)하여 실시간으로 UI를 업데이트하도록 구현.',
              '3. React Query와 Firebase 구독 방식을 비교하며 상황에 맞는 방식을 선택.',
            ],
            ProblemResult:
              'invalidateQueries를 사용하여 장바구니 데이터가 변경될 때 UI가 즉각적으로 업데이트되도록 하였으며, Firebase의 구독 방식을 활용하여 실시간 업데이트를 간단하게 구현하는 방법도 추가 학습하여 프로젝트에 반영할 준비를 마쳤습니다.',
          },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: '페이지 경로 보호와 비동기 처리의 중요성',
        description:
          'Firebase의 onAuthStateChanged 메서드를 사용하면서 비동기 데이터 로드와 컴포넌트 렌더링 간의 불일치 문제를 해결했습니다. 이 과정에서 비동기 작업 중 상태 관리를 명확히 하는 것이 얼마나 중요한지 체감했습니다. 특히 React는 상태 변화가 없으면 컴포넌트를 재렌더링하지 않으므로, isLoading과 같은 상태 변수를 추가해 작업 진행 상태를 표시하는 방식을 배웠습니다. 이를 통해 React와 Firebase를 활용한 사용자 데이터 처리 능력을 효과적으로 향상시켰습니다.',
      },
      {
        title: '이미지 업로드와 병렬 처리에 대한 실무적 이해',
        description:
          'Cloudinary API를 사용해 여러 이미지를 업로드하며 Promise와 비동기 처리의 개념을 깊이 이해할 수 있었습니다. 특히 Promise.all을 활용한 병렬 업로드와 순차 처리 방식을 비교하며 병렬 처리의 장점을 학습했습니다. 또한, 오류 처리와 데이터 일관성을 유지하는 방법을 익히며 효율적인 이미지 관리와 API 활용 역량을 키웠습니다.',
      },
      {
        title: '장바구니 상태 실시간 동기화의 중요성',
        description:
          'React Query의 invalidateQueries 기능을 사용해 장바구니 상태 변경 시 데이터를 즉시 다시 불러와 UI에 반영하는 경험을 통해 상태 무효화(invalidation)의 중요성을 배웠습니다. Firebase의 구독 기능(onValue)을 통해 데이터 변경 시 UI가 자동 갱신되는 방식을 익히며, 실시간 데이터 처리와 상태 관리의 효율성을 체감했습니다. 이를 통해 데이터 로드와 UI 업데이트 간의 연결성을 강화하는 데 큰 도움을 얻었습니다.',
      },
      {
        title: '결제 시스템 구현과 데이터의 안전한 처리',
        description:
          'PortOne SDK를 사용해 결제 시스템을 구현하며, 간단한 API 호출로 복잡한 결제 프로세스를 처리하는 방법을 익혔습니다. 결제 데이터와 사용자 주문 정보를 가공하고, 성공 및 실패에 따른 후속 작업을 설계하며 안정적인 결제 로직을 구현했습니다. 이를 통해 결제 흐름에 대한 이해를 높이고, 사용자 경험 최적화를 위한 데이터 유효성 검증과 후속 처리의 중요성을 배웠습니다.',
      },
      {
        title: '문제 해결 과정에서의 성찰',
        description:
          '문제를 해결하는 과정에서 단순히 해결에 그치지 않고, 근본 원인을 분석하고 적합한 기술을 학습해 프로젝트에 적용하는 능력을 키웠습니다. Firebase의 onAuthStateChanged 메서드와 isLoading 상태 변수를 활용해 비동기 처리 특성을 이해하며, 사용자 데이터 로드 중의 경험을 개선하는 방법을 배웠습니다. 또한, 여러 이미지 업로드 과정에서는 Promise.all을 사용한 병렬 처리와 순차 처리 방식을 비교하며, 상황에 적합한 병렬 처리 방식으로 효율성을 극대화했습니다. React Query의 invalidateQueries 기능과 Firebase 구독 기능(onValue)을 비교하며, 실시간 데이터 반영과 상태 관리를 효과적으로 연결하는 방법도 익혔습니다. 이와 같은 경험을 통해 문제 해결 과정에서 실무적 기술과 더불어 "문제를 해결하며 성장하는 개발자"로서의 사고와 자신감을 갖출 수 있었습니다.',
      },
    ],
  },
];
