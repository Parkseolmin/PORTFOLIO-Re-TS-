export interface TaskAndAchievement {
  title: string; // 작업 제목
  description: string; // 작업 설명
  achievements: string[]; // 성과 리스트
}

export interface ProblemAndSolution {
  problem: string; // 문제 설명
  solution: string; // 해결책 설명
}

export interface Outcomes {
  achievements: string[]; // 성과 리스트
  lessonsLearned: string[]; // 배운 점 리스트
}

export interface ProjectData {
  projectTitle: string; // 수정된 속성 이름
  projectTech: string;
  projectLink: string;
  projectBlog: string;
  projectGit: string;
  overview: string;
  overviewList: string[];
  overviewResult: string;
  video: string;
  subVideo?: string[]; // 선택적 속성으로 유지
  tasksAndAchievements: TaskAndAchievement[];
  problemsAndSolutions: ProblemAndSolution[];
  outcomes: Outcomes;
  conclusion: string;
}

export const data: ProjectData[] = [
  {
    projectTitle: 'PAZIZIC TV',
    projectTech:
      'React | Firebase (Authentication, Firestore) | React Query | Zustand | YouTube Data API | Google API (gapi)',
    projectLink: 'https://momentum-wine.vercel.app/',
    projectBlog: 'https://snowman-seolmini.tistory.com/101',
    projectGit: 'https://github.com/Parkseolmin/React_momentum',
    overview: `
     PAZIZIC-TV는 React와 JavaScript를 활용해 비동기 처리와 성능 최적화에 중점을 두고 개발한 사용자 맞춤형 미디어 플랫폼입니다.
     이 프로젝트는 YouTube Open API를 활용한 데이터 표시에서 출발해, 사용자 경험을 강화하고 성능 문제를 해결하는 다양한 기능 구현으로 발전했습니다.
    `,
    overviewList: [
      'React Query: 비디오 데이터를 지속적으로 로드하는 "더보기" 기능을 구현하고, staleTime과 cacheTime 옵션을 설정해 중복 API 호출을 방지하며, API 호출 횟수를 65% 줄였습니다.',
      '싱글톤 패턴과 React.memo: 비동기 요청을 효율적으로 관리하며, 불필요한 렌더링을 제거해 메모리 사용량 27% 절감 및 렌더링 시간 60% 단축.',
      'Firebase OAuth2.0: Google gapi 라이브러리와 연계하여 실제 YouTube 계정으로 로그인 기능을 구현하고, 자동 토큰 갱신 문제를 해결했습니다.',
      '개인화된 콘텐츠 제공: Firebase Firestore와 Zustand를 사용해 ‘좋아요’ 데이터를 효율적으로 관리하고, 개인화된 콘텐츠 페이지를 제공했습니다.',
    ],
    overviewResult:
      ' 프로젝트는 React의 유연성과 상태 관리, 비동기 처리의 중요성을 이해하는 데 도움을 주었으며, 데이터 최적화와 사용자 경험 개선의 가치를 체감하게 해주었습니다.',
    video: '/img/pazizic/pazizic.mp4',
    tasksAndAchievements: [
      {
        title: 'UI/UX 최적화',
        description:
          'SCSS와 반응형 디자인으로 모든 장치에서 사용자 친화적인 탐색 경험 제공.',
        achievements: [
          '모바일, 태블릿, 데스크톱 환경에서 일관된 사용자 경험 구축.',
        ],
      },
      {
        title: 'API 최적화',
        description:
          'React Query와 싱글톤 패턴으로 API 호출 중복 제거 및 데이터 캐싱 구현.',
        achievements: [
          'API 호출 횟수 65% 감소',
          '렌더링 시간 15% 단축',
          '메모리 사용량 27% 절감',
        ],
      },
      {
        title: '보안 및 인증',
        description:
          'Google OAuth2.0과 gapi 라이브러리로 안정적인 인증 및 자동 토큰 갱신 구현.',
        achievements: [
          'Firebase refreshToken 에러(invalid_grant) 해결로 사용자 세션 안정성 확보.',
        ],
      },
      {
        title: '성능 개선',
        description:
          'React Profiler로 병목 구간 분석 및 React.memo, useCallback을 통한 최적화.',
        achievements: ['렌더링 시간 60% 단축', '초기 로딩 속도 40% 개선'],
      },
      {
        title: '사용자 맞춤 콘텐츠 제공',
        description:
          'Firebase와 Zustand를 활용해 사용자별 ‘좋아요’ 데이터를 관리 및 조회 최적화.',
        achievements: ['개인화된 콘텐츠 페이지 제공으로 사용자 경험 강화.'],
      },
    ],
    problemsAndSolutions: [
      {
        problem: 'API 호출 중복 문제',
        solution: 'React Query의 캐싱 및 staleTime 옵션으로 중복 호출 방지.',
      },
      {
        problem: '토큰 갱신 실패 문제',
        solution:
          'gapi 라이브러리의 reloadAuthResponse()로 자동 토큰 갱신 구현.',
      },
      {
        problem: '불필요한 렌더링 문제',
        solution: 'React.memo와 useCallback을 활용해 최적화.',
      },
    ],
    outcomes: {
      achievements: [
        'React.memo와 React Query로 성능 최적화 → API 호출 65% 감소, 렌더링 병목 제거.',
        'Firebase와 Zustand로 개인화된 콘텐츠 페이지 구현.',
        'Google OAuth2.0과 gapi로 안정적인 인증과 자동 토큰 갱신 환경 제공.',
      ],
      lessonsLearned: [
        '성능 최적화와 데이터 캐싱이 사용자 경험에 미치는 영향 체감.',
        '클라이언트와 서버 간 인증 및 데이터 흐름의 협력 중요성 학습.',
        'React와 Firebase를 활용한 효율적인 데이터 관리와 상태 관리 기술 강화.',
      ],
    },
    conclusion: `
      PAZIZIC-TV는 성능 최적화, 데이터 관리 효율화, 개인화된 사용자 경험 제공을 중점으로 개발한 프로젝트입니다. 
      이 프로젝트를 통해 React 기술의 활용 능력과 문제 해결 역량을 심화할 수 있었습니다.
    `,
  },
];
