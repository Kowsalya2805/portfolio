import React, { useEffect, useState } from 'react';

export const AnimatedCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run custom cursor on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Small Follower Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#0F766E] rounded-full pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-sm"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Outer Glow Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#0F766E]/40 pointer-events-none z-[998] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          hovered ? 'w-10 h-10 bg-[#0F766E]/10 scale-125 border-[#0F766E]' : 'w-7 h-7 scale-100'
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
    </>
  );
};
