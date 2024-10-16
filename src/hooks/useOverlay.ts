import { useCallback, useState } from 'react';
import { Projects } from '../assets/data/data';

interface UseOverlayReturn {
  selectedItem: Projects | null;
  isOverlayOpen: boolean;
  isClosing: boolean;
  showOverlay: (item: Projects) => void;
  hideOverlay: () => void;
}

export default function useOverlay(): UseOverlayReturn {
  const [selectedItem, setSelectedItem] = useState<Projects | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState(false);

  // 오버레이를 여는 함수
  const showOverlay = useCallback(
    (item: Projects) => {
      if (isOverlayOpen) {
        // 이미 오버레이가 열려있다면, 닫는 애니메이션을 시작
        setIsClosing(true);
        // 애니메이션이 끝나면 새 아이템으로 오버레이를 열기
        setTimeout(() => {
          setSelectedItem(item);
          setIsClosing(false);
        }, 500); // 500ms는 GSAP 애니메이션 duration과 일치시켜야 합니다
      } else {
        // 오버레이가 닫혀있다면, 바로 열기
        setSelectedItem(item);
        setIsOverlayOpen(true);
      }
    },
    [isOverlayOpen]
  );

  // 오버레이를 닫는 함수
  const hideOverlay = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOverlayOpen(false);
      setIsClosing(false);
      setSelectedItem(null);
    }, 500);
  }, []);

  return { selectedItem, isOverlayOpen, isClosing, showOverlay, hideOverlay };
}
