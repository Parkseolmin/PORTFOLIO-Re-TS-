import { useCallback, useState } from 'react';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import { data, Projects } from './assets/data/data';
import About from './components/About';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<Projects | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  // 오버레이가 닫히는 중인지 나타냄
  const [isClosing, setIsClosing] = useState(false);
  const [showAbout, setShowAbout] = useState(false); // About 페이지 표시 여부

  const openOverlay = useCallback(
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
  const closeOverlay = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOverlayOpen(false);
      setIsClosing(false);
      setSelectedItem(null);
    }, 500);
  }, []);

  const toggleAbout = useCallback(() => {
    setShowAbout((prev) => !prev);
    if (isOverlayOpen) {
      closeOverlay();
    }
  }, [isOverlayOpen, closeOverlay]);
  return (
    <>
      <Nav onAboutClick={toggleAbout} showAbout={showAbout} />
      <div className='container'>
        {showAbout ? (
          <About />
        ) : (
          <ItemList items={data} onItemClick={openOverlay} />
        )}
      </div>
      <Overlay
        item={selectedItem}
        isOpen={isOverlayOpen}
        isClosing={isClosing}
        onClose={closeOverlay}
      />
      <Footer />
    </>
  );
}
