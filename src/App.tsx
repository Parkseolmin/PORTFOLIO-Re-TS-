import { useCallback, useState } from 'react';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import { data } from './assets/data/data';
import About from './components/About';
import useOverlay from './hooks/useOverlay';

export default function App() {
  const { selectedItem, isOverlayOpen, isClosing, showOverlay, hideOverlay } =
    useOverlay();
  const [showAbout, setShowAbout] = useState<boolean>(false); // About 페이지 표시 여부

  // About 섹션을 토글하는 함수
  const toggleAbout = useCallback(() => {
    if (isOverlayOpen) {
      hideOverlay();
    }
    setShowAbout((prev) => !prev);
  }, [isOverlayOpen, hideOverlay]);

  return (
    <>
      <Nav onAboutClick={toggleAbout} showAbout={showAbout} />
      <div className='container'>
        {showAbout ? (
          <About />
        ) : (
          <ItemList items={data} onItemClick={showOverlay} />
        )}
      </div>
      <Overlay
        item={selectedItem}
        isOpen={isOverlayOpen}
        isClosing={isClosing}
        onClose={hideOverlay} // 변경된 닫기 함수
      />
      <Footer />
    </>
  );
}
