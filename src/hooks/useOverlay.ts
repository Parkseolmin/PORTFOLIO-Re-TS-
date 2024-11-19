import { useCallback, useState, useEffect } from 'react';
import { Projects } from '../assets/data/data';

const ANIMATION_DURATION = 500;

interface UseOverlayReturn {
  selectedItem: Projects | null;
  isOverlayOpen: boolean;
  isClosing: boolean;
  showOverlay: (item: Projects) => void;
  hideOverlay: () => void;
}

export default function useOverlay(): UseOverlayReturn {
  const [selectedItem, setSelectedItem] = useState<Projects | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [pendingItem, setPendingItem] = useState<Projects | null>(null);

  // 오버레이를 여는 함수
  const showOverlay = useCallback(
    (item: Projects) => {
      if (isOverlayOpen) {
        setPendingItem(item); // 새 아이템 저장
        setIsClosing(true); // 닫기 애니메이션 시작
      } else {
        setSelectedItem(item); // 바로 아이템 설정
        setIsOverlayOpen(true); // 열기
      }
    },
    [isOverlayOpen]
  );

  // 오버레이를 닫는 함수
  const hideOverlay = useCallback(() => {
    setIsClosing(true);
  }, []);

  // 닫힘 애니메이션이 끝난 후 상태 처리
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsClosing(false);
        setIsOverlayOpen(false);

        if (pendingItem) {
          // pendingItem이 있으면 자동으로 열기
          setSelectedItem(pendingItem);
          setIsOverlayOpen(true); // 자동 열림
          setPendingItem(null);
        } else {
          setSelectedItem(null); // 초기화
        }
      }, ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isClosing, pendingItem]);

  return { selectedItem, isOverlayOpen, isClosing, showOverlay, hideOverlay };
}
