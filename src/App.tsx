import TextReveal from './components/text-reveal/TextReveal';
import Hero from './components/hero/Hero';
import Digital from './components/digital/Digital';
import { digitalItems } from './components/digital/digital-items';
import Collage from './components/collage/Collage';
import Gallery from './components/gallery/Gallery';
import Cursor from './components/cursor/Cursor';
// import Sidebar from './components/sidebar/Sidebar';
// import GrabSlider from './components/grab-slider/GrabSlider';
// import HorizontalSlider from './components/horizontal-slider/HorizontalSlider';
import HybridScroll from './components/hybrid-scroll/HybridScroll';
// import Frame from './components/frame/Frame';
import GrabSlider from './components/grab-slider/GrabSlider';

function App() {
  return (
    <>
      <Cursor />
      <div className="snap-container">
        <Hero />
        {/* <Frame /> */}
      </div>
      <Collage />
      {/* <Sidebar /> */}
      <Digital items={digitalItems} />
      <TextReveal text={'FUTURE FLORA'} />
      {/* <HorizontalSlider /> */}
      <HybridScroll></HybridScroll>
      <Gallery />
      <GrabSlider />
      <video
        autoPlay
        muted
        loop
        src="https://cdn.pixabay.com/video/2022/09/18/131760-751029927_large.mp4"
        style={{ width: '98dvw', filter: 'brightness(80%)' }}
      ></video>
    </>
  );
}

export default App;
