import { useEffect, useRef } from 'react';
import './HybridScroll.scss';
import { horizontalSliderItems } from '../horizontal-slider/horizontal-slider-items';

function HybridScroll() {
  const stickySectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      stickySectionsRef.current.forEach((section) => {
        transform(section);
      });
    };

    const transform = (section: HTMLDivElement) => {
      const offsetTop = section.parentElement?.offsetTop || 0;
      const scrollSection = section.querySelector(
        '.horizontal_scroll'
      ) as HTMLDivElement;

      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = Math.max(0, Math.min(300, percentage));
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hybrid-scroll">
      <main>
        <div className="scroll_container">
          <div
            className="sticky_wrap"
            ref={(el) => el && stickySectionsRef.current.push(el)}
          >
            <div className="horizontal_scroll">
              <h2>DIGITAL</h2>

              {horizontalSliderItems.map((item, index) => {
                return (
                  <div className="image-container scrollable" key={index}>
                    <img src={item.src} alt={item.alt} />
                    <p key={index}>
                      {item.title} <span>#{index + 1}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HybridScroll;
