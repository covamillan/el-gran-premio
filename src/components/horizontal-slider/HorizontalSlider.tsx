import ScrollWatcher from '../scroll-watcher/ScrollWatcher';
import './HorizontalSlider.scss';
import { horizontalSliderItems } from './horizontal-slider-items';
function HorizontalSlider() {
  return (
    <div className="horizontal-slider-section">
      <ScrollWatcher axis={'x'}></ScrollWatcher>
      <div className="slider-container scrollable">
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
  );
}

export default HorizontalSlider;
