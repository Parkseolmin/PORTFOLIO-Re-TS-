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

  if (!item) return null;
  return (
    <div className='overlay' ref={overlayRef}>
      <div className='overlay-header'>
        <div className='col'>
          <h1>{item.itemName}</h1>
          <p>{item.itemCategory}</p>
        </div>
        <div className='col'>
          <p id='close-btn' onClick={onClose}>
            Close
          </p>
        </div>
      </div>
      <div className='item-details'>
        <p>
          <a href={item.itemLink} target='_blank' rel='noopener noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6'
            >
              <path
                fillRule='evenodd'
                d='M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z'
                clipRule='evenodd'
              />
            </svg>
            View Site
          </a>
        </p>
        <p>{item.itemCopy}</p>
      </div>
      <div className='img-container'>
        <img src={item.itemImg} alt={item.itemName} />
      </div>
    </div>
  );
}
