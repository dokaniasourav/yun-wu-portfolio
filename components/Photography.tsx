

import React, { useEffect, useRef } from 'react';
import { TYPOGRAPHY, LAYOUT, COLORS } from '../styles';

// Portrait-oriented photos for waterfall layout
const photoAssets = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 6' },
  { id: 7, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 7' },
  { id: 8, src: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 8' },
  { id: 9, src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 9' },
  { id: 10, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 10' },
  { id: 11, src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 11' },
  { id: 12, src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 12' },
  { id: 13, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 13' },
  { id: 14, src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 14' },
  { id: 15, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 15' },
  { id: 16, src: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 16' },
  { id: 17, src: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 17' },
  { id: 18, src: 'https://images.unsplash.com/photo-1502767089025-6572583495f9?auto=format&fit=crop&w=600&h=900&q=80', alt: 'Portrait 18' },
];

const Photography: React.FC = () => {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const leftScrollPositionRef = useRef(0);
  const rightScrollPositionRef = useRef(0);
  const leftAnimatingRef = useRef(true);
  const rightAnimatingRef = useRef(true);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (leftColumnRef.current && leftAnimatingRef.current) {
        // Left column scrolls up
        leftScrollPositionRef.current -= 0.5;
        const leftHeight = leftColumnRef.current.scrollHeight / 2;

        if (Math.abs(leftScrollPositionRef.current) >= leftHeight) {
          leftScrollPositionRef.current = 0;
        }
        leftColumnRef.current.style.transform = `translateY(${leftScrollPositionRef.current}px)`;
      }

      if (rightColumnRef.current && rightAnimatingRef.current) {
        // Right column scrolls down
        rightScrollPositionRef.current += 0.5;
        const rightHeight = rightColumnRef.current.scrollHeight / 2;

        if (rightScrollPositionRef.current >= rightHeight) {
          rightScrollPositionRef.current = 0;
        }
        rightColumnRef.current.style.transform = `translateY(${rightScrollPositionRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleLeftMouseEnter = () => {
      leftAnimatingRef.current = false;
    };

    const handleLeftMouseLeave = () => {
      leftAnimatingRef.current = true;
    };

    const handleRightMouseEnter = () => {
      rightAnimatingRef.current = false;
    };

    const handleRightMouseLeave = () => {
      rightAnimatingRef.current = true;
    };

    const leftContainer = leftColumnRef.current?.parentElement;
    const rightContainer = rightColumnRef.current?.parentElement;

    if (leftContainer) {
      leftContainer.addEventListener('mouseenter', handleLeftMouseEnter);
      leftContainer.addEventListener('mouseleave', handleLeftMouseLeave);
    }

    if (rightContainer) {
      rightContainer.addEventListener('mouseenter', handleRightMouseEnter);
      rightContainer.addEventListener('mouseleave', handleRightMouseLeave);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (leftContainer) {
        leftContainer.removeEventListener('mouseenter', handleLeftMouseEnter);
        leftContainer.removeEventListener('mouseleave', handleLeftMouseLeave);
      }
      if (rightContainer) {
        rightContainer.removeEventListener('mouseenter', handleRightMouseEnter);
        rightContainer.removeEventListener('mouseleave', handleRightMouseLeave);
      }
    };
  }, []);

  // Split photos into two columns and triple them for better infinite scroll
  const leftPhotos = [...photoAssets, ...photoAssets, ...photoAssets];
  const rightPhotos = [...photoAssets.slice().reverse(), ...photoAssets.slice().reverse(), ...photoAssets.slice().reverse()];

  return (
    <div id="photography-root" data-debug="photography-root" className="w-full">
      <div id="photography-header" data-debug="photography-header" className="mb-12 text-center">
        <p data-debug="photography-intro" className={`${TYPOGRAPHY.body} ${COLORS.gray500}`}>
          Capturing moments of silence, texture, and light. A collection of works exploring the relationship between natural landscapes and human perception.
        </p>
      </div>

      {/* Waterfall Grid with infinite scroll */}
      <div className="grid grid-cols-2 gap-4 h-[70vh]">
        {/* Left Column - Scrolls Up */}
        <div className="overflow-y-auto custom-scrollbar overflow-x-hidden">
          <div ref={leftColumnRef} className="flex flex-col gap-4">
            {leftPhotos.map((photo, index) => (
              <div
                key={`left-${photo.id}-${index}`}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group relative"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Scrolls Down */}
        <div className="overflow-y-auto custom-scrollbar overflow-x-hidden">
          <div ref={rightColumnRef} className="flex flex-col gap-4">
            {rightPhotos.map((photo, index) => (
              <div
                key={`right-${photo.id}-${index}`}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group relative"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;

