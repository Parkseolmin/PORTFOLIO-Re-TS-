export interface MomentumDetails {
  title: string;
  description: string;
}

export const momentumDetails: MomentumDetails[] = [
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
];
