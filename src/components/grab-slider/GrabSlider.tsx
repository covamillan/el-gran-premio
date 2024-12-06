import { motion } from 'framer-motion';
import './GrabSlider.scss';
import { sliderItems } from './slider-items';
import { useRef } from 'react';
function GrabSlider() {
  const constraintRef = useRef(null);

  return (
    <motion.div className="slider-section" ref={constraintRef}>
      <motion.div
        className="slider-container grabbable"
        drag="x"
        dragConstraints={constraintRef}
      >
        {sliderItems.map((item, index) => {
          return <img src={item.src} alt={item.alt} key={index} />;
        })}
      </motion.div>
    </motion.div>
  );
}

export default GrabSlider;
