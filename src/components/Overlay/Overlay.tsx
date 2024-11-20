import { Projects } from '../../assets/data/data';
import ScrollToTopBtn from '../ScrollToTopBtn';
import useOverlayAnimation from '../../hooks/useOverlayAnimation';
import { useCallback, useEffect, useRef } from 'react';
import OverlayHeader from './components/OverlayHeader';
import OverlayLinks from './components/OverlayLinks';
import OverlayDetails from './components/OverlayDetails';
import OverlayChallenges from './components/OverlayChallenges';

interface OverlayProps {
  item: Projects | null;
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

export default function Overlay({
  item,
  isOpen,
  isClosing,
  onClose,
}: OverlayProps) {
  const overlayRef = useOverlayAnimation({ isOpen, isClosing });
  const mainVideoRef = useRef<HTMLVideoElement | null>(null); // 비디오 참조 추가
  const functionVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 스크롤 이동 함수 (Overlay 컴포넌트 내에서)
  const scrollToTop = useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.scrollTo({
        top: 0,
      });
    }
  }, [overlayRef]);

  // item이 변경되면 모든 비디오 다시 로드
  useEffect(() => {
    if (!item) return;
    mainVideoRef.current?.load();
    functionVideoRefs.current.forEach((video) => video?.load());
    scrollToTop();
  }, [item, scrollToTop]);

  if (!item) return null;

  return (
    <div className='overlay' ref={overlayRef}>
      {/* 프로젝트 info */}
      <OverlayHeader item={item} onClose={onClose} />

      {/* 프로젝트 Link  */}
      <OverlayLinks item={item} />

      {/* 프로젝트 대표 비디오 섹션 */}
      <div className='overlay-videoSection'>
        <p>#Main Video</p>
        <video
          ref={mainVideoRef}
          controls
          autoPlay
          muted
          loop
          preload='auto'
          width='100%'
          style={{
            display: 'flex',
            margin: '0 auto',
          }}
        >
          <source src={item?.introVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 프로젝트 기능 설명 섹션 */}
      <OverlayDetails item={item} />

      {/* 프로젝트 디테일 비디오 섹션 */}
      {item?.projectFunVideo ? (
        <div>
          <p style={{ paddingBottom: '10px' }}>#Detail Video</p>
        </div>
      ) : (
        ''
      )}

      <div className='itemDetailVideo'>
        {item?.projectFunVideo?.map((video, index) => (
          <video
            preload='auto'
            key={index}
            ref={(el) => (functionVideoRefs.current[index] = el)}
            controls
            autoPlay
            muted
            loop
            width='50%'
            style={{
              display: 'flex',
              margin: '0 auto',
            }}
          >
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* 프로젝트 문제&해결 */}
      <OverlayChallenges item={item} />

      {/* 프로젝트 배운점 */}
      <div className='learnedPoint'>
        <p style={{ fontSize: '1.1rem' }}>Key Learnings</p>
        {item?.learnedPoint?.map((point, index) => (
          <p key={index}>- {point}</p>
        ))}
      </div>

      <ScrollToTopBtn handleClick={scrollToTop} />
    </div>
  );
}
