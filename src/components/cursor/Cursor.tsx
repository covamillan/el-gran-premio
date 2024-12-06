import { useEffect, useState } from 'react';
import './Cursor.scss';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -20,
    y: -20,
  });
  const [cursorPointer, setCursorPointer] = useState(false);
  const [cursorGrab, setCursorGrab] = useState(false);
  const [cursorScroll, setCursorScroll] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('clickable')) {
        setCursorPointer(true);
      }
      if (target.classList.contains('grabbable')) {
        setCursorGrab(true);
      }
      if (target.classList.contains('scrollable')) {
        setCursorScroll(true);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('clickable')) {
        setCursorPointer(false);
      }
      if (target.classList.contains('grabbable')) {
        setCursorGrab(false);
      }
      if (target.classList.contains('scrollable')) {
        setCursorScroll(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className={
        cursorGrab
          ? 'drag-mode cursor'
          : cursorScroll
          ? 'scroll-mode cursor'
          : 'cursor'
      }
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        height: isClicking
          ? '2rem'
          : cursorPointer
          ? '3rem'
          : cursorGrab
          ? '5rem'
          : cursorScroll
          ? '5rem'
          : '1rem',
        boxShadow: isClicking ? '0 0 30px 2px white' : 'none',
      }}
    ></div>
  );
};

export default Cursor;
