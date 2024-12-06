import { useEffect, useRef } from 'react';
import './Hero.scss';

function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <main className="hero-section">
      <video ref={videoRef} autoPlay muted loop>
        <source
          src="https://cdn.pixabay.com/video/2023/06/18/167784-837438543_large.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <img src="../../../estrella-blanca.webp" alt="ESTRELLA" />
    </main>
  );
}

export default Hero;
