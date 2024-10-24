import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface useOverlayAnimationProps {
  isOpen: boolean;
  isClosing: boolean;
}

export default function useOverlayAnimation({
  isOpen,
  isClosing,
}: useOverlayAnimationProps) {
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
  return overlayRef;
}
