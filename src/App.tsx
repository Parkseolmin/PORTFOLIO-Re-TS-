import React, { useCallback, useState, Suspense } from 'react';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import Overlay from './components/Overlay/Overlay';
import { data } from './assets/data/data';
import useOverlay from './hooks/useOverlay';

const About = React.lazy(() => import('./components/About')); // Lazy Loading

const MemoizedNav = React.memo(Nav);
const MemoizedItemList = React.memo(ItemList);
const MemoizedOverlay = React.memo(Overlay);
const MemoizedFooter = React.memo(Footer);

export default function App() {
  const { selectedItem, isOverlayOpen, isClosing, showOverlay, hideOverlay } =
    useOverlay();
  const [showAbout, setShowAbout] = useState<boolean>(false);

  // About 섹션을 토글하는 함수
  const toggleAbout = useCallback(() => {
    if (isOverlayOpen) hideOverlay();

    setShowAbout((prev) => !prev); // About 상태 토글
  }, [isOverlayOpen, hideOverlay]);

  return (
    <>
      <MemoizedNav onAboutClick={toggleAbout} showAbout={showAbout} />
      <div className='container'>
        {showAbout ? (
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        ) : (
          <MemoizedItemList items={data} onItemClick={showOverlay} />
        )}
      </div>
      <MemoizedOverlay
        item={selectedItem}
        isOpen={isOverlayOpen}
        isClosing={isClosing}
        onClose={hideOverlay}
      />
      <MemoizedFooter />
    </>
  );
}
