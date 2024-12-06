// import { useRef, useEffect } from 'react';
// import './Frame.scss';

// function Frame() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = containerRef.current;
//       if (container) {
//         const scrollPercentage =
//           container.scrollTop /
//           (container.scrollHeight - container.clientHeight);
//         const colorIndex = Math.floor(scrollPercentage * (colors.length - 1));
//         container.style.backgroundColor = colors[colorIndex];
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('scroll', handleScroll);
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const colors = [
//     'black',
//     '#FF5733',
//     '#33FF57',
//     '#3357FF',
//     '#F0F33F',
//     '#FF33A1',
//     '#33FFF0',
//     '#F5A623',
//     '#8E44AD',
//     '#1ABC9C',
//     '#E74C3C',
//     'black',
//   ];

//   return (
//     <div className="frame-scroller" ref={containerRef}>
//       <div className="frame-content"></div>
//     </div>
//   );
// }

// export default Frame;

import { useRef, useEffect } from 'react';
import './Frame.scss';
import { digitalItems as images } from '../digital/digital-items';

function Frame() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPercentage =
          container.scrollTop /
          (container.scrollHeight - container.clientHeight);
        const imageIndex = Math.floor(scrollPercentage * (images.length - 1));
        if (imageIndex >= 0 && imageIndex < images.length) {
          container.style.backgroundImage = `url(${images[imageIndex].src})`;
        } else {
          console.error('imageIndex out of bounds:', imageIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="frame-scroller" ref={containerRef}>
      <div className="frame-content"></div>
    </div>
  );
}

export default Frame;
