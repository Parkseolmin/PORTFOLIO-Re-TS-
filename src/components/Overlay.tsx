import { useEffect, useRef } from 'react';
import { Projects } from '../assets/data/data';
import gsap from 'gsap';

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
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (isOpen && !isClosing) {
      gsap.to(overlay, {
        duration: 0.5,
        bottom: '0px',
        rotation: 0,
        transformOrigin: 'bottom center',
        ease: 'power3.inOut',
      });
    } else if (isClosing) {
      gsap.to(overlay, {
        duration: 0.5,
        bottom: '-100%',
        rotation: 0,
        transformOrigin: 'bottom center',
        ease: 'power3.inOut',
      });
    }
  }, [isOpen, isClosing]);

  // 스크롤 이동 함수 (Overlay 컴포넌트 내에서)
  const scrollToTop = () => {
    if (overlayRef.current) {
      overlayRef.current.scrollTo({
        top: 0,
        behavior: 'smooth', // 부드러운 스크롤 이동
      });
    }
  };

  if (!item) return null;
  return (
    <div className='overlay' ref={overlayRef}>
      <div className='overlay-header'>
        <div className='col'>
          <p>{item.projectName}</p>
          <p>Key Technologies</p>
          <p>{item.itemCategory}</p>
        </div>
        <div className='col'>
          <p id='close-btn' onClick={onClose}>
            Close
          </p>
        </div>
      </div>
      <div className='item-details'>
        <p style={{ display: 'flex', gap: '20px' }}>
          <a href={item.itemLink} target='_blank' rel='noopener noreferrer'>
            <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m0 0h24v24h-24z'
                fill='#fff'
                opacity='0'
                transform='matrix(-1 0 0 -1 24 24)'
              />
              <path
                d='m18 7.05a1 1 0 0 0 -1-1l-8-.05a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l8.29-8.29v5.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z'
                fill='#231f20'
              />
            </svg>
            View Site
          </a>
          <a href={item.itemLink} target='_blank' rel='noopener noreferrer'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M15.6 18.196c-.777.371-1.48.631-2.109.781a8.92 8.92 0 0 1-2.043.223c-.831 0-1.566-.107-2.205-.318a4.757 4.757 0 0 1-1.635-.908c-.451-.395-.764-.812-.938-1.254-.174-.443-.261-1.086-.261-1.926V8.339H4.4V5.735c.714-.234 1.326-.57 1.835-1.01a5.04 5.04 0 0 0 1.227-1.58c.308-.613.519-1.396.636-2.345h2.585v4.652h4.314v2.887h-4.314v4.719c0 1.066.056 1.752.168 2.055.111.303.319.545.622.725.403.244.863.367 1.381.367.92 0 1.836-.303 2.746-.908v2.899z' />
            </svg>
            Blog Site
          </a>
          <a href={item.itemLink} target='_blank' rel='noopener noreferrer'>
            <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m0 0h24v24h-24z'
                fill='#fff'
                opacity='0'
                transform='matrix(-1 0 0 -1 24 24)'
              />
              <path
                d='m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77'
                fill='#231f20'
              />
            </svg>
            Git Hub
          </a>
        </p>
        <p style={{ textAlign: 'justify', padding: '0 10px' }}>
          {item.itemCopy}
        </p>
      </div>
      <div className='img-container'>
        {item.itemImg.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${item.projectName} image ${index + 1}`}
            style={{
              marginBottom: '10px',
            }}
          />
        ))}
      </div>
      <div className='arrowbox' onClick={scrollToTop}>
        {/* arrowbox 클릭 시 scrollToTop 호출 */}
        <button
          className='overlayArrow'
          aria-label='button for raising the screen'
        >
          <svg
            width='40'
            height='40'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.5 16.5L12 13L8.5 16.5'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.5 10.5L12 7L8.5 10.5'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
